import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Experiences', href: isHomePage ? '#experiences' : '/#experiences' },
    { name: 'Pricing', href: isHomePage ? '#pricing' : '/#pricing' },
    { name: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand-50/95 backdrop-blur-sm border-b border-sand-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6.5 4.5 6.5 7c0 1.5.5 2.5 1.5 3.5-2 1-3.5 3-3.5 5.5 0 3 2.5 6 7.5 6s7.5-3 7.5-6c0-2.5-1.5-4.5-3.5-5.5 1-.5 1.5-2 1.5-3.5 0-2.5-2-5-5.5-5zM9 6.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5S9 7.3 9 6.5zm3 1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"/>
              </svg>
            </div>
            <span className="font-heading text-xl font-bold text-forest-700">
              Pet<span className="text-sunset-500">Venture</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sand-700 hover:text-forest-600 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-forest-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset-500 to-sunset-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-sunset-500/25 hover:shadow-sunset-500/40 hover:scale-105 transition-all"
            >
              Book Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-sand-700 hover:text-forest-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-sand-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sand-700 hover:text-forest-600 font-medium transition-colors px-2 py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sunset-500 to-sunset-600 text-white px-6 py-2.5 rounded-full font-semibold mt-2"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
