"use client"
import { motion } from "framer-motion"
import "./Projects.css"

export default function Projects() {
  const projects = [
    {
      name: "SoftNest - Fullstack App Store and projects showcase",
      description: " A fullstack App store with user authentication, repository management, and collaborative features, made specially for students and universities.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "EXPRESSJS"],
      github: "https://github.com/sadaouikhaled2024-git/Softnest",
    },
    {
      name: "Student and teacher communication platform",
      description: "A fullstack communication hub connecting teachersand students with full real time massaging, posts and academic planning ",
      tech: ["React", "HTML", "CSS","MongoDB","Web sockets","ExpressJS"],
      github: "https://github.com",
      demo: "https://echo-estin.vercel.app/",
    },
    {
      name: "Festival Blog",
      description: "A Well Structured Blog for Festival Enthusiasts",
      tech: ["NextJS", "Tailwind CSS", "Express"],
      github: "https://github.com/khaledsadaoui/festival-abeille-et-miel",
      demo: "https://festival-abeille-et-miel.vercel.app",
    },
    {
      name: "Social Media API",
      description: "RESTful API for social media platform with authentication, file uploads, and real-time messaging.",
      tech: ["Node.js"],
      github: "https://github.com",
      demo: "https://demo.com",
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
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A collection of fullstack applications showcasing modern web development practices
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
                <h3 className="project-name">{project.name}</h3>
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
