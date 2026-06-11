import { festival } from '../data/festival'

const { lat, lng } = festival.venue
const nameEn = encodeURIComponent(festival.venue.name)
const nameKo = encodeURIComponent(festival.venue.nameKo)

export type MapProvider = 'kakao' | 'naver' | 'google'

// Kakao Maps — web URL works on both mobile (opens app if installed) and desktop
function kakaoUrl(): string {
  return `https://map.kakao.com/link/to/${nameEn},${lat},${lng}`
}

// Naver Maps
// Mobile: nmap://route/public sets destination directly in the app (transit mode)
// Desktop: search URL reliably shows the venue and lets users get directions
function naverUrl(): string {
  if (isMobile()) {
    return `nmap://route/public?dlat=${lat}&dlng=${lng}&dname=${nameKo}&appname=com.festivalguide`
  }
  return `https://map.naver.com/p/search/${nameKo}`
}

// Google Maps — universal link, works in any browser / country
function googleUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=transit`
}

function isMobile(): boolean {
  return /iPhone|iPad|Android/i.test(navigator.userAgent)
}

export function getMapUrl(provider: MapProvider): string {
  switch (provider) {
    case 'kakao': return kakaoUrl()
    case 'naver': return naverUrl()
    case 'google': return googleUrl()
  }
}

export const MAP_PROVIDERS: { id: MapProvider; label: string; hint: string; color: string }[] = [
  { id: 'kakao', label: 'Kakao Maps', hint: 'Best for Koreans / locals', color: '#FAE300' },
  { id: 'naver', label: 'Naver Maps', hint: 'Great transit directions in Korea', color: '#03C75A' },
  { id: 'google', label: 'Google Maps', hint: 'Good for foreigners — use transit mode', color: '#4285F4' },
]
