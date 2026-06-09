'use client'

import { useI18n } from '@/components/i18n-provider'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('footer.about', 'About Us')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('footer.description', 'Helping farmers choose the best crops for their land with AI-powered recommendations based on soil, climate, and location.')}
          </p>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              To empower Indian farmers with intelligent, data-driven crop recommendations that maximize yield, reduce risk, and promote sustainable agriculture. We believe that the right crop choice is the foundation of farming success.
            </p>
            <p className="text-lg text-muted-foreground">
              Every farmer deserves access to expert agricultural guidance—regardless of location, education, or resources. Our platform brings that guidance to their mobile phone.
            </p>
          </Card>
        </section>

        {/* Features Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">🌱 Data-Driven</h3>
              <p className="text-muted-foreground">
                Recommendations based on real soil data, rainfall patterns, regional expertise, and proven crop yields across India.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">📱 Mobile-First</h3>
              <p className="text-muted-foreground">
                Simple, fast, and accessible on any mobile phone. No internet dependency for core features. Works offline.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">🗣️ Multi-Language</h3>
              <p className="text-muted-foreground">
                Available in English, Hindi, and Punjabi. More Indian languages coming soon.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">👥 Community-Driven</h3>
              <p className="text-muted-foreground">
                Learn from other farmers. Share your experiences and get advice from your peers across India.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">🎯 Personalized</h3>
              <p className="text-muted-foreground">
                Unique recommendations for your exact soil pH, rainfall, irrigation access, and land size.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">📚 Educational</h3>
              <p className="text-muted-foreground">
                Learn crop maturity times, irrigation needs, best practices, and avoid common mistakes.
              </p>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <Card className="p-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Simple Input</h3>
                <p className="text-muted-foreground">
                  No complex forms. You tell us your state, soil type, pH, rainfall, and season—that&apos;s it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Smart Scoring</h3>
                <p className="text-muted-foreground">
                  Our algorithm scores every crop for suitability, irrigation needs, season fit, and regional popularity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Clear Reasons</h3>
                <p className="text-muted-foreground">
                  See exactly why each crop is (or isn&apos;t) suited to your land. Transparency you can trust.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Actionable Tips</h3>
                <p className="text-muted-foreground">
                  Maturity days, irrigation schedule, common pests, and best varieties for your state.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <Card className="p-8 bg-primary/5 border-primary/20">
            <p className="text-lg mb-4">
              Have feedback? Found an error? Want to share your farming success story?
            </p>
            <p className="text-lg mb-6">
              <strong>Call the Kisan Call Center:</strong> <a href="tel:1800180151" className="text-primary font-semibold hover:underline">1800-180-1551</a> (Toll-free)
            </p>
            <p className="text-muted-foreground">
              Available 7 days a week, 6 AM to 9 PM (India Standard Time)
            </p>
          </Card>
        </section>
      </div>
    </main>
  )
}
