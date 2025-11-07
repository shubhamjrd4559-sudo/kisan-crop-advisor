import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Crops from "@/components/crops"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Crops />
    </main>
  )
}
