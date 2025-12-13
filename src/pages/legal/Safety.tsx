import PageLayout from '../../components/PageLayout'

export default function Safety() {
  const safetyMeasures = [
    {
      icon: '🎓',
      title: 'Certified Guides',
      description: 'Every guide is certified in pet first aid and CPR through the American Red Cross or equivalent programs.',
    },
    {
      icon: '👥',
      title: 'Small Groups',
      description: 'Maximum 4 dogs per guide ensures personalized attention and safe supervision at all times.',
    },
    {
      icon: '📍',
      title: 'GPS Tracking',
      description: 'Real-time GPS tracking on all adventures so you always know where your pup is.',
    },
    {
      icon: '🏥',
      title: 'First Aid Equipped',
      description: 'Comprehensive pet first aid kit on every adventure including supplies for common injuries and emergencies.',
    },
    {
      icon: '🚗',
      title: 'Safe Transport',
      description: 'Climate-controlled vehicles with secure, individual travel spaces for each dog.',
    },
    {
      icon: '📞',
      title: 'Emergency Protocols',
      description: 'Established relationships with veterinary clinics along all routes and clear emergency procedures.',
    },
  ]

  return (
    <PageLayout
      title="Safety First"
      subtitle="Your dog's safety is our top priority. Learn about our comprehensive safety protocols."
      heroColor="forest"
      breadcrumb={[{ name: 'Safety', href: '/safety' }]}
    >
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-sand-600 leading-relaxed">
          We treat every dog like our own family member. That's why we've developed comprehensive 
          safety protocols that go above and beyond industry standards.
        </p>
      </div>

      {/* Safety Measures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {safetyMeasures.map((measure, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-sand-200 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{measure.icon}</div>
            <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">{measure.title}</h3>
            <p className="text-sand-600">{measure.description}</p>
          </div>
        ))}
      </div>

      {/* Vaccination Requirements */}
      <div className="bg-forest-50 rounded-2xl p-8 mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6">Vaccination Requirements</h2>
        <p className="text-sand-600 mb-6">
          To ensure the health and safety of all dogs in our care, we require the following:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Rabies', desc: 'Current rabies vaccination (required by law)' },
            { name: 'DHPP', desc: 'Distemper, Hepatitis, Parainfluenza, Parvovirus' },
            { name: 'Bordetella', desc: 'Kennel cough vaccine (within past 12 months)' },
            { name: 'Flea/Tick Prevention', desc: 'Current flea and tick prevention treatment' },
          ].map((vax, index) => (
            <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
              <svg className="w-6 h-6 text-forest-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold text-sand-900">{vax.name}</p>
                <p className="text-sm text-sand-600">{vax.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Procedures */}
      <div className="bg-white rounded-2xl p-8 border border-sand-200 mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6">Emergency Procedures</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-semibold text-sand-900 mb-1">Immediate Assessment</h3>
              <p className="text-sand-600">Guides assess the situation and administer first aid if needed.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-semibold text-sand-900 mb-1">Owner Notification</h3>
              <p className="text-sand-600">You'll be contacted immediately with details of the situation.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-semibold text-sand-900 mb-1">Veterinary Care</h3>
              <p className="text-sand-600">If needed, we transport to the nearest veterinary clinic (we have pre-identified clinics along all routes).</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="font-semibold text-sand-900 mb-1">Follow-Up</h3>
              <p className="text-sand-600">We provide full documentation and follow up on your dog's recovery.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-forest-500 to-ocean-500 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">Questions About Safety?</h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          We're happy to discuss our safety protocols in detail. Your peace of mind matters to us.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 bg-white text-forest-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
        >
          Contact Us
        </a>
      </div>
    </PageLayout>
  )
}

