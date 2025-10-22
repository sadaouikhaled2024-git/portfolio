"use client"

import { useEffect, useState } from "react"
import Navigation from "./components/Navigation/Navigation"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import EasterEgg from "./components/EasterEgg/EasterEgg"

function App() {
  const [easterEggActive, setEasterEggActive] = useState(false)
  const [konamiSequence, setKonamiSequence] = useState([]) // ← C’est ça qu’il manquait 🔥

  const konamiCode = ["KeyK", "KeyH", "KeyA", "KeyL", "KeyE", "KeyD"]

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...konamiSequence, e.code].slice(-6)
      setKonamiSequence(newSequence)

      if (newSequence.join(",") === konamiCode.join(",")) {
        setEasterEggActive(true)
        setTimeout(() => setEasterEggActive(false), 3000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiSequence])

  return (
    <div className="portfolio">
      <EasterEgg active={easterEggActive} />
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
