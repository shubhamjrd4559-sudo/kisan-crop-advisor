'use client'

import { useI18n } from '@/components/i18n-provider'
import LanguageSwitcher from './language-switcher'
import { Button } from './ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function SiteHeader() {
  const { t } = useI18n()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              🌾
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">{t('app.name')}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
              className="text-sm"
            >
              {t('nav.home')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/recommend')}
              className="text-sm"
            >
              {t('nav.advisor')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/community')}
              className="text-sm"
            >
              {t('nav.community')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/resources')}
              className="text-sm"
            >
              {t('nav.resources')}
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
