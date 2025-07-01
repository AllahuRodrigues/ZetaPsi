'use client'

import { useState } from 'react'
import { DollarSign, Heart, Users, GraduationCap } from 'lucide-react'

const donationTiers = [
  {
    name: 'Pledge',
    amount: 50,
    benefits: ['Newsletter subscription', 'Alumni directory access'],
    icon: <Heart className="w-6 h-6" />
  },
  {
    name: 'Brother',
    amount: 150,
    benefits: ['All Pledge benefits', 'Homecoming event invitation', 'Chapter updates'],
    icon: <Users className="w-6 h-6" />
  },
  {
    name: 'Alumni Leader',
    amount: 500,
    benefits: ['All Brother benefits', 'VIP event access', 'Recognition plaque'],
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    name: 'Legacy Donor',
    amount: 1000,
    benefits: ['All previous benefits', 'Annual dinner invitation', 'Named recognition'],
    icon: <DollarSign className="w-6 h-6" />
  }
]

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState(150)
  const [customAmount, setCustomAmount] = useState('')

  const handleDonation = () => {
    const amount = customAmount || selectedAmount
    // Here you would integrate with a payment processor like Stripe
    alert(`Thank you for your donation of $${amount}!`)
  }

  return (
    <section id="donations" className="py-20 bg-zeta-black">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="section-header font-cinzel text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Support Our Chapter</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your generous contributions help us maintain our house, support brothers, and continue our tradition of excellence at Yale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Donation Impact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-zeta-gray-1 rounded-lg">
              <div className="text-3xl font-bold text-zeta-gold mb-2">$2.1M</div>
              <div className="text-gray-300">Raised This Year</div>
            </div>
            <div className="text-center p-6 bg-zeta-gray-1 rounded-lg">
              <div className="text-3xl font-bold text-zeta-gold mb-2">450+</div>
              <div className="text-gray-300">Active Donors</div>
            </div>
            <div className="text-center p-6 bg-zeta-gray-1 rounded-lg">
              <div className="text-3xl font-bold text-zeta-gold mb-2">25</div>
              <div className="text-gray-300">Scholarships Awarded</div>
            </div>
          </div>

          {/* Donation Tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedAmount === tier.amount
                    ? 'border-zeta-gold bg-zeta-gold/10'
                    : 'border-zeta-gray-1 bg-zeta-gray-1 hover:border-zeta-gold/50'
                }`}
                onClick={() => {
                  setSelectedAmount(tier.amount)
                  setCustomAmount('')
                }}
              >
                <div className="text-zeta-gold mb-4">{tier.icon}</div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-2xl font-bold text-zeta-gold mb-4">
                  ${tier.amount}
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-zeta-gold mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Donation Form */}
          <div className="bg-zeta-gray-1 p-8 rounded-lg">
            <h3 className="font-cinzel text-2xl font-bold text-center mb-6">
              Make Your Donation
            </h3>
            
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Donation Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={customAmount || selectedAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(0)
                    }}
                    className="w-full pl-10 pr-4 py-3 bg-zeta-black border border-zeta-gray-2 rounded-lg text-white focus:border-zeta-gold focus:outline-none"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <button
                onClick={handleDonation}
                className="w-full bg-zeta-gold text-zeta-black font-semibold py-4 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Donate Now
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Donations are tax-deductible. You will receive a receipt via email.
              </p>
            </div>
          </div>

          {/* What Your Donation Supports */}
          <div className="mt-12 text-center">
            <h3 className="font-cinzel text-2xl font-bold mb-6">
              <span className="heading-gradient">Where Your Money Goes</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-zeta-gold font-bold text-lg mb-2">40%</div>
                <div className="text-gray-300">House Maintenance & Improvements</div>
              </div>
              <div>
                <div className="text-zeta-gold font-bold text-lg mb-2">35%</div>
                <div className="text-gray-300">Brother Scholarships & Support</div>
              </div>
              <div>
                <div className="text-zeta-gold font-bold text-lg mb-2">25%</div>
                <div className="text-gray-300">Events & Programming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 