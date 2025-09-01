import { CropAdvisor } from "@/components/crop-advisor"

export default function RecommendPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-6 md:py-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-pretty">Get crop advice for your land</h1>
      <p className="mt-2 text-muted-foreground leading-relaxed">
        Fill details below. We’ll score crops for your soil, rainfall, season, irrigation and area.
      </p>

      <div className="mt-6">
        <CropAdvisor />
      </div>
    </main>
  )
}
