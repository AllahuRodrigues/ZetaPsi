'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import History from '@/components/History'
import SummerHousing from '@/components/SummerHousing'
import Brothers from '@/components/Brothers'
import AlumniAdvisors from '@/components/AlumniAdvisors'
import Donations from '@/components/Donations'
import Contact from '@/components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo pulse animation on load
      gsap.fromTo('.logo-pulse', 
        { scale: 0.8 }, 
        { 
          scale: 1, 
          duration: 1.5, 
          ease: 'elastic.out(1, 0.3)' 
        }
      )

      // Section headers slide in animation
      gsap.utils.toArray('.section-header').forEach((header: any) => {
        gsap.fromTo(header, 
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 80%',
              end: 'bottom 20%',
            }
          }
        )
      })

      // Fade in paragraphs
      gsap.utils.toArray('.fade-in-paragraph').forEach((paragraph: any, index: number) => {
        gsap.fromTo(paragraph,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'top 85%',
              end: 'bottom 20%',
            }
          }
        )
      })

    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="relative">
      <Navigation />
      <Hero />
      <History />
      <SummerHousing />
      <Brothers />
      <AlumniAdvisors />
      <Donations />
      <Contact />
    </main>
  )
} 