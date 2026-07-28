import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import SelectedWork from './pages/SelectedWork'
import About from './pages/About'
import AllWork from './pages/AllWork'
import Contact from './pages/Contact'
import Communications from './pages/Communications'
import Editorial from './pages/Editorial'
import Photography from './pages/Photography'
import Etc from './pages/Etc'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<SelectedWork />} />
        <Route path="all-work" element={<AllWork />} />
        <Route path="all-work/:categoryId" element={<AllWork />} />
        <Route path="contact" element={<Contact />} />
        <Route path="communications" element={<Communications />} />
        <Route path="editorial" element={<Editorial />} />
        <Route path="photography" element={<Photography />} />
        <Route path="etc" element={<Etc />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}