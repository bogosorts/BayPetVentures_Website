import PageLayout from '../../components/PageLayout'

export default function AboutUs() {
  const values = [
    {
      icon: '❤️',
      title: 'Love for Dogs',
      description: 'Every team member is a passionate dog lover who treats your pup like family.',
    },
    {
      icon: '🌿',
      title: 'Nature Connection',
      description: 'We believe dogs thrive when connected to the natural world around them.',
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'Every decision we make prioritizes the health and safety of your furry friend.',
    },
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'We go above and beyond to create truly exceptional experiences.',
    },
  ]

  return (
    <PageLayout
      title="About PetVenture"
      subtitle="Our story, our mission, and why we're passionate about giving dogs the adventures they deserve."
      heroColor="forest"
      breadcrumb={[{ name: 'About Us', href: '/about' }]}
    >
      {/* Our Story */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="font-heading text-3xl font-bold text-sand-900 mb-6">Our Story</h2>
        <div className="prose prose-lg text-sand-600 space-y-4">
          <p>
            PetVenture was born from a simple observation: our dogs were happiest after a big adventure 
            in nature. The tired, satisfied look in their eyes after a day of hiking, swimming, or 
            exploring was something we wanted every dog to experience.
          </p>
          <p>
            Founded in 2020 by a group of dog-loving outdoor enthusiasts in San Francisco, we set out 
            to create something that didn't exist — a premium adventure service that takes dogs on 
            real excursions to the Bay Area's most beautiful destinations.
          </p>
          <p>
            What started with a single guide and a handful of pups has grown into a team of passionate 
            adventurers who have led over 1,200 adventures and counting. We've explored every corner 
            of the Bay Area, from the beaches of Carmel to the peaks of Mount Tam, always with happy 
            dogs leading the way.
          </p>
          <p>
            Today, PetVenture is the Bay Area's most trusted dog adventure service. We're proud to 
            have built a community of dog lovers who trust us with their precious pups, and we never 
            take that responsibility lightly.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-forest-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-sand-900 mb-4">Our Mission</h2>
          <p className="text-xl text-sand-700 leading-relaxed">
            To enrich the lives of dogs and their humans by providing safe, exciting, and unforgettable 
            outdoor adventures that strengthen the bond between pets and nature.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-sand-900 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">{value.title}</h3>
              <p className="text-sand-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-forest-500 to-ocean-500 rounded-2xl p-8 md:p-12 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-heading text-4xl font-bold">500+</p>
            <p className="text-white/80">Happy Pups</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-bold">1,200+</p>
            <p className="text-white/80">Adventures</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-bold">50+</p>
            <p className="text-white/80">Destinations</p>
          </div>
          <div>
            <p className="font-heading text-4xl font-bold">4.9</p>
            <p className="text-white/80">Star Rating</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

