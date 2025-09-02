import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { ExplainReason } from "@/lib/recommend"

type Crop = {
  name: string
  image?: string
  irrigation: "low" | "medium" | "high"
  season: ("kharif" | "rabi" | "zaid")[]
  soilTypes: string[]
  phMin: number
  phMax: number
  rainfallMin: number
  rainfallMax: number
  regions: string[]
  maturityDays: [number, number]
  yieldQtlPerAcre?: [number, number]
  notes?: string
  varietiesByState?: Record<string, string[]>
}

export function CropCard({
  crop,
  reason,
  stateName,
}: {
  crop: Crop & { score?: number }
  reason: ExplainReason
  stateName?: string
}) {
  const scorePct = Math.round((reason.score ?? 0) * 100)
  const fitsState = !!(stateName && crop.regions?.includes(stateName))
  const stateVarieties = stateName ? crop.varietiesByState?.[stateName] : undefined

  return (
    <Card role="article" aria-label={`${crop.name} suitability`}>
      <CardHeader className="flex flex-row items-center gap-4">
        <img
          src={crop.image || "/placeholder.svg?height=90&width=120&query=crop%20photo"}
          alt={`${crop.name} crop`}
          className="h-[72px] w-[96px] rounded-md object-cover border"
        />
        <div className="flex-1">
          <CardTitle className="flex items-center justify-between gap-3">
            <span>{crop.name}</span>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {scorePct}% match
            </Badge>
          </CardTitle>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge variant="outline">{crop.season.join(", ")}</Badge>
            <Badge variant="outline">
              {crop.irrigation === "low" ? "Low water" : crop.irrigation === "medium" ? "Medium water" : "High water"}
            </Badge>
            <Badge variant="outline">{crop.soilTypes.join(", ")}</Badge>
            {fitsState && (
              <Badge variant="outline" className="border-primary/40 text-primary">
                Fits well in {stateName}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <Separator />
        <div>
          <p className="text-sm font-medium">Why this crop</p>
          <ul className="mt-1 text-sm text-muted-foreground list-disc pl-5 space-y-1">
            {reason.positives.map((p, i) => (
              <li key={`pos-${i}`}>{p}</li>
            ))}
          </ul>
          {reason.cautions.length > 0 && (
            <>
              <p className="text-sm font-medium mt-3 text-accent">Considerations</p>
              <ul className="mt-1 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                {reason.cautions.map((c, i) => (
                  <li key={`cau-${i}`}>{c}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {stateVarieties && stateVarieties.length > 0 && (
          <>
            <Separator />
            <div>
              <p className="text-sm font-medium">Recommended varieties in {stateName}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {stateVarieties.map((v) => (
                  <Badge key={v} variant="outline">
                    {v}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        {crop.notes && (
          <>
            <Separator />
            <p className="text-sm">
              <span className="font-medium">Tip: </span>
              {crop.notes}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
