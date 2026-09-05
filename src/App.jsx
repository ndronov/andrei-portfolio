import { Route, Routes } from 'react-router'

function HomePage() {
  return <h1>Главная</h1>
}

function AboutPage() {
  return <h1>О нас</h1>
}

function NotFoundPage() {
  return <h1>404 — Страница не найдена</h1>
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
