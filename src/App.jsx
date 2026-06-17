import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import Contacts from './components/Contacts'
import Cursor from './components/Cursor'
import Marquee from './components/Marquee'

function App() {
  return (
    <>
      <Cursor />
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

export default App
