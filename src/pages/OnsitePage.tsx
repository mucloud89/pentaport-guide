import { useT } from '../i18n'
import { faqs, faqQ, faqA } from '../data/faqs'
import Survey from '../components/Survey'

export default function OnsitePage() {
  const { t, lang } = useT()
  const onsiteFaqs = faqs.filter((f) => f.category === 'onsite' || f.category === 'entry')

  return (
    <div className="px-4 pt-4 pb-6">
      <h1 className="text-2xl font-extrabold text-white mb-4">{t.onsite.title}</h1>

      {/* Emergency contacts */}
      <div className="bg-red-900/20 border border-red-700/40 rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-red-400 mb-3">{t.onsite.emergency.title}</h2>
        <div className="flex flex-col gap-2">
          {t.onsite.emergency.items.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-sm text-gray-300">{item.label}</span>
              <a
                href={item.value.startsWith('+') || /^[\d\-]+$/.test(item.value) ? `tel:${item.value.replace(/[\s\-]/g, '')}` : '#'}
                className="text-sm font-bold text-red-300"
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Official SNS */}
      <div className="bg-fest-card border border-fest-border rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-white mb-3">{t.onsite.sns.title}</h2>
        <div className="flex flex-col gap-2">
          {[
            { icon: '📸', label: 'Instagram', url: 'https://instagram.com/pentaportrf', display: 'instagram.com/pentaportrf' },
            { icon: '👥', label: 'Facebook', url: 'https://facebook.com/pentaportrockfestival', display: 'facebook.com/pentaportrockfestival' },
            { icon: '📝', label: 'Naver Blog', url: 'https://blog.naver.com/incheonpentaport', display: 'blog.naver.com/incheonpentaport' },
            { icon: '▶️', label: 'YouTube', url: 'https://youtube.com/@pentaport', display: 'youtube.com/@pentaport' },
          ].map(({ icon, label, url, display }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="text-base w-6 text-center">{icon}</span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 leading-none mb-0.5">{label}</span>
                <span className="text-sm text-fest-cyan group-hover:underline">{display}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Lost & found */}
      <div className="bg-fest-card border border-fest-border rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-white mb-2">{t.onsite.lost.title}</h2>
        <p className="text-sm text-gray-400">{t.onsite.lost.desc}</p>
      </div>

      {/* Info booth */}
      <div className="bg-fest-card border border-fest-border rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-white mb-2">{t.onsite.info.title}</h2>
        <p className="text-sm text-gray-400">{t.onsite.info.desc}</p>
      </div>

      {/* Rules */}
      <div className="bg-fest-card border border-fest-border rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-white mb-3">{t.onsite.rules.title}</h2>
        <ul className="flex flex-col gap-2">
          {t.onsite.rules.items.map((rule, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300">
              <span className="text-fest-pink mt-0.5 flex-shrink-0">✕</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      {onsiteFaqs.length > 0 && (
        <div className="mb-2">
          <h2 className="font-bold text-white mb-3">FAQ</h2>
          <div className="flex flex-col gap-2">
            {onsiteFaqs.map((faq) => (
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

      {/* Survey */}
      <Survey />
    </div>
  )
}
