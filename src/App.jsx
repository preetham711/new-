import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import DesignProcess from './components/DesignProcess'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Portfolio Routes */}
        <Route
          path="/*"
          element={
            <div className="bg-black text-white">
              <ScrollProgress />
              <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <DesignProcess />
                <Projects />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
              <BackToTop />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}
