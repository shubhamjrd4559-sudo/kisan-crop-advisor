import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const crops = [
  {
    name: "Rice",
    icon: "🌾",
    season: "Jun - Nov",
    waterNeeds: "High",
    tips: "Requires continuous flooding for 90-120 days",
  },
  {
    name: "Wheat",
    icon: "🌾",
    season: "Oct - Apr",
    waterNeeds: "Medium",
    tips: "Needs well-drained soil and moderate irrigation",
  },
  {
    name: "Corn",
    icon: "🌽",
    season: "May - Oct",
    waterNeeds: "Medium",
    tips: "Critical watering during flowering stage",
  },
  {
    name: "Vegetables",
    icon: "🥕",
    season: "Year Round",
    waterNeeds: "High",
    tips: "Regular watering for consistent production",
  },
  {
    name: "Cotton",
    icon: "☁️",
    season: "Jun - Dec",
    waterNeeds: "Medium",
    tips: "Drought tolerant but needs timely irrigation",
  },
  {
    name: "Sugarcane",
    icon: "🍃",
    season: "Oct - May",
    waterNeeds: "High",
    tips: "Needs 6 major irrigations throughout growth",
  },
]

export default function Crops() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Popular Crops</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore growing guides and recommendations for common crops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <Card key={crop.name} className="p-6 border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{crop.icon}</div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {crop.season}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{crop.name}</h3>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Water Needs</p>
                  <p className="font-medium text-foreground">{crop.waterNeeds}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Growing Tip</p>
                  <p className="text-sm text-foreground">{crop.tips}</p>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Full Guide</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
