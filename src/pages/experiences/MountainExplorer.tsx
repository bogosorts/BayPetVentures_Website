import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'

export default function MountainExplorer() {
  const highlights = [
    { icon: '⛰️', title: 'Alpine Adventures', description: 'High-altitude trails with breathtaking views' },
    { icon: '🏕️', title: 'Overnight Camping', description: 'Sleep under the stars with your pup' },
    { icon: '💧', title: 'Mountain Lakes', description: 'Crystal clear alpine lakes for swimming' },
    { icon: '🌅', title: 'Epic Sunrises', description: 'Wake up to stunning mountain sunrises' },
  ]

  const locations = [
    {
      name: 'Lake Tahoe',
      description: 'The jewel of the Sierra Nevada with pristine beaches, forest trails, and stunning alpine views.',
      features: ['Crystal clear water', 'Sandy beaches', 'Forest trails'],
    },
    {
      name: 'Sierra Nevada Foothills',
      description: 'Rolling hills, wildflower meadows, and access to some of California\'s most beautiful wilderness.',
      features: ['Wildflowers', 'River crossings', 'Wildlife'],
    },
    {
      name: 'Yosemite Gateway',
      description: 'Access trails near the famous park with stunning granite formations and waterfalls.',
      features: ['Waterfall views', 'Giant sequoias', 'Iconic landscapes'],
    },
  ]

  return (
    <PageLayout
      title="Mountain Explorer"
      subtitle="High altitude adventures for the most adventurous pups. Alpine lakes, mountain meadows, and breathtaking scenery."
      heroImage="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1920"
      heroColor="forest"
      breadcrumb={[
        { name: 'Experiences', href: '/#experiences' },
        { name: 'Mountain Explorer', href: '/experiences/mountain-explorer' },
      ]}
    >
      {/* Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-3xl font-bold text-sand-900 mb-6">
            The Ultimate Alpine Adventure
          </h2>
          <div className="prose prose-lg text-sand-600 space-y-4">
            <p>
              For dogs who crave big adventures, our Mountain Explorer experience delivers the ultimate 
              wilderness escape. This overnight trip takes your pup deep into California's stunning 
              mountain ranges for an unforgettable camping adventure.
            </p>
            <p>
              Your dog will hike scenic mountain trails, swim in crystal-clear alpine lakes, and sleep 
              under a blanket of stars. Our experienced guides bring all the gear and know-how to ensure 
              a safe, comfortable, and amazing experience for every pup.
            </p>
            <p>
              This is the bucket-list adventure for active dogs who are ready for a real challenge. 
              From sunrise hikes to campfire cuddles, your pup will come home tired, happy, and full 
              of incredible memories.
            </p>
          </div>
        </div>
        
        <div className="bg-sunset-50 rounded-2xl p-8 border border-sunset-200">
          <h3 className="font-heading text-xl font-bold text-sand-900 mb-4">Trip Details</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sunset-100 rounded-lg flex items-center justify-center text-sunset-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Duration</p>
                <p className="font-semibold text-sand-900">2 days / 1 night</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sunset-100 rounded-lg flex items-center justify-center text-sunset-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Starting at</p>
                <p className="font-semibold text-sand-900">$299 per pup</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sunset-100 rounded-lg flex items-center justify-center text-sunset-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Group Size</p>
                <p className="font-semibold text-sand-900">Max 3 dogs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sunset-100 rounded-lg flex items-center justify-center text-sunset-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-sand-500">Difficulty</p>
                <p className="font-semibold text-sand-900">Advanced (fit dogs only)</p>
              </div>
            </div>
          </div>
          
          <Link
            to="/#contact"
            className="mt-6 block w-full bg-gradient-to-r from-sunset-500 to-sunset-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transition-all"
          >
            Book This Adventure
          </Link>
        </div>
      </div>

      {/* What's Included */}
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

      {/* Packing List */}
      <div className="bg-sand-100 rounded-2xl p-8 mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6">We Provide Everything</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Premium tent & bedding',
            'All meals & treats',
            'First aid kit',
            'Fresh water supply',
            'LED collar lights',
            'Camping gear',
            'GPS tracking',
            'Professional photos',
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sand-700">
              <svg className="w-5 h-5 text-forest-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-8">Mountain Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-gradient-to-br from-sunset-50 to-white rounded-xl p-6 border border-sunset-200">
              <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">{location.name}</h3>
              <p className="text-sand-600 mb-4">{location.description}</p>
              <div className="flex flex-wrap gap-2">
                {location.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-sunset-100 text-sunset-700 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-sunset-500 to-sunset-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Ready for the Ultimate Adventure?</h2>
        <p className="text-sunset-100 mb-6 max-w-2xl mx-auto">
          Book your pup's mountain expedition today. Limited spots available for this premium experience!
        </p>
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 bg-white text-sunset-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
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

