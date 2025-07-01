# Zeta Psi Eta Chapter Website

A modern, dark-themed website for the Eta Chapter of Zeta Psi Fraternity at Yale University.

## Features

- **Single-page application** with smooth scrolling navigation
- **Dark theme** with gold accents (#f4b428)
- **GSAP animations** for engaging user interactions
- **Responsive design** optimized for all devices
- **TypeScript** for type safety
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Radix UI** components for accessibility

## Sections

1. **Hero** - Full-viewport video background with chapter crest
2. **History** - Two-column layout with parallax image
3. **Summer Housing** - Tabbed gallery with accordion info cards
4. **Brothers** - Masonry grid with flip animations
5. **Alumni** - Scrolling marquee of company logos
6. **Executive Team** - Leadership cards with hover effects
7. **Donations** - Multi-tier donation system
8. **Contact** - Split-screen form with embedded map

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP 3** - Professional-grade animations
- **Radix UI** - Accessible component primitives
- **Google Fonts** - Cinzel (headings) & Inter (body)

## Project Structure 

## Customization

### Colors
The main brand colors are defined in `tailwind.config.js`:
- Gold: `#f4b428`
- Black: `#0a0a0a`
- Gray variants: `#1a1a1a`, `#2a2a2a`

### Animations
GSAP animations are configured in individual components and can be customized in:
- Logo pulse effect
- Section header slide-ins
- Card hover tilts
- Scroll-triggered reveals

### Content
Update brother information, events, and other content in the respective component files.

## Deployment

The site is optimized for deployment on Vercel, Netlify, or any platform supporting Next.js.

```bash
npm run build
```

## Contact

For questions about the website, contact the chapter at:
- Email: zetapsi.eta@yale.edu
- Address: 29 Whalley Avenue, New Haven, CT 06511

---

*Built with brotherhood. Designed by the Brothers.* 