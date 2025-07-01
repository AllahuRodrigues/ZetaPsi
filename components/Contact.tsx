'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Label from '@radix-ui/react-label'

interface FormData {
  name: string
  email: string
  affiliation: string[]
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    affiliation: [],
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAffiliationChange = (value: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        affiliation: [...prev.affiliation, value]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        affiliation: prev.affiliation.filter(item => item !== value)
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)

    // GSAP checkmark animation
    gsap.fromTo('.success-checkmark',
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' }
    )

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', affiliation: [], message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-zeta-gray-1">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to join our brotherhood or have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            <div className="mb-8">
              <h3 className="font-cinzel text-2xl font-bold mb-6">Visit Our House</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-zeta-gold flex-shrink-0" />
                  <div>
                    <div className="font-semibold">29 Whalley Avenue</div>
                    <div className="text-gray-300">New Haven, CT 06511</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-zeta-gold flex-shrink-0" />
                  <div>
                    <div className="font-semibold">zetapsi.eta@yale.edu</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-zeta-gold flex-shrink-0" />
                  <div>
                    <div className="font-semibold">(203) 432-0000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="h-80 bg-zeta-black rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.2134896530503!2d-72.9311196!3d41.3084396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9b1e85e34b5%3A0x4b5f5a8b9c6d7e8f!2s29%20Whalley%20Ave%2C%20New%20Haven%2C%20CT%2006511!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zeta-black p-8 rounded-lg">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label.Root htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </Label.Root>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-zeta-gray-1 border border-zeta-gray-2 rounded-lg text-white focus:border-zeta-gold focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label.Root htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </Label.Root>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-zeta-gray-1 border border-zeta-gray-2 rounded-lg text-white focus:border-zeta-gold focus:outline-none"
                    placeholder="your.email@yale.edu"
                  />
                </div>

                <div>
                  <Label.Root className="block text-sm font-medium text-gray-300 mb-3">
                    Affiliation
                  </Label.Root>
                  <div className="space-y-3">
                    {['Prospective rushee', 'Summer tenant', 'Alumni', 'Other'].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox.Root
                          id={option}
                          checked={formData.affiliation.includes(option)}
                          onCheckedChange={(checked) => handleAffiliationChange(option, checked as boolean)}
                          className="w-5 h-5 bg-zeta-gray-1 border border-zeta-gray-2 rounded data-[state=checked]:bg-zeta-gold data-[state=checked]:border-zeta-gold flex items-center justify-center"
                        >
                          <Checkbox.Indicator>
                            <CheckCircle className="w-3 h-3 text-zeta-black" />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <Label.Root htmlFor={option} className="text-gray-300 cursor-pointer">
                          {option}
                        </Label.Root>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label.Root htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </Label.Root>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-zeta-gray-1 border border-zeta-gray-2 rounded-lg text-white focus:border-zeta-gold focus:outline-none resize-none"
                    placeholder="Tell us about yourself and your interest in Zeta Psi..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zeta-gold text-zeta-black font-semibold py-4 rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-colors"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-zeta-black/30 border-t-zeta-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="success-checkmark mb-4">
                  <CheckCircle className="w-16 h-16 text-zeta-gold mx-auto" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Rush Information */}
        <div className="mt-16 bg-zeta-gold/10 border border-zeta-gold/20 rounded-lg p-8 text-center">
          <h3 className="font-cinzel text-2xl font-bold text-zeta-gold mb-4">
            Rush 2025-2026
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">Fall Rush</h4>
              <p className="text-gray-300">Starting October 2025</p>
              <p className="text-gray-300">Events: Zeta Bull Night, Zeta Back to School</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Winter Rush</h4>
              <p className="text-gray-300">Starting December 2025</p>
              <p className="text-gray-300">Events: Zeta Jungle Jam, Zeta Band Darty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 