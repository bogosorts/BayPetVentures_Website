import { Link } from 'react-router-dom'

const experiences = [
  {
    title: 'National Park Trek',
    location: 'Point Reyes, Muir Woods, Mount Tam',
    description: 'Epic forest trails, stunning vistas, and endless sniffing opportunities through the Bay Area\'s most beautiful protected lands.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: 'Full Day (6-8 hrs)',
    tags: ['Hiking', 'Forest', 'Wildlife'],
    featured: true,
    slug: 'national-park-trek',
  },
  {
    title: 'Beach Day Bliss',
    location: 'Fort Funston, Pacifica, Carmel',
    description: 'Sandy paws, ocean waves, and pure joy. Our beach adventures are perfect for water-loving pups who love to splash and play.',
    image: 'https://images.pexels.com/photos/1144410/pexels-photo-1144410.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: 'Half Day (4-5 hrs)',
    tags: ['Beach', 'Swimming', 'Sand'],
    featured: false,
    slug: 'beach-day-bliss',
  },
  {
    title: 'Mountain Explorer',
    location: 'Sierra Nevada, Lake Tahoe',
    description: 'High altitude adventures for the most adventurous pups. Alpine lakes, mountain meadows, and breathtaking scenery.',
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: 'Overnight (2 days)',
    tags: ['Mountains', 'Lakes', 'Camping'],
    featured: true,
    slug: 'mountain-explorer',
  },
  {
    title: 'Wine Country Wander',
    location: 'Sonoma, Napa Valley',
    description: 'A leisurely stroll through beautiful vineyards with pet-friendly winery stops. Perfect for relaxed, social pups.',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: 'Full Day (6-8 hrs)',
    tags: ['Vineyards', 'Scenic', 'Relaxed'],
    featured: false,
    slug: 'wine-country-wander',
  },
  {
    title: 'Redwood Ramble',
    location: 'Big Basin, Henry Cowell',
    description: 'Walk among giants! Our redwood adventures take your pup through ancient groves and fairy-tale forest paths.',
    image: 'https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: 'Half Day (4-5 hrs)',
    tags: ['Redwoods', 'Forest', 'Peaceful'],
    featured: false,
    slug: 'redwood-ramble',
  },
  {
    title: 'City Parks Tour',
    location: 'Golden Gate Park, Dolores Park',
    description: 'Urban adventures for city pups! Explore SF\'s best dog parks, hidden trails, and iconic spots.',
    image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: 'Half Day (3-4 hrs)',
    tags: ['Urban', 'Parks', 'Social'],
    featured: false,
    slug: 'city-parks-tour',
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="py-20 lg:py-32 bg-gradient-to-b from-sand-50 to-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Adventures
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-sand-900 mb-6">
            Choose Your Pup's Next{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-500 to-forest-500">
              Great Adventure
            </span>
          </h2>
          <p className="text-lg text-sand-600 leading-relaxed">
            From sandy beaches to snow-capped mountains, we've got the perfect experience for every type of adventurous pup.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ${
                experience.featured ? 'ring-2 ring-sunset-400' : ''
              }`}
            >
              {/* Featured Badge */}
              {experience.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-sunset-500 to-sunset-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Image */}
              <Link to={`/experiences/${experience.slug}`} className="block relative h-56 overflow-hidden cursor-pointer">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {experience.duration}
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <Link 
                  to={`/experiences/${experience.slug}`}
                  className="block font-heading text-xl font-bold text-sand-900 mb-1 hover:text-forest-600 transition-colors cursor-pointer"
                >
                  {experience.title}
                </Link>
                <p className="text-sm text-forest-600 font-medium mb-3 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {experience.location}
                </p>
                <p className="text-sand-600 text-sm leading-relaxed mb-4">
                  {experience.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-sand-100 text-sand-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/experiences/${experience.slug}`}
                  className="inline-flex items-center gap-2 text-forest-600 font-semibold hover:text-forest-700 transition-colors group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
