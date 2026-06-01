import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Ventures',
      role: 'Product Manager',
      image: '👩‍💼',
      review: 'Preetham transformed our product vision into reality. His design thinking and attention to detail elevated our entire platform. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Digital Innovations',
      role: 'CEO',
      image: '👨‍💼',
      review: 'Working with Preetham was a game-changer. He not only delivered beautiful designs but also provided valuable strategic insights.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      company: 'Creative Agency Plus',
      role: 'Design Director',
      image: '👩‍🎨',
      review: 'Preetham is a true professional. His design systems and documentation made handoff to development seamless and efficient.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      company: 'StartUp Hub',
      role: 'Founder',
      image: '👨‍💻',
      review: 'Exceptional designer with great communication skills. Preetham understood our needs and delivered beyond expectations.',
      rating: 5,
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
      id="testimonials"
      ref={ref}
      className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 sm:px-6 lg:px-8 bg-slate-950"
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
              Client Testimonials
            </h2>
            <p className="text-slate-400 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              What clients and collaborators say about working with me
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 hover:shadow-lg transition-all"
              >
                {/* Stars */}
                <div className="flex gap-0.5 xs:gap-1 mb-3 xs:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-400 mb-4 xs:mb-5 sm:mb-6 leading-relaxed italic text-xs xs:text-sm sm:text-base">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 xs:gap-4">
                  <div className="w-10 xs:w-12 h-10 xs:h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-lg xs:text-xl flex-shrink-0">
                    {testimonial.image}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-sm xs:text-base truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs xs:text-sm text-slate-400 truncate">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-8 xs:mt-12 sm:mt-16 text-center"
          >
            <div className="inline-block glass rounded-full px-4 xs:px-6 py-2 xs:py-3">
              <p className="text-slate-400 text-xs xs:text-sm sm:text-base">
                <span className="font-bold text-secondary">40+</span> Happy clients and counting
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
