import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'

export default function CityParksTour() {
  const highlights = [
    { icon: '🌳', title: 'Urban Parks', description: 'The best dog parks in San Francisco' },
    { icon: '🐕', title: 'Social Time', description: 'Make new furry friends in the city' },
    { icon: '🌉', title: 'Iconic Views', description: 'Photo ops at famous SF landmarks' },
    { icon: '☕', title: 'Café Stops', description: 'Pup cups and treats along the way' },
  ]

  const locations = [
    {
      name: 'Golden Gate Park',
      description: '1,000+ acres of meadows, trails, and dog-friendly areas right in the heart of SF.',
      features: ['Off-leash areas', 'Bison paddock', 'Garden strolls'],
    },
    {
      name: 'Dolores Park',
      description: 'Iconic SF park with stunning city views and a vibrant dog owner community.',
      features: ['City views', 'Social scene', 'Mission vibes'],
    },
    {
      name: 'Crissy Field',
      description: 'Waterfront park with Golden Gate Bridge views and beach access.',
      features: ['Beach access', 'Bridge views', 'Marsh trails'],
    },
  ]

  return (
    <PageLayout
      title="City Parks Tour"
      subtitle="Urban adventures for city pups! Explore SF's best dog parks, hidden trails, and iconic spots."
      heroImage="https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1920"
      heroColor="ocean"
      breadcrumb={[
        { name: 'Experiences', href: '/#experiences' },
        { name: 'City Parks Tour', href: '/experiences/city-parks-tour' },
      ]}
    >
      {/* Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-3xl font-bold text-sand-900 mb-6">
            The Best of Urban Dog Life
          </h2>
          <div className="prose prose-lg text-sand-600 space-y-4">
            <p>
              San Francisco is one of the most dog-friendly cities in the world, and our City Parks Tour 
              shows your pup the very best of it. From the sprawling meadows of Golden Gate Park to 
              the vibrant social scene at Dolores Park, this is urban adventure at its finest.
            </p>
            <p>
              Your dog will visit multiple parks throughout the day, making new friends, exploring 
              diverse neighborhoods, and taking in iconic San Francisco views. We stop at dog-friendly 
              cafes for pup cups and treats, and capture plenty of photos at famous landmarks.
            </p>
            <p>
              This adventure is perfect for social butterflies who love meeting other dogs, or for 
              pups whose owners want them to experience the city in a fun, safe way. It's also great 
              for dogs who do better with shorter bursts of activity rather than long hikes.
            </p>
          </div>
        </div>
        
        <div className="bg-ocean-50 rounded-2xl p-8 border border-ocean-200">
          <h3 className="font-heading text-xl font-bold text-sand-900 mb-4">Trip Details</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center text-ocean-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Duration</p>
                <p className="font-semibold text-sand-900">3-4 hours (half day)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center text-ocean-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Starting at</p>
                <p className="font-semibold text-sand-900">$69 per pup</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center text-ocean-600">
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
              <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center text-ocean-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Difficulty</p>
                <p className="font-semibold text-sand-900">Easy (all levels)</p>
              </div>
            </div>
          </div>
          
          <Link
            to="/#contact"
            className="mt-6 block w-full bg-gradient-to-r from-ocean-500 to-ocean-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transition-all"
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
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-8">Park Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-gradient-to-br from-ocean-50 to-white rounded-xl p-6 border border-ocean-200">
              <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">{location.name}</h3>
              <p className="text-sand-600 mb-4">{location.description}</p>
              <div className="flex flex-wrap gap-2">
                {location.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Ready for a City Adventure?</h2>
        <p className="text-ocean-100 mb-6 max-w-2xl mx-auto">
          Book your pup's urban exploration today and let them experience the best of SF!
        </p>
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 bg-white text-ocean-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
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

