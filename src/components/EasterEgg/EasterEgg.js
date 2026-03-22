"use client"
import { motion, AnimatePresence } from "framer-motion"
import "./EasterEgg.css"

export default function EasterEgg({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="easter-egg-overlay"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="easter-egg-rocket"
          >
            🚀
          </motion.div>
          <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="easter-egg-text">
            Code Konami activé! 🎮
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
