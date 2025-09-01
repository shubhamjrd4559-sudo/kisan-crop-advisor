import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" aria-hidden />
            <span className="font-semibold">Kisaan Crop Advisor</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/recommend" className="text-sm hover:underline">
              Get Advice
            </Link>
            <a href="#how" className="text-sm hover:underline">
              How it Works
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-pretty">
              Sahi fasal ka chunav, aapke zameen aur area ke hisab se
            </h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Enter soil, pH, rainfall, irrigation, season aur location. Hum aapko behtar crops suggest karenge with
              clear reasons and tips.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="secondary">
                <Link href="/recommend">Get Crop Advice</Link>
              </Button>
              <a href="#how" className="inline-flex items-center gap-2 text-sm underline">
                <MapPin className="h-4 w-4" aria-hidden />
                Kaise kaam karta hai
              </a>
            </div>
          </div>

          <div className="rounded-lg border">
            <img
              src="/farmer-field-illustration.png"
              alt="Illustration of a farmer checking a field with different crops"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-xl font-semibold">How it works</h2>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border">
            <p className="font-medium">1. Fill details</p>
            <p className="text-sm text-muted-foreground mt-1">Soil type, pH, rainfall, irrigation, season, location</p>
          </div>
          <div className="p-4 rounded-lg border">
            <p className="font-medium">2. See matches</p>
            <p className="text-sm text-muted-foreground mt-1">Top crops scored by suitability for your land and area</p>
          </div>
          <div className="p-4 rounded-lg border">
            <p className="font-medium">3. Learn & plan</p>
            <p className="text-sm text-muted-foreground mt-1">Quick tips, irrigation needs, and season fit</p>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
          Made for farmers • Simple, accessible, and mobile-first
        </div>
      </footer>
    </main>
  )
}
