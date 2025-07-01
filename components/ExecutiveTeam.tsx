'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const executives = [
  {
    name: 'Melik Williams',
    position: 'President',
    classYear: '\'25',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Leading the chapter with vision and dedication to our brotherhood values.',
  },
  {
    name: 'Yassin Mabizari',
    position: 'Vice President',
    classYear: '\'25',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Supporting our president and managing internal affairs with excellence.',
  },
  {
    name: 'Cooper Austin',
    position: 'Treasurer',
    classYear: '\'26',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Managing our finances and ensuring fiscal responsibility.',
  },
  {
    name: 'Allah-u-Abha Rodrigues',
    position: 'Secretary',
    classYear: '\'26',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face',
    bio: 'Keeping detailed records and maintaining chapter communications.',
  },
  {
    name: 'Donovan McKoy',
    position: 'Social Chair',
    classYear: '\'25',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    bio: 'Organizing legendary events and fostering brotherhood connections.',
  },
  {
    name: 'TBD',
    position: 'Risk Manager',
    classYear: '\'26',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=face',
    bio: 'Ensuring safety and compliance in all chapter activities.',
  },
]

export default function ExecutiveTeam() {
  useEffect(() => {
    // Card hover animations
    const cards = gsap.utils.toArray('.exec-card')
    
    cards.forEach((card: any) => {
      const tl = gsap.timeline({ paused: true })
      
      tl.to(card, {
        y: -10,
        boxShadow: '0 20px 40px rgba(244, 180, 40, 0.3)',
        duration: 0.3,
        ease: 'power2.out'
      })

      card.addEventListener('mouseenter', () => tl.play())
      card.addEventListener('mouseleave', () => tl.reverse())
    })

    // Initial stagger animation
    gsap.fromTo('.exec-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.exec-grid',
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <section id="exec-team" className="py-20 bg-zeta-gray-1">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Executive Team</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the dedicated leaders who guide our chapter forward
          </p>
        </div>

        <div className="exec-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="exec-card bg-zeta-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-cinzel text-xl font-bold text-white mb-1">
                    {exec.name}
                  </h3>
                  <p className="text-zeta-gold font-semibold text-lg mb-1">
                    {exec.position}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Class of {exec.classYear}
                  </p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exec.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 