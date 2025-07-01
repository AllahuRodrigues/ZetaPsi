export const CHAPTER_INFO = {
  name: 'Eta Chapter',
  university: 'Yale University',
  founded: 1889,
  address: {
    street: '29 Whalley Avenue',
    city: 'New Haven',
    state: 'CT',
    zip: '06511'
  },
  contact: {
    email: 'zetapsi.eta@yale.edu',
    phone: '(203) 432-0000'
  },
  social: {
    instagram: '#',
    facebook: '#',
    twitter: '#'
  }
} as const

export const COLORS = {
  zetaGold: '#f4b428',
  zetaBlack: '#0a0a0a',
  zetaGray1: '#1a1a1a',
  zetaGray2: '#2a2a2a'
} as const

export const RUSH_EVENTS = [
  'Zeta Bull Night',
  'Zeta Jungle Jam',
  'Zeta Band Darty',
  'Zeta Back to School'
] as const

export const NAVIGATION_SECTIONS = [
  { id: 'home', label: 'Home', primary: true },
  { id: 'brothers', label: 'Brothers', primary: true },
  { id: 'contact', label: 'Contact', primary: true },
  { id: 'history', label: 'History', primary: false },
  { id: 'summer-housing', label: 'Summer Housing', primary: false },
  { id: 'alumni', label: 'Alumni', primary: false },
  { id: 'exec-team', label: 'Exec Team', primary: false },
  { id: 'donations', label: 'Donations', primary: false }
] as const 