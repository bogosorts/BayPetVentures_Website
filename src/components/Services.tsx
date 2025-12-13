const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Door-to-Door Pickup',
    description: 'We pick up your pup right from your home and return them tired, happy, and ready for cuddles.',
    color: 'forest',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Photo Updates',
    description: 'Get adorable photo and video updates throughout the day so you never miss a moment.',
    color: 'ocean',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Fully Insured',
    description: 'Every adventure is fully insured with certified pet first aid trained guides on every trip.',
    color: 'sunset',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Small Groups',
    description: 'Maximum 4 dogs per trip ensures personalized attention and safe social interactions.',
    color: 'forest',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Temperament Matching',
    description: 'We carefully match dogs by energy level and play style for the best adventure buddy pairings.',
    color: 'ocean',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Flexible Scheduling',
    description: 'Book adventures that fit your schedule — weekdays, weekends, or special occasion trips.',
    color: 'sunset',
  },
]

const colorClasses = {
  forest: {
    bg: 'bg-forest-100',
    text: 'text-forest-600',
    border: 'border-forest-200',
    gradient: 'from-forest-500 to-forest-600',
  },
  ocean: {
    bg: 'bg-ocean-100',
    text: 'text-ocean-600',
    border: 'border-ocean-200',
    gradient: 'from-ocean-500 to-ocean-600',
  },
  sunset: {
    bg: 'bg-sunset-100',
    text: 'text-sunset-600',
    border: 'border-sunset-200',
    gradient: 'from-sunset-500 to-sunset-600',
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-forest-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-sand-900 mb-6">
            Everything Your Pup Needs for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-500 to-ocean-500">
              Perfect Adventure
            </span>
          </h2>
          <p className="text-lg text-sand-600 leading-relaxed">
            We've thought of everything so you can relax while your furry friend has the time of their life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses]
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border ${colors.border} bg-gradient-to-br from-white to-sand-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 ${colors.text} group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-sand-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sand-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

