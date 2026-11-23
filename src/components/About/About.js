"use client"
import { motion } from "framer-motion"
import "./About.css"
import { translations } from "../../i18n"

export default function About({ language }) {
  const t = translations[language].about

  return (
    <section id="about" className="about section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2 className="about-title">{t.title}</h2>
          <div className="triangle-sections">
            {t.sections.map(([title, content], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="triangle-section"
                style={{ width: `${100 - index * 10}%` }}
              >
                <h3 className="section-title">{title}</h3>
                <p className="section-content">{content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
