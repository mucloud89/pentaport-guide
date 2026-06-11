import { useEffect } from 'react'
import { useT } from '../i18n'
import { trackPageView } from '../lib/analytics'
import type { Page } from '../App'

interface Props {
  page: Page
}

export default function AnalyticsTracker({ page }: Props) {
  const { lang } = useT()
  useEffect(() => {
    trackPageView(page, lang)
  }, [page, lang])
  return null
}
