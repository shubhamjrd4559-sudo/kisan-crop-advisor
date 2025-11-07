import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Grow Better Crops with Smart Advice
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get personalized farming guidance for your crops. Real-time recommendations for irrigation, fertilization,
            pest control, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Growing Smarter
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative h-80 md:h-96 bg-primary/10 rounded-xl overflow-hidden border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <img src="/farmer-crops.png" alt="Farmer in field" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
