"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface CropDetailsModalProps {
  crop: any
  isOpen: boolean
  onClose: () => void
}

export default function CropDetailsModal({ crop, isOpen, onClose }: CropDetailsModalProps) {
  if (!crop) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-5xl mb-2">{crop.icon}</div>
              <DialogTitle className="text-3xl">{crop.name}</DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Growing Season</p>
              <p className="font-semibold text-foreground">{crop.season}</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Water Needs</p>
              <Badge variant="secondary">{crop.waterNeeds}</Badge>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Overview</h3>
            <p className="text-muted-foreground">{crop.overview}</p>
          </div>

          {/* Growing Tips */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Growing Tips</h3>
            <p className="text-muted-foreground mb-3">{crop.tips}</p>
            <ul className="space-y-2">
              {crop.detailedTips?.map((tip: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-6">•</span>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soil & Climate */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Soil Type</h3>
              <p className="text-muted-foreground text-sm">{crop.soilType}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Temperature</h3>
              <p className="text-muted-foreground text-sm">{crop.temperature}</p>
            </div>
          </div>

          {/* Common Diseases */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Common Diseases & Pests</h3>
            <ul className="space-y-2">
              {crop.diseases?.map((disease: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="text-red-500 min-w-6">⚠</span>
                  <span className="text-muted-foreground">{disease}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Harvest Info */}
          <div className="p-4 bg-primary/10 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Harvest Information</h3>
            <p className="text-muted-foreground text-sm">{crop.harvestInfo}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
