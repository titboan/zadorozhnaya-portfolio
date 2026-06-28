import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import Contacts from './components/Contacts'
import Cursor from './components/Cursor'
import Marquee from './components/Marquee'
import ProjectPage from './pages/ProjectPage'

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Works />
        <Contacts />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
