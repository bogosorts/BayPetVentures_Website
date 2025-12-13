import { useBooking } from '../context/BookingContext'
import ScheduleSelector from './booking/ScheduleSelector'
import PetForm from './booking/PetForm'
import CustomerForm from './booking/CustomerForm'
import BookingCheckout from './booking/BookingCheckout'

export default function BookingSection() {
  const { currentStep } = useBooking()

  const steps = [
    { number: 1, label: 'Choose Experience' },
    { number: 2, label: 'Add Pets' },
    { number: 3, label: 'Your Info' },
    { number: 4, label: 'Confirm & Pay' },
  ]

  return (
    <section id="book" className="py-20 lg:py-32 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl" />
      
      {/* Paw Print Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-white text-6xl">🐾</div>
        <div className="absolute top-40 right-40 text-white text-4xl">🐾</div>
        <div className="absolute bottom-32 left-1/3 text-white text-5xl">🐾</div>
        <div className="absolute bottom-20 right-20 text-white text-4xl">🐾</div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-forest-200 font-semibold text-sm uppercase tracking-wider mb-4">
            Book an Adventure
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Pup's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-300 to-sunset-400">
              Best Day Ever?
            </span>
          </h2>
          <p className="text-lg text-forest-100 max-w-2xl mx-auto">
            Choose an adventure, add your furry friend, and we'll take care of the rest — from pickup to playtime to drop-off!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      currentStep === step.number
                        ? 'bg-sunset-500 text-white scale-110'
                        : currentStep > step.number
                        ? 'bg-forest-300 text-forest-800'
                        : 'bg-forest-800/50 text-forest-400'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium hidden sm:block ${
                      currentStep >= step.number ? 'text-forest-200' : 'text-forest-500'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-1 mx-2 rounded-full transition-all ${
                      currentStep > step.number ? 'bg-forest-300' : 'bg-forest-800/50'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-sand-50 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {currentStep === 1 && <ScheduleSelector />}
          {currentStep === 2 && <PetForm />}
          {currentStep === 3 && <CustomerForm />}
          {currentStep === 4 && <BookingCheckout />}
        </div>

        {/* Service Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
            <div className="w-10 h-10 bg-sunset-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-sunset-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-sm mb-1">Door-to-Door</h3>
            <p className="text-forest-200 text-xs">We pick up & drop off</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
            <div className="w-10 h-10 bg-ocean-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-ocean-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-sm mb-1">Live Camera</h3>
            <p className="text-forest-200 text-xs">Watch in real-time</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
            <div className="w-10 h-10 bg-forest-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-lg">🛁</span>
            </div>
            <h3 className="font-heading font-bold text-white text-sm mb-1">Fresh & Clean</h3>
            <p className="text-forest-200 text-xs">Bathed & brushed</p>
          </div>
          <div className="bg-gradient-to-br from-sunset-500/30 to-sunset-600/30 backdrop-blur-sm rounded-xl p-5 text-center ring-2 ring-sunset-400/50">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-lg">🚗✨</span>
            </div>
            <h3 className="font-heading font-bold text-white text-sm mb-1">Car Stays Clean</h3>
            <p className="text-sunset-200 text-xs">No mess, guaranteed!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
