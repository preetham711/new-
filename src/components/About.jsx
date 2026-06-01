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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences through thoughtful design
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Image */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                <div className="relative glass rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-8xl">🎨</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Design Philosophy
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I believe great design is invisible. It solves problems elegantly, delights users, and creates meaningful connections between people and products. Every pixel has a purpose.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  My Approach
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I combine user research, strategic thinking, and creative excellence to deliver design solutions that are both beautiful and functional. User-centered design is at the heart of everything I do.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Experience
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  With 5+ years of experience in UI/UX design, I've worked with startups, scale-ups, and established companies to create digital products that users love.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
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
