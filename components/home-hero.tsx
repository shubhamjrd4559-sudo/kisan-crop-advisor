"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { useI18n } from "./i18n-provider"

export default function HomeHero() {
  const { t } = useI18n()
  return (
    <div className="relative overflow-hidden rounded-xl border bg-card">
      <div className="grid items-center gap-4 md:grid-cols-2">
        {/* Left: text */}
        <div className="relative z-10 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty text-foreground">
            {t("hero.title", "Choose the right crop for your land and area")}
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {t(
              "hero.desc",
              "Enter soil, pH, rainfall, irrigation, season, and location. We suggest better crops with clear reasons and tips.",
            )}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="secondary">
              <Link href="/recommend">{t("cta.getAdvice", "Get Crop Advice")}</Link>
            </Button>
            <a href="#how" className="inline-flex items-center gap-2 text-sm underline text-foreground">
              <MapPin className="h-4 w-4" aria-hidden />
              {t("cta.howWorks", "How it Works")}
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="px-6 pb-6 md:p-10 md:pl-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KvQ0FS8UKgfRdJYsk31OJh6SFyxHfA.png"
            alt="Smart farming in the field: seedling and smartphone with crop analytics"
            className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-lg border"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
