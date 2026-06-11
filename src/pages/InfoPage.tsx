import { useState } from 'react'
import { useT } from '../i18n'
import { lineup, Day } from '../data/lineup'
import { festival } from '../data/festival'

const DAYS: { day: Day; label: string; labelKo: string }[] = [
  { day: 1, label: 'FRI. JUL 31', labelKo: '금 7/31' },
  { day: 2, label: 'SAT. AUG 1', labelKo: '토 8/1' },
  { day: 3, label: 'SUN. AUG 2', labelKo: '일 8/2' },
]

export default function InfoPage() {
  const { t, lang } = useT()
  const [day, setDay] = useState<Day>(1)

  const headliner = lineup.find((a) => a.day === day && a.tier === 1)
  const mainActs = lineup.filter((a) => a.day === day && a.tier === 2)
  const supporting = lineup.filter((a) => a.day === day && a.tier === 3)

  return (
    <div className="px-4 pt-4 pb-6">
      {/* Festival hero */}
      <div className="rounded-2xl overflow-hidden mb-5 p-px gradient-festival">
        <div className="rounded-[15px] bg-fest-card p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 blur-2xl"
               style={{ background: 'radial-gradient(circle, #db2777, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full opacity-10 blur-xl"
               style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
          <p className="relative text-xs font-bold uppercase tracking-widest mb-1"
             style={{ background: 'linear-gradient(90deg, #db2777, #c2410c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            ★ {festival.year}
          </p>
          <h1 className="relative text-xl font-extrabold leading-tight"
              style={{ background: 'linear-gradient(90deg, #16a34a, #0369a1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {festival.name}
          </h1>
          <p className="relative text-sm mt-1" style={{ color: '#6b6b9a' }}>{festival.venue.name}</p>
          <div className="relative flex flex-wrap gap-2 mt-3">
            {festival.dates.map((d, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: '#eeecfb', border: '1px solid #e0ddf5', color: '#4a4a7a' }}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sample note */}
      <div className="mb-4 px-3 py-2 bg-yellow-900/30 border border-yellow-700/40 rounded-xl text-xs text-yellow-400">
        {t.info.sampleNote}
      </div>

      {/* Day tabs */}
      <div className="flex gap-2 mb-6">
        {DAYS.map(({ day: d, label, labelKo }) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
              day === d
                ? 'gradient-festival'
                : 'bg-fest-card border border-fest-border hover:border-fest-purple'
            }`}
            style={day === d
              ? { color: 'white', boxShadow: '0 4px 14px rgba(219,39,119,0.3)' }
              : { color: '#6b6b9a' }
            }
          >
            {lang === 'ko' ? labelKo : label}
          </button>
        ))}
      </div>

      {/* Lineup — poster style */}
      <div className="text-center">
        {/* Tier 1: Headliner */}
        {headliner && (
          <p className="text-4xl font-black tracking-tight mb-3 leading-none"
             style={{ background: 'linear-gradient(90deg, #16a34a, #0369a1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {headliner.name}
            {headliner.isNew && <NewBadge />}
          </p>
        )}

        {/* Tier 2: Main acts */}
        {mainActs.length > 0 && (
          <p className="text-xl font-bold mb-4 leading-snug" style={{ color: '#2d2d5e' }}>
            {mainActs.map((a, i) => (
              <span key={a.name}>
                {i > 0 && <span style={{ color: '#c4bef0', margin: '0 8px' }}>·</span>}
                {a.name}
                {a.isNew && <NewBadge />}
              </span>
            ))}
          </p>
        )}

        {/* Divider */}
        <div className="border-t border-fest-border my-4" />

        {/* Tier 3: Supporting acts */}
        <p className="text-sm font-medium leading-loose" style={{ color: '#4a4a7a' }}>
          {supporting.map((a, i) => (
            <span key={a.name}>
              {i > 0 && <span style={{ color: '#c4bef0', margin: '0 6px' }}>·</span>}
              <span style={a.isNew ? { color: '#0369a1', fontWeight: 600 } : {}}>
                {a.name}
                {a.isNew && <NewBadge />}
              </span>
            </span>
          ))}
        </p>

        {/* More to come — Aug 2 only */}
        {day === 3 && (
          <p className="mt-6 text-xs uppercase tracking-widest" style={{ color: '#c4bef0' }}>MORE TO COME</p>
        )}
      </div>
    </div>
  )
}

function NewBadge() {
  return (
    <sup className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-fest-purple text-white text-[8px] font-bold ml-0.5 translate-y-0.5">
      N
    </sup>
  )
}
