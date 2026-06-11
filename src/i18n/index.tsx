import { createContext, useContext, useState, ReactNode } from 'react'
import { Language, T, translations } from './translations'

interface LanguageContextValue {
  lang: Language
  setLang: (l: Language) => void
  t: T
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLang(): Language {
  const navLang = navigator.language.toLowerCase()
  if (navLang.startsWith('ko')) return 'ko'
  if (navLang.startsWith('ja')) return 'ja'
  if (navLang.startsWith('zh')) return 'zh'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(detectInitialLang)
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useT(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useT must be inside LanguageProvider')
  return ctx
}
