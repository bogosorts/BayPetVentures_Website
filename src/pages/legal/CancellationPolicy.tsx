import PageLayout from '../../components/PageLayout'

export default function CancellationPolicy() {
  return (
    <PageLayout
      title="Cancellation Policy"
      subtitle="Flexible policies designed with your needs in mind."
      heroColor="sunset"
      breadcrumb={[{ name: 'Cancellation Policy', href: '/cancellation-policy' }]}
    >
      <div className="max-w-3xl mx-auto">
        {/* Overview */}
        <div className="bg-sunset-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-sand-700 leading-relaxed">
            We understand that plans change. Our cancellation policy is designed to be fair and 
            flexible while allowing us to maintain our service quality.
          </p>
        </div>

        {/* Standard Adventures */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6">
            Standard Adventures (Half-Day & Full-Day)
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 font-bold text-sm flex-shrink-0">
                  24h+
                </div>
                <div>
                  <p className="font-semibold text-sand-900">More than 24 hours notice</p>
                  <p className="text-sand-600">Full refund or free rescheduling</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sunset-100 rounded-full flex items-center justify-center text-sunset-600 font-bold text-xs flex-shrink-0 leading-tight">
                  12-24h
                </div>
                <div>
                  <p className="font-semibold text-sand-900">12-24 hours notice</p>
                  <p className="text-sand-600">50% refund or credit for future adventure</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sand-200 rounded-full flex items-center justify-center text-sand-600 font-bold text-sm flex-shrink-0">
                  &lt;12h
                </div>
                <div>
                  <p className="font-semibold text-sand-900">Less than 12 hours notice</p>
                  <p className="text-sand-600">No refund (adventure fee is forfeited)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overnight Adventures */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900 mb-6">
            Overnight Adventures
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 font-bold text-sm flex-shrink-0">
                  72h+
                </div>
                <div>
                  <p className="font-semibold text-sand-900">More than 72 hours notice</p>
                  <p className="text-sand-600">Full refund or free rescheduling</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sunset-100 rounded-full flex items-center justify-center text-sunset-600 font-bold text-xs flex-shrink-0 leading-tight">
                  24-72h
                </div>
                <div>
                  <p className="font-semibold text-sand-900">24-72 hours notice</p>
                  <p className="text-sand-600">50% refund or credit for future adventure</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sand-200 rounded-full flex items-center justify-center text-sand-600 font-bold text-sm flex-shrink-0">
                  &lt;24h
                </div>
                <div>
                  <p className="font-semibold text-sand-900">Less than 24 hours notice</p>
                  <p className="text-sand-600">No refund (adventure fee is forfeited)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Circumstances */}
        <div className="bg-sand-50 rounded-2xl p-8 mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900 mb-4">Special Circumstances</h2>
          <div className="space-y-4 text-sand-600">
            <p>
              <strong className="text-sand-900">Weather:</strong> If we cancel due to unsafe weather conditions, 
              you'll receive a full refund or free rescheduling — no questions asked.
            </p>
            <p>
              <strong className="text-sand-900">Illness:</strong> If your dog is sick and cannot participate, 
              please let us know ASAP. We'll work with you to reschedule at no extra charge.
            </p>
            <p>
              <strong className="text-sand-900">Emergencies:</strong> We understand emergencies happen. Contact us 
              and we'll do our best to accommodate your situation.
            </p>
          </div>
        </div>

        {/* How to Cancel */}
        <div className="bg-white rounded-2xl p-8 border border-sand-200 mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900 mb-4">How to Cancel or Reschedule</h2>
          <div className="space-y-4 text-sand-600">
            <p>You can cancel or reschedule your adventure by:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Calling us at (415) 555-1234</li>
              <li>Emailing hello@petventure.com</li>
              <li>Replying to your booking confirmation email</li>
            </ul>
            <p className="mt-4">
              Please include your booking reference number and preferred action (cancel or reschedule).
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-sunset-500 to-sunset-600 rounded-2xl p-8 text-center text-white">
          <h2 className="font-heading text-2xl font-bold mb-4">Need to Make a Change?</h2>
          <p className="text-white/80 mb-6">
            Contact us as soon as possible and we'll help you sort it out.
          </p>
          <a
            href="tel:+14155551234"
            className="inline-flex items-center gap-2 bg-white text-sunset-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Call (415) 555-1234
          </a>
        </div>
      </div>
    </PageLayout>
  )
}

