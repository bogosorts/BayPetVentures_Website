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
          <p className="mt-3 text-sand-600">
            We intentionally keep outings small for individualized attention — typically <strong className="text-sand-800">1–2 dogs per trip</strong>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-forest-600 px-5 py-3 font-semibold text-white hover:bg-forest-700 transition-colors"
            >
              Text / Call for availability
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-xl border border-sand-200 px-5 py-3 font-semibold text-sand-700 hover:bg-sand-50 transition-colors"
            >
              How it works
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-sand-200 bg-sand-50 p-5">
            <p className="font-semibold text-sand-900">A good fit if your dog is:</p>
            <ul className="mt-3 space-y-2 text-sand-700">
              <li>• Friendly with people</li>
              <li>• Comfortable riding in a car</li>
              <li>• Up to date on core vaccines (share vaccination status)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-sand-50 border-t border-sand-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">How it works</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white border border-sand-200 p-5">
              <p className="font-semibold text-sand-900">1) Pickup</p>
              <p className="mt-2 text-sm text-sand-600">From your home in San Jose / South Bay.</p>
            </div>
            <div className="rounded-2xl bg-white border border-sand-200 p-5">
              <p className="font-semibold text-sand-900">2) Adventure</p>
              <p className="mt-2 text-sm text-sand-600">Park time, sniffing, walking, and play — tailored to your dog.</p>
            </div>
            <div className="rounded-2xl bg-white border border-sand-200 p-5">
              <p className="font-semibold text-sand-900">3) Drop-off</p>
              <p className="mt-2 text-sm text-sand-600">Back home when we’re done.</p>
            </div>
          </div>
          <p className="mt-6 text-sand-600">
            Focused on the essentials: safe transport, a great outing, and a happy dog.
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
              href="tel:+14085550199"
              className="rounded-2xl border border-sand-200 p-5 hover:bg-sand-50 transition-colors"
            >
              <p className="text-sm text-sand-500">Phone</p>
              <p className="mt-1 font-semibold text-sand-900">(408) 555-0199</p>
            </a>
            <a
              href="mailto:hello@petventure.com"
              className="rounded-2xl border border-sand-200 p-5 hover:bg-sand-50 transition-colors"
            >
              <p className="text-sm text-sand-500">Email</p>
              <p className="mt-1 font-semibold text-sand-900">hello@petventure.com</p>
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
