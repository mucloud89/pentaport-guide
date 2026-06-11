import { useT } from '../i18n'
import { faqs, faqQ, faqA } from '../data/faqs'
import MapLinks from '../components/MapLinks'

export default function TransportPage() {
  const { t, lang } = useT()
  const transportFaqs = faqs.filter((f) => f.category === 'transport')

  return (
    <div className="px-4 pt-4 pb-6">
      <h1 className="text-2xl font-extrabold text-white mb-4">{t.transport.title}</h1>

      {/* Map links */}
      <div className="bg-fest-card border border-fest-border rounded-2xl p-4 mb-4">
        <MapLinks />
        <p className="text-xs text-gray-500 mt-3">{t.transport.mapNote}</p>
      </div>

      {/* Subway */}
      <Section title={t.transport.subway.title}>
        <ul className="flex flex-col gap-2">
          {t.transport.subway.lines.map((line, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300">
              <span className="text-fest-cyan mt-0.5">›</span>
              {line}
            </li>
          ))}
        </ul>
      </Section>

      {/* Bus */}
      <Section title={t.transport.bus.title}>
        <ul className="flex flex-col gap-2">
          {t.transport.bus.lines.map((line, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300">
              <span className="text-fest-cyan mt-0.5">›</span>
              {line}
            </li>
          ))}
        </ul>
      </Section>

      {/* Taxi */}
      <Section title={t.transport.taxi.title}>
        <p className="text-sm text-gray-300">{t.transport.taxi.desc}</p>
      </Section>

      {/* Tips */}
      <div className="bg-fest-yellow/10 border border-fest-yellow/30 rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-fest-yellow mb-3 text-sm">{t.transport.tips.title}</h2>
        <ul className="flex flex-col gap-2">
          {t.transport.tips.items.map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300">
              <span className="text-fest-yellow mt-0.5 flex-shrink-0">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      {transportFaqs.length > 0 && (
        <div>
          <h2 className="font-bold text-white mb-3">FAQ</h2>
          <div className="flex flex-col gap-2">
            {transportFaqs.map((faq) => (
              <details key={faq.id} className="group bg-fest-card border border-fest-border rounded-xl">
                <summary className="px-4 py-3 text-sm font-medium text-gray-200 cursor-pointer list-none flex justify-between items-center">
                  {faqQ(faq, lang)}
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="px-4 pb-3 text-sm text-gray-400">
                  {faqA(faq, lang)}
                </p>
              </details>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-fest-card border border-fest-border rounded-2xl p-4 mb-4">
      <h2 className="font-bold text-white mb-3 text-sm">{title}</h2>
      {children}
    </div>
  )
}
