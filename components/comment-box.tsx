"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const STORAGE_KEY = "farmer-advisor:my-note"

export default function CommentBox() {
  const { toast } = useToast()
  const [note, setNote] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setNote(saved)
    setLoaded(true)
  }, [])

  function save() {
    if (typeof window === "undefined") return
    localStorage.setItem(STORAGE_KEY, note)
    toast({ title: "Saved", description: "Your note was saved on this device" })
  }

  if (!loaded) return null

  return (
    <section aria-label="Your comment" className="rounded-lg border p-4">
      <h2 className="text-sm font-semibold">Your recommendation or comment</h2>
      <p className="text-xs text-muted-foreground mt-1">
        Add your note about these recommendations. It saves on this device only.
      </p>
      <Textarea
        className="mt-3"
        rows={4}
        placeholder="Write your advice, experience, or tips for other farmers..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="mt-3">
        <Button size="sm" variant="secondary" onClick={save}>
          Save note
        </Button>
      </div>
    </section>
  )
}
