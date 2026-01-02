export default function ContactPage() {
  return (
    <div id="contact" className="pt-20 bg-sand-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 text-center mb-4">
            Contact Us
          </h1>
          <p className="text-center text-sand-600 text-lg">
            Get in touch to book your dog's adventure
          </p>
        </div>
      </section>

      {/* Contact Buttons */}
      <section className="bg-white border-t border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Button */}
            <a
              href="mailto:charleschow1999@gmail.com"
              className="group rounded-2xl border-2 border-forest-800 bg-white p-8 hover:bg-forest-50 transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-forest-800 group-hover:text-forest-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-2">
                  Email Us
                </h2>
                <p className="text-sand-700 text-base sm:text-lg break-all">
                  charleschow1999@gmail.com
                </p>
              </div>
            </a>

            {/* Phone Button */}
            <a
              href="tel:+16504190278"
              className="group rounded-2xl border-2 border-forest-800 bg-white p-8 hover:bg-forest-50 transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-forest-800 group-hover:text-forest-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-2">
                  Call Us
                </h2>
                <p className="text-sand-700 text-base sm:text-lg">
                  (650) 419-0278
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="bg-sand-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-900 mb-4">
            Quick Text Booking
          </h2>
          <p className="text-sand-700 text-lg mb-6">
            Text us to quickly book your dog's adventure
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

