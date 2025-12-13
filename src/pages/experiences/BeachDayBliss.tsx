import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'

export default function BeachDayBliss() {
  const highlights = [
    { icon: '🏖️', title: 'Sandy Adventures', description: 'Miles of dog-friendly beaches to explore and play' },
    { icon: '🌊', title: 'Ocean Fun', description: 'Safe swimming spots for water-loving pups' },
    { icon: '🐚', title: 'Beach Games', description: 'Fetch, frisbee, and endless running on the sand' },
    { icon: '📸', title: 'Photo Memories', description: 'Stunning beach sunset photos of your pup' },
  ]

  const locations = [
    {
      name: 'Fort Funston',
      description: 'San Francisco\'s premier off-leash dog beach with stunning cliffs and consistent waves.',
      features: ['Off-leash', 'Cliff trails', 'Hang gliders viewing'],
    },
    {
      name: 'Pacifica State Beach',
      description: 'A beautiful crescent beach with gentle waves perfect for dogs who are new to the ocean.',
      features: ['Gentle waves', 'Beginner friendly', 'Nearby cafes'],
    },
    {
      name: 'Carmel Beach',
      description: 'The famous white sand beach where dogs run free. A bucket-list destination for every pup!',
      features: ['White sand', 'Downtown access', 'Dog-friendly shops'],
    },
  ]

  return (
    <PageLayout
      title="Beach Day Bliss"
      subtitle="Sandy paws, ocean waves, and pure joy. The ultimate beach adventure for water-loving pups."
      heroImage="https://images.pexels.com/photos/1144410/pexels-photo-1144410.jpeg?auto=compress&cs=tinysrgb&w=1920"
      heroColor="ocean"
      breadcrumb={[
        { name: 'Experiences', href: '/#experiences' },
        { name: 'Beach Day Bliss', href: '/experiences/beach-day-bliss' },
      ]}
    >
      {/* Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-3xl font-bold text-sand-900 mb-6">
            The Ultimate Beach Experience for Your Pup
          </h2>
          <div className="prose prose-lg text-sand-600 space-y-4">
            <p>
              There's nothing quite like watching your dog experience the joy of running free on a beautiful beach. 
              Our Beach Day Bliss adventure takes your furry friend to the Bay Area's most stunning dog-friendly 
              beaches for a day of sand, surf, and pure happiness.
            </p>
            <p>
              Whether your pup is a seasoned swimmer or experiencing the ocean for the first time, our experienced 
              guides ensure a safe and fun experience for every dog. We match dogs by temperament and swimming 
              ability, so everyone has the best possible time.
            </p>
            <p>
              Your pup will spend the day playing fetch in the waves, exploring tide pools, making new furry friends, 
              and of course, perfecting their beach zoomies. We capture it all on camera so you can relive the 
              memories forever.
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
                <p className="font-semibold text-sand-900">4-5 hours (half day)</p>
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
                <p className="font-semibold text-sand-900">$89 per pup</p>
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
                <p className="font-semibold text-sand-900">All levels welcome</p>
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
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-8">Our Beach Destinations</h2>
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

      {/* Gallery */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-8">Beach Day Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.pexels.com/photos/1144410/pexels-photo-1144410.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=600',
          ].map((img, index) => (
            <div key={index} className="aspect-square rounded-xl overflow-hidden">
              <img src={img} alt="Beach day fun" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Ready for a Beach Day?</h2>
        <p className="text-ocean-100 mb-6 max-w-2xl mx-auto">
          Book your pup's beach adventure today and watch them experience pure joy!
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

