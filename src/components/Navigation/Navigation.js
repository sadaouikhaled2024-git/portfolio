"use client"
import { motion } from "framer-motion"
import "./Navigation.css"

export default function Navigation() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="nav-logo">
          By Khaled Sadaoui
        </motion.div>
        <div className="nav-links">
          {["hero", "projects", "about", "skills", "contact"].map((section) => (
            <button key={section} onClick={() => scrollToSection(section)} className="nav-link">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
