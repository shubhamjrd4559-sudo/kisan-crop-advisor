"use client"

type GalleryItem = {
  src: string
  alt: string
  captionKey: string
  captionFallback: string
}

const items: GalleryItem[] = [
  {
    src: "/images/farmland-1.jpg",
    alt: "Green farmlands under clear sky",
    captionKey: "home.photos.1.caption",
    captionFallback: "Healthy farmland ready for sowing",
  },
  {
    src: "/images/farmer-portrait.jpg",
    alt: "Farmer standing in a field",
    captionKey: "home.photos.2.caption",
    captionFallback: "Our farmers at the heart of every harvest",
  },
  {
    src: "/images/soil-closeup.jpg",
    alt: "Close up of soil texture in a hand",
    captionKey: "home.photos.3.caption",
    captionFallback: "Soil texture and health are key to yield",
  },
]

import { useI18n } from "@/components/i18n-provider"

export function FarmGallery() {
  const { t } = useI18n()
  return (
    <section aria-labelledby="farm-gallery-title" className="mt-12">
      <h2 id="farm-gallery-title" className="text-xl font-semibold text-balance mb-4">
        {t("home.photos.title", "Field photos")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <figure key={idx} className="rounded-md overflow-hidden border bg-background">
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              {t(item.captionKey, item.captionFallback)}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
