"use client"

import { useI18n } from "./i18n-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n()
  const [busy, setBusy] = useState(false)

  const toggle = () => {
    if (busy) return
    setBusy(true)
    setLang(lang === "en" ? "hi" : "en")
    setTimeout(() => setBusy(false), 150)
  }

  return (
    <div className={cn("fixed top-4 right-4 z-50", className)} aria-live="polite">
      <Button
        size="sm"
        variant="outline"
        onClick={toggle}
        aria-label={lang === "en" ? "Switch to Hindi" : "Switch to English"}
        disabled={busy}
        className="font-medium bg-transparent"
      >
        {lang === "en" ? "हिंदी" : "English"}
      </Button>
    </div>
  )
}
