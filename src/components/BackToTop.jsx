import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link
            to="hero"
            spy
            smooth
            offset={-64}
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
            >
              <FiArrowUp className="w-6 h-6" />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
