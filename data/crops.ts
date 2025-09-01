export type Crop = {
  name: string
  image?: string
  irrigation: "low" | "medium" | "high"
  season: ("kharif" | "rabi" | "zaid")[]
  soilTypes: string[]
  phMin: number
  phMax: number
  rainfallMin: number
  rainfallMax: number
  regions: string[]
  maturityDays: [number, number]
  yieldQtlPerAcre?: [number, number]
  notes?: string
}

export const crops: Crop[] = [
  {
    name: "Wheat",
    irrigation: "medium",
    season: ["rabi"],
    soilTypes: ["Loamy", "Clayey", "Alluvial"],
    phMin: 6.0,
    phMax: 7.5,
    rainfallMin: 400,
    rainfallMax: 900,
    regions: ["Punjab", "Uttar Pradesh", "Haryana", "Madhya Pradesh", "Rajasthan"],
    maturityDays: [110, 140],
    yieldQtlPerAcre: [12, 20],
    notes: "Timely irrigation at critical stages boosts yield.",
    image: "/wheat-ears.png",
  },
  {
    name: "Rice (Paddy)",
    irrigation: "high",
    season: ["kharif", "rabi"],
    soilTypes: ["Alluvial", "Clayey", "Loamy"],
    phMin: 5.5,
    phMax: 7.0,
    rainfallMin: 1000,
    rainfallMax: 2500,
    regions: ["West Bengal", "Punjab", "Andhra Pradesh", "Tamil Nadu", "Bihar"],
    maturityDays: [120, 150],
    yieldQtlPerAcre: [15, 30],
    notes: "Requires continuous water availability; puddling helps in clayey soils.",
    image: "/lush-rice-paddy.png",
  },
  {
    name: "Maize",
    irrigation: "medium",
    season: ["kharif", "rabi", "zaid"],
    soilTypes: ["Loamy", "Alluvial", "Red", "Black"],
    phMin: 5.8,
    phMax: 7.5,
    rainfallMin: 500,
    rainfallMax: 1000,
    regions: ["Karnataka", "Bihar", "Maharashtra", "Andhra Pradesh", "Uttar Pradesh"],
    maturityDays: [90, 120],
    yieldQtlPerAcre: [10, 18],
    notes: "Good for diversified rotations; tolerates moderate rainfall.",
    image: "/maize-cobs.png",
  },
  {
    name: "Cotton",
    irrigation: "medium",
    season: ["kharif"],
    soilTypes: ["Black", "Alluvial"],
    phMin: 6.0,
    phMax: 8.0,
    rainfallMin: 600,
    rainfallMax: 800,
    regions: ["Maharashtra", "Gujarat", "Telangana", "Andhra Pradesh", "Punjab"],
    maturityDays: [150, 180],
    yieldQtlPerAcre: [4, 8],
    notes: "Best in black soils with good drainage; careful pest monitoring required.",
    image: "/cotton-boll.png",
  },
  {
    name: "Chickpea (Gram)",
    irrigation: "low",
    season: ["rabi"],
    soilTypes: ["Alluvial", "Loamy", "Sandy"],
    phMin: 6.0,
    phMax: 8.0,
    rainfallMin: 400,
    rainfallMax: 700,
    regions: ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh", "Maharashtra"],
    maturityDays: [95, 110],
    yieldQtlPerAcre: [5, 10],
    notes: "Suited for areas with limited irrigation; improves soil fertility.",
    image: "/chickpea-plant.png",
  },
  {
    name: "Sorghum (Jowar)",
    irrigation: "low",
    season: ["kharif", "rabi"],
    soilTypes: ["Black", "Sandy", "Red"],
    phMin: 5.5,
    phMax: 8.0,
    rainfallMin: 400,
    rainfallMax: 700,
    regions: ["Maharashtra", "Karnataka", "Andhra Pradesh", "Tamil Nadu", "Rajasthan"],
    maturityDays: [100, 120],
    yieldQtlPerAcre: [5, 12],
    notes: "Drought-tolerant option for low rainfall regions.",
    image: "/sorghum-heads.png",
  },
]
