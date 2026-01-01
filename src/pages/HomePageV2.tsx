import harborImage from '../assets/Harbor-Twin-Lakes-Sunset_by-Ben-Ingram_2022.7.jpg'
import lighthouseImage from '../assets/Its-Beach_Lighthouse-Field_Sunset_Dogs_Film_by-Ben-Ingram_2022.jpg'
import seabrightImage from '../assets/Seabright-_10-8-24_ClearStoryVisuals-2-768x512.jpg'

export default function HomePageV2() {
  return (
    <div id="top" className="pt-20 bg-sand-50">
      {/* Hero Image */}
      <section className="bg-white">
        <div className="w-full h-64 sm:h-96 overflow-hidden">
          <img 
            src="/Dogs.png" 
            alt="Two dogs running on the beach" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Main Headline */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
            The Ultimate 4-Hour<br />
            Santa Cruz Beach Camp
          </h1>
          <p className="mt-4 text-sm sm:text-base font-medium text-sand-800 uppercase tracking-wide">
            Only serving South Bay Dog Parents <span className="mx-2">|</span> Adventures led by a CCPDT-Certified Trainer
          </p>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="bg-forest-700 py-4 px-4 text-white">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-heading font-semibold text-base sm:text-lg text-center">
            Guaranteed 1:1 individualized attention for maximum safety and focus.
          </span>
        </div>
      </section>

      {/* Three Columns Feature */}
      <section className="bg-white pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-forest-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-forest-900 mb-2 leading-tight">Structured<br/>Socialization:</h3>
              <p className="text-sand-700 text-sm sm:text-base font-medium leading-snug">Play that builds<br/>confidence, not chaos.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-forest-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-forest-900 mb-2 leading-tight">Ultimate<br/>Convenience:</h3>
              <p className="text-sand-700 text-sm sm:text-base font-medium leading-snug">Pick up, wear out,<br/>bring home clean.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-forest-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-forest-900 mb-2 leading-tight">Real-World<br/>Training:</h3>
              <p className="text-sand-700 text-sm sm:text-base font-medium leading-snug">Recall & anxiety reduction training<br/></p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Box */}
      <section className="bg-white pt-6 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-sand-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-forest-900 mb-8">
            What Pet Parents Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review 1 - Maria L. */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-sand-200">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sand-700 mb-4 leading-relaxed">
                "The convenience of pickup and drop-off is a game-changer! The socialization has helped so much with her behavior. She STOPPED barking at other dogs in my apartment!!!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-200 flex items-center justify-center text-forest-800 font-semibold">
                  ML
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Maria L.</p>
                  <p className="text-sm text-sand-600">Los Gatos</p>
                </div>
              </div>
            </div>

            {/* Review 2 - Sarah M. */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-sand-200">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sand-700 mb-4 leading-relaxed">
                "My golden retriever Max came back exhausted and happy! The 1:1 attention really made a difference. He's been so much calmer at home since starting these beach camps."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-200 flex items-center justify-center text-forest-800 font-semibold">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Sarah M.</p>
                  <p className="text-sm text-sand-600">San Jose</p>
                </div>
              </div>
            </div>

            {/* Review 3 - James D. */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-sand-200">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sand-700 mb-4 leading-relaxed">
                "Best investment for my anxious rescue dog! The certified trainer helped build her confidence, and the photos they send are absolutely adorable. Worth every penny!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-200 flex items-center justify-center text-forest-800 font-semibold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-forest-900">James D.</p>
                  <p className="text-sm text-sand-600">Campbell</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-sand-200">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sand-700 mb-4 leading-relaxed">
                "As a busy professional, I love that they handle everything. My pup gets exercise, training, and comes home clean. The video updates throughout the day are such a nice touch!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-200 flex items-center justify-center text-forest-800 font-semibold">
                  RT
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Robert T.</p>
                  <p className="text-sm text-sand-600">Saratoga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img 
                src={harborImage}
                alt="Sunset walk with dog at Harbor Twin Lakes"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img 
                src={lighthouseImage}
                alt="Dogs playing at sunset near lighthouse"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img 
                src={seabrightImage}
                alt="Dogs playing at Seabright Beach"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

