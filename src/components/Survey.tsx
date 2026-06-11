import { useState } from 'react'
import { useT } from '../i18n'
import { trackSurveySubmit } from '../lib/analytics'
import { submitSurveyToSheets } from '../lib/sheets'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 12px',
  background: '#ffffff',
  border: '1px solid #e0ddf5',
  borderRadius: '8px',
  fontSize: '14px',
  color: '#1a1a3e',
  outline: 'none',
}

export default function Survey() {
  const { t, lang } = useT()
  const [country, setCountry] = useState('')
  const [rating, setRating] = useState(0)
  const [helpful, setHelpful] = useState<'yes' | 'no' | null>(null)
  const [wantMore, setWantMore] = useState('')
  const [improvement, setImprovement] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!country || rating === 0 || helpful === null) return
    trackSurveySubmit({ country, rating, helpful }, lang)
    submitSurveyToSheets({
      ts: Date.now(),
      lang,
      country,
      rating,
      helpful,
      wantMore,
      improvement,
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-8 p-4 bg-fest-card border border-fest-border rounded-2xl text-center">
        <p className="text-lg" style={{ color: '#1a1a3e' }}>{t.survey.thanks}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 p-4 bg-fest-card border border-fest-border rounded-2xl">
      <h3 className="font-bold text-base mb-4" style={{ color: '#1a1a3e' }}>{t.survey.title}</h3>

      {/* Q1: Country */}
      <div className="mb-4">
        <label className="block text-sm mb-1" style={{ color: '#6b6b9a' }}>{t.survey.q1}</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder={t.survey.countryLabel}
          style={{ ...inputStyle, caretColor: '#7c3aed' }}
        />
      </div>

      {/* Q2: Rating */}
      <div className="mb-4">
        <label className="block text-sm mb-2" style={{ color: '#6b6b9a' }}>{t.survey.q2}</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              className="w-10 h-10 rounded-lg text-sm font-bold transition-colors"
              style={rating >= n
                ? { background: '#7c3aed', color: '#ffffff', border: '1px solid #7c3aed' }
                : { background: '#f5f5ff', border: '1px solid #e0ddf5', color: '#6b6b9a' }
              }
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Q3: Helpful */}
      <div className="mb-4">
        <label className="block text-sm mb-2" style={{ color: '#6b6b9a' }}>{t.survey.q3}</label>
        <div className="flex gap-3">
          {(['yes', 'no'] as const).map((val) => (
            <button
              type="button"
              key={val}
              onClick={() => setHelpful(val)}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={helpful === val
                ? val === 'yes'
                  ? { background: '#16a34a', color: '#ffffff', border: '1px solid #16a34a' }
                  : { background: '#dc2626', color: '#ffffff', border: '1px solid #dc2626' }
                : { background: '#f5f5ff', border: '1px solid #e0ddf5', color: '#6b6b9a' }
              }
            >
              {val === 'yes' ? t.survey.yes : t.survey.no}
            </button>
          ))}
        </div>
      </div>

      {/* Q4: Want more */}
      <div className="mb-4">
        <label className="block text-sm mb-1" style={{ color: '#6b6b9a' }}>{t.survey.q4}</label>
        <textarea
          value={wantMore}
          onChange={(e) => setWantMore(e.target.value)}
          placeholder={t.survey.q4Placeholder}
          rows={3}
          style={{ ...inputStyle, resize: 'none' }}
        />
      </div>

      {/* Q5: Improvement */}
      <div className="mb-5">
        <label className="block text-sm mb-1" style={{ color: '#6b6b9a' }}>{t.survey.q5}</label>
        <textarea
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
          placeholder={t.survey.q5Placeholder}
          rows={3}
          style={{ ...inputStyle, resize: 'none' }}
        />
      </div>

      <button
        type="submit"
        disabled={!country || rating === 0 || helpful === null}
        className="w-full py-3 rounded-xl font-bold text-sm gradient-purple-pink disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
        style={{ color: 'white' }}
      >
        {t.survey.submit}
      </button>
    </form>
  )
}
