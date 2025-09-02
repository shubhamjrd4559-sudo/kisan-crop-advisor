"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"
import { useCallback } from "react"

export default function NavArrows() {
  const router = useRouter()

  const goBack = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.history.length > 1) {
        router.back()
        return
      }
    }
    router.push("/")
  }, [router])

  const goHome = useCallback(() => {
    router.push("/")
  }, [router])

  const goForward = useCallback(() => {
    if (typeof window !== "undefined" && typeof window.history.forward === "function") {
      window.history.forward()
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      <Button variant="secondary" size="icon" aria-label="Go back" onClick={goBack}>
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Go home" onClick={goHome}>
        <Home className="h-4 w-4" />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Go forward" onClick={goForward}>
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
