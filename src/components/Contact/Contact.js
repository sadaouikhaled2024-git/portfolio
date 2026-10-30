"use client"
import { motion } from "framer-motion"
import "./Contact.css"
import emailjs from "@emailjs/browser"
export default function Contact() {
  const handleSubmit = (e) => {
  e.preventDefault()

  emailjs.sendForm(
    "service_ekxdvja",     // Replace with your EmailJS service ID
    "template_y9ci4en",    // Replace with your EmailJS template ID
    e.target,
    "OKI2MO2-9hG_AyPcI"      // Replace with your EmailJS public key
  )
  .then(() => {
    alert("Le message a été envoyé avec succès!")
    e.target.reset()
  })
  .catch((err) => {
    console.error(err)
    alert("L'envoi du message a échoué.")
  })
}

  return (
    <section id="contact" className="contact section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="contact-title">Travaillons ensemble</h2>
          <p className="contact-subtitle">Vous avez un projet en tête ou une opportunité à me proposer ?</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <div className="contact-form-card">
              <h3 className="form-title">Envoyer un message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Votre nom" className="form-input" required />
                <input type="email" name="email" placeholder="Votre email" className="form-input" required />
                <textarea placeholder="Votre message" name="message" rows="4" className="form-textarea" required></textarea>
                <button type="submit" className="form-submit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                  </svg>
                  Envoyer le message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3 className="info-title">Nous contacter</h3>
            <div className="contact-links">
              <a href="mailto:sadaouikhaled2024@gmail.com" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>sadaouikhaled2024@gmail.com</span>
              </a>
              <a href="https://github.com/sadaouikhaled2024-git" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>sadaouikhaled2024-git</span>
              </a>
              <a href="https://www.linkedin.com/in/khaled-sadaoui-b48a023b5/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>Khaled Sadaoui</span>
              </a>
            </div>

          
          </motion.div>
        </div>
      </div>
    </section>
  )
}
