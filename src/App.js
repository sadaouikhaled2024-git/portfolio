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

const RED = [0xF0, 0x4B, 0x36]
const BLUE = [0x24, 0x55, 0xD6]

function interpolateColor(progress) {
  const factor = (Math.sin(progress * Math.PI * 2) + 1) / 2
  const color = RED.map((channel, index) =>
    Math.round(channel + (BLUE[index] - channel) * factor),
  )

  return `#${color.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`
}

function App() {
  const [easterEggActive, setEasterEggActive] = useState(false)
  const [pixelBlastColor, setPixelBlastColor] = useState("#F04B36")
  const konamiSequence = useRef([]) 

  const konamiCode = ["KeyK", "KeyH", "KeyQ", "KeyL", "KeyE", "KeyD"]

  useEffect(() => {
    let animationFrame
    const startTime = performance.now()
    const duration = 5000
    let lastUpdate = 0

    const animateColor = (now) => {
      if (now - lastUpdate >= 100) {
        setPixelBlastColor(interpolateColor((now - startTime) / duration))
        lastUpdate = now
      }
      animationFrame = requestAnimationFrame(animateColor)
    }

    animationFrame = requestAnimationFrame(animateColor)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

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
    antialias={false}
    pixelSize={8}
    color={pixelBlastColor}
    patternScale={8}
    patternDensity={0.2}
    pixelSizeJitter={0}
    enableRipples
    rippleSpeed={10}
    rippleThickness={0.1}
    rippleIntensityScale={1}
    liquid={false}
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.1}
    edgeFade={0}
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
