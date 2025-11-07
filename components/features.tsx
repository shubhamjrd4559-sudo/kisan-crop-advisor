import { Leaf, Cloud, Droplets, Bug } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Crop Recommendations",
    description: "Get expert suggestions tailored to your climate and soil conditions for optimal growth.",
  },
  {
    icon: Cloud,
    title: "Weather Insights",
    description: "Track weather patterns and receive alerts to plan irrigation and farming activities.",
  },
  {
    icon: Droplets,
    title: "Irrigation Planning",
    description: "Smart watering schedules based on rainfall, soil moisture, and crop requirements.",
  },
  {
    icon: Bug,
    title: "Disease Detection",
    description: "Early warning system for pests and diseases with prevention and treatment tips.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Features Designed for Farmers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make informed decisions for your crops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
