import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'

export default function RedwoodRamble() {
  const highlights = [
    { icon: '🌲', title: 'Ancient Giants', description: 'Walk among trees over 1,000 years old' },
    { icon: '🍃', title: 'Shaded Trails', description: 'Cool forest paths perfect for any weather' },
    { icon: '🌿', title: 'Fern Canyons', description: 'Magical green corridors to explore' },
    { icon: '🦋', title: 'Nature Immersion', description: 'Peaceful, meditative forest experience' },
  ]

  const locations = [
    {
      name: 'Big Basin Redwoods',
      description: 'California\'s oldest state park featuring ancient coast redwoods and beautiful waterfalls.',
      features: ['Waterfall hikes', 'Old-growth forest', 'Berry Creek'],
    },
    {
      name: 'Henry Cowell Redwoods',
      description: 'Easy access redwood groves with the famous Redwood Grove Loop trail.',
      features: ['Easy trails', 'San Lorenzo River', 'Train rides nearby'],
    },
    {
      name: 'Purisima Creek Redwoods',
      description: 'Stunning redwood forest on the Peninsula with varied terrain and creek crossings.',
      features: ['Creek crossings', 'Varied difficulty', 'Less crowded'],
    },
  ]

  return (
    <PageLayout
      title="Redwood Ramble"
      subtitle="Walk among giants! Our redwood adventures take your pup through ancient groves and fairy-tale forest paths."
      heroImage="https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=1920"
      heroColor="forest"
      breadcrumb={[
        { name: 'Experiences', href: '/#experiences' },
        { name: 'Redwood Ramble', href: '/experiences/redwood-ramble' },
      ]}
    >
      {/* Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-3xl font-bold text-sand-900 mb-6">
            A Magical Forest Experience
          </h2>
          <div className="prose prose-lg text-sand-600 space-y-4">
            <p>
              There's something truly magical about walking through an ancient redwood forest. The 
              towering trees, filtered sunlight, and peaceful atmosphere create an experience unlike 
              any other — and dogs absolutely love it.
            </p>
            <p>
              Our Redwood Ramble takes your pup through some of the Bay Area's most beautiful old-growth 
              forests. The soft forest floor is gentle on paws, the shaded trails stay cool even on 
              warm days, and there are endless interesting smells to investigate.
            </p>
            <p>
              This is a wonderful adventure for dogs of all ages and fitness levels. The trails vary 
              from easy strolls to moderate hikes, and we match the route to your dog's abilities. 
              It's a fairy-tale adventure your pup will never forget.
            </p>
          </div>
        </div>
        
        <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
          <h3 className="font-heading text-xl font-bold text-sand-900 mb-4">Trip Details</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center text-forest-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Duration</p>
                <p className="font-semibold text-sand-900">4-5 hours (half day)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center text-forest-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Starting at</p>
                <p className="font-semibold text-sand-900">$89 per pup</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center text-forest-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Group Size</p>
                <p className="font-semibold text-sand-900">Max 4 dogs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center text-forest-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Difficulty</p>
                <p className="font-semibold text-sand-900">Easy to Moderate</p>
              </div>
            </div>
          </div>
          
          <Link
            to="/#contact"
            className="mt-6 block w-full bg-gradient-to-r from-forest-500 to-forest-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transition-all"
          >
            Book This Adventure
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-8">What's Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-sand-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-heading font-semibold text-sand-900 mb-2">{item.title}</h3>
              <p className="text-sand-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-8">Redwood Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-gradient-to-br from-forest-50 to-white rounded-xl p-6 border border-forest-200">
              <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">{location.name}</h3>
              <p className="text-sand-600 mb-4">{location.description}</p>
              <div className="flex flex-wrap gap-2">
                {location.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-forest-500 to-forest-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Ready to Walk Among Giants?</h2>
        <p className="text-forest-100 mb-6 max-w-2xl mx-auto">
          Book your pup's redwood adventure today for a magical forest experience!
        </p>
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 bg-white text-forest-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
        >
          Book Now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </PageLayout>
  )
}

