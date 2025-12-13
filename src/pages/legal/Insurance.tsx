import PageLayout from '../../components/PageLayout'

export default function Insurance() {
  return (
    <PageLayout
      title="Insurance & Liability"
      subtitle="Comprehensive coverage for your peace of mind."
      heroColor="ocean"
      breadcrumb={[{ name: 'Insurance', href: '/insurance' }]}
    >
      {/* Coverage Overview */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-ocean-50 rounded-2xl p-8 mb-8">
          <h2 className="font-heading text-2xl font-bold text-sand-900 mb-4">Fully Insured & Bonded</h2>
          <p className="text-sand-600 leading-relaxed">
            PetVenture carries comprehensive commercial liability insurance and is fully bonded. 
            This means your dog is protected throughout every adventure — from pickup to drop-off.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-sand-200">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">General Liability Insurance</h3>
            <p className="text-sand-600">
              Comprehensive coverage for accidents, injuries, and property damage that may occur 
              during our adventures.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-sand-200">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">Care, Custody & Control</h3>
            <p className="text-sand-600">
              Specific coverage for the dogs in our care, protecting against injury or illness 
              that may occur during adventures.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-sand-200">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">Commercial Auto Insurance</h3>
            <p className="text-sand-600">
              All PetVenture vehicles are covered by commercial auto insurance, ensuring protection 
              during transport.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-sand-200">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="font-heading text-xl font-bold text-sand-900 mb-2">Bonded</h3>
            <p className="text-sand-600">
              PetVenture is fully bonded, providing additional financial protection and 
              demonstrating our commitment to professional standards.
            </p>
          </div>
        </div>
      </div>

      {/* What's Covered */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6">What's Covered</h2>
        <div className="bg-white rounded-2xl p-8 border border-sand-200">
          <ul className="space-y-4">
            {[
              'Veterinary expenses for injuries that occur during an adventure',
              'Accidental injury to your dog while in our care',
              'Emergency veterinary treatment',
              'Transport to veterinary facilities',
              'Third-party liability (if your dog injures another dog)',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-forest-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sand-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Waiver */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6">Liability Waiver</h2>
        <div className="bg-sand-50 rounded-2xl p-8">
          <p className="text-sand-600 leading-relaxed mb-4">
            Prior to your dog's first adventure, you'll be asked to sign a liability waiver. 
            This standard document acknowledges that:
          </p>
          <ul className="space-y-2 text-sand-600">
            <li>• Outdoor activities carry inherent risks</li>
            <li>• Your dog is healthy and fit for the chosen activity level</li>
            <li>• You've disclosed any behavioral or health concerns</li>
            <li>• You authorize emergency veterinary care if needed</li>
          </ul>
          <p className="text-sand-600 leading-relaxed mt-4">
            The waiver is available for review upon request before signing.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-ocean-500 to-forest-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">Questions About Coverage?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            We're happy to provide proof of insurance and discuss our coverage in detail.
          </p>
          <a
            href="mailto:hello@petventure.com"
            className="inline-flex items-center gap-2 bg-white text-ocean-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Request Insurance Details
          </a>
        </div>
      </div>
    </PageLayout>
  )
}

