import { useT } from '../i18n'
import type { Page } from '../App'

interface Props {
  current: Page
  onChange: (p: Page) => void
}

const NAV_ITEMS: { id: Page; icon: string }[] = [
  { id: 'info', icon: '🎵' },
  { id: 'notices', icon: '📋' },
  { id: 'transport', icon: '🚇' },
  { id: 'amenities', icon: '🗺️' },
  { id: 'onsite', icon: '🆘' },
]

export default function BottomNav({ current, onChange }: Props) {
  const { t } = useT()
  const labels: Record<Page, string> = {
    info: t.nav.info,
    notices: t.nav.notices,
    transport: t.nav.transport,
    amenities: t.nav.amenities,
    onsite: t.nav.onsite,
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-fest-border safe-area-pb"
         style={{ boxShadow: '0 -2px 16px rgba(100, 80, 200, 0.08)' }}>
      <div className="max-w-lg mx-auto flex">
        {NAV_ITEMS.map(({ id, icon }) => {
          const active = current === id
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 transition-colors ${
                active ? 'text-fest-green' : 'text-gray-400 hover:text-fest-purple'
              }`}
            >
              <span className="text-xl leading-none">{icon}</span>
              <span className={`text-[10px] font-semibold leading-none truncate max-w-[56px] ${active ? 'text-fest-green' : ''}`}>
                {labels[id]}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
