export default function HomePage() {
  return (
    <div id="top" className="pt-20">
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="mb-8 overflow-hidden rounded-2xl border border-sand-200 bg-sand-50">
            <img
              src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Happy dog outdoors"
              className="h-56 w-full object-cover sm:h-72"
              loading="eager"
              decoding="async"
            />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-sand-900 leading-tight">
            Dog Adventures in <span className="text-forest-600">San Jose</span>
          </h1>
          <p className="mt-5 text-lg text-sand-700">
            Door-to-door pickup → outdoor adventure → drop-off.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t border-sand-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Contact</h2>
          <p className="mt-3 text-sand-600">
            Text or call with your neighborhood, your dog’s name/breed, and preferred days/times.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:+19198093632"
              className="rounded-2xl border border-sand-200 p-5 hover:bg-sand-50 transition-colors"
            >
              <p className="text-sm text-sand-500">Phone</p>
              <p className="mt-1 font-semibold text-sand-900">(919) 809-3632</p>
            </a>
            <a
              href="charles@petoutings.com"
              className="rounded-2xl border border-sand-200 p-5 hover:bg-sand-50 transition-colors"
            >
              <p className="text-sm text-sand-500">Email</p>
              <p className="mt-1 font-semibold text-sand-900">charles@petoutings.com</p>
            </a>
          </div>

          <p className="mt-8 text-xs text-sand-500">
            Limited openings to maintain individualized attention and consistent scheduling.
          </p>
        </div>
      </section>
    </div>
  )
}
