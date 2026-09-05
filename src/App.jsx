import { Route, Routes } from 'react-router'

import { MainPage } from './pages/MainPage/MainPage'

function AboutPage() {
  return <h1>О нас</h1>
}

function NotFoundPage() {
  return <h1>404 — Страница не найдена</h1>
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
