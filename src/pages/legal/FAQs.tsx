import { useState } from 'react'
import PageLayout from '../../components/PageLayout'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What exactly is PetVenture?',
          a: 'PetVenture is a premium dog adventure service that takes your pup on guided outdoor experiences across the Bay Area. Unlike traditional daycare, we provide real adventures — from beach trips to mountain hikes — giving your dog enriching experiences while you\'re at work or away.',
        },
        {
          q: 'What areas do you serve?',
          a: 'We serve the entire San Francisco Bay Area, including San Francisco, Oakland, Berkeley, Marin County, the Peninsula, and South Bay. We offer door-to-door pickup and drop-off within our service area.',
        },
        {
          q: 'Is my dog a good fit for PetVenture?',
          a: 'We welcome dogs of all ages, sizes, and energy levels! We offer different adventure types to match your dog\'s temperament — from relaxed wine country walks to intense mountain treks. During our initial consultation, we\'ll help determine the best experiences for your pup.',
        },
      ],
    },
    {
      category: 'Booking & Scheduling',
      questions: [
        {
          q: 'How do I book an adventure?',
          a: 'Simply fill out our contact form or give us a call. We\'ll schedule a brief consultation to learn about your dog, then help you choose the perfect adventure. You can book individual trips or set up recurring adventures.',
        },
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least 1 week in advance, especially for popular weekend trips. However, we sometimes have last-minute availability, so don\'t hesitate to reach out!',
        },
        {
          q: 'Can I book recurring adventures?',
          a: 'Absolutely! Many of our clients book weekly or bi-weekly adventures. We offer discounts for recurring bookings and can set up a regular schedule that works for you.',
        },
      ],
    },
    {
      category: 'Safety & Care',
      questions: [
        {
          q: 'How do you ensure my dog\'s safety?',
          a: 'Safety is our top priority. All guides are certified in pet first aid, we maintain a maximum 4-dog ratio per guide, carry first aid supplies on every trip, and use GPS tracking. We\'re also fully insured and bonded.',
        },
        {
          q: 'What vaccinations are required?',
          a: 'All dogs must be current on rabies, DHPP, and Bordetella vaccinations. We also require flea/tick prevention. You\'ll need to provide proof of vaccinations before your first adventure.',
        },
        {
          q: 'What if my dog has special needs or medications?',
          a: 'We\'re experienced with dogs who have special needs, dietary requirements, or medications. Just let us know during the consultation and we\'ll accommodate your pup\'s needs.',
        },
        {
          q: 'How do you handle emergencies?',
          a: 'All guides are trained in pet first aid and carry emergency supplies. We have relationships with veterinary clinics along all our routes. In case of emergency, we\'ll immediately contact you and transport your dog to the nearest vet.',
        },
      ],
    },
    {
      category: 'The Experience',
      questions: [
        {
          q: 'How long are the adventures?',
          a: 'We offer half-day adventures (4-5 hours), full-day adventures (6-8 hours), and overnight experiences (2 days). Time includes door-to-door transportation.',
        },
        {
          q: 'What do you provide during adventures?',
          a: 'We provide fresh water, treats, meals (for full-day trips), poop bags, first aid supplies, and all necessary gear. For overnight trips, we provide camping equipment, food, and bedding.',
        },
        {
          q: 'Will I receive updates during the adventure?',
          a: 'Yes! We send photo and video updates throughout the day so you can see your pup having fun. You\'ll also receive a summary and photo album after each adventure.',
        },
        {
          q: 'How do you match dogs in groups?',
          a: 'We carefully match dogs by energy level, size, play style, and temperament. We keep groups small (max 4 dogs) to ensure personalized attention and safe social interactions.',
        },
      ],
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'What are your prices?',
          a: 'Half-day adventures start at $89, full-day adventures at $149, and overnight adventures at $299. We offer package discounts for recurring bookings and multi-dog families.',
        },
        {
          q: 'When do I pay?',
          a: 'Payment is due at the time of booking. We accept all major credit cards and can set up automatic payments for recurring adventures.',
        },
        {
          q: 'Do you offer refunds?',
          a: 'Yes, we offer full refunds for cancellations made 24+ hours before the scheduled adventure. See our cancellation policy for full details.',
        },
      ],
    },
  ]

  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about PetVenture adventures."
      heroColor="forest"
      breadcrumb={[{ name: 'FAQs', href: '/faqs' }]}
    >
      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h2 className="font-heading text-xl font-bold text-sand-900 mb-4">{category.category}</h2>
            <div className="space-y-3">
              {category.questions.map((faq, qIndex) => {
                const index = catIndex * 100 + qIndex
                const isOpen = openIndex === index
                return (
                  <div key={qIndex} className="bg-white rounded-xl border border-sand-200 overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-sand-50 transition-colors"
                    >
                      <span className="font-semibold text-sand-900 pr-4">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-sand-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-sand-600 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="max-w-3xl mx-auto mt-12 bg-forest-50 rounded-2xl p-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-sand-900 mb-4">Still Have Questions?</h2>
        <p className="text-sand-600 mb-6">
          We're here to help! Reach out and we'll get back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@petventure.com"
            className="bg-gradient-to-r from-forest-500 to-forest-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Email Us
          </a>
          <a
            href="tel:+14155551234"
            className="bg-white text-forest-600 border-2 border-forest-500 px-6 py-3 rounded-full font-semibold hover:bg-forest-50 transition-all"
          >
            Call (415) 555-1234
          </a>
        </div>
      </div>
    </PageLayout>
  )
}

