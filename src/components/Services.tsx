const services = [
  {
    icon: '⏰',
    title: 'You're Busy, We Get It',
    description: 'Work, family, life — it all adds up. We take your pup on the adventures they deserve while you handle everything else.',
  },
  {
    icon: '🏖️',
    title: 'Real Adventures, Not Just Walks',
    description: 'Beaches, mountains, forests — places that make tails wag. More than a walk around the block.',
  },
  {
    icon: '📸',
    title: 'See Every Moment',
    description: 'Get real-time photos and updates so you never miss a smile, splash, or sniff.',
  },
  {
    icon: '🐕',
    title: 'Small Groups, Big Fun',
    description: 'Maximum 6-8 temperament-matched pups means personalized attention and the right playmates.',
  },
  {
    icon: '🚗',
    title: 'Door-to-Door Service',
    description: 'We pick up and drop off. No driving, no logistics, no hassle for you.',
  },
  {
    icon: '✨',
    title: 'Fresh & Clean Return',
    description: 'Your pup comes home towel-dried and brushed. Happy, tired, and ready for cuddles.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-forest-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Why Pet Parents Love Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-sand-900 mb-6">
            Give Your Dog the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-500 to-ocean-500">
              Life They Deserve
            </span>
          </h2>
          <p className="text-lg text-sand-600 leading-relaxed">
            Your dog dreams of adventures. You want to give them the world. We bridge the gap — real outdoor experiences for your pup, complete convenience for you.
          </p>
        </div>

        {/* Emotional Appeal Banner */}
        <div className="bg-gradient-to-r from-forest-600 to-ocean-600 rounded-2xl p-6 md:p-8 mb-16 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 p-3">
              <span className="text-4xl">💛</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold mb-2">They Give You Unconditional Love. Return the Favor.</h3>
              <p className="text-white/90">
                Your dog waits for you all day. They deserve more than the same neighborhood walk. Give them beach days, forest trails, and the kind of adventures that make their whole week.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-sand-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-sand-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-forest-100 to-ocean-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-3">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-sand-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sand-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
