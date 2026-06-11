import { useState } from 'react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import AnalyticsTracker from './components/AnalyticsTracker'
import InfoPage from './pages/InfoPage'
import NoticesPage from './pages/NoticesPage'
import TransportPage from './pages/TransportPage'
import AmenitiesPage from './pages/AmenitiesPage'
import OnsitePage from './pages/OnsitePage'

export type Page = 'info' | 'notices' | 'transport' | 'amenities' | 'onsite'

export default function App() {
  const [page, setPage] = useState<Page>('info')

  return (
    <div className="min-h-screen flex flex-col app-bg">
      <AnalyticsTracker page={page} />
      <Header />
      <main className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-lg mx-auto">
          {page === 'info' && <InfoPage />}
          {page === 'notices' && <NoticesPage />}
          {page === 'transport' && <TransportPage />}
          {page === 'amenities' && <AmenitiesPage />}
          {page === 'onsite' && <OnsitePage />}
        </div>
      </main>
      <BottomNav current={page} onChange={setPage} />
    </div>
  )
}
