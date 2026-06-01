import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass dark:glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            P
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy
                smooth
                offset={-64}
                className="text-text dark:text-white hover:text-primary dark:hover:text-secondary transition-colors cursor-pointer text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-lightBg dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-slate-600" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-lightBg dark:hover:bg-slate-800"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy
                smooth
                offset={-64}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-text dark:text-white hover:text-primary dark:hover:text-secondary transition-colors cursor-pointer text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
