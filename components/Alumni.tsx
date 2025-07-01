'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const notableAlumni = [
  { name: 'Ben Finkel', role: 'Alumnus', company: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Wande Owens', role: 'Alumnus', company: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Kiran Amegadjie', role: 'Alumnus', company: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
  { name: 'Jason Lee', role: 'Alumnus', company: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Anthony Bennie', role: 'Alumnus', company: 'Meta', logo: 'https://logo.clearbit.com/meta.com' },
]

export default function Alumni() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Infinite scroll animation for alumni logos
    const marquee = gsap.to('.alumni-marquee', {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'none'
    })

    return () => {
      marquee.kill()
    }
  }, [])

  const handleImageError = (companyName: string) => {
    setImageErrors(prev => new Set([...prev, companyName]))
  }

  return (
    <section id="alumni" className="py-20 bg-zeta-black overflow-hidden">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Distinguished Alumni</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our brothers have gone on to lead in every field, from Wall Street to Silicon Valley
          </p>
        </div>

        {/* Alumni Marquee */}
        <div className="relative">
          <div className="flex items-center alumni-marquee" style={{ width: '200%' }}>
            {/* First set */}
            <div className="flex items-center space-x-12 min-w-full">
              {notableAlumni.map((alumnus, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-32 h-20 bg-white/10 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:bg-white/20">
                    {!imageErrors.has(alumnus.company) ? (
                      <Image
                        src={alumnus.logo}
                        alt={`${alumnus.company} logo`}
                        width={100}
                        height={40}
                        className="object-contain max-w-full max-h-full"
                        onError={() => handleImageError(alumnus.company)}
                      />
                    ) : (
                      <span className="text-white font-semibold text-sm text-center">
                        {alumnus.company}
                      </span>
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <p className="text-white text-sm font-medium">{alumnus.name}</p>
                    <p className="text-gray-400 text-xs">{alumnus.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second set (duplicate for seamless loop) */}
            <div className="flex items-center space-x-12 min-w-full">
              {notableAlumni.map((alumnus, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-32 h-20 bg-white/10 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:bg-white/20">
                    {!imageErrors.has(alumnus.company) ? (
                      <Image
                        src={alumnus.logo}
                        alt={`${alumnus.company} logo`}
                        width={100}
                        height={40}
                        className="object-contain max-w-full max-h-full"
                        onError={() => handleImageError(alumnus.company)}
                      />
                    ) : (
                      <span className="text-white font-semibold text-sm text-center">
                        {alumnus.company}
                      </span>
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <p className="text-white text-sm font-medium">{alumnus.name}</p>
                    <p className="text-gray-400 text-xs">{alumnus.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alumni Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-zeta-gray-1 p-6 rounded-lg">
            <div className="text-3xl font-bold text-zeta-gold mb-2">150+</div>
            <div className="text-gray-300">Alumni Nationwide</div>
          </div>
          <div className="bg-zeta-gray-1 p-6 rounded-lg">
            <div className="text-3xl font-bold text-zeta-gold mb-2">85%</div>
            <div className="text-gray-300">In Leadership Roles</div>
          </div>
          <div className="bg-zeta-gray-1 p-6 rounded-lg">
            <div className="text-3xl font-bold text-zeta-gold mb-2">$2M+</div>
            <div className="text-gray-300">Annual Donations</div>
          </div>
        </div>
      </div>
    </section>
  )
} 