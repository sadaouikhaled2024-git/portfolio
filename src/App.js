"use client"

import { useEffect, useState, useRef } from "react"
import Navigation from "./components/Navigation/Navigation"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import EasterEgg from "./components/EasterEgg/EasterEgg"
import { Analytics } from "@vercel/analytics/react"
import PixelBlast from './components/PixelBlast.js';
function App() {
  const [easterEggActive, setEasterEggActive] = useState(false)
  const konamiSequence = useRef([]) 

  const konamiCode = ["KeyK", "KeyH", "KeyQ", "KeyL", "KeyE", "KeyD"]

  useEffect(() => {
    const handleKeyDown = (e) => {
  
  konamiSequence.current = [...konamiSequence.current, e.code].slice(-6)
 console.log("sequence:", konamiSequence.current.join(","))
  console.log("target:  ", konamiCode.join(","))
  
  if (konamiSequence.current.join(",") === konamiCode.join(",")) {
    setEasterEggActive(true)
    console.log("Konami code activated!")
    setTimeout(() => setEasterEggActive(false), 3000)
  }
}

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  })

  return (
    <div className="portfolio">
      

<div style={{ width: '100%', height: '100%', position: 'fixed',zIndex: -1,opacity: 0.6 }}>
  <PixelBlast
    variant="circle"
    pixelSize={5}
    color="#686767"
    patternScale={4}
    patternDensity={0.8}
    pixelSizeJitter={0}
    enableRipples
    rippleSpeed={10}
    rippleThickness={0.1}
    rippleIntensityScale={1}
    liquid={false}
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={1}
    edgeFade={0.1}
    transparent
  />
</div>
<Analytics/>
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
