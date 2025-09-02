"use client"

import { CropAdvisor } from "@/components/crop-advisor"
import ShareRow from "@/components/share-row"
import CommentBox from "@/components/comment-box"
import { StateHelpline } from "@/components/state-helpline"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"

export default function RecommendPage() {
  const { t } = useI18n()
  return (
    <main className="mx-auto max-w-5xl px-4 py-6 md:py-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-pretty">
        {t("recommend.title", "Get crop advice for your land")}
      </h1>
      <p className="mt-2 text-muted-foreground leading-relaxed">
        {t(
          "recommend.desc",
          "Fill details below. We’ll score crops for your soil, rainfall, season, irrigation and area.",
        )}
      </p>

      <div className="mt-6">
        <CropAdvisor />
      </div>

      <div className="mt-8 space-y-6">
        <StateHelpline />
        <ShareRow />
        <CommentBox />
        <div className="flex justify-end">
          <Button asChild>
            <Link href="/recommend/submit">{t("cta.shareRec", "Share your own recommendation")}</Link>
          </Button>
        </div>
      </div>

      <section className="mt-10" aria-labelledby="reference-maps-heading">
        <h2 id="reference-maps-heading" className="text-xl md:text-2xl font-semibold text-pretty">
          {t("referenceMaps.title", "Reference maps")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t(
            "referenceMaps.desc",
            "See the major cropping systems and soil types across India to understand regional suitability.",
          )}
        </p>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <figure className="rounded-md border bg-card p-3">
            <img
              src="/images/cropping-systems-india.png"
              alt="Map of India showing major cropping systems with legend for Rice–wheat, Rice–rice, Cotton–wheat, Soybean–wheat, Maize–wheat, and Pearl millet–wheat."
              className="h-auto w-full rounded"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              {t("maps.croppingSystems", "Major Cropping Systems in India")}
            </figcaption>
          </figure>

          <figure className="rounded-md border bg-card p-3">
            <img
              src="/images/soil-types-india.png"
              alt="Map of India showing major soil types including Alluvial, Black, Red, Laterite/Lateritic, Coastal Alluvial, Deltaic Alluvial, Forest and Mountain, Terai, Desert and Arid, and Peaty/Marshy soils."
              className="h-auto w-full rounded"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              {t("maps.soilTypes", "Major Soil Types in India")}
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  )
}
