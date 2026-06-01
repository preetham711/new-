import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'hello@preetham.design',
      link: 'mailto:hello@preetham.design',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
              Let's Work Together
            </h2>
            <p className="text-slate-400 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-10 sm:mb-12">
            {/* Contact Info */}
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon
              return (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={info.link}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-10 xs:w-12 h-10 xs:h-12 mx-auto mb-3 xs:mb-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 xs:w-6 h-5 xs:h-6 text-primary dark:text-secondary" />
                  </div>
                  <h3 className="font-bold text-white mb-1 xs:mb-2 text-sm xs:text-base">
                    {info.label}
                  </h3>
                  <p className="text-slate-400 text-xs xs:text-sm">
                    {info.value}
                  </p>
                </motion.a>
              )
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto glass rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs xs:text-sm font-semibold text-white mb-1.5 xs:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors text-sm xs:text-base"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs xs:text-sm font-semibold text-white mb-1.5 xs:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors text-sm xs:text-base"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs xs:text-sm font-semibold text-white mb-1.5 xs:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors text-sm xs:text-base"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-xs xs:text-sm font-semibold text-white mb-1.5 xs:mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors resize-none text-sm xs:text-base"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold text-sm xs:text-base flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                {submitted ? (
                  <>
                    <span>✓ Message Sent!</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 xs:w-5 h-4 xs:h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 xs:mt-10 sm:mt-12 text-center"
          >
            <p className="text-slate-400 mb-4 xs:mb-5 sm:mb-6 text-xs xs:text-sm sm:text-base">
              Or connect with me on social media
            </p>
            <div className="flex justify-center gap-2 xs:gap-3 sm:gap-4">
              {[
                { name: 'LinkedIn', emoji: '💼', link: '#' },
                { name: 'Behance', emoji: '🎨', link: '#' },
                { name: 'Dribbble', emoji: '🏀', link: '#' },
                { name: 'Twitter', emoji: '𝕏', link: '#' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 xs:w-12 h-10 xs:h-12 rounded-full glass flex items-center justify-center text-lg xs:text-xl hover:shadow-lg transition-all"
                  title={social.name}
                >
                  {social.emoji}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
