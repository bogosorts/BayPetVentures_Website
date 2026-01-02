export default function FAQPage() {
  const sections = [
    {
      title: "🌲 The Experience & Training Philosophy",
      faqs: [
        {
          question: "What exactly happens during an outing?",
          answer: "The 5-hour timer starts at pickup. We drive from the South Bay to Santa Cruz (typically West Cliff Dog Beach). The trip includes about 4 hours of structured beach walks, supervised play (if appropriate), and calm decompression time to build confidence. We then drive your dog back home."
        },
        {
          question: "Is this suitable for anxious or poorly socialized dogs?",
          answer: "Yes, this is a primary focus of our program. Because the outings are private (1:1), they are perfect for dogs who get overwhelmed in groups or need confidence without pressure. We do an initial consultation to assess your dog's temperament and trainability to ensure a good fit."
        },
        {
          question: "How quickly will I see improvements in my dog's behavior?",
          answer: "For most dogs, we see noticeable improvements within just 2 outings. You can expect to see an increase in confidence and significantly less anxiety when around other dogs. Crucially, the experience and stability gained at the beach transfers smoothly to city and suburban environments, making your daily walks at home more manageable."
        },
        {
          question: "What treats do you use for training?",
          answer: "We use fresh organic mozzarella in small amounts as a gentle, high-value reward to reinforce focus and calm behavior."
        },
        {
          question: "Do you use private beaches?",
          answer: "Yes, when appropriate for the dog's needs, we utilize Sunny Cove (via private reservation) for a calmer, more controlled environment away from public crowds."
        },
        {
          question: "What if my dog is reactive or aggressive dogs are nearby?",
          answer: "We never force interactions. If another dog appears unstable, or if your dog shows signs of anxiety (pacing, fixation, whining), we immediately create distance and switch to calm walking. The outing adapts to your dog's comfort level, not the environment."
        }
      ]
    },
    {
      title: "🚙 Logistics & Pricing",
      faqs: [
        {
          question: "What is the price and what is included?",
          answer: "$200 per outing. Includes: Round-trip transportation, private 1:1 handling, confidence training, water/shade breaks, and specific socialization exposure. Payment: Accepted after the outing via Venmo, Cash App, Zelle, Apple Pay, or cash."
        },
        {
          question: "Do you offer referral discounts?",
          answer: "Yes. If you refer someone and they complete a booking, you receive 50% off your next outing."
        },
        {
          question: "How do pickup and drop-off work?",
          answer: "Area: South Bay (exact neighborhood confirmed upon booking). Transport: Your dog rides in a secure, climate-controlled back seat setup. Access: We generally do not need house keys if you meet us at the door."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Booking: Same-day booking is available if you contact us before noon (subject to availability). Fees: There is a $20 fee for cancellations or rescheduling. Our Cancellations: If we cancel due to weather or safety, there is no fee, and we will offer a discount on your next booking."
        }
      ]
    },
    {
      title: "🛡️ Safety & Health",
      faqs: [
        {
          question: "Who is handling my dog?",
          answer: "Outings are run by Charles, a certified trainer and experienced pet sitter with 20,000+ hours of hands-on work with dogs, ranging from puppies to high-drive working breeds."
        },
        {
          question: "What safety precautions are in place?",
          answer: "Secure Handling: Leashes/harnesses are secured at all times in public. Health: Fresh water, frequent shade breaks, and strict heat checks. Preparation: Routes are chosen with nearby veterinary access in mind; first-aid and emergency supplies are always in the vehicle. Private Attention: Only one dog per trip minimizes risk and prevents pack-mentality issues."
        },
        {
          question: "What are the vaccination requirements?",
          answer: "Because outings are private, we do not require Bordetella (kennel cough) vaccines. We simply ask that your dog is generally healthy, flea-free, and safe to handle. Please inform us of any medical needs or physical limitations in advance."
        }
      ]
    },
    {
      title: "🛁 Grooming & Care",
      faqs: [
        {
          question: "Do you offer grooming?",
          answer: "We offer a professional \"refresh\" grooming service using master groomer techniques. This is designed to be a positive, low-stress experience."
        },
        {
          question: "What products and methods do you use?",
          answer: "We prioritize the health of your dog's skin and coat: Face & Head: We use Johnson's Baby Shampoo for a tear-free clean around the eyes and face. Body: We use Micro-Tek Shampoo (originally developed for NASA research) for the best deep clean. Ears: Cleaned with professional ear wash solution and protected with cotton balls during the bath to prevent water entry. Paws: A soft scrub brush is used to clean between toes and paw pads. Technique: We never bathe a matted dog (we brush first), and we use cream rinse on long-coated dogs. Dogs are towel-dried and then air-dried or blow-dried while brushing."
        }
      ]
    }
  ]

  return (
    <div id="faq" className="pt-20 bg-sand-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-sand-600 text-lg">
            Private Dog Outings & Training – Everything you need to know
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white border-t border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-16">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={sectionIndex > 0 ? "border-t border-sand-200 pt-12" : ""}>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-900 mb-8">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {section.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-sand-200 pb-8 last:border-b-0 last:pb-0">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-sand-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-sand-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-sand-700 text-lg mb-6">
            Reach out to us and we'll be happy to help!
          </p>
          <a
            href="sms:+16504190278?body=Hi%2C%20do%20you%20have%20availability%20for%20a%20dog%20trip"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 transition-colors text-forest-900 font-heading font-bold text-base sm:text-lg py-3 px-6 rounded-full shadow-lg transform hover:scale-105 duration-200"
          >
            Text Us! (650) 419-0278
          </a>
        </div>
      </section>
    </div>
  )
}
