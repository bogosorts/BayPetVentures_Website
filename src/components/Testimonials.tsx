const testimonials = [
  {
    name: 'Sarah Chen',
    location: 'San Francisco',
    pet: 'Cooper, Golden Retriever',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    petImage: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    quote: 'Cooper comes home absolutely exhausted in the best way possible. The photos they send during the day are the highlight of my workday. Best investment for my pup!',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    location: 'Oakland',
    pet: 'Luna, Border Collie',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    petImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    quote: 'Luna has so much energy and PetVenture is the only service that can truly tire her out. The overnight camping trips are her absolute favorite!',
    rating: 5,
  },
  {
    name: 'Emily Park',
    location: 'Palo Alto',
    pet: 'Mochi, Shiba Inu',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    petImage: 'https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    quote: 'Mochi is picky about other dogs, but the team matched her with the perfect adventure buddies. She actually gets excited when she sees the PetVenture van!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-sand-100 to-sand-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-forest-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Happy Pups & Parents
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-sand-900 mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-500 to-ocean-500">
              Fur Family
            </span>{' '}
            Says
          </h2>
          <p className="text-lg text-sand-600 leading-relaxed">
            Don't just take our word for it — hear from the pups (and their humans) who've experienced the adventure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-sand-200">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-sunset-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sand-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <img
                    src={testimonial.petImage}
                    alt={testimonial.pet}
                    className="w-8 h-8 rounded-full object-cover absolute -bottom-1 -right-1 border-2 border-white"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sand-900">{testimonial.name}</p>
                  <p className="text-sm text-sand-500">{testimonial.pet}</p>
                  <p className="text-xs text-sand-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Happy Pups' },
            { number: '4.9', label: 'Average Rating' },
            { number: '1,200+', label: 'Adventures Completed' },
            { number: '50+', label: 'Unique Destinations' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-forest-500 to-ocean-500">
                {stat.number}
              </p>
              <p className="text-sand-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

