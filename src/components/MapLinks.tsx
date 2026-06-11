import { useT } from '../i18n'
import { MAP_PROVIDERS, getMapUrl } from '../lib/maps'
import { trackMapClick } from '../lib/analytics'

export default function MapLinks() {
  const { t, lang } = useT()

  function handleClick(provider: string) {
    trackMapClick(provider, lang)
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-300">{t.maps.title}</h3>
        <span className="text-xs text-gray-500">
          <span className="text-gray-600">{t.maps.destinationLabel} </span>
          <span className="text-gray-300 font-medium">{t.maps.destinationName}</span>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {MAP_PROVIDERS.map((p) => (
          <a
            key={p.id}
            href={getMapUrl(p.id)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(p.id)}
            className="flex items-center gap-3 px-4 py-3 bg-fest-card border border-fest-border rounded-xl hover:border-fest-muted transition-colors"
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: p.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">{p.label}</p>
              <p className="text-xs text-gray-400">{p.hint}</p>
            </div>
            <span className="text-xs text-gray-500">{t.maps.tapHint} →</span>
          </a>
        ))}
      </div>
    </div>
  )
}
