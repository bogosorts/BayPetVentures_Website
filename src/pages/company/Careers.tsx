import PageLayout from '../../components/PageLayout'

export default function Careers() {
  const openings = [
    {
      title: 'Adventure Guide',
      type: 'Full-time',
      location: 'San Francisco Bay Area',
      description: 'Lead groups of dogs on outdoor adventures across the Bay Area. Must have experience with dogs and love the outdoors.',
      requirements: [
        'Pet first aid certification (or willingness to obtain)',
        '2+ years experience working with dogs',
        'Valid driver\'s license and clean record',
        'Passion for hiking, nature, and adventure',
        'Excellent communication skills',
      ],
    },
    {
      title: 'Part-Time Weekend Guide',
      type: 'Part-time',
      location: 'San Francisco Bay Area',
      description: 'Join our weekend crew for beach days, park tours, and trail adventures. Perfect for outdoor enthusiasts looking for extra income.',
      requirements: [
        'Available Saturdays and/or Sundays',
        'Experience with dogs of all sizes',
        'Reliable transportation',
        'Pet first aid certification a plus',
      ],
    },
    {
      title: 'Customer Experience Specialist',
      type: 'Full-time',
      location: 'Remote / SF',
      description: 'Be the first point of contact for our pet parents. Handle bookings, inquiries, and ensure every customer has an amazing experience.',
      requirements: [
        'Previous customer service experience',
        'Excellent written and verbal communication',
        'Dog lover (obviously!)',
        'Comfortable with scheduling software',
      ],
    },
  ]

  const perks = [
    { icon: '🐕', text: 'Bring your dog to work (every day!)' },
    { icon: '🏔️', text: 'Paid time for outdoor adventures' },
    { icon: '💪', text: 'Health & wellness benefits' },
    { icon: '📚', text: 'Professional development budget' },
    { icon: '🎉', text: 'Team retreats & dog-friendly events' },
    { icon: '💰', text: 'Competitive pay + bonuses' },
  ]

  return (
    <PageLayout
      title="Join Our Pack"
      subtitle="Love dogs? Love the outdoors? We're hiring passionate people to help create amazing adventures."
      heroColor="sunset"
      breadcrumb={[{ name: 'Careers', href: '/careers' }]}
    >
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-sand-600 leading-relaxed">
          Working at PetVenture means spending your days outdoors with amazing dogs, building a 
          community of pet lovers, and making a real difference in the lives of pups and their humans.
        </p>
      </div>

      {/* Perks */}
      <div className="bg-sunset-50 rounded-2xl p-8 mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6 text-center">Why Join PetVenture?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {perks.map((perk, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-2xl">{perk.icon}</span>
              <span className="text-sand-700">{perk.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-sand-900 mb-8">Open Positions</h2>
        <div className="space-y-6">
          {openings.map((job, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-sand-200 hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-sand-900">{job.title}</h3>
                  <div className="flex gap-3 mt-2">
                    <span className="text-sm bg-forest-100 text-forest-700 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-sm bg-sand-100 text-sand-700 px-3 py-1 rounded-full">
                      {job.location}
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:careers@petventure.com"
                  className="bg-gradient-to-r from-sunset-500 to-sunset-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Apply Now
                </a>
              </div>
              <p className="text-sand-600 mb-4">{job.description}</p>
              <div>
                <p className="font-semibold text-sand-700 mb-2">Requirements:</p>
                <ul className="list-disc list-inside text-sand-600 space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Application */}
      <div className="bg-gradient-to-r from-forest-500 to-ocean-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Don't See the Right Role?</h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          We're always interested in meeting passionate dog lovers. Send us your resume and tell us 
          why you'd be a great fit for the PetVenture pack!
        </p>
        <a
          href="mailto:careers@petventure.com"
          className="inline-flex items-center gap-2 bg-white text-forest-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
        >
          Send General Application
        </a>
      </div>
    </PageLayout>
  )
}

