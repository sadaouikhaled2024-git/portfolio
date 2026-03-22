"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import "./Projects.css"

export default function Projects() {
  const [screenshotIndices, setScreenshotIndices] = useState({})

  const goToScreenshot = (projectIndex, screenshotIndex) => {
    setScreenshotIndices((prev) => ({
      ...prev,
      [projectIndex]: screenshotIndex,
    }))
  }

  const nextScreenshot = (projectIndex, totalScreenshots) => {
    const currentIndex = screenshotIndices[projectIndex] || 0
    const newIndex = (currentIndex + 1) % totalScreenshots
    goToScreenshot(projectIndex, newIndex)
  }

  const prevScreenshot = (projectIndex, totalScreenshots) => {
    const currentIndex = screenshotIndices[projectIndex] || 0
    const newIndex = (currentIndex - 1 + totalScreenshots) % totalScreenshots
    goToScreenshot(projectIndex, newIndex)
  }
  const projects = [
    {
      name: "Softnest",
      period: "",
      description: "Projet académique - un clone de github pour les etudiants, avec des fonctionnalités de base pour la gestion de projets et de code.",
      tech: ["React.js", "JavaScript", "CSS", "Express.js", "PostgreSQL","JWT"],
      github: "https://github.com/sadaouikhaled2024-git/Softnest",
      demo: "",
      inDevelopment: false,
      screenshots: [
        "/screenshots/softnest1.png",
        "/screenshots/softnest2.png",
       
      ],
    },
    {
      name: "Ccarrée",
      period: "",
      description: "Projet collaboratif d'une plateforme académique de gestion de petites annonces pour étudiants.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB","REST API"],
      github: "https://github.com",
      demo: "https://demo.com",
      inDevelopment: true,
      screenshots: [
        "https://via.placeholder.com/600x400?text=Ccarée+1",
        "https://via.placeholder.com/600x400?text=Ccarée+2",
        "https://via.placeholder.com/600x400?text=Ccarée+3",
      ],
    },
    {
      name: "TokyoVibe - E-commerce Streetwear",
      period: "",
      description: "Site e-commerce streetwear avec déploiement professionnel et IA intégrée. Assistant IA via l'API HuggingFace pour guider l'expérience de personalisation. Déploiement containerisé avec Docker, hébergé sur Vercel et Fly.io.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "Docker","HuggingFace API", "Vercel", "Fly.io"],
    github: "https://github.com/sadaouikhaled2024-git/tokyo-vibe",
      demo: "https://tokyovibe.shop",
      inDevelopment: false,
      screenshots: [
        "/screenshots/tokyovibe1.png",
        "/screenshots/tokyovibe2.png",
        "/screenshots/tokyovibe3.png",
        "/screenshots/tokyovibe4.png",
      ],
    },
    {
      name: "Arseet - Plateforme e-commerce",
      period: "",
      description: "Premier projet e-commerce mené entièrement en solo, de la conception au déploiement. Intégration de services cloud : Cloudinary, Firebase Storage, SendGrid. Génération de factures PDF et emails transactionnels avec authentification sécurisée via JWT.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MySQL", "Sequelize","Cloudinary", "Firebase Storage", "SendGrid", "PDFKit", "JWT"],
      github: "https://github.com/sadaouikhaled2024-git",
      demo: "https://arseet.com",
      inDevelopment: false,
      screenshots: [
        "/screenshots/arseet1.png",
        "/screenshots/arseet2.png",
        "/screenshots/arseet3.jpg",
        "/screenshots/arseet4.png",
      ],
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2 className="projects-title">Expérience Professionnelle</h2>
          <p className="projects-subtitle">
            Mes projets et expériences en développement web fullstack
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-header">
                <div>
                  <h3 className="project-name">{project.name}</h3>
                  {project.period && <p className="project-period">{project.period}</p>}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-screenshot-container">
                <div className="project-screenshot-slider">
                  {project.inDevelopment ? (
                    <div className="dev-placeholder">
                      <div className="dev-animation">
                        <span className="zzz">z</span>
                        <span className="zzz">z</span>
                        <span className="zzz">z</span>
                        <span className="zzz">.</span>
                        <span className="zzz">.</span>
                      </div>
                      <p className="dev-text">En développement...</p>
                    </div>
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${index}-${screenshotIndices[index] || 0}`}
                        src={project.screenshots[screenshotIndices[index] || 0]}
                        alt={project.name}
                        className="screenshot-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </AnimatePresence>
                  )}
                  {project.screenshots.length > 1 && (
                    <>
                      <button 
                        className="slider-button slider-button-prev"
                        onClick={() => prevScreenshot(index, project.screenshots.length)}
                        aria-label="Previous screenshot"
                      >
                        ❮
                      </button>
                      <button 
                        className="slider-button slider-button-next"
                        onClick={() => nextScreenshot(index, project.screenshots.length)}
                        aria-label="Next screenshot"
                      >
                        ❯
                      </button>
                    </>
                  )}
                </div>
                {project.screenshots.length > 1 && (
                  <div className="screenshot-dots">
                    {project.screenshots.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        className={`dot ${(screenshotIndices[index] || 0) === dotIndex ? "active" : ""}`}
                        onClick={() => goToScreenshot(index, dotIndex)}
                        aria-label={`Go to screenshot ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
