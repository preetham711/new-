import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import CountUp from '../utils/CountUp'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const stats = [
    { number: 50, label: 'Projects Completed', suffix: '+' },
    { number: 40, label: 'Happy Clients', suffix: '+' },
    { number: 5, label: 'Years Experience', suffix: '+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
              About Me
            </h2>
            <p className="text-slate-400 text-base xs:text-lg sm:text-xl max-w-2xl mx-auto px-2">
              Passionate about creating meaningful digital experiences through thoughtful design
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16 px-4">
            {/* Left - Image */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                <div className="relative glass rounded-2xl p-6 sm:p-8 h-64 sm:h-80 md:h-96 flex items-center justify-center">
                  <div className="text-6xl sm:text-8xl">🎨</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 px-2 sm:px-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Design Philosophy
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  I believe great design is invisible. It solves problems elegantly, delights users, and creates meaningful connections between people and products. Every pixel has a purpose.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  My Approach
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  I combine user research, strategic thinking, and creative excellence to deliver design solutions that are both beautiful and functional. User-centered design is at the heart of everything I do.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Experience
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  With 5+ years of experience in UI/UX design, I've worked with startups, scale-ups, and established companies to create digital products that users love.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {inView ? (
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  ) : (
                    '0'
                  )}
                </div>
                <p className="text-slate-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
