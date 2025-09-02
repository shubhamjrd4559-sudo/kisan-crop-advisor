"use client"

import type React from "react"
import { useI18n } from "./i18n-provider" // import i18n
import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export type CropFormValues = {
  state: string
  soilType: string
  ph: number
  rainfall: number
  irrigation: "none" | "limited" | "reliable"
  season: "kharif" | "rabi" | "zaid"
  landSizeAcres: number
  organicPreferred: boolean
}

const STATES = [
  "Punjab",
  "Uttar Pradesh",
  "Maharashtra",
  "Tamil Nadu",
  "Rajasthan",
  "West Bengal",
  "Karnataka",
  "Bihar",
  "Andhra Pradesh",
  "Gujarat",
  "Madhya Pradesh",
]

const SOILS = ["Alluvial", "Black", "Red", "Laterite", "Sandy", "Loamy", "Clayey"]

type StateProfile = {
  phRange: [number, number]
  rainfallRange: [number, number]
  suggestedSoils: string[]
}

const DEFAULT_PROFILE: StateProfile = {
  phRange: [6.0, 7.5],
  rainfallRange: [600, 1200],
  suggestedSoils: ["Loamy"],
}

const STATE_PROFILES: Record<string, StateProfile> = {
  Punjab: { phRange: [6.0, 8.4], rainfallRange: [400, 1000], suggestedSoils: ["Alluvial", "Loamy"] },
  "Uttar Pradesh": { phRange: [6.0, 8.2], rainfallRange: [600, 1200], suggestedSoils: ["Alluvial", "Loamy", "Clayey"] },
  Maharashtra: { phRange: [6.0, 7.8], rainfallRange: [600, 1200], suggestedSoils: ["Black", "Red"] },
  "Tamil Nadu": { phRange: [5.5, 7.5], rainfallRange: [600, 1200], suggestedSoils: ["Red", "Loamy", "Laterite"] },
  Rajasthan: { phRange: [7.0, 8.8], rainfallRange: [200, 600], suggestedSoils: ["Sandy", "Loamy"] },
  "West Bengal": { phRange: [5.2, 6.8], rainfallRange: [1500, 2500], suggestedSoils: ["Alluvial", "Loamy"] },
  Karnataka: { phRange: [5.5, 7.5], rainfallRange: [600, 1200], suggestedSoils: ["Red", "Black", "Laterite"] },
  Bihar: { phRange: [6.0, 7.8], rainfallRange: [1000, 1600], suggestedSoils: ["Alluvial", "Loamy"] },
  "Andhra Pradesh": { phRange: [6.0, 8.0], rainfallRange: [700, 1100], suggestedSoils: ["Red", "Black", "Loamy"] },
  Gujarat: { phRange: [6.5, 8.5], rainfallRange: [400, 1000], suggestedSoils: ["Black", "Alluvial"] },
  "Madhya Pradesh": { phRange: [6.0, 8.0], rainfallRange: [600, 1200], suggestedSoils: ["Black", "Red"] },
}

