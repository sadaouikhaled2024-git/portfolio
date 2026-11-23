"use client"
import { motion } from "framer-motion"
import "./Navigation.css"
import { translations } from "../../i18n"

export default function Navigation({ language, setLanguage }) {
  const t = translations[language]
  const scrollToSection = (sectionId) => {
    let actualId = sectionId
    if (sectionId === "projets") actualId = "projects"
    if (sectionId === "à-propos") actualId = "about"
    if (sectionId === "compétences") actualId = "skills"
    document.getElementById(actualId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="nav-logo">
          <span className="ltr">K</span>
          <span className="ltr">h</span>
          <span className="ltr">a</span>
          <span className="ltr">l</span>
          <span className="ltr">e</span>
          <span className="ltr">d</span>
          
          <span className="ltr">S</span>
          <span className="ltr">a</span>
          <span className="ltr">d</span>
          <span className="ltr">a</span>
          <span className="ltr">o</span>
          <span className="ltr">u</span>
          <span className="ltr">i</span>
        </motion.div>
        <div className="nav-links">
          {["hero", "projets", "à-propos", "compétences", "contact"].map((section) => (
            <button key={section} onClick={() => scrollToSection(section)} className="nav-link">
              {section === "hero" && t.nav.home}
              {section === "projets" && t.nav.projects}
              {section === "à-propos" && t.nav.about}
              {section === "compétences" && t.nav.skills}
              {section === "contact" && t.nav.contact}
            </button>
          ))}
          <div className="language-selector" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`language-option ${language === "fr" ? "active" : ""}`}
              onClick={() => setLanguage("fr")}
              aria-label="Passer au français"
              aria-pressed={language === "fr"}
            >
              FR
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              className={`language-option ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
