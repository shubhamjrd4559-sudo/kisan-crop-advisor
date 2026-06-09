'use client'

import { useI18n } from '@/components/i18n-provider'
import { crops } from '@/data/crops'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export default function ResourcesPage() {
  const { t } = useI18n()
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null)
  const selected = crops.find(c => c.name === selectedCrop)

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-6xl py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('nav.resources', 'Resources')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('resources.desc', 'Learn detailed information about major crops grown across India. Click any crop to explore yield data, growing conditions, and best practices.')}
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Crop Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {crops.map((crop) => (
                <Card
                  key={crop.name}
                  onClick={() => setSelectedCrop(crop.name)}
                  className={`cursor-pointer transition-all hover:shadow-lg p-4 ${
                    selectedCrop === crop.name ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {crop.image && (
                    <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={crop.image}
                        alt={crop.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-semibold text-lg mb-2">{crop.name}</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      Season: {crop.season.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')}
                    </p>
                    <p className="text-muted-foreground">
                      Irrigation: {crop.irrigation}
                    </p>
                    <p className="text-muted-foreground">
                      Regions: {crop.regions.slice(0, 2).join(', ')}...
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-1">
            {selected ? (
              <Card className="p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>

                {selected.image && (
                  <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">Growing Conditions</h3>
                    <ul className="text-sm space-y-1">
                      <li><strong>pH Range:</strong> {selected.phMin} - {selected.phMax}</li>
                      <li><strong>Rainfall:</strong> {selected.rainfallMin} - {selected.rainfallMax} mm</li>
                      <li><strong>Maturity:</strong> {selected.maturityDays[0]} - {selected.maturityDays[1]} days</li>
                      {selected.yieldQtlPerAcre && (
                        <li><strong>Yield:</strong> {selected.yieldQtlPerAcre[0]} - {selected.yieldQtlPerAcre[1]} qtl/acre</li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">Soil Types</h3>
                    <p className="text-sm">{selected.soilTypes.join(', ')}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">Seasons</h3>
                    <p className="text-sm">{selected.season.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">Irrigation</h3>
                    <p className="text-sm capitalize">{selected.irrigation}</p>
                  </div>

                  {selected.notes && (
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground mb-1">Tips</h3>
                      <p className="text-sm">{selected.notes}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">Best for States</h3>
                    <p className="text-sm">{selected.regions.join(', ')}</p>
                  </div>

                  <Button
                    onClick={() => window.location.href = '/recommend'}
                    className="w-full mt-4"
                  >
                    Get Recommendations
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-6 text-center text-muted-foreground">
                <p>Click on a crop to view details</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
