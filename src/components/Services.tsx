const services = [
  {
    icon: '🚗',
    title: 'Door-to-Door Pickup',
    description: 'We pick up your pup from your home and bring them back — your car stays clean, no matter how muddy the adventure!',
  },
  {
    icon: '🏖️',
    title: 'Curated Adventures',
    description: 'From sandy beaches to forest trails, we choose the best dog-friendly locations for safe, exciting experiences.',
  },
  {
    icon: '📸',
    title: 'Photo Updates',
    description: 'Get real-time photos and updates so you can see your pup having the time of their life.',
  },
  {
    icon: '🛁',
    title: 'Post-Adventure Cleanup',
    description: 'Your pup comes home fresh and clean — towel-dried, brushed, and smelling great. No sandy paws on your couch!',
  },
  {
    icon: '👥',
    title: 'Small Group Sizes',
    description: 'Maximum 6-8 dogs per adventure ensures personalized attention and temperament-matched playmates.',
  },
  {
    icon: '📍',
    title: 'GPS Tracking',
    description: 'Know exactly where your pup is throughout their adventure with real-time location tracking.',
  },
]

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
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-500 to-ocean-500">
              Easiest Way
            </span>{' '}
            to Adventure
          </h2>
          <p className="text-lg text-sand-600 leading-relaxed">
            We handle everything from pickup to playtime to cleanup. You get a happy, tired pup — and your car and home stay spotless.
          </p>
        </div>

        {/* Car Clean Banner */}
        <div className="bg-gradient-to-r from-ocean-500 to-forest-500 rounded-2xl p-6 md:p-8 mb-16 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">🚗✨</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold mb-2">Say Goodbye to Post-Adventure Car Cleanup!</h3>
              <p className="text-white/90">
                Sand in the seats? Mud on the upholstery? Wet dog smell for days? <strong>Not anymore.</strong> We pick up your pup, take them on their adventure, clean them up, and return them fresh — your car never gets dirty.
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
              <div className="w-16 h-16 bg-gradient-to-br from-forest-100 to-ocean-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
