import { useState, useCallback } from 'react'
import { useT } from '../i18n'
import {
  nearbyHospitals, nearbyPharmacies, nearbyConvStores, nearbyATMs,
  type NearbyPharmacy, type NearbyConvStore, type NearbyATM,
} from '../data/venues'
import type { Language } from '../i18n/translations'

function getConvText(s: NearbyConvStore, lang: Language) {
  switch (lang) {
    case 'ko': return { name: s.nameKo, address: s.addressKo, hours: s.hoursKo, subway: s.subwayKo }
    case 'ja': return { name: s.nameJa, address: s.addressJa, hours: s.hoursJa, subway: s.subwayJa }
    case 'zh': return { name: s.nameZh, address: s.addressZh, hours: s.hoursZh, subway: s.subwayZh }
    default:   return { name: s.name,   address: s.addressEn, hours: s.hours,   subway: s.subway }
  }
}

function getPharmaText(p: NearbyPharmacy, lang: Language) {
  switch (lang) {
    case 'ko': return { name: p.nameKo, address: p.addressKo, hours: p.hoursKo, subway: p.subwayKo }
    case 'ja': return { name: p.nameJa, address: p.addressJa, hours: p.hoursJa, subway: p.subwayJa }
    case 'zh': return { name: p.nameZh, address: p.addressZh, hours: p.hoursZh, subway: p.subwayZh }
    default:   return { name: p.name,   address: p.addressEn, hours: p.hours,   subway: p.subway }
  }
}

function getATMText(a: NearbyATM, lang: Language) {
  switch (lang) {
    case 'ko': return { name: a.nameKo, address: a.addressKo, hours: a.hoursKo, subway: a.subwayKo }
    case 'ja': return { name: a.nameJa, address: a.addressJa, hours: a.hoursJa, subway: a.subwayJa }
    case 'zh': return { name: a.nameZh, address: a.addressZh, hours: a.hoursZh, subway: a.subwayZh }
    default:   return { name: a.name,   address: a.addressEn, hours: a.hours,   subway: a.subway }
  }
}

function CopyableAddress({ address, copiedLabel }: { address: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [address])
  return (
    <button onClick={handleCopy} className="text-left w-full mt-0.5 group" type="button">
      <span className={`text-xs transition-colors ${copied ? 'text-fest-cyan' : 'text-gray-400 group-active:text-fest-cyan underline decoration-dashed underline-offset-2'}`}>
        {copied ? `✓ ${copiedLabel}` : address}
      </span>
    </button>
  )
}

function CopyHint({ text }: { text: string }) {
  return <p className="text-xs text-gray-600 mb-3 leading-relaxed">📋 {text}</p>
}

function HoursText({ hours, unavailable }: { hours: string; unavailable: string }) {
  const isUnavailable = hours === unavailable
  return (
    <p className={`text-xs mt-0.5 ${isUnavailable ? 'text-gray-600 italic' : 'text-gray-500'}`}>
      🕐 {hours}
    </p>
  )
}

