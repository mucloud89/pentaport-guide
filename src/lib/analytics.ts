// All events buffer on window.__fgDataLayer.
// Before launch pick ONE integration:
//   A) GA4:        window.gtag('event', ...)  — add gtag script to index.html
//   B) Plausible:  window.plausible(...)       — add plausible script to index.html
//   C) /api/track: POST each event — lets you enrich country from request IP server-side
//                  which is what the "global performance report" needs.

declare global {
  interface Window {
    __fgDataLayer: AnalyticsEvent[]
  }
}

export interface AnalyticsEvent {
  event: string
  ts: number
  language: string
  page?: string
  props?: Record<string, string | number | boolean>
}

function buffer(ev: AnalyticsEvent) {
  if (!window.__fgDataLayer) window.__fgDataLayer = []
  window.__fgDataLayer.push(ev)
}

// Swap this function body for your chosen integration before launch
function dispatch(ev: AnalyticsEvent) {
  buffer(ev)
  // Example GA4:
  // if (typeof window.gtag === 'function') window.gtag('event', ev.event, { ...ev.props, language: ev.language })
  // Example /api/track:
  // fetch('/api/track', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(ev) })
}

export function trackPageView(page: string, language: string) {
  dispatch({ event: 'page_view', ts: Date.now(), language, page })
}

export function trackTicketClick(language: string) {
  dispatch({ event: 'ticket_click', ts: Date.now(), language })
}

export function trackMapClick(provider: string, language: string) {
  dispatch({ event: 'map_click', ts: Date.now(), language, props: { provider } })
}

export function trackSurveySubmit(answers: Record<string, string | number>, language: string) {
  dispatch({ event: 'survey_submit', ts: Date.now(), language, props: answers })
}

export function trackLanguageSwitch(from: string, to: string) {
  dispatch({ event: 'language_switch', ts: Date.now(), language: to, props: { from } })
}
