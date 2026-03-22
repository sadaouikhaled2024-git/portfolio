"use client"
import { motion } from "framer-motion"
import "./About.css"

export default function About() {
  const sections = [
    {
      title: "Past",
      content: "Quand je ne code pas, je démonte des vélos, powerlifting du coté, ou je compare des specs techniques que je n'achèterai probablement jamais. J'ai commencé à coder en ESTIN, en explorant les bases du développement web à travers des projets personnels et des tutoriels en ligne. Cette passion m'a conduit à approfondir mes connaissances et à acquerir une solide expérience pratique."
    },
    {
      title: "Present",
      content: "Aujourd'hui je suis un developpeur web junior, je construis des apps complètes, du front au back, avec le même état d'esprit : comprendre comment ça marche, et le faire bien, apprendre de mes erreurs, et surtout, kifer en codant des sites pour mes amis et des projets académiques. J'aime les défis techniques et la satisfaction de voir une idée prendre vie à travers le code."
    },
    {
      title: "Future",
      content: "Demain, je veux pousser ça encore plus loin, vers l'IA. Pas juste l'utiliser, mais comprendre ce qu'il y a dedans, construire des modèles, jouer avec les données, entraîner des trucs et voir ce qui sort. J'ai déjà commencé à creuser: les maths derrière, les architectures, comment ça pense. C'est le chemin où je veux aller, et je sais exactement pourquoi."
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
          <h2 className="about-title">À propos de moi</h2>
          <div className="triangle-sections">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="triangle-section"
                style={{ width: `${100 - index * 25}%` }}
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