export default function AmenitiesPage() {
  const { t, lang } = useT()

  return (
    <div className="px-4 pt-4 pb-6">
      <h1 className="text-2xl font-extrabold text-white mb-4">{t.amenities.title}</h1>

      {/* Sample note */}
      <div className="mb-4 px-3 py-2 bg-yellow-900/30 border border-yellow-700/40 rounded-xl text-xs text-yellow-400">
        {t.amenities.sampleNote}
      </div>

      {/* Amenity grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {t.amenities.sections.map((s, i) => (
          <div key={i} className="bg-fest-card border border-fest-border rounded-2xl p-4">
            <p className="text-2xl mb-2">{s.icon}</p>
            <p className="font-bold text-white text-sm">{s.title}</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Hospitals */}
      <div className="bg-red-900/20 border border-red-700/40 rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-red-400 mb-1 flex items-center gap-2">
          <span>🏥</span> {t.amenities.hospitalTitle}
        </h2>
        <CopyHint text={t.amenities.copyHint} />
        <div className="flex flex-col gap-3">
          {nearbyHospitals.map((h) => (
            <div key={h.name} className="border-t border-red-900/40 pt-3 first:border-0 first:pt-0">
              <p className="font-semibold text-sm text-white">
                {lang === 'ko'
                  ? h.nameKo
                  : <>{h.name}<span className="text-gray-400 font-normal"> ({h.nameKo})</span></>}
              </p>
              <CopyableAddress
                address={lang === 'ko' ? h.addressKo : h.address}
                copiedLabel={t.amenities.copied}
              />
              <div className="flex gap-3 mt-1">
                <a href={`tel:${h.phone}`} className="text-xs text-red-400 font-medium">📞 {h.phone}</a>
                <span className="text-xs text-gray-500">
                  {lang === 'ko' ? h.distanceKo : h.distance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pharmacies */}
      <div className="bg-fest-card border border-fest-border rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-white mb-1 flex items-center gap-2">
          <span>💊</span> {t.amenities.pharmacyTitle}
        </h2>
        <CopyHint text={t.amenities.copyHint} />
        <div className="flex flex-col gap-3">
          {nearbyPharmacies.map((p) => {
            const tx = getPharmaText(p, lang)
            return (
              <div key={p.nameKo} className="border-t border-fest-border pt-3 first:border-0 first:pt-0">
                <p className="font-semibold text-sm text-white">
                  {tx.name}{lang !== 'ko' && <span className="text-gray-400 font-normal"> ({p.nameKo})</span>}
                </p>
                <CopyableAddress address={tx.address} copiedLabel={t.amenities.copied} />
                {tx.subway && <p className="text-xs text-fest-cyan mt-0.5">🚇 {tx.subway}</p>}
                <HoursText hours={tx.hours} unavailable={t.amenities.hoursUnavailable} />
                <a href={`tel:${p.phone}`} className="inline-block text-xs text-green-400 font-medium mt-1">
                  📞 {p.phone}
                </a>
              </div>
            )
          })}
        </div>
      </div>

      {/* Convenience stores */}
      <div className="bg-fest-card border border-fest-border rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-white mb-1 flex items-center gap-2">
          <span>🏪</span> {t.amenities.convenienceTitle}
        </h2>
        <CopyHint text={t.amenities.copyHint} />
        <div className="flex flex-col gap-3">
          {nearbyConvStores.map((s) => {
            const tx = getConvText(s, lang)
            return (
              <div key={s.nameKo} className="border-t border-fest-border pt-3 first:border-0 first:pt-0">
                <p className="font-semibold text-sm text-white">
                  {tx.name}{lang !== 'ko' && <span className="text-gray-400 font-normal"> ({s.nameKo})</span>}
                </p>
                <CopyableAddress address={tx.address} copiedLabel={t.amenities.copied} />
                {tx.subway && <p className="text-xs text-fest-cyan mt-0.5">🚇 {tx.subway}</p>}
                <HoursText hours={tx.hours} unavailable={t.amenities.hoursUnavailable} />
              </div>
            )
          })}
        </div>
      </div>

      {/* ATMs */}
      <div className="bg-fest-card border border-fest-border rounded-2xl p-4">
        <h2 className="font-bold text-white mb-1 flex items-center gap-2">
          <span>🏧</span> {t.amenities.atmTitle}
        </h2>
        <CopyHint text={t.amenities.copyHint} />
        <div className="flex flex-col gap-3">
          {nearbyATMs.map((a) => {
            const tx = getATMText(a, lang)
            return (
              <div key={a.nameKo} className="border-t border-fest-border pt-3 first:border-0 first:pt-0">
                <p className="font-semibold text-sm text-white">
                  {tx.name}{lang !== 'ko' && <span className="text-gray-400 font-normal"> ({a.nameKo})</span>}
                </p>
                <CopyableAddress address={tx.address} copiedLabel={t.amenities.copied} />
                {tx.subway && <p className="text-xs text-fest-cyan mt-0.5">🚇 {tx.subway}</p>}
                <HoursText hours={tx.hours} unavailable={t.amenities.hoursUnavailable} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
