"use client"
import { motion } from "framer-motion"
import "./Skills.css"

export default function Skills() {
  const skills = {
    Frontend: ["React", "Vite", "Next.js", "TypeScript", "TailwindCSS"],
    Backend: ["Node.js", "Python", "Express.js", "RestAPI"],
    Database: ["PostgreSQL", "MongoDB", "Firebase"],
    DevOps: [ "Vercel", "GitHub Actions"],
  }

  const getIcon = (category) => {
    const icons = {
      Frontend: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6"></polyline>
          <polyline points="8,6 2,12 8,18"></polyline>
        </svg>
      ),
      Backend: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      Database: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      DevOps: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    }
    return icons[category]
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">Tools and technologies I use to bring ideas to life</p>
        </motion.div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <div className="skill-header">
                <div className="skill-icon">{getIcon(category)}</div>
                <h3 className="skill-category">{category}</h3>
              </div>
              <div className="skill-list">
                {techs.map((tech) => (
                  <div key={tech} className="skill-item">
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
