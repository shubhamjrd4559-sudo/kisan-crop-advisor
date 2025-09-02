"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"
import { StateHighlights } from "@/components/state-highlights"
import HomeHero from "@/components/home-hero"
import { useI18n } from "@/components/i18n-provider"

export default function HomePage() {
  const { t } = useI18n()
  return (
    <main className="min-h-dvh">
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" aria-hidden />
            <span className="font-semibold">{t("site.title", "Kisaan Crop Advisor")}</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/recommend" className="text-sm hover:underline">
              {t("cta.getAdvice", "Get Advice")}
            </Link>
            <a href="#how" className="text-sm hover:underline">
              {t("cta.howWorks", "How it Works")}
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <HomeHero />
      </section>

      <section id="how" className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-xl font-semibold">{t("home.how.title", "How it works")}</h2>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium">{t("home.how.1.title", "1. Fill details")}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {t("home.how.1.desc", "Soil type, pH, rainfall, irrigation, season, location")}
            </p>
          </div>
          <div className="p-4 rounded-lg border">
            <p className="font-medium">{t("home.how.2.title", "2. See matches")}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {t("home.how.2.desc", "Top crops scored by suitability for your land and area")}
            </p>
          </div>
          <div className="p-4 rounded-lg border">
            <p className="font-medium">{t("home.how.3.title", "3. Learn & plan")}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {t("home.how.3.desc", "Quick tips, irrigation needs, and season fit")}
            </p>
          </div>
        </div>
      </section>

      <section id="photos" className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-xl font-semibold text-balance">{t("home.photos.title", "Field photos")}</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <figure className="rounded-lg border overflow-hidden bg-background">
            <img
              src="/farmland-landscape-with-green-crops.png"
              alt="Farmland landscape with green crops"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              {t("home.photos.1.caption", "Healthy farmland ready for sowing")}
            </figcaption>
          </figure>

          <figure className="rounded-lg border overflow-hidden bg-background">
            <img
              src="/farmer-standing-in-field.png"
              alt="A farmer standing in a field"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              {t("home.photos.2.caption", "Our farmers at the heart of every harvest")}
            </figcaption>
          </figure>

          <figure className="rounded-lg border overflow-hidden bg-background">
            <img
              src="/close-up-soil-texture-in-hand.png"
              alt="Close up of soil texture in a hand"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              {t("home.photos.3.caption", "Soil texture and health are key to yield")}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-xl font-semibold text-balance mb-4">
          {t("home.state.title", "Your State, Languages & Crops")}
        </h2>
        <StateHighlights />
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
          {t("site.footer", "Made for farmers • Simple, accessible, and mobile-first")}
        </div>
      </footer>
    </main>
  )
}
