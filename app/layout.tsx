import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zeta Psi Eta Chapter - Yale University',
  description: 'Official website of the Eta Chapter of Zeta Psi Fraternity at Yale University. Founded in 1889.',
  keywords: 'Zeta Psi, Eta Chapter, Yale University, Fraternity, Greek Life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-inter bg-zeta-black text-white antialiased">
        {children}
      </body>
    </html>
  )
} 