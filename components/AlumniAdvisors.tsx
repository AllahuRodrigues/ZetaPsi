'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const advisors = [
  {
    name: 'Sam Tuckerman',
    title: 'Alumni Advisor',
    company: 'Goldman Sachs',
    bio: 'Leading strategic initiatives and mentoring current brothers in finance careers.',
    image: '/images/sam-tuckerman.jpg', // You'll need to add these images
    linkedin: 'https://linkedin.com/in/samtuckerman'
  },
  {
    name: 'Jack Westafer', 
    title: 'Alumni Advisor',
    company: 'McKinsey & Company',
    bio: 'Providing guidance on professional development and chapter operations.',
    image: '/images/jack-westafer.jpg', // You'll need to add these images
    linkedin: 'https://linkedin.com/in/jackwestafer'
  }
]

export default function AlumniAdvisors() {
  useEffect(() => {
    // Advisor cards hover animations
    const cards = gsap.utils.toArray('.advisor-card')
    
    cards.forEach((card: any) => {
      const tl = gsap.timeline({ paused: true })
      
      tl.to(card, {
        y: -10,
        boxShadow: '0 20px 40px rgba(244, 180, 40, 0.2)',
        duration: 0.3,
        ease: 'power2.out'
      })

      card.addEventListener('mouseenter', () => tl.play())
      card.addEventListener('mouseleave', () => tl.reverse())
    })
  }, [])

  return (
    <section id="alumni-advisors" className="py-20 bg-zeta-gray-1">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Alumni Advisors</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our dedicated alumni advisors provide mentorship and guidance to ensure the continued success of Eta Chapter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="advisor-card bg-zeta-black border border-zeta-gray-2 rounded-lg overflow-hidden hover:border-zeta-gold/50 transition-colors duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-zeta-gray-2 rounded-full flex items-center justify-center mr-6">
                    {/* Placeholder for image - you can add actual photos later */}
                    <span className="text-zeta-gold text-2xl font-bold">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-cinzel font-bold text-white mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-zeta-gold font-medium mb-1">{advisor.title}</p>
                    <p className="text-gray-400 text-sm">{advisor.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {advisor.bio}
                </p>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    Chapter Representative
                  </div>
                  <a
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-zeta-gold hover:text-white transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board Info */}
        <div className="mt-16 text-center">
          <div className="bg-zeta-black/50 border border-zeta-gold/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-cinzel font-bold text-zeta-gold mb-4">
              Advisory Excellence
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our Alumni Advisors bring decades of professional experience and unwavering dedication to Zeta Psi. 
              They work closely with the Executive Team to ensure our chapter maintains the highest standards of 
              brotherhood, scholarship, and service that have defined Eta Chapter since 1889.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 