export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <img 
              src="/petLogo.svg" 
              alt="Bay Pet Ventures Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="font-heading text-lg font-bold text-sand-900">
              Bay <span className="text-forest-600">Pet Ventures</span>
            </span>
          </a>
          <a
            href="sms:+16504190278?body=BEACH"
            className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-forest-900 font-heading font-bold text-sm sm:text-base py-2 px-4 sm:px-6 rounded-full shadow-lg transform hover:scale-105 duration-200 whitespace-nowrap"
          >
            Text "BEACH" to (650) 419-0278
          </a>
        </div>
      </nav>
    </header>
  )
}
