import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-slate-900 to-black dark:from-black dark:via-slate-900 dark:to-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Floating Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6"
        >
          <div className="glass px-4 py-2 rounded-full text-sm font-medium text-secondary">
            ✨ Welcome to my portfolio
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Preetham</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6"
        >
          UI/UX Designer & Product Designer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I craft beautiful, intuitive digital experiences that solve real problems. Specializing in user-centered design, design systems, and modern product interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            to="projects"
            spy
            smooth
            offset={-64}
            className="group"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <Link
            to="contact"
            spy
            smooth
            offset={-64}
            className="group"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary text-primary dark:text-secondary dark:border-secondary rounded-lg font-semibold flex items-center gap-2 hover:bg-primary hover:text-white dark:hover:bg-secondary transition-all"
            >
              <FiMail />
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={itemVariants}
          className="relative h-80 flex items-center justify-center"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-64 h-64 rounded-2xl overflow-hidden glass shadow-glass"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-6xl">👨‍💼</div>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
              <div className="glass px-4 py-2 rounded-full text-xs font-semibold text-primary dark:text-secondary whitespace-nowrap">
                UI Design
              </div>
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-12 translate-y-12">
              <div className="glass px-4 py-2 rounded-full text-xs font-semibold text-primary dark:text-secondary whitespace-nowrap">
                UX Research
              </div>
            </div>
            <div className="absolute bottom-0 left-0 transform -translate-x-12 translate-y-12">
              <div className="glass px-4 py-2 rounded-full text-xs font-semibold text-primary dark:text-secondary whitespace-nowrap">
                Prototyping
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 flex justify-center"
        >
          <div className="text-textSecondary dark:text-slate-400 text-sm">
            Scroll to explore
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
