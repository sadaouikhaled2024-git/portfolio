"use client"
import { motion } from "framer-motion"
import "./About.css"

export default function About() {
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
          <h2 className="about-title">About Me</h2>
          <div className="about-text">
            <p>
              I'm a passionate fullstack developer who believes in crafting digital experiences that are both beautiful
              and functional. With expertise spanning from pixel-perfect frontends to robust backend architectures, I
              bring ideas to life through clean, efficient code.
            </p>
            <p>
              My journey in web development started with curiosity and has evolved into a deep passion for building
              tools that make a difference. I love the challenge of solving complex problems and the satisfaction of
              seeing users interact with something I've built from the ground up.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
              sharing knowledge with the developer community. I believe in continuous learning and staying at the
              forefront of web development trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
