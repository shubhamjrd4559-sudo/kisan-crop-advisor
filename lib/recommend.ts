import type { Crop } from "@/data/crops"
import type { CropFormValues } from "@/components/crop-form"

export type ExplainReason = {
  score: number
  positives: string[]
  cautions: string[]
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function scorePh(ph: number, min: number, max: number) {
  if (ph >= min && ph <= max) return 1
  // linear decay outside range up to 1 pH unit
  const dist = ph < min ? min - ph : ph - max
  return clamp(1 - dist, 0, 0.8)
}

function scoreRange(v: number, min: number, max: number) {
  if (v >= min && v <= max) return 1
  const span = Math.max(1, max - min)
  const dist = v < min ? min - v : v - max
  return clamp(1 - dist / span, 0, 0.8)
}

function irrigationCompat(need: Crop["irrigation"], have: CropFormValues["irrigation"]) {
  const map = { none: 0, limited: 1, reliable: 2 }
  const want = need === "low" ? 0 : need === "medium" ? 1 : 2
  const got = map[have]
  const diff = want - got
  if (diff <= 0) return 1 // have enough water
  if (diff === 1) return 0.6
  return 0.25
}

export function recommendCrops(input: CropFormValues, dataset: Crop[]) {
  const explanations: Record<string, ExplainReason> = {}

  const weighted = dataset.map((crop) => {
    const soilMatch = crop.soilTypes.includes(input.soilType) ? 1 : 0.6
    const phMatch = scorePh(input.ph, crop.phMin, crop.phMax)
    const rainMatch = scoreRange(input.rainfall, crop.rainfallMin, crop.rainfallMax)
    const seasonMatch = crop.season.includes(input.season) ? 1 : 0.5
    const regionMatch = crop.regions.includes(input.state) ? 1 : 0.7
    const waterMatch = irrigationCompat(crop.irrigation, input.irrigation)

    // weights sum to 1
    const score =
      0.22 * soilMatch + 0.18 * phMatch + 0.2 * rainMatch + 0.16 * waterMatch + 0.14 * seasonMatch + 0.1 * regionMatch

    const positives: string[] = []
    const cautions: string[] = []

    if (soilMatch === 1) positives.push(`Good for ${input.soilType} soils`)
    else cautions.push(`Better soils: ${crop.soilTypes.join(", ")}`)

    if (phMatch >= 0.95) positives.push(`pH ${input.ph.toFixed(1)} fits ideal range ${crop.phMin}-${crop.phMax}`)
    else if (phMatch >= 0.7) cautions.push(`pH near edge; ideal ${crop.phMin}-${crop.phMax}`)

    if (rainMatch >= 0.95) positives.push(`Rainfall ${input.rainfall}mm suits crop needs`)
    else if (rainMatch >= 0.7) cautions.push(`Rainfall a bit off; ideal ${crop.rainfallMin}-${crop.rainfallMax}mm`)

    if (waterMatch === 1) positives.push(`Irrigation level is adequate`)
    else if (waterMatch === 0.6) cautions.push(`Consider supplemental irrigation`)
    else cautions.push(`Water supply likely insufficient`)

    if (seasonMatch === 1) positives.push(`Season match: ${input.season.toUpperCase()}`)

    if (input.organicPreferred) {
      if (crop.irrigation !== "high") positives.push("Organic-friendly management possible")
      else cautions.push("High water crops can be harder in organic systems")
    }

    explanations[crop.name] = { score, positives, cautions }

    return { ...crop, score }
  })

  const sorted = weighted
    .filter((c) => (c.score ?? 0) >= 0.45) // only show reasonable matches
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, 6)

  return { results: sorted, explanations }
}
