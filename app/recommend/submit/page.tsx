"use client"

import { RecommendationForm } from "@/components/recommendation-form"

export default function SubmitRecommendationPage() {
  return (
    <main className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-balance">Share your farming recommendation</h1>
        <p className="text-sm text-muted-foreground">Help other farmers build confidence by sharing what worked.</p>
      </header>
      <RecommendationForm />
    </main>
  )
}
