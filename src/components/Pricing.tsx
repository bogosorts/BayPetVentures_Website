const pricingPlans = [
  {
    name: 'Day Tripper',
    description: 'Perfect for busy weekdays when your pup needs adventure',
    price: 89,
    duration: 'per half day',
    features: [
      'Half-day adventure (4-5 hours)',
      'Door-to-door pickup & drop-off',
      'Photo updates during trip',
      'Fresh water & treats included',
      'Maximum 4 dogs per group',
      'Certified pet first aid guide',
    ],
    color: 'ocean',
    popular: false,
  },
  {
    name: 'Explorer',
    description: 'Our most popular choice for weekend warriors',
    price: 149,
    duration: 'per full day',
    features: [
      'Full-day adventure (6-8 hours)',
      'Door-to-door pickup & drop-off',
      'Photo & video updates',
      'Gourmet lunch included',
      'Premium adventure locations',
      'Temperament-matched groups',
      'Post-adventure bath option',
    ],
    color: 'forest',
    popular: true,
  },
  {
    name: 'Adventurer',
    description: 'Epic overnight experiences for the ultimate explorer',
    price: 299,
    duration: 'per overnight',
    features: [
      'Overnight camping adventure',
      'Premium gear & tent provided',
      'All meals included',
      'National park destinations',
      'Professional photography',
      'Maximum 3 dogs per trip',
      'Campfire cuddles included',
      'Memory photo album',
    ],
    color: 'sunset',
    popular: false,
  },
]

const colorClasses = {
  ocean: {
    gradient: 'from-ocean-500 to-ocean-600',
    bg: 'bg-ocean-500',
    light: 'bg-ocean-50',
    text: 'text-ocean-600',
    border: 'border-ocean-200',
    ring: 'ring-ocean-500',
    check: 'text-ocean-500',
  },
  forest: {
    gradient: 'from-forest-500 to-forest-600',
    bg: 'bg-forest-500',
    light: 'bg-forest-50',
    text: 'text-forest-600',
    border: 'border-forest-200',
    ring: 'ring-forest-500',
    check: 'text-forest-500',
  },
  sunset: {
    gradient: 'from-sunset-500 to-sunset-600',
    bg: 'bg-sunset-500',
    light: 'bg-sunset-50',
    text: 'text-sunset-600',
    border: 'border-sunset-200',
    ring: 'ring-sunset-500',
    check: 'text-sunset-500',
  },
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sunset-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Simple Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-sand-900 mb-6">
            Adventures for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-500 to-forest-500">
              Every Budget
            </span>
          </h2>
          <p className="text-lg text-sand-600 leading-relaxed">
            No hidden fees, no surprises. Just tail-wagging adventures at prices that make sense.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => {
            const colors = colorClasses[plan.color as keyof typeof colorClasses]
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? `bg-gradient-to-br ${colors.gradient} text-white shadow-2xl shadow-forest-500/30 scale-105`
                    : `bg-white border-2 ${colors.border} hover:shadow-xl`
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-forest-600 text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`font-heading text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-sand-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-sand-500'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-2xl font-semibold ${plan.popular ? 'text-white' : colors.text}`}>$</span>
                    <span className={`text-6xl font-heading font-bold ${plan.popular ? 'text-white' : 'text-sand-900'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-sand-500'}`}>
                    {plan.duration}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : colors.check}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={plan.popular ? 'text-white/90' : 'text-sand-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all ${
                    plan.popular
                      ? 'bg-white text-forest-600 hover:bg-sand-50 shadow-lg'
                      : `bg-gradient-to-r ${colors.gradient} text-white hover:shadow-lg hover:shadow-${plan.color}-500/30`
                  }`}
                >
                  Book This Adventure
                </a>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-sand-500 mb-4">
            Need a custom adventure or have multiple pups?{' '}
            <a href="#contact" className="text-forest-600 font-semibold hover:text-forest-700 underline underline-offset-4">
              Contact us for package deals
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-sand-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free cancellation 24hrs before
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Multi-dog discounts available
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Loyalty rewards program
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

