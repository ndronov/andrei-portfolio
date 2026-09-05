import { Route, Routes } from 'react-router'

import { MainPage } from './pages/MainPage/MainPage'
import { MagnumPage } from './pages/MagnumPage/MagnumPage'
import { CompulsePage } from './pages/CompulsePage/CompulsePage'
import { WagelyPage } from './pages/WagelyPage/WagelyPage'
import { TresorPage } from './pages/TresorPage/TresorPage'

function NotFoundPage() {
  return <h1>404 — Страница не найдена</h1>
}

export function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/magnum" element={<MagnumPage />} />
        <Route path="/compulse" element={<CompulsePage />} />
        <Route path="/wagely" element={<WagelyPage />} />
        <Route path="/tresor" element={<TresorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}
