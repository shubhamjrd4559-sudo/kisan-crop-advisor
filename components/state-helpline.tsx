"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

type HelplineEntry = { label: string; phone: string; note?: string }
type Directory = Record<string, HelplineEntry>

// Basic per-state directory; all default to KCC toll-free (you can replace per state later)
const HELPLINES: Directory = {
  default: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551", note: "Available across India" },
  "Andhra Pradesh": { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Assam: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Bihar: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Chhattisgarh: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Delhi: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Gujarat: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Haryana: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  "Himachal Pradesh": { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Jharkhand: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Karnataka: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Kerala: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  "Madhya Pradesh": { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Maharashtra: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Odisha: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Punjab: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Rajasthan: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  "Tamil Nadu": { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Telangana: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  "Uttar Pradesh": { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  Uttarakhand: { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
  "West Bengal": { label: "Kisan Call Center (KCC) – Toll-free", phone: "18001801551" },
}

function formatPhone(p: string) {
  return p.startsWith("1800") && p.length === 11 ? `${p.slice(0, 4)}-${p.slice(4, 7)}-${p.slice(7)}` : p
}

export function StateHelpline({ stateFromProps }: { stateFromProps?: string }) {
  const params = useSearchParams()
  const stateName = useMemo(() => stateFromProps || params.get("state") || "", [params, stateFromProps])
  const entry = HELPLINES[stateName] || HELPLINES.default

  return (
    <Card className="p-4 flex items-center justify-between gap-4">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Farmer Support Helpline</p>
        <p className="font-medium">
          {entry.label}: <span className="text-primary">{formatPhone(entry.phone)}</span>
        </p>
        <p className="text-xs text-muted-foreground">
          {entry.note || "Call for crop and farming guidance. Service and language availability may vary."}
        </p>
      </div>
      <Button asChild aria-label="Call farmer helpline">
        <a href={`tel:${entry.phone}`} rel="noopener noreferrer">
          <Phone className="h-4 w-4 mr-2" />
          Call
        </a>
      </Button>
    </Card>
  )
}
