import { useT } from '../i18n'
import { Language } from '../i18n/translations'
import { trackLanguageSwitch } from '../lib/analytics'

const LANGS: { id: Language; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'ko', label: '한' },
  { id: 'ja', label: '日' },
  { id: 'zh', label: '中' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useT()

  function handleChange(next: Language) {
    if (next === lang) return
    trackLanguageSwitch(lang, next)
    setLang(next)
  }

  return (
    <div className="flex gap-1">
      {LANGS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => handleChange(id)}
          className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
            lang === id
              ? 'bg-fest-purple text-white'
              : 'text-gray-400 hover:text-white hover:bg-fest-muted'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
