'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import * as Tabs from '@radix-ui/react-tabs'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown, MapPin, Wifi, Car, Home, Calendar, DollarSign, Shield } from 'lucide-react'

const housingImages = [
  { id: '1', src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Living Room' },
  { id: '2', src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70a5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Kitchen' },
  { id: '3', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Bedroom' },
  { id: '4', src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Study Area' },
]

const accordionData = [
  {
    id: 'location',
    title: 'Location',
    icon: <MapPin className="w-5 h-5" />,
    content: '29 Whalley Avenue, New Haven, CT 06511 - Prime location near Yale campus with easy access to dining, libraries, and campus activities.'
  },
  {
    id: 'amenities',
    title: 'Amenities',
    icon: <Home className="w-5 h-5" />,
    content: 'Fully furnished rooms, high-speed WiFi, laundry facilities, common areas, kitchen access, study spaces, and 24/7 security.'
  },
  {
    id: 'pricing',
    title: 'Pricing',
    icon: <DollarSign className="w-5 h-5" />,
    content: 'Single room: $1,200/month | Double room: $900/month per person | Includes utilities, WiFi, and weekly cleaning service.'
  },
  {
    id: 'timeline',
    title: 'Timeline',
    icon: <Calendar className="w-5 h-5" />,
    content: 'Summer session: June 1 - August 31 | Applications open: March 1 | Priority deadline: April 15 | Final deadline: May 1'
  },
  {
    id: 'rules',
    title: 'House Rules',
    icon: <Shield className="w-5 h-5" />,
    content: 'No smoking, quiet hours 10 PM - 8 AM, guests must be registered, respect common areas, maintain cleanliness, follow Yale policies.'
  },
  {
    id: 'parking',
    title: 'Parking',
    icon: <Car className="w-5 h-5" />,
    content: 'Limited on-site parking available for $150/month. Street parking and nearby lots also available. Bike storage provided free.'
  }
]

export default function SummerHousing() {
  const [activeTab, setActiveTab] = useState('1')
  const [openAccordion, setOpenAccordion] = useState('location')

  useEffect(() => {
    // Tab switching animation
    const handleTabChange = (value: string) => {
      gsap.fromTo('.tab-image', 
        { x: value > activeTab ? 50 : -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
    }

    if (activeTab) {
      handleTabChange(activeTab)
    }
  }, [activeTab])

  return (
    <section id="summer-housing" className="py-20 bg-zeta-black">
      <div className="container-max section-padding">
        <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="heading-gradient">Summer Housing</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Image Gallery - Left 40% */}
          <div className="lg:col-span-2">
            <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
              {/* Tab Content */}
              <Tabs.Content value={activeTab} className="mb-6">
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl tab-image">
                  <Image
                    src={housingImages.find(img => img.id === activeTab)?.src || housingImages[0].src}
                    alt={housingImages.find(img => img.id === activeTab)?.alt || 'Housing'}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </Tabs.Content>

              {/* Tab Triggers */}
              <Tabs.List className="grid grid-cols-4 gap-2">
                {housingImages.map((image) => (
                  <Tabs.Trigger
                    key={image.id}
                    value={image.id}
                    className={`relative h-16 rounded-md overflow-hidden transition-all ${
                      activeTab === image.id ? 'ring-2 ring-zeta-gold' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 10vw"
                    />
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Tabs.Root>
          </div>

          {/* Information Cards - Right 60% */}
          <div className="lg:col-span-3">
            <Accordion.Root type="single" value={openAccordion} onValueChange={setOpenAccordion}>
              <div className="space-y-4">
                {accordionData.map((section) => (
                  <Accordion.Item
                    key={section.id}
                    value={section.id}
                    className="bg-zeta-gray-1 rounded-lg overflow-hidden"
                  >
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-zeta-gray-2 transition-colors group">
                      <div className="flex items-center space-x-3">
                        <div className="text-zeta-gold">{section.icon}</div>
                        <span className="font-semibold text-lg">{section.title}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform" />
                    </Accordion.Trigger>
                    
                    <Accordion.Content className="px-6 pb-6 text-gray-300 leading-relaxed accordion-content">
                      {section.content}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </div>
            </Accordion.Root>

            <div className="mt-8 p-6 bg-zeta-gold/10 border border-zeta-gold/20 rounded-lg">
              <h3 className="font-cinzel text-xl font-semibold text-zeta-gold mb-3">
                Ready to Apply?
              </h3>
              <p className="text-gray-300 mb-4">
                Join us for an unforgettable summer experience at Yale. Applications are now open!
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-zeta-gold text-zeta-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 