"use client"
import { motion } from "framer-motion"
import "./About.css"

export default function About() {
  const sections = [
    {
      title: "Passée",
      content: "Mon parcours professionnel a débuté en Algérie, après l’obtention de mon baccalauréat, lorsque j’ai intégré l’École nationale supérieure d’informatique. Dès ma première année, j’ai suivi une formation en ligne en développement front-end, ce qui m’a permis d’acquérir mes premières compétences en développement web. J’ai ensuite réalisé mon premier projet informatique en équipe dans le cadre de ma soutenance de classe préparatoire, une expérience qui m’a permis de mettre en pratique mes connaissances et de découvrir le travail collaboratif dans un contexte de développement."
    },
    {
      title: "Présent",
      content: "Aujourd’hui, je poursuis mon parcours en France, à Aix-Marseille Université, où je suis étudiant en troisième année de licence MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises). Cette formation me permet d’approfondir mes compétences techniques en développement informatique tout en développant mes connaissances en gestion de projet et en systèmes d’information. En parallèle, je continue à travailler sur des projets personnels et collaboratifs, notamment dans le développement web full-stack, afin de consolider mes acquis et de me préparer à intégrer le monde professionnel. "
    },
    {
      title: "Future",
      content: "À court terme, mon objectif est de décrocher un stage de fin de L3 MIAGE afin de mettre en pratique les compétences acquises au cours de ma formation et de découvrir davantage le fonctionnement d’une équipe informatique en entreprise. Je souhaite participer à des projets concrets, notamment en développement web et en systèmes d’information, tout en développant mes compétences techniques et professionnelles. Cette première expérience en entreprise constituera une étape importante dans la préparation de mon projet de poursuite d’études en alternance pendant mon master MIAGE."
    }
  ]

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
          <h2 className="about-title">Pitch</h2>
          <div className="triangle-sections">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="triangle-section"
                style={{ width: `${100 - index * 10}%` }}
              >
                <h3 className="section-title">{section.title}</h3>
                <p className="section-content">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
