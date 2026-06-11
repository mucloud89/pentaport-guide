import { useT } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useT()
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-fest-border"
            style={{ boxShadow: '0 2px 12px rgba(100, 80, 200, 0.08)' }}>
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative flex-shrink-0 w-9 h-9 flex items-center justify-center">
            <div className="relative w-8 h-8 rounded-full flex items-center justify-center"
                 style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)', boxShadow: '0 2px 10px rgba(219,39,119,0.35)' }}>
              <span style={{ color: 'white', fontSize: '14px', lineHeight: 1 }}>★</span>
            </div>
          </div>
          <div>
            <p className="font-extrabold leading-none text-sm tracking-wide"
               style={{ background: 'linear-gradient(90deg, #16a34a, #0369a1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t.header.title}
            </p>
            <p className="text-[10px] leading-none mt-0.5 tracking-wider uppercase"
               style={{ color: '#8888aa' }}>
              {t.header.subtitle}
            </p>
          </div>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
