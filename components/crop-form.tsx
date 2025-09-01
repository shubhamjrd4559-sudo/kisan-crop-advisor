"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export type CropFormValues = {
  state: string
  soilType: string
  ph: number
  rainfall: number
  irrigation: "none" | "limited" | "reliable"
  season: "kharif" | "rabi" | "zaid"
  landSizeAcres: number
  organicPreferred: boolean
}

const STATES = [
  "Punjab",
  "Uttar Pradesh",
  "Maharashtra",
  "Tamil Nadu",
  "Rajasthan",
  "West Bengal",
  "Karnataka",
  "Bihar",
  "Andhra Pradesh",
  "Gujarat",
  "Madhya Pradesh",
]

const SOILS = ["Alluvial", "Black", "Red", "Laterite", "Sandy", "Loamy", "Clayey"]

export function CropForm({ onSubmit }: { onSubmit: (v: CropFormValues) => void }) {
  const [state, setState] = useState("Punjab")
  const [soilType, setSoilType] = useState("Alluvial")
  const [ph, setPh] = useState(6.5)
  const [rainfall, setRainfall] = useState(800)
  const [irrigation, setIrrigation] = useState<CropFormValues["irrigation"]>("limited")
  const [season, setSeason] = useState<CropFormValues["season"]>("kharif")
  const [landSizeAcres, setLandSizeAcres] = useState(2)
  const [organicPreferred, setOrganicPreferred] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit({ state, soilType, ph, rainfall, irrigation, season, landSizeAcres, organicPreferred })
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} aria-labelledby="crop-form-title">
      <h2 id="crop-form-title" className="text-lg font-semibold">
        Farm details
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="state">State/Region</Label>
          <Select value={state} onValueChange={setState}>
            <SelectTrigger id="state" aria-label="Select state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {STATES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="soil">Soil type</Label>
          <Select value={soilType} onValueChange={setSoilType}>
            <SelectTrigger id="soil" aria-label="Select soil type">
              <SelectValue placeholder="Select soil" />
            </SelectTrigger>
            <SelectContent>
              {SOILS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>
            Soil pH: <span className="font-normal text-muted-foreground">{ph.toFixed(1)}</span>
          </Label>
          <Slider
            aria-label="Soil pH"
            value={[ph]}
            onValueChange={(v) => setPh(v[0] ?? ph)}
            min={4}
            max={9}
            step={0.1}
          />
        </div>

        <div className="space-y-2">
          <Label>
            Annual rainfall (mm): <span className="font-normal text-muted-foreground">{rainfall}</span>
          </Label>
          <Slider
            aria-label="Annual rainfall"
            value={[rainfall]}
            onValueChange={(v) => setRainfall(v[0] ?? rainfall)}
            min={200}
            max={3000}
            step={50}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="irrigation">Irrigation availability</Label>
          <Select value={irrigation} onValueChange={(v: CropFormValues["irrigation"]) => setIrrigation(v)}>
            <SelectTrigger id="irrigation" aria-label="Select irrigation">
              <SelectValue placeholder="Select irrigation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="limited">Limited</SelectItem>
              <SelectItem value="reliable">Reliable</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="season">Season</Label>
          <Select value={season} onValueChange={(v: CropFormValues["season"]) => setSeason(v)}>
            <SelectTrigger id="season" aria-label="Select season">
              <SelectValue placeholder="Select season" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
              <SelectItem value="rabi">Rabi (Winter)</SelectItem>
              <SelectItem value="zaid">Zaid (Summer)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="land">Land size (acres)</Label>
          <Input
            id="land"
            type="number"
            min={0.25}
            step={0.25}
            value={landSizeAcres}
            onChange={(e) => setLandSizeAcres(Number(e.target.value || 0))}
            inputMode="decimal"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organic" className="flex items-center gap-3">
            <Switch id="organic" checked={organicPreferred} onCheckedChange={setOrganicPreferred} />
            Prefer organic-friendly crops
          </Label>
        </div>
      </div>

      <Separator />

      <div className="flex items-center gap-3">
        <Button type="submit" variant="secondary">
          Get Recommendations
        </Button>
        <span className="text-xs text-muted-foreground">High-contrast, mobile-friendly</span>
      </div>
    </form>
  )
}
