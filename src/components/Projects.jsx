import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../utils/useInView'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Hotel Booking Website',
      category: 'Websites',
      description: 'A modern hotel booking platform with advanced search, filters, and seamless checkout experience.',
      image: '🏨',
      technologies: ['Figma', 'React', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 2,
      title: 'Car Rental Platform',
      category: 'Websites',
      description: 'Intuitive car rental application with real-time availability and flexible booking options.',
      image: '🚗',
      technologies: ['Figma', 'React', 'Node.js'],
      link: '#',
    },
    {
      id: 3,
      title: 'PlayMate Sports Meetup App',
      category: 'Mobile Apps',
      description: 'Social platform connecting sports enthusiasts for local meetups and tournaments.',
      image: '⚽',
      technologies: ['Figma', 'React Native', 'Firebase'],
      link: '#',
    },
    {
      id: 4,
      title: 'Doctor Appointment App',
      category: 'Mobile Apps',
      description: 'Healthcare app enabling patients to book appointments and manage medical records.',
      image: '⚕️',
      technologies: ['Figma', 'Flutter', 'Firebase'],
      link: '#',
    },
    {
      id: 5,
      title: 'Apartment Management System',
      category: 'Dashboards',
      description: 'Comprehensive dashboard for apartment complex management and resident communication.',
      image: '🏢',
      technologies: ['Figma', 'React', 'MongoDB'],
      link: '#',
    },
    {
      id: 6,
      title: 'SaaS Analytics Dashboard',
      category: 'SaaS Products',
      description: 'Advanced analytics platform with real-time data visualization and reporting tools.',
      image: '📊',
      technologies: ['Figma', 'React', 'D3.js'],
      link: '#',
    },
  ]

  const categories = ['All', 'Mobile Apps', 'Websites', 'Dashboards', 'SaaS Products']

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

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
      id="projects"
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
          <motion.div variants={itemVariants} className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              A selection of my recent work showcasing design thinking and execution
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 xs:gap-3 mb-8 xs:mb-10 sm:mb-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 text-xs xs:text-sm sm:text-base rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'glass text-text dark:text-white hover:bg-primary/10 dark:hover:bg-secondary/10'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -10 }}
                  className="group glass rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  {/* Project Image */}
                  <div className="relative h-32 xs:h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl"
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 xs:p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-2 xs:mb-3">
                      <div>
                        <p className="text-xs xs:text-sm font-semibold text-secondary mb-0.5 xs:mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-400 text-xs xs:text-sm mb-3 xs:mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 xs:px-3 py-0.5 xs:py-1 bg-primary/10 text-secondary rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 xs:gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        className="flex-1 px-3 xs:px-4 py-1.5 xs:py-2 bg-primary text-white rounded-lg font-medium text-xs xs:text-sm flex items-center justify-center gap-1 xs:gap-2 hover:shadow-lg transition-all"
                      >
                        Case Study
                        <FiArrowRight className="w-3 xs:w-4 h-3 xs:h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        className="px-3 xs:px-4 py-1.5 xs:py-2 border border-secondary text-secondary rounded-lg font-medium text-xs xs:text-sm hover:bg-secondary/10 transition-all"
                      >
                        <FiExternalLink className="w-3 xs:w-4 h-3 xs:h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
