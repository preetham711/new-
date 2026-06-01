import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import authService from '../services/authService'
import dataService from '../services/dataService'
import {
  FiLogOut,
  FiMenu,
  FiX,
  FiUser,
  FiCode,
  FiBriefcase,
  FiBook,
  FiMessageSquare,
  FiSettings,
  FiLink,
  FiFileText,
  FiHome,
} from 'react-icons/fi'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    messages: 0,
    testimonials: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = authService.getStoredUser()
    if (!storedUser) {
      navigate('/admin/login')
      return
    }
    setUser(storedUser)
    loadStats()
  }, [navigate])

  const loadStats = async () => {
    try {
      const [projects, skills, messages, testimonials] = await Promise.all([
        dataService.getProjects(),
        dataService.getSkills(),
        dataService.getContactMessages(),
        dataService.getTestimonials(),
      ])

      setStats({
        projects: projects.data?.length || 0,
        skills: skills.data?.length || 0,
        messages: messages.data?.length || 0,
        testimonials: testimonials.data?.length || 0,
      })
    } catch (error) {
      console.error('Error loading stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    authService.logout()
    navigate('/admin/login')
  }

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: FiHome },
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'skills', label: 'Skills', icon: FiCode },
    { id: 'projects', label: 'Projects', icon: FiBriefcase },
    { id: 'experience', label: 'Experience', icon: FiFileText },
    { id: 'education', label: 'Education', icon: FiBook },
    { id: 'testimonials', label: 'Testimonials', icon: FiMessageSquare },
    { id: 'contact', label: 'Messages', icon: FiMessageSquare },
    { id: 'social', label: 'Social Links', icon: FiLink },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ]

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-950 border-r border-slate-800 transition-all duration-300 fixed h-screen overflow-y-auto`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-white font-bold">Admin</h1>
                <p className="text-xs text-slate-400">Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-primary text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </motion.button>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all"
          >
            <FiLogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Header */}
        <div className="bg-slate-950 border-b border-slate-800 p-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {sidebarOpen ? (
                <FiX className="w-6 h-6 text-white" />
              ) : (
                <FiMenu className="w-6 h-6 text-white" />
              )}
            </motion.button>
            <h2 className="text-2xl font-bold text-white">
              {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white font-semibold">{user?.first_name || 'Admin'}</p>
              <p className="text-xs text-slate-400">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Dashboard Overview</h3>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Projects', value: stats.projects, icon: FiBriefcase, color: 'from-blue-500 to-blue-600' },
                  { label: 'Skills', value: stats.skills, icon: FiCode, color: 'from-purple-500 to-purple-600' },
                  { label: 'Messages', value: stats.messages, icon: FiMessageSquare, color: 'from-green-500 to-green-600' },
                  { label: 'Testimonials', value: stats.testimonials, icon: FiMessageSquare, color: 'from-orange-500 to-orange-600' },
                ].map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-slate-400 text-sm">{stat.label}</p>
                          <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-white mb-4">Quick Actions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { label: 'Add Project', action: () => setActiveTab('projects') },
                    { label: 'Add Skill', action: () => setActiveTab('skills') },
                    { label: 'View Messages', action: () => setActiveTab('contact') },
                  ].map((action, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={action.action}
                      className="p-4 glass rounded-lg text-white font-semibold hover:bg-primary/20 transition-all"
                    >
                      {action.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Other tabs would go here */}
          {activeTab !== 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-400 text-lg">
                {menuItems.find(item => item.id === activeTab)?.label} management coming soon...
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
