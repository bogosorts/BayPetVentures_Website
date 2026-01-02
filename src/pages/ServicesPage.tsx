export default function ServicesPage() {
  return (
    <div id="services" className="pt-20 bg-sand-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 text-center mb-4">
            Our Services
          </h1>
          <p className="text-center text-sand-600 text-lg">
            Comprehensive dog adventures designed for confidence, socialization, and fun
          </p>
        </div>
      </section>

      {/* All-Inclusive Package */}
      <section className="bg-white border-t border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white border-2 border-forest-800 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-forest-900 mb-6">
              The All-Inclusive Package
            </h2>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
              {/* List */}
              <div className="space-y-3 flex-1">
                {[
                  { text: "Door-to-door pickup & drop-off ($60 value)", highlight: false },
                  { text: "Certified Training Session ($100 value)", highlight: false },
                  { text: "Beach Adventure & Socialization ($50 value)", highlight: false },
                  { text: "Bath, Brush & Shampoo Refresh ($40 value)", highlight: false },
                  { text: "Photo/Video Report Card (Priceless)", highlight: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-forest-900 font-medium text-base sm:text-lg leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="text-center flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-sand-200 pt-6 lg:pt-0 lg:pl-8">
                <p className="text-sand-500 text-lg mb-2">Total Value: <span className="line-through decoration-red-500 decoration-2">$250</span></p>
                <p className="font-heading text-6xl sm:text-7xl font-extrabold text-forest-800 leading-none">$199</p>
                <p className="text-sand-600 text-sm mt-2">per outing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-sand-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-forest-900 mb-12">
            What's Included
          </h2>
          
          <div className="space-y-8">
            {/* Service 1: Transportation */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-sand-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-3">
                    Door-to-Door Pickup & Drop-Off
                  </h3>
                  <p className="text-sand-700 text-base sm:text-lg leading-relaxed mb-3">
                    We handle all transportation so you don't have to. Your dog rides in a climate-controlled back seat set up for comfort and security with an extended platform (similar to a RuffRover-style setup). Pickup and drop-off is typically at your door, and times are scheduled directly with you.
                  </p>
                  <p className="text-sand-600 text-sm">
                    <strong>Service Area:</strong> South Bay pickups and drop-offs
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2: Training */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-sand-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-3">
                    Certified Training Session
                  </h3>
                  <p className="text-sand-700 text-base sm:text-lg leading-relaxed mb-3">
                    Outings are run by Charles, a certified trainer and experienced pet sitter with 20,000+ hours working with dogs. Each session includes real-world training focused on recall and anxiety reduction, designed to support confidence, focus, and healthy social exposure.
                  </p>
                  <p className="text-sand-600 text-sm">
                    Perfect for anxious dogs who are not well socialized. We do an initial consultation to see if the dog is trainable and determine the best approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3: Beach Adventure */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-sand-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-3">
                    Beach Adventure & Socialization
                  </h3>
                  <p className="text-sand-700 text-base sm:text-lg leading-relaxed mb-3">
                    The 4-hour timer starts when we pick up your dog. We drive to Santa Cruz West Cliff dog beach (or Sunny Cove for private reservations when appropriate), where we spend about 4 hours engaging in walks, play, and structured calm time. This is structured socialization that builds confidence, not chaos.
                  </p>
                  <p className="text-sand-600 text-sm">
                    <strong>Private Outings:</strong> One dog per outing to ensure individualized attention and maximum safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4: Grooming */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-sand-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-3">
                    Bath, Brush & Shampoo Refresh
                  </h3>
                  <p className="text-sand-700 text-base sm:text-lg leading-relaxed mb-3">
                    Your dog comes home clean and refreshed. We use Micro-Tek Shampoo for grooming, ensuring your pup looks and feels great after their adventure. If your dog has specific skin sensitivities or allergies, please let us know and we'll accommodate.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 5: Photos/Videos */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-sand-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-3">
                    Photo/Video Report Card
                  </h3>
                  <p className="text-sand-700 text-base sm:text-lg leading-relaxed">
                    We love taking lots of pictures and videos of the dogs! You'll receive a photo and video report card documenting your dog's adventure, so you can see all the fun they had. Feel free to ask for more photos or videos anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="bg-white border-t border-sand-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-forest-900 mb-8">
            Safety First
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Secure leash/harness handling at all times in public",
              "Fresh water + shade breaks + heat checks (we adjust plans for weather)",
              "Veterinary access planning (destinations and routes with nearby vet options)",
              "First-aid + emergency supplies kept in the car",
              "Private (1 dog) outings to reduce risk and keep attention focused",
              "Guaranteed 1:1 individualized attention for maximum safety"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sand-700 text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Payment */}
      <section className="bg-sand-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-forest-900 mb-8">
            Pricing & Payment
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-sand-200">
            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-forest-900 mb-2">All-Inclusive Package</h3>
                <p className="text-sand-700 text-lg">
                  <span className="font-bold text-forest-800">$199 per outing</span> (Total value: $250)
                </p>
              </div>
              <div className="border-t border-sand-200 pt-4">
                <h3 className="font-heading text-xl font-bold text-forest-900 mb-2">Payment Options</h3>
                <p className="text-sand-700">
                  Payment is after the outing via Venmo, Cash App, Zelle, Apple Pay, or cash.
                </p>
              </div>
              <div className="border-t border-sand-200 pt-4">
                <h3 className="font-heading text-xl font-bold text-forest-900 mb-2">Referral Discount</h3>
                <p className="text-sand-700">
                  Refer someone and they complete a booking? You receive <strong>50% off your next outing</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-white border-t border-sand-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-900 mb-4">
            Ready to Book?
          </h2>
          <p className="text-sand-700 text-lg mb-6">
            Most outings run on weekends (with occasional weekday availability). You can book same-day if you contact us before noon (subject to availability).
          </p>
          <a
            href="sms:+16504190278?body=Hi%2C%20do%20you%20have%20availability%20for%20a%20trip%20for%20our%20dog%3F"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 transition-colors text-forest-900 font-heading font-bold text-base sm:text-lg py-3 px-6 rounded-full shadow-lg transform hover:scale-105 duration-200"
          >
            Text Us! (650) 419-0278
          </a>
        </div>
      </section>
    </div>
  )
}

