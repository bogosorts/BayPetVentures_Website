import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petBreed: '',
    experience: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Form submitted:', formState)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl" />
      
      {/* Paw Print Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-white text-6xl">🐾</div>
        <div className="absolute top-40 right-40 text-white text-4xl">🐾</div>
        <div className="absolute bottom-32 left-1/3 text-white text-5xl">🐾</div>
        <div className="absolute bottom-20 right-20 text-white text-4xl">🐾</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="text-white">
            <span className="inline-block text-forest-200 font-semibold text-sm uppercase tracking-wider mb-4">
              Book an Adventure
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Give Your Pup the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-300 to-sunset-400">
                Best Day Ever?
              </span>
            </h2>
            <p className="text-lg text-forest-100 leading-relaxed mb-8">
              Fill out the form and we'll get back to you within 24 hours with personalized adventure recommendations for your furry friend.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+14155551234" className="flex items-center gap-4 text-forest-100 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-forest-200">Call us</p>
                  <p className="font-semibold">(415) 555-1234</p>
                </div>
              </a>
              <a href="mailto:hello@petventure.com" className="flex items-center gap-4 text-forest-100 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-forest-200">Email us</p>
                  <p className="font-semibold">hello@petventure.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-forest-100">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-forest-200">Service Area</p>
                  <p className="font-semibold">San Francisco Bay Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-sand-900 mb-2">Woof! We Got It!</h3>
                <p className="text-sand-600">We'll be in touch within 24 hours to plan your pup's adventure.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-heading text-2xl font-bold text-sand-900 mb-6">
                  Tell Us About Your Pup
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sand-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sand-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium text-sand-700 mb-2">
                      Pet's Name
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      value={formState.petName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all"
                      placeholder="Cooper"
                    />
                  </div>
                  <div>
                    <label htmlFor="petBreed" className="block text-sm font-medium text-sand-700 mb-2">
                      Breed
                    </label>
                    <input
                      type="text"
                      id="petBreed"
                      name="petBreed"
                      value={formState.petBreed}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all"
                      placeholder="Golden Retriever"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-sand-700 mb-2">
                    Interested In
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formState.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select an experience...</option>
                    <option value="beach">Beach Day Bliss</option>
                    <option value="national-park">National Park Trek</option>
                    <option value="mountain">Mountain Explorer</option>
                    <option value="wine-country">Wine Country Wander</option>
                    <option value="redwoods">Redwood Ramble</option>
                    <option value="city">City Parks Tour</option>
                    <option value="overnight">Overnight Adventure</option>
                    <option value="custom">Custom Adventure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sand-700 mb-2">
                    Tell Us More
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all resize-none"
                    placeholder="Any special needs, preferred dates, or questions?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sunset-500 to-sunset-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-sunset-500/30 hover:shadow-sunset-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  Let's Plan an Adventure
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

