import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', emoji: '💼' },
    { name: 'Behance', emoji: '🎨' },
    { name: 'Dribbble', emoji: '🏀' },
    { name: 'Twitter', emoji: '𝕏' },
  ]

  return (
    <footer className="bg-text dark:bg-slate-950 text-white py-8 xs:py-10 sm:py-12 px-3 xs:px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8 mb-8 xs:mb-10 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl xs:text-2.5xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 xs:mb-2">
              P
            </div>
            <p className="text-slate-400 text-xs xs:text-sm">
              UI/UX Designer & Product Designer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3 xs:mb-4 text-sm xs:text-base">Navigation</h4>
            <ul className="space-y-1.5 xs:space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy
                    smooth
                    offset={-64}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs xs:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3 xs:mb-4 text-sm xs:text-base">Connect</h4>
            <div className="flex gap-2 xs:gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 xs:w-10 h-8 xs:h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center text-base xs:text-lg"
                  title={social.name}
                >
                  {social.emoji}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-3 xs:mb-4 text-sm xs:text-base">Get In Touch</h4>
            <a
              href="mailto:hello@preetham.design"
              className="text-slate-400 hover:text-white transition-colors text-xs xs:text-sm break-all"
            >
              hello@preetham.design
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-6 xs:mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col xs:flex-row justify-between items-center gap-3 xs:gap-4"
        >
          <p className="text-slate-400 text-xs xs:text-sm text-center xs:text-left">
            © {currentYear} Preetham. All rights reserved.
          </p>

          {/* Back to Top */}
          <Link
            to="hero"
            spy
            smooth
            offset={-64}
            className="flex items-center gap-1 xs:gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs xs:text-sm"
          >
            Back to top
            <FiArrowUp className="w-3 xs:w-4 h-3 xs:h-4" />
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}
