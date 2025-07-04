'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const advisors = [
  { name: 'Sam Tuckerman', image: '/images/sam-tuckerman.png' },
  { name: 'Jack Westafer', image: '/images/jack-westafer.png' }
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
        <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="heading-gradient">Alumni Advisors</span>
        </h2>

        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="advisor-card text-center"
              >
                <div>
                  <div className="mx-auto mb-4 w-28 h-28 relative rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{advisor.name}</h3>
                  <p className="text-zeta-gold text-sm">Alumn</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 