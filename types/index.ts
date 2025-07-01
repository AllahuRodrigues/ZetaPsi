export interface Brother {
  id: string
  name: string
  classYear: string
  role?: string
  image: string
  funFact: string
  major?: string
  hometown?: string
}

export interface Executive {
  name: string
  position: string
  classYear: string
  image: string
  bio: string
  email?: string
}

export interface Alumni {
  name: string
  role: string
  company: string
  logo: string
  classYear?: string
  position?: string
}

export interface Event {
  id: string
  name: string
  date: Date
  description: string
  image?: string
  location?: string
}

export interface ContactForm {
  name: string
  email: string
  affiliation: string[]
  message: string
}

export interface DonationTier {
  name: string
  amount: number
  benefits: string[]
  icon: React.ReactNode
}

export interface HousingInfo {
  location: string
  amenities: string[]
  pricing: {
    single: number
    double: number
  }
  timeline: {
    applicationOpen: string
    priorityDeadline: string
    finalDeadline: string
    sessionStart: string
    sessionEnd: string
  }
  rules: string[]
  parking: string
} 