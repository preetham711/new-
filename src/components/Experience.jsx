import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const experiences = [
    {
      role: 'Senior UI/UX Designer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading design for multiple product lines, mentoring junior designers, and establishing design systems.',
      achievements: ['Led redesign of flagship product', 'Established design system', 'Mentored 3 junior designers'],
    },
    {
      role: 'Product Designer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      description: 'Designed and shipped 5+ products from concept to launch, working closely with product and engineering teams.',
      achievements: ['Increased user engagement by 40%', 'Reduced design-to-dev time by 30%', 'Won internal design award'],
    },
    {
      role: 'UI/UX Designer',
      company: 'Creative Studio Co.',
      period: '2019 - 2021',
      description: 'Collaborated with clients to create beautiful and functional digital experiences across web and mobile.',
      achievements: ['Completed 20+ client projects', 'Maintained 95% client satisfaction', 'Specialized in SaaS design'],
    },
    {
      role: 'Junior Designer',
      company: 'Design Agency Pro',
      period: '2018 - 2019',
      description: 'Started my design journey, learning fundamentals and working on diverse projects.',
      achievements: ['Completed design bootcamp', 'Assisted on 15+ projects', 'Developed design foundation'],
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              My journey in design and product development
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary"></div>

            {/* Experience Items */}
            <motion.div variants={containerVariants} className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`md:flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white dark:border-slate-900"
                    ></motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="md:w-1/2 glass rounded-2xl p-8 hover:shadow-lg transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
                        <FiBriefcase className="w-5 h-5 text-primary dark:text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-secondary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <FiCalendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-white"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
