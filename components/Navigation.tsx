'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'history', 'summer-housing', 'brothers', 'donations', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const topNavLinks = [
    { id: 'home', label: 'Home' },
    { id: 'brothers', label: 'Brothers' },
    { id: 'contact', label: 'Contact' }
  ]

  const bottomNavLinks = [
    { id: 'history', label: 'History' },
    { id: 'summer-housing', label: 'Summer Housing' },
    { id: 'donations', label: 'Donations' }
  ]

  return (
    <>
      {/* Top Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zeta-black/95 backdrop-blur-sm border-b border-zeta-gray-1' : 'bg-transparent'
      }`}>
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              className="font-cinzel font-bold text-zeta-gold text-2xl logo-pulse"
              onClick={() => scrollToSection('home')}
            >
              ΖΨ
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {topNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors hover:text-zeta-gold ${
                    activeSection === link.id ? 'text-zeta-gold' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Shows when scrolled to bottom */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-zeta-black/95 backdrop-blur-sm border-t border-zeta-gray-1 transform transition-transform duration-300">
        <div className="container-max section-padding">
          <div className="flex items-center justify-center h-12 space-x-6">
            {bottomNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-zeta-gold ${
                  activeSection === link.id ? 'text-zeta-gold' : 'text-gray-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
} 