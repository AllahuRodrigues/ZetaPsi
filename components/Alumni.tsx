'use client'

import Image from 'next/image'

const distinguished = [
  { name: 'Ben Finkel', image: '/images/ben-finkel.png' },
  { name: 'Wande Owens', image: '/images/wande.png' },
  { name: 'Kiran Amegadjie', image: '/images/kiran.png' },
  { name: 'Jason Lee', image: '/images/jason-lee.png' },
  { name: 'Anthony Andrews II', image: '/images/anthony.png' },
]

export default function Alumni() {
  return (
    <section id="alumni" className="py-20 bg-zeta-black">
      <div className="container-max section-padding">
        <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="heading-gradient">Distinguished Alumni</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {distinguished.map((alumn) => (
            <div key={alumn.name} className="text-center">
              <div className="mx-auto mb-4 w-32 h-32 relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src={alumn.image}
                  alt={alumn.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{alumn.name}</h3>
              <p className="text-zeta-gold text-sm">Alumn</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 