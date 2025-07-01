import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Brothers', href: '#brothers' },
    { name: 'History', href: '#history' },
    { name: 'Summer Housing', href: '#summer-housing' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-zeta-black border-t border-zeta-gold">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-zeta-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-zeta-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-zeta-gold mb-4">
              Address
            </h3>
            <div className="text-gray-300 space-y-1">
              <p>Zeta Psi Eta Chapter</p>
              <p>29 Whalley Avenue</p>
              <p>New Haven, CT 06511</p>
              <p className="mt-3">
                <a 
                  href="mailto:zetapsi.eta@yale.edu"
                  className="hover:text-zeta-gold transition-colors"
                >
                  zetapsi.eta@yale.edu
                </a>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-zeta-gold mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-zeta-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-zeta-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-zeta-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zeta-gray-1 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zeta Psi Eta Chapter · Designed by the Brothers
          </p>
        </div>
      </div>
    </footer>
  )
}