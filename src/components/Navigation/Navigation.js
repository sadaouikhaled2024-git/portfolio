"use client"
import { motion } from "framer-motion"
import "./Navigation.css"

export default function Navigation() {
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
          <span className="ltr"> </span>
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
              {section === "hero" && "Accueil"}
              {section === "projets" && "Projets"}
              {section === "à-propos" && "À propos"}
              {section === "compétences" && "Compétences"}
              {section === "contact" && "Contact"}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
