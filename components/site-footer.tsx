'use client'

import { useI18n } from '@/components/i18n-provider'
import Link from 'next/link'

export function SiteFooter() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/40 py-12">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="text-muted-foreground hover:foreground">{t('nav.resources')}</Link></li>
              <li><Link href="/community" className="text-muted-foreground hover:foreground">{t('nav.community')}</Link></li>
              <li><Link href="/recommend" className="text-muted-foreground hover:foreground">{t('nav.advisor')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.helpline')}: <a href="tel:1800180151" className="text-primary hover:underline">1800-180-1551</a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.follow')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.social')}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} {t('app.name')}. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">{t('footer.privacy')}</Link>
            <Link href="#" className="hover:text-foreground">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