export function CropForm({ onSubmit }: { onSubmit: (v: CropFormValues) => void }) {
  const [state, setState] = useState("Punjab")
  const [soilType, setSoilType] = useState("Alluvial")
  const [ph, setPh] = useState(6.2)
  const [rainfall, setRainfall] = useState(800)
  const [irrigation, setIrrigation] = useState<CropFormValues["irrigation"]>("limited")
  const [season, setSeason] = useState<CropFormValues["season"]>("kharif")
  const [landSizeAcres, setLandSizeAcres] = useState(2)
  const [organicPreferred, setOrganicPreferred] = useState(false)

  const profile = useMemo(() => STATE_PROFILES[state] ?? DEFAULT_PROFILE, [state])
  const { t } = useI18n() // get translator

  useEffect(() => {
    const [pMin, pMax] = profile.phRange
    const recommendedPh = Number(((pMin + pMax) / 2).toFixed(1))
    setPh(recommendedPh)

    const [rMin, rMax] = profile.rainfallRange
    const recommendedRainfall = Math.round((rMin + rMax) / 2 / 50) * 50
    setRainfall(recommendedRainfall)

    if (!profile.suggestedSoils.includes(soilType)) {
      setSoilType(profile.suggestedSoils[0] ?? soilType)
    }
  }, [state])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit({ state, soilType, ph, rainfall, irrigation, season, landSizeAcres, organicPreferred })
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} aria-labelledby="crop-form-title">
      <h2 id="crop-form-title" className="text-lg font-semibold">
        {t("form.title", "Farm details")}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="state">{t("form.state", "State/Region")}</Label>
          <Select value={state} onValueChange={setState}>
            <SelectTrigger id="state" aria-label={t("form.state", "State/Region")}>
              <SelectValue placeholder={t("form.state.placeholder", "Select state")} />
            </SelectTrigger>
            <SelectContent>
              {STATES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {t("form.recommendedFor", "Recommended for")} {state}: {t("form.recommended.ph", "pH")}{" "}
            {profile.phRange[0].toFixed(1)}–{profile.phRange[1].toFixed(1)},{" "}
            {t("form.recommended.rainfall", "rainfall")} {profile.rainfallRange[0]}–{profile.rainfallRange[1]}{" "}
            {t("form.recommended.mm", "mm")}. {t("form.recommended.suggestedSoils", "Suggested soils")}:{" "}
            {profile.suggestedSoils.join(", ")}.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="soil">{t("form.soil", "Soil type")}</Label>
          <Select value={soilType} onValueChange={setSoilType}>
            <SelectTrigger id="soil" aria-label={t("form.soil", "Soil type")}>
              <SelectValue placeholder={t("form.soil.placeholder", "Select soil")} />
            </SelectTrigger>
            <SelectContent>
              {SOILS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="">
            {t("form.ph", "Soil pH")}: <span className="font-normal text-muted-foreground">{ph.toFixed(1)}</span>
            <span className="ml-2 text-xs text-muted-foreground">
              ({t("form.recommendedFor", "Recommended for")} {state}: {profile.phRange[0].toFixed(1)}–
              {profile.phRange[1].toFixed(1)})
            </span>
          </Label>
          <Slider
            aria-label={t("form.ph", "Soil pH")}
            value={[ph]}
            onValueChange={(v) => setPh(v[0] ?? ph)}
            min={4}
            max={9}
            step={0.1}
          />
        </div>

        <div className="space-y-2">
          <Label>
            {t("form.rainfall", "Annual rainfall (mm)")}:{" "}
            <span className="font-normal text-muted-foreground">{rainfall}</span>
            <span className="ml-2 text-xs text-muted-foreground">
              ({t("form.recommendedFor", "Recommended for")} {state}: {profile.rainfallRange[0]}–
              {profile.rainfallRange[1]} {t("form.recommended.mm", "mm")})
            </span>
          </Label>
          <Slider
            aria-label={t("form.rainfall", "Annual rainfall (mm)")}
            value={[rainfall]}
            onValueChange={(v) => setRainfall(v[0] ?? rainfall)}
            min={200}
            max={3000}
            step={50}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="irrigation">{t("form.irrigation", "Irrigation availability")}</Label>
          <Select value={irrigation} onValueChange={(v: CropFormValues["irrigation"]) => setIrrigation(v)}>
            <SelectTrigger id="irrigation" aria-label={t("form.irrigation", "Irrigation availability")}>
              <SelectValue placeholder={t("form.irrigation", "Irrigation availability")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">{t("form.irrigation.none", "None")}</SelectItem>
              <SelectItem value="limited">{t("form.irrigation.limited", "Limited")}</SelectItem>
              <SelectItem value="reliable">{t("form.irrigation.reliable", "Reliable")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="season">{t("form.season", "Season")}</Label>
          <Select value={season} onValueChange={(v: CropFormValues["season"]) => setSeason(v)}>
            <SelectTrigger id="season" aria-label={t("form.season", "Season")}>
              <SelectValue placeholder={t("form.season", "Season")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kharif">{t("form.season.kharif", "Kharif (Monsoon)")}</SelectItem>
              <SelectItem value="rabi">{t("form.season.rabi", "Rabi (Winter)")}</SelectItem>
              <SelectItem value="zaid">{t("form.season.zaid", "Zaid (Summer)")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="land">{t("form.land", "Land size (acres)")}</Label>
          <Input
            id="land"
            type="number"
            min={0.25}
            step={0.25}
            value={landSizeAcres}
            onChange={(e) => setLandSizeAcres(Number(e.target.value || 0))}
            inputMode="decimal"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organic" className="flex items-center gap-3">
            <Switch id="organic" checked={organicPreferred} onCheckedChange={setOrganicPreferred} />
            {t("form.organic", "Prefer organic-friendly crops")}
          </Label>
        </div>
      </div>

      <Separator />

      <div className="flex items-center gap-3">
        <Button type="submit" variant="secondary">
          {t("form.submit", "Get Recommendations")}
        </Button>
        <span className="text-xs text-muted-foreground">{t("form.note", "High-contrast, mobile-friendly")}</span>
      </div>
    </form>
  )
}
