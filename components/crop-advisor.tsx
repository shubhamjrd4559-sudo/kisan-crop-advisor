"use client"

import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CropForm, type CropFormValues } from "./crop-form"
import { recommendCrops, type ExplainReason } from "@/lib/recommend"
import { CropCard } from "./crop-card"
import { crops } from "@/data/crops"

export function CropAdvisor() {
  const [values, setValues] = useState<CropFormValues | null>(null)

  const { results, explanations } = useMemo(() => {
    if (!values) return { results: [], explanations: {} as Record<string, ExplainReason> }
    return recommendCrops(values, crops)
  }, [values])

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <Card className="sticky top-4 self-start">
        <CardContent className="pt-6">
          <CropForm onSubmit={setValues} />
        </CardContent>
      </Card>

      <div className="space-y-4">
        {!values && (
          <div className="rounded-lg border p-6">
            <p className="font-medium">Fill the form to see crop matches</p>
            <p className="text-sm text-muted-foreground mt-1">
              We’ll show top crops with suitability score and reasons.
            </p>
          </div>
        )}

        {values && results.length === 0 && (
          <div className="rounded-lg border p-6" role="status" aria-live="polite">
            <p className="font-medium">No strong matches found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Try adjusting pH range or consider irrigation options for more choices.
            </p>
          </div>
        )}

        {results.map((crop) => (
          <CropCard key={crop.name} crop={crop} reason={explanations[crop.name]} stateName={values?.state} />
        ))}
      </div>
    </div>
  )
}
