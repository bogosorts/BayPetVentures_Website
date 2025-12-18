export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-sand-200 bg-sand-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-sand-900">Pet Outings</p>
            <p className="mt-1 text-sm text-sand-600">Dog adventures in San Jose.</p>
          </div>

          <div className="text-sm text-sand-600">
            <a className="hover:text-sand-900 transition-colors" href="tel:+14085550199">
              (408) 555-0199
            </a>
            <span className="mx-2 text-sand-300">|</span>
            <a className="hover:text-sand-900 transition-colors" href="mailto:hello@petventure.com">
              hello@petventure.com
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-sand-500">© {currentYear} Pet Outings</p>
      </div>
    </footer>
  )
}
