'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export default function Hero() {
  useEffect(() => {
    // Hero content animation
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.fromTo('.hero-crest', 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    )
    .fromTo('.hero-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.hero-subtitle',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.1'
    )
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/zeta-psi-house-home.png"
          alt="Zeta Psi House at Yale"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto section-padding">
        {/* Chapter Crest */}
        <div className="hero-crest mb-8">
          <Image
            src="/images/logo.png"
            alt="Zeta Psi Eta Chapter Crest"
            width={100}
            height={100}
            className="w-30 h-30 mx-auto"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="hero-title font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="heading-gradient">Eta Chapter</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle font-cinzel text-xl md:text-2xl lg:text-3xl text-white/90 mb-8">
          Yale University
        </p>

        {/* Call to Action */}
        <div className="hero-cta">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-zeta-gold text-zeta-black font-semibold text-lg rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Rush ΖΨ
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
} 