'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

interface Brother {
  id: string
  name: string
  classYear: string
  role?: string
  image: string
  funFact: string
}

const brothers: Brother[] = [
  { id: '1', name: 'Melik Williams', classYear: '\'25', role: 'President', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', funFact: 'Led the chapter to record-breaking philanthropy goals' },
  { id: '2', name: 'Yassin Mabizari', classYear: '\'25', role: 'Vice President', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face', funFact: 'Speaks four languages fluently' },
  { id: '3', name: 'Cooper Austin', classYear: '\'26', role: 'Treasurer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', funFact: 'Economics major with a passion for sustainable investing' },
  { id: '4', name: 'Allah-u-Abha Rodrigues', classYear: '\'26', role: 'Secretary', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face', funFact: 'Computer Science major building the next big app' },
  { id: '5', name: 'Donovan McKoy', classYear: '\'25', role: 'Social Chair', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face', funFact: 'Organized the legendary Zeta Jungle Jam' },
  { id: '6', name: 'Nolan Recker', classYear: '\'25', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face', funFact: 'Pre-med student and varsity athlete' },
  { id: '7', name: 'Scott Truninger', classYear: '\'24', image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face', funFact: 'Philosophy major writing his senior thesis on ethics' },
  { id: '8', name: 'Derek Denehy', classYear: '\'26', image: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=300&h=300&fit=crop&crop=face', funFact: 'Engineering student and robotics team captain' },
  { id: '9', name: 'Zach Scullin', classYear: '\'25', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=300&h=300&fit=crop&crop=face', funFact: 'History major and debate team champion' },
  { id: '10', name: 'Nick Conforti', classYear: '\'24', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face', funFact: 'Environmental Studies major passionate about climate action' },
  { id: '11', name: 'Aiden Stephens', classYear: '\'26', image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=300&h=300&fit=crop&crop=face', funFact: 'Music major and jazz pianist' },
  { id: '12', name: 'Cam Price', classYear: '\'25', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face', funFact: 'Psychology major researching cognitive behavior' },
]

export default function Brothers() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Stagger animation for brother cards
    gsap.fromTo('.brother-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.brothers-grid',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    )
  }, [])

  const handleCardHover = (brotherId: string, isHovered: boolean) => {
    if (isHovered) {
      setFlippedCards(prev => new Set([...prev, brotherId]))
      // GSAP flip animation
      gsap.to(`#brother-${brotherId} .brother-image`, {
        rotationY: 180,
        duration: 0.6,
        ease: 'power2.out'
      })
      gsap.to(`#brother-${brotherId} .brother-fact`, {
        rotationY: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.3
      })
    } else {
      setFlippedCards(prev => {
        const newSet = new Set(prev)
        newSet.delete(brotherId)
        return newSet
      })
      // GSAP flip back animation
      gsap.to(`#brother-${brotherId} .brother-image`, {
        rotationY: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      gsap.to(`#brother-${brotherId} .brother-fact`, {
        rotationY: -180,
        duration: 0.6,
        ease: 'power2.out'
      })
    }
  }

  return (
    <section id="brothers" className="py-20 bg-zeta-gray-1">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Our Brothers</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the exceptional men who make up the Eta Chapter of Zeta Psi at Yale University
          </p>
        </div>

        {/* Featured Brothers Group Photo */}
        <div className="mb-16 relative">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/brothers-zeta-sign-horizontal-picture.png"
              alt="Zeta Psi Brothers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                Brotherhood Beyond Yale
              </h3>
              <p className="text-white/90">
                United in excellence, bound by tradition
              </p>
            </div>
          </div>
        </div>

        {/* Brothers Grid */}
        <div className="brothers-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {brothers.map((brother) => (
            <div
              key={brother.id}
              id={`brother-${brother.id}`}
              className="brother-card group cursor-pointer"
              onMouseEnter={() => handleCardHover(brother.id, true)}
              onMouseLeave={() => handleCardHover(brother.id, false)}
            >
              <div className="relative">
                {/* Profile Image */}
                <div className="brother-image relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transform-gpu preserve-3d">
                  <Image
                    src={brother.image}
                    alt={brother.name}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="160px"
                  />
                </div>

                {/* Fun Fact Overlay */}
                <div className="brother-fact absolute inset-0 w-40 h-40 mx-auto mb-4 rounded-full bg-zeta-gold/90 flex items-center justify-center p-4 transform-gpu preserve-3d rotateY-180">
                  <p className="text-zeta-black text-sm font-medium text-center leading-tight">
                    {brother.funFact}
                  </p>
                </div>
              </div>

              {/* Brother Info */}
              <div className="text-center">
                <h3 className="font-semibold text-white text-sm mb-1">
                  {brother.name}
                </h3>
                <p className="text-gray-400 text-xs mb-1">
                  {brother.classYear}
                </p>
                {brother.role && (
                  <p className="text-zeta-gold text-xs font-medium">
                    {brother.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in joining our brotherhood?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-zeta-gold text-zeta-black font-semibold rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300"
          >
            Learn About Rush
          </button>
        </div>
      </div>
    </section>
  )
} 