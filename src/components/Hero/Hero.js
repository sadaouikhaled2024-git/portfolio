"use client"
import { motion, useScroll, useTransform } from "motion/react"
import "./Hero.css"
import DecryptedText from "../Decrypt-text"
export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="hero">
      <motion.div style={{ y: y1 }} className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </motion.div>
    
      <div className="hero-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-image-section"
        >
          <img src="/screenshots/me.jpeg" alt="Khaled Sadaoui" className="hero-image" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            <div style={{ marginTop: '4rem' }}>
  <DecryptedText
  text="Bonjour, je m'appelle"
  animateOn="view"
  revealDirection="start"
  sequential
  speed={50}
  useOriginalCharsOnly={false}
/>
</div>

          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
           <div style={{ marginTop: '4rem' }}>
  Khaled Sadaoui
</div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Etudiant en L3 MIAGE à l'université d'Aix-Marseille
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-description"
          >
            J’ai réalisé plusieurs projets de bout en bout, en individuel et en équipe. Je recherche un stage en développement logiciel pour mettre mes compétences techniques au service de projets concrets
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <button onClick={() => scrollToSection("projects")} className="hero-cta">
              Voir mes projets
            </button>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  )
}
