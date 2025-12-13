import PageLayout from '../../components/PageLayout'

export default function TermsOfService() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our services."
      heroColor="ocean"
      breadcrumb={[{ name: 'Terms of Service', href: '/terms-of-service' }]}
    >
      <div className="max-w-3xl mx-auto prose prose-sand prose-lg">
        <p className="text-sand-600 text-sm mb-8">
          <strong>Last Updated:</strong> December 1, 2024
        </p>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">1. Agreement to Terms</h2>
          <p className="text-sand-600">
            By booking an adventure with PetVenture or using our website, you agree to be bound by 
            these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">2. Our Services</h2>
          <p className="text-sand-600">
            PetVenture provides outdoor adventure experiences for dogs in the San Francisco Bay Area. 
            Our services include door-to-door pickup and drop-off, guided outdoor adventures, and 
            care of your pet during the adventure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">3. Eligibility Requirements</h2>
          <p className="text-sand-600">To use our services, your dog must:</p>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>Be current on all required vaccinations (Rabies, DHPP, Bordetella)</li>
            <li>Be on current flea and tick prevention</li>
            <li>Be in good health and fit for the chosen activity level</li>
            <li>Be non-aggressive toward people and other dogs</li>
            <li>Be at least 6 months old</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">4. Booking and Payment</h2>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>All bookings are subject to availability</li>
            <li>Payment is due at the time of booking</li>
            <li>Prices are subject to change without notice</li>
            <li>We accept major credit cards</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">5. Cancellation and Refunds</h2>
          <p className="text-sand-600">
            Please refer to our <a href="/cancellation-policy" className="text-forest-600 underline">Cancellation Policy</a> for 
            detailed information about cancellations, rescheduling, and refunds.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">6. Your Responsibilities</h2>
          <p className="text-sand-600">As a client, you agree to:</p>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>Provide accurate information about your dog's health, behavior, and needs</li>
            <li>Ensure your dog meets all eligibility requirements</li>
            <li>Have your dog ready for pickup at the scheduled time</li>
            <li>Provide emergency contact information</li>
            <li>Authorize emergency veterinary care if needed</li>
            <li>Notify us of any changes in your dog's health or behavior</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">7. Our Responsibilities</h2>
          <p className="text-sand-600">We agree to:</p>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>Provide safe, supervised adventures for your dog</li>
            <li>Employ trained, certified guides</li>
            <li>Maintain appropriate insurance coverage</li>
            <li>Contact you immediately in case of emergency</li>
            <li>Provide photo updates during adventures</li>
            <li>Return your dog at the scheduled time</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">8. Assumption of Risk</h2>
          <p className="text-sand-600">
            You acknowledge that outdoor activities carry inherent risks, including but not limited to 
            injury, illness, or exposure to wildlife and environmental hazards. While we take every 
            precaution to ensure safety, you assume these risks by using our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">9. Liability Waiver</h2>
          <p className="text-sand-600">
            Prior to your dog's first adventure, you will be required to sign a liability waiver. 
            This waiver limits our liability for injuries or incidents that may occur during adventures, 
            except in cases of gross negligence on our part.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">10. Right to Refuse Service</h2>
          <p className="text-sand-600">
            We reserve the right to refuse or discontinue service to any dog that poses a safety risk, 
            displays aggressive behavior, or does not meet our eligibility requirements. In such cases, 
            we will provide a prorated refund.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">11. Photos and Media</h2>
          <p className="text-sand-600">
            We may take photos and videos of your dog during adventures. By using our services, you 
            grant us permission to use these images for marketing purposes unless you opt out in writing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">12. Changes to Terms</h2>
          <p className="text-sand-600">
            We may modify these Terms of Service at any time. Continued use of our services after 
            changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">13. Contact</h2>
          <p className="text-sand-600">
            For questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-sand-50 rounded-xl p-6 mt-4">
            <p className="text-sand-700">
              <strong>Email:</strong> hello@petventure.com<br />
              <strong>Phone:</strong> (415) 555-1234
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

