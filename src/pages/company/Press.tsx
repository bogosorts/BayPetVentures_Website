import PageLayout from '../../components/PageLayout'

export default function Press() {
  const pressFeatures = [
    {
      outlet: 'SF Chronicle',
      title: 'Bay Area Startup Takes Dogs on Epic Outdoor Adventures',
      date: 'November 2024',
      excerpt: 'PetVenture is changing how Bay Area dog owners think about pet care with their unique adventure-based service...',
      logo: '📰',
    },
    {
      outlet: 'TechCrunch',
      title: 'The Future of Pet Services: Experience Over Daycare',
      date: 'October 2024',
      excerpt: 'As pet parents increasingly seek enrichment over basic care, startups like PetVenture are leading the way...',
      logo: '💻',
    },
    {
      outlet: 'Dwell Magazine',
      title: '10 Dog-Friendly Bay Area Adventures',
      date: 'September 2024',
      excerpt: 'For the ultimate canine experience, PetVenture offers guided adventures from beaches to mountain peaks...',
      logo: '🏠',
    },
    {
      outlet: 'Bay Area Parent',
      title: 'Guilt-Free Workdays: Adventure Services for Your Pup',
      date: 'August 2024',
      excerpt: 'Instead of leaving your dog home alone, services like PetVenture offer enriching outdoor experiences...',
      logo: '👨‍👩‍👧',
    },
  ]

  return (
    <PageLayout
      title="Press & Media"
      subtitle="PetVenture in the news. See what people are saying about the Bay Area's favorite dog adventure service."
      heroColor="ocean"
      breadcrumb={[{ name: 'Press', href: '/press' }]}
    >
      {/* Press Kit */}
      <div className="bg-ocean-50 rounded-2xl p-8 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-sand-900 mb-2">Press Kit</h2>
            <p className="text-sand-600">
              Download our press kit for logos, images, and company information.
            </p>
          </div>
          <a
            href="mailto:press@petventure.com"
            className="bg-gradient-to-r from-ocean-500 to-ocean-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap"
          >
            Request Press Kit
          </a>
        </div>
      </div>

      {/* Press Coverage */}
      <div className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-sand-900 mb-8">Recent Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressFeatures.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-sand-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{item.logo}</span>
                <div>
                  <p className="font-semibold text-sand-900">{item.outlet}</p>
                  <p className="text-sm text-sand-500">{item.date}</p>
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-sand-900 mb-2">{item.title}</h3>
              <p className="text-sand-600 text-sm">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Facts */}
      <div className="bg-sand-100 rounded-2xl p-8 mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6">Quick Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Founded', value: '2020' },
            { label: 'Headquarters', value: 'San Francisco, CA' },
            { label: 'Adventures Completed', value: '1,200+' },
            { label: 'Happy Pups Served', value: '500+' },
            { label: 'Service Area', value: 'San Francisco Bay Area' },
            { label: 'Team Size', value: '15+ guides' },
          ].map((fact, index) => (
            <div key={index} className="flex justify-between py-2 border-b border-sand-200">
              <span className="text-sand-600">{fact.label}</span>
              <span className="font-semibold text-sand-900">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-ocean-500 to-forest-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Media Inquiries</h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          For press inquiries, interviews, or partnership opportunities, please reach out to our media team.
        </p>
        <a
          href="mailto:press@petventure.com"
          className="inline-flex items-center gap-2 bg-white text-ocean-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
        >
          press@petventure.com
        </a>
      </div>
    </PageLayout>
  )
}

