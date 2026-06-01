import { motion } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FiCode, FiLayout, FiBox } from 'react-icons/fi'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const skillCategories = [
    {
      title: 'Design Skills',
      icon: FiLayout,
      skills: ['UI Design', 'UX Design', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      title: 'Design Tools',
      icon: FiBox,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    },
    {
      title: 'Development',
      icon: FiCode,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
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
      id="skills"
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
              Skills & Expertise
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary dark:text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                        <span className="text-sm font-medium text-white">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Proficiency Bars */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Proficiency Levels
            </h3>
            <div className="space-y-6">
              {[
                { skill: 'UI/UX Design', level: 95 },
                { skill: 'Figma', level: 90 },
                { skill: 'User Research', level: 85 },
                { skill: 'Design Systems', level: 88 },
                { skill: 'Frontend Development', level: 75 },
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">
                      {item.skill}
                    </span>
                    <span className="text-secondary font-semibold">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
