"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CropDetailsModal from "./crop-details-modal"

const crops = [
  {
    name: "Rice",
    icon: "🌾",
    season: "Jun - Nov",
    waterNeeds: "High",
    tips: "Requires continuous flooding for 90-120 days",
    overview:
      "Rice is a staple crop in many parts of the world. It thrives in warm, wet conditions and is the primary food source for billions of people.",
    detailedTips: [
      "Prepare paddy field with proper leveling and water management",
      "Maintain water level of 5-10 cm during vegetative stage",
      "Use quality seeds and practice proper seedling management",
      "Apply fertilizers in split doses for better yield",
      "Monitor for pests like stem borer and leaf folder",
    ],
    soilType: "Clay loam, well-flooded soil",
    temperature: "25-35°C optimal",
    diseases: [
      "Blast disease - Apply fungicides at early stages",
      "Brown spot - Use resistant varieties",
      "Sheath rot - Practice crop rotation",
    ],
    harvestInfo: "Harvest when 80-90% of grains turn golden yellow. Use combine harvester for efficiency.",
  },
  {
    name: "Wheat",
    icon: "🌾",
    season: "Oct - Apr",
    waterNeeds: "Medium",
    tips: "Needs well-drained soil and moderate irrigation",
    overview:
      "Wheat is a cool-season crop that requires moderate rainfall. It's highly nutritious and widely used for flour and bread production.",
    detailedTips: [
      "Sow wheat during October-November for best results",
      "Use certified, high-quality seeds with 90%+ germination",
      "Maintain 20-25 cm row spacing for optimal plant growth",
      "Apply 2-3 irrigations depending on rainfall",
      "Monitor for Septoria and powdery mildew",
    ],
    soilType: "Well-drained loamy soil",
    temperature: "15-25°C optimal",
    diseases: [
      "Septoria leaf blotch - Use resistant varieties",
      "Powdery mildew - Improve air circulation",
      "Rust diseases - Spray fungicide early",
    ],
    harvestInfo: "Ready to harvest 120-150 days after sowing when moisture content reaches 10-12%.",
  },
  {
    name: "Corn",
    icon: "🌽",
    season: "May - Oct",
    waterNeeds: "Medium",
    tips: "Critical watering during flowering stage",
    overview:
      "Corn is a versatile crop used for food, feed, and industrial purposes. It requires warm temperature and moderate water supply.",
    detailedTips: [
      "Plant seeds 5cm deep in rows 75cm apart",
      "Ensure soil temperature is at least 16°C before planting",
      "Apply irrigation every 8-10 days during growing season",
      "Increase watering frequency during tasseling and silking",
      "Use balanced fertilizer with nitrogen emphasis",
    ],
    soilType: "Well-drained, fertile loam",
    temperature: "20-30°C optimal",
    diseases: [
      "Leaf blight - Plant resistant hybrids",
      "Corn smut - Remove affected plants",
      "Stalk rot - Practice proper spacing",
    ],
    harvestInfo: "Harvest when kernels reach hard dough stage, approximately 20-22 days after silking.",
  },
  {
    name: "Vegetables",
    icon: "🥕",
    season: "Year Round",
    waterNeeds: "High",
    tips: "Regular watering for consistent production",
    overview:
      "Vegetables are nutrient-rich crops suitable for year-round cultivation with proper planning and management.",
    detailedTips: [
      "Start with high-quality seeds or seedlings",
      "Ensure well-draining soil rich in organic matter",
      "Water daily in hot season, alternate days in winter",
      "Provide shade during extreme heat",
      "Harvest regularly to encourage continuous production",
    ],
    soilType: "Rich loam with high organic matter",
    temperature: "15-25°C for most vegetables",
    diseases: [
      "Damping off - Avoid waterlogging",
      "Leaf spots - Improve ventilation",
      "Root rot - Use well-drained soil",
    ],
    harvestInfo:
      "Harvest vegetables at peak maturity for best flavor and nutrition. Different vegetables have different harvest times.",
  },
  {
    name: "Cotton",
    icon: "☁️",
    season: "Jun - Dec",
    waterNeeds: "Medium",
    tips: "Drought tolerant but needs timely irrigation",
    overview:
      "Cotton is a cash crop with high demand. It's relatively drought-tolerant but benefits from strategic irrigation for better yield.",
    detailedTips: [
      "Prepare well-drained, fertile soil",
      "Sow cotton seeds in June for best results",
      "Maintain 90-120cm plant spacing",
      "Apply 4-6 irrigations during growing season",
      "Monitor for bollworms and bud worms",
    ],
    soilType: "Black soil, well-drained loam",
    temperature: "20-30°C optimal",
    diseases: [
      "Leaf curl virus - Use resistant varieties",
      "Root rot - Improve drainage",
      "Boll rot - Remove infected bolls",
    ],
    harvestInfo: "Cotton is ready to harvest 160-180 days after sowing when bolls open naturally.",
  },
  {
    name: "Sugarcane",
    icon: "🍃",
    season: "Oct - May",
    waterNeeds: "High",
    tips: "Needs 6 major irrigations throughout growth",
    overview:
      "Sugarcane is a high-yielding crop used for sugar and ethanol production. It requires significant water and fertilizer inputs.",
    detailedTips: [
      "Plant sugarcane during October-November",
      "Maintain 60-90cm row spacing",
      "Apply 6-8 irrigations during growth period",
      "Mulch to conserve soil moisture",
      "Use balanced NPK fertilizer",
    ],
    soilType: "Deep, well-drained loam",
    temperature: "21-27°C optimal",
    diseases: [
      "Red rot - Plant resistant varieties",
      "Smut - Remove infected stalks",
      "Scale insects - Use bio-pesticides",
    ],
    harvestInfo: "Harvest sugarcane 12-14 months after planting when sugar content is maximum.",
  },
]

export default function Crops() {
  const [selectedCrop, setSelectedCrop] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewGuide = (crop: any) => {
    setSelectedCrop(crop)
    setIsModalOpen(true)
  }

  return (
    <>
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
              <Card
                key={crop.name}
                className="p-6 border-border hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleViewGuide(crop)}
              >
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
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleViewGuide(crop)
                  }}
                >
                  View Full Guide
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CropDetailsModal crop={selectedCrop} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
