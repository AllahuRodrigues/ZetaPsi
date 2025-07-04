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
}

const placeholder = '/images/logo.png'

const brothers: Brother[] = [
  { id: '1', name: 'Melik Williams', classYear: '\'25', role: 'President', image: '/images/melik.png' },
  { id: '2', name: 'Yassin Mabizari', classYear: '\'25', role: 'Vice President', image: '/images/yassin.png' },
  { id: '3', name: 'Cooper Austin', classYear: '\'26', role: 'Treasurer', image: '/images/cooper.png' },
  { id: '4', name: 'Allah-u-Abha Rodrigues', classYear: '\'26', role: 'Secretary', image: '/images/rodrigues.png' },
  { id: '5', name: 'Donovan McKoy', classYear: '\'25', role: 'Social Chair', image: '/images/donavan.png' },
  { id: '6', name: 'Nolan Recker', classYear: '\'25', image: '/images/nolan.png' },
  { id: '7', name: 'Scott Truninger', classYear: '\'24', image: '/images/scott-trun.png' },
  { id: '8', name: 'Derek Denehy', classYear: '\'26', image: '/images/derek.png' },
  { id: '9', name: 'Zach Scullin', classYear: '\'25', image: '/images/zach-scullin.png' },
  { id: '10', name: 'Nick Conforti', classYear: '\'24', image: '/images/nick-conforti.png' },
  { id: '11', name: 'Aiden Stephens', classYear: '\'26', image: '/images/aidan.png' },
  { id: '12', name: 'Cam Price', classYear: '\'25', image: '/images/cam-price.png' },
  { id: '13', name: 'Brogan McCaughey', classYear: '\'25', image: '/images/brogan.png' },
  { id: '14', name: 'Nico Brown', classYear: '\'26', image: '/images/nico-brown.png' },
  { id: '15', name: 'Wale Fadeyibi', classYear: '\'25', image: '/images/wale.png' },
  { id: '16', name: 'Avery Misner', classYear: '\'26', image: '/images/avery.png' },
  { id: '17', name: 'John Kemp', classYear: '\'24', image: '/images/john-kemp.png' },
  { id: '18', name: 'Brice June', classYear: '\'25', image: '/images/brice.png' },
  { id: '19', name: 'Matthew Jordan', classYear: '\'26', image: '/images/matthew-jordan.png' },
  { id: '20', name: 'Samir Batheja', classYear: '\'25', image: '/images/samir.png' },
  { id: '21', name: 'Walter Royal', classYear: '\'24', image: '/images/walter.png' },
  { id: '22', name: 'Orion Browne', classYear: '\'25', image: '/images/orion-browne.png' },
  { id: '23', name: 'Zavier Averra', classYear: '\'26', image: '/images/zavier.png' },
  { id: '24', name: 'Trent Page', classYear: '\'25', image: '/images/trent.png' },
  { id: '25', name: 'Jackson St. Aubyn', classYear: '\'24', image: '/images/jackson.png' },
  { id: '26', name: 'Samuel McGivern', classYear: '\'26', image: '/images/sam-mcgivern.png' },
  { id: '27', name: 'Quinton Lewis', classYear: '\'25', image: '/images/quinton.png' },
]

export default function Brothers() {
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

    // Tilt animation on hover
    const cards = gsap.utils.toArray('.brother-card')

    cards.forEach((card: any) => {
      const tl = gsap.timeline({ paused: true })

      tl.to(card, {
        rotateX: 4,
        rotateY: -4,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 800,
      })

      card.addEventListener('mouseenter', () => tl.play())
      card.addEventListener('mouseleave', () => tl.reverse())
    })
  }, [])

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
                Brotherhood
              </h3>
              <p className="text-white/90">
                Bound by tradition
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
            >
              <div className="relative">
                <div className="brother-image relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={brother.image}
                    alt={brother.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
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