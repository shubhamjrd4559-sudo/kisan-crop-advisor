"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
]
const SOILS = ["Alluvial", "Black (Regur)", "Red", "Laterite", "Loam", "Sandy", "Clay"]
const SEASONS = ["Kharif", "Rabi", "Zaid"]

type Entry = {
  id: string
  name: string
  state: string
  crop: string
  soil: string
  season: string
  rainfall: number | null
  rating: number | null
  message: string
  createdAt: string
}

const STORAGE_KEY = "community-recommendations"

export function RecommendationForm() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [state, setState] = useState("")
  const [crop, setCrop] = useState("")
  const [soil, setSoil] = useState("")
  const [season, setSeason] = useState("")
  const [rainfall, setRainfall] = useState<number | "">("")
  const [rating, setRating] = useState<number | "">("")
  const [message, setMessage] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const entry: Entry = {
      id: crypto.randomUUID(),
      name: name.trim() || "Anonymous",
      state,
      crop,
      soil,
      season,
      rainfall: rainfall === "" ? null : Number(rainfall),
      rating: rating === "" ? null : Number(rating),
      message,
      createdAt: new Date().toISOString(),
    }
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as Entry[]
      existing.unshift(entry)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
      toast({ title: "Thanks!", description: "Your recommendation was saved on this device." })
      setCrop("")
      setSoil("")
      setSeason("")
      setRainfall("")
      setRating("")
      setMessage("")
    } catch {
      toast({ title: "Could not save", description: "Storage failed. Try again.", variant: "destructive" })
    }
  }

  return (
    <Card className="p-4">
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Your name (optional)</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Ramesh Kumar" />
        </div>

        <div className="grid gap-2">
          <Label>State</Label>
          <Select value={state} onValueChange={setState}>
            <SelectTrigger aria-label="State">
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

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="crop">Crop</Label>
            <Input id="crop" value={crop} onChange={(e) => setCrop(e.target.value)} placeholder="e.g., Wheat" />
          </div>
          <div className="grid gap-2">
            <Label>Season</Label>
            <Select value={season} onValueChange={setSeason}>
              <SelectTrigger aria-label="Season">
                <SelectValue placeholder="Select season" />
              </SelectTrigger>
              <SelectContent>
                {SEASONS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label>Soil type</Label>
            <Select value={soil} onValueChange={setSoil}>
              <SelectTrigger aria-label="Soil type">
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
          <div className="grid gap-2">
            <Label htmlFor="rain">Annual rainfall (mm)</Label>
            <Input
              id="rain"
              type="number"
              min={0}
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="e.g., 800"
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="rating">Outcome rating (1–5, optional)</Label>
            <Input
              id="rating"
              type="number"
              min={1}
              max={5}
              value={rating}
              onChange={(e) => setRating(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="5"
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Your advice</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-28"
            placeholder="Share what worked and tips for others in your area."
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Submit recommendation</Button>
        </div>
      </form>
    </Card>
  )
}
