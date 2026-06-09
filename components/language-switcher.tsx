"use client"

import { useI18n } from "./i18n-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n()
  const [busy, setBusy] = useState(false)

  const labelFor = { en: "English", hi: "हिंदी", pa: "ਪੰਜਾਬੀ" } as const

  const changeTo = (code: "en" | "hi" | "pa") => {
    if (busy || code === lang) return
    setBusy(true)
    setLang(code)
    setTimeout(() => setBusy(false), 120)
  }

  return (
    <div className={cn("fixed top-4 right-4 z-50", className)} aria-live="polite">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            aria-label="Change language"
            disabled={busy}
            className="font-medium bg-transparent"
          >
            {labelFor[lang as "en" | "hi" | "pa"]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-40">
          <DropdownMenuItem onClick={() => changeTo("en")} aria-label="Switch to English">
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTo("hi")} aria-label="हिंदी पर स्विच करें">
            हिंदी
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTo("pa")} aria-label="ਪੰਜਾਬੀ ਤੇ ਬਦਲੋ">
            ਪੰਜਾਬੀ
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
