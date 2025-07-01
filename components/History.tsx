'use client'

import Image from 'next/image'

export default function History() {
  return (
    <section id="history" className="py-20 bg-zeta-gray-1">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3">
            <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold mb-8">
              <span className="heading-gradient">Our Legacy</span>
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="fade-in-paragraph text-lg leading-relaxed">
                <span className="text-zeta-gold font-semibold">1864 – 1914: Breaking New Ground</span><br />
                Zeta Psi was the first fraternity to establish a chapter west of the Mississippi, pioneering Greek life across America with a spirit of brotherhood that transcended geographical boundaries.
              </p>
              
              <p className="fade-in-paragraph text-lg leading-relaxed">
                The founding of <span className="text-zeta-gold font-semibold">Eta at Yale in 1889</span> marked a historic moment, briefly making ΖΨ the only fraternity with chapters at all eight Ivy League schools. This achievement reflected our commitment to academic excellence and leadership development.
              </p>
              
              <p className="fade-in-paragraph text-lg leading-relaxed">
                <span className="text-zeta-gold font-semibold">1974 – 1976: Resilience and Renewal</span><br />
                After a brief closure in 1974, the Eta Chapter demonstrated the true Zeta Psi spirit by reopening in 1976, stronger than ever and ready to continue our tradition of excellence at Yale.
              </p>
              
              <p className="fade-in-paragraph text-lg leading-relaxed">
                Today, we continue to uphold the values that have defined us for over a century: scholarship, fellowship, and service to our community and beyond.
              </p>
            </div>
          </div>

          {/* Image - 40% */}
          <div className="lg:col-span-2 relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/zeta-second-house-ever.png"
                alt="Historic Zeta Psi Chapter House at Yale"
                fill
                className="object-cover parallax-image"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-zeta-gold text-zeta-black px-4 py-2 rounded-lg font-semibold">
              Est. 1889
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 