import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/petLogo.svg" 
              alt="Bay Pet Ventures Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="font-heading text-lg font-bold text-sand-900">
              Bay <span className="text-forest-600">Pet Ventures</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-lg font-medium text-sand-700 hover:text-forest-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-lg font-medium text-sand-700 hover:text-forest-600 transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-lg font-medium text-sand-700 hover:text-forest-600 transition-colors">
              Services
            </Link>
            <Link to="/faq" className="text-lg font-medium text-sand-700 hover:text-forest-600 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-lg font-medium text-sand-700 hover:text-forest-600 transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-sand-700 hover:text-forest-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            
            {/* Text Button - Hidden on very small screens, shown on larger mobile */}
            <a
              href="sms:+16504190278?body=BEACH"
              className="hidden sm:inline-block bg-yellow-400 hover:bg-yellow-300 transition-colors text-forest-900 font-heading font-bold text-sm sm:text-base py-2 px-4 sm:px-6 rounded-full shadow-lg transform hover:scale-105 duration-200 whitespace-nowrap"
            >
              Text "BEACH"
            </a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-sand-200 bg-white">
            <div className="flex flex-col py-4 space-y-3">
              <Link 
                to="/" 
                className="px-4 py-2 text-base font-medium text-sand-700 hover:text-forest-600 hover:bg-sand-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-base font-medium text-sand-700 hover:text-forest-600 hover:bg-sand-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-2 text-base font-medium text-sand-700 hover:text-forest-600 hover:bg-sand-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/faq" 
                className="px-4 py-2 text-base font-medium text-sand-700 hover:text-forest-600 hover:bg-sand-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-base font-medium text-sand-700 hover:text-forest-600 hover:bg-sand-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="sms:+16504190278?body=BEACH"
                className="mx-4 mt-2 bg-yellow-400 hover:bg-yellow-300 transition-colors text-forest-900 font-heading font-bold text-base py-3 px-6 rounded-full shadow-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Text "BEACH" to (650) 419-0278
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
