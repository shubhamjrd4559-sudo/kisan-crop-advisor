import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import NavArrows from "@/components/nav-arrows"
import { I18nProvider } from "@/components/i18n-provider"
import LanguageSwitcher from "@/components/language-switcher"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-source-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">
        <I18nProvider>
          <LanguageSwitcher />
          <Suspense fallback={null}>{children}</Suspense>
          <NavArrows />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  )
}
