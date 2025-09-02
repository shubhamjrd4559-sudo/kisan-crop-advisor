"use client"

import * as React from "react"
import Link from "next/link"
import { STATE_LANGUAGES } from "@/data/state-languages"
import { STATE_CROPS } from "@/data/state-crops"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/components/i18n-provider"

const ALL_STATES = Object.keys(STATE_LANGUAGES).sort()

export function StateHighlights() {
  const [state, setState] = React.useState<string>("Punjab")
  const languages = STATE_LANGUAGES[state] || []
  const crops = STATE_CROPS[state] || "—"
  const { t } = useI18n()

  return (
    <section aria-labelledby="state-highlights" className="mx-auto w-full max-w-5xl px-4">
      <Card>
        <CardHeader>
          <CardTitle id="state-highlights" className="text-balance">
            {t("home.state.cardTitle", "State & language preferences")}
            <span className="block text-sm font-normal text-muted-foreground">{""}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="state">{t("home.state.selectLabel", "Select your State")}</Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger id="state" aria-label={t("home.state.selectLabel", "Select your State")}>
                  <SelectValue placeholder={t("form.state.placeholder", "Select state")} />
                </SelectTrigger>
                <SelectContent>
                  {ALL_STATES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                {t("home.state.helper", "Languages and crop highlights update based on your selection.")}
              </p>
            </div>

            <div className="space-y-2">
              <Label>{t("home.state.languagesLabel", "Official language(s)")}</Label>
              <div className="flex flex-wrap gap-2">
                {(languages.length ? languages : ["English"]).map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-sm">
                    {lang}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {t("home.state.uiNote", "UI currently in English/Hinglish; more languages can be added next.")}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label>{t("home.state.cropsLabel", "Major crops / highlights")}</Label>
            <div className="rounded-md border bg-card p-3 text-sm text-muted-foreground">{crops}</div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href={`/recommend?state=${encodeURIComponent(state)}`} className="inline-block">
              <Button>
                {t("home.state.cta.recommendPrefix", "Get recommendations for")} {state}
              </Button>
            </Link>
            <Link href="/community" className="inline-block">
              <Button variant="secondary">{t("home.state.cta.community", "Open community")}</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
