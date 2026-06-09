"use client"

import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

function encode(text: string) {
  return encodeURIComponent(text)
}

export default function ShareRow() {
  const { toast } = useToast()
  const url = useMemo(() => (typeof window !== "undefined" ? window.location.href : ""), [])

  async function handleNativeShare() {
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      try {
        await (navigator as any).share({ title: "Farmer Crop Advisor", url })
      } catch {
        /* user cancelled */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url)
        toast({ title: "Link copied", description: "URL copied to clipboard" })
      } catch {
        toast({ title: "Unable to share", description: "Copy the link manually", variant: "destructive" })
      }
    }
  }

  const text = "Check my crop recommendations"
  return (
    <section aria-label="Share this page" className="rounded-lg border p-4">
      <h2 className="text-sm font-semibold">Share</h2>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Button variant="outline" size="sm" asChild>
          <a
            href={`https://wa.me/?text=${encode(`${text}: ${url}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
          >
            WhatsApp
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={`https://t.me/share/url?url=${encode(url)}&text=${encode(text)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Telegram"
          >
            Telegram
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={`https://twitter.com/intent/tweet?url=${encode(url)}&text=${encode(text)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
          >
            X/Twitter
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encode(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            Facebook
          </a>
        </Button>
        <Button variant="secondary" size="sm" onClick={handleNativeShare}>
          Share via device / Copy
        </Button>
        <p className="text-xs text-muted-foreground ml-1">
          {""}
        </p>
      </div>
    </section>
  )
}
