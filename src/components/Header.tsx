export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200">
      <nav className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold text-sand-900">
              Pet <span className="text-forest-600">Outings</span>
            </span>
          </a>
        </div>
      </nav>
    </header>
  )
}
