import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FiSearch, FiTarget, FiZap, FiPenTool, FiBox, FiCheckCircle } from 'react-icons/fi'

export default function DesignProcess() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const steps = [
    {
      number: '01',
      title: 'Research',
      description: 'Deep dive into user needs, market trends, and competitive landscape',
      icon: FiSearch,
    },
    {
      number: '02',
      title: 'Define',
      description: 'Establish clear goals, user personas, and problem statements',
      icon: FiTarget,
    },
    {
      number: '03',
      title: 'Ideate',
      description: 'Brainstorm solutions and explore multiple design directions',
      icon: FiZap,
    },
    {
      number: '04',
      title: 'Design',
      description: 'Create high-fidelity designs with attention to detail',
      icon: FiPenTool,
    },
    {
      number: '05',
      title: 'Prototype',
      description: 'Build interactive prototypes to test and validate concepts',
      icon: FiBox,
    },
    {
      number: '06',
      title: 'Test',
      description: 'Gather user feedback and iterate based on insights',
      icon: FiCheckCircle,
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
      id="process"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950"
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
              My Design Process
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A structured approach to creating meaningful design solutions
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2"></div>

            {/* Steps Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-6 gap-8"
            >
              {steps.map((step, idx) => {
                const IconComponent = step.icon
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all h-full flex flex-col">
                      {/* Icon Circle */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center"
                      >
                        <IconComponent className="w-8 h-8 text-primary dark:text-secondary" />
                      </motion.div>

                      {/* Step Number */}
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                        {step.number}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-400 flex-grow">
                        {step.description}
                      </p>

                      {/* Arrow */}
                      {idx < steps.length - 1 && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                          <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Process Description */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <p className="text-lg text-slate-400 leading-relaxed">
              This iterative process ensures that every design decision is backed by research and user feedback. I believe in continuous improvement and refinement to deliver the best possible outcomes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
