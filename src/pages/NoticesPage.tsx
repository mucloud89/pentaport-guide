import { useState } from 'react'
import { useT } from '../i18n'
import { noticesData, type NoticeSection, type NoticeItem } from '../data/notices'

function BulletItem({ text, red }: { text: string; red?: boolean }) {
  return (
    <li className="text-sm leading-relaxed" style={{ color: red ? '#dc2626' : '#3a3a6a' }}>
      {text}
    </li>
  )
}

function HighlightBlock({ text, color }: { text: string; color: 'yellow' | 'red' }) {
  const style = color === 'yellow'
    ? { background: 'rgba(255, 251, 235, 0.95)', border: '1px solid rgba(161,120,0,0.3)', color: '#92400e' }
    : { background: 'rgba(254, 226, 226, 0.9)', border: '1px solid rgba(220,38,38,0.3)', color: '#b91c1c' }
  return (
    <div className="my-2 px-3 py-2 rounded-lg text-sm leading-relaxed font-medium" style={style}>
      {text}
    </div>
  )
}

function BoxBlock({ lines }: { lines: string[] }) {
  return (
    <div className="my-2 px-3 py-3 rounded-lg"
         style={{ background: '#eeecfb', border: '1px solid #e0ddf5' }}>
      {lines.map((line, i) => (
        <p key={i} className={`text-xs leading-relaxed ${i > 0 ? 'mt-2' : ''}`}
           style={{ color: '#4a4a7a' }}>
          {line}
        </p>
      ))}
    </div>
  )
}

function QABlock({ q, a }: { q: string; a: string }) {
  return (
    <div className="my-2 rounded-lg overflow-hidden" style={{ border: '1px solid #e0ddf5' }}>
      <div className="px-3 py-2" style={{ background: 'rgba(124, 58, 237, 0.07)' }}>
        <p className="text-xs font-semibold leading-relaxed" style={{ color: '#0369a1' }}>Q. {q}</p>
      </div>
      <div className="px-3 py-2" style={{ background: '#f8f8ff' }}>
        <p className="text-xs leading-relaxed" style={{ color: '#4a4a7a' }}>A. {a}</p>
      </div>
    </div>
  )
}

function ProhibitedBlock({ items, notes }: { items: string[]; notes: string[] }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-1.5 rounded-lg px-2 py-2"
               style={{ background: '#f5f5ff', border: '1px solid #e0ddf5' }}>
            <span className="text-xs mt-0.5 shrink-0 font-bold" style={{ color: '#dc2626' }}>✕</span>
            <p className="text-xs leading-snug" style={{ color: '#3a3a6a' }}>{item}</p>
          </div>
        ))}
      </div>
      {notes.length > 0 && (
        <div className="mt-2 pt-3" style={{ borderTop: '1px solid #e0ddf5' }}>
          <ul className="space-y-1.5">
            {notes.map((note, i) => (
              <li key={i} className="text-xs leading-relaxed flex gap-1.5" style={{ color: '#4a4a7a' }}>
                <span className="shrink-0" style={{ color: '#7c3aed' }}>•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function ContactBlock({ name, email, web }: { name: string; email: string; web: string }) {
  return (
    <div className="rounded-xl px-4 py-3 space-y-1.5"
         style={{ background: '#eeecfb', border: '1px solid #e0ddf5' }}>
      <p className="text-sm font-semibold leading-snug" style={{ color: '#1a1a3e' }}>{name}</p>
      <a href={`mailto:${email}`} className="block text-sm" style={{ color: '#0369a1' }}>✉️ {email}</a>
      <a href={`https://${web}`} target="_blank" rel="noreferrer" className="block text-sm" style={{ color: '#7c3aed' }}>🌐 {web}</a>
    </div>
  )
}

function renderItem(item: NoticeItem, key: number) {
  switch (item.t) {
    case 'bullet':
      return <BulletItem key={key} text={item.text} red={item.red} />
    case 'subbullet':
      return (
        <li key={key} className="text-xs leading-relaxed pl-3 ml-1"
            style={{ borderLeft: '2px solid #e0ddf5', color: item.red ? '#dc2626' : '#6b6b9a' }}>
          {item.text}
        </li>
      )
    case 'highlight':
      return <HighlightBlock key={key} text={item.text} color={item.color} />
    case 'box':
      return <BoxBlock key={key} lines={item.lines} />
    case 'qa':
      return <QABlock key={key} q={item.q} a={item.a} />
    case 'prohibited':
      return <ProhibitedBlock key={key} items={item.items} notes={item.notes} />
    case 'contact':
      return <ContactBlock key={key} name={item.name} email={item.email} web={item.web} />
  }
}

function SectionCard({ section }: { section: NoticeSection }) {
  const [open, setOpen] = useState(false)

  const hasBullets = section.items.some(i => i.t === 'bullet' || i.t === 'subbullet')

  return (
    <div className="bg-fest-card border border-fest-border rounded-2xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        type="button"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{section.icon}</span>
          <span className="font-bold text-sm" style={{ color: '#1a1a3e' }}>{section.title}</span>
        </div>
        <span className="text-sm transition-transform duration-200" style={{ color: '#8888aa', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'none' }}>▾</span>
      </button>

      {open && (
        <div className="px-4 pb-4">
          <div className="pt-3" style={{ borderTop: '1px solid #e0ddf5' }}>
            {hasBullets ? (
              <ul className="space-y-2.5 list-disc list-outside pl-4">
                {section.items.map((item, i) => renderItem(item, i))}
              </ul>
            ) : (
              <div className="space-y-2">
                {section.items.map((item, i) => renderItem(item, i))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function NoticesPage() {
  const { lang } = useT()
  const sections = noticesData[lang]

  return (
    <div className="px-4 pt-4 pb-6">
      <h1 className="text-2xl font-extrabold mb-1" style={{ color: '#1a1a3e' }}>
        {{ en: 'Notices', ko: '공지사항', ja: 'お知らせ', zh: '公告事项' }[lang]}
      </h1>
      <p className="text-xs mb-4" style={{ color: '#8888aa' }}>
        {{ en: 'Official guidelines from Pentaport Rock Festival 2026', ko: '펜타포트 락 페스티벌 2026 공식 안내', ja: 'ペンタポートロックフェスティバル2026公式ガイドライン', zh: '奔塔港摇滚音乐节2026官方指引' }[lang]}
      </p>
      {sections.map(section => (
        <SectionCard key={section.id} section={section} />
      ))}
    </div>
  )
}
