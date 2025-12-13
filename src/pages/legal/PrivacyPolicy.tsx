import PageLayout from '../../components/PageLayout'

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
      heroColor="forest"
      breadcrumb={[{ name: 'Privacy Policy', href: '/privacy-policy' }]}
    >
      <div className="max-w-3xl mx-auto prose prose-sand prose-lg">
        <p className="text-sand-600 text-sm mb-8">
          <strong>Last Updated:</strong> December 1, 2024
        </p>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Introduction</h2>
          <p className="text-sand-600">
            PetVenture ("we," "our," or "us") respects your privacy and is committed to protecting your 
            personal information. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you use our services or visit our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Information We Collect</h2>
          
          <h3 className="font-heading text-xl font-semibold text-sand-800 mt-6">Personal Information</h3>
          <p className="text-sand-600">When you book an adventure or contact us, we may collect:</p>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Pet information (name, breed, age, health conditions)</li>
            <li>Payment information (processed securely through our payment provider)</li>
            <li>Emergency contact information</li>
            <li>Veterinarian contact information</li>
          </ul>

          <h3 className="font-heading text-xl font-semibold text-sand-800 mt-6">Automatically Collected Information</h3>
          <p className="text-sand-600">When you visit our website, we may automatically collect:</p>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">How We Use Your Information</h2>
          <p className="text-sand-600">We use the information we collect to:</p>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>Provide and manage our adventure services</li>
            <li>Process payments and send booking confirmations</li>
            <li>Communicate about your bookings (updates, photos, schedules)</li>
            <li>Contact you in case of emergency</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our services and website</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Information Sharing</h2>
          <p className="text-sand-600">We do not sell your personal information. We may share your information with:</p>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>Our team members who need it to provide services</li>
            <li>Payment processors to complete transactions</li>
            <li>Veterinary clinics in case of emergency</li>
            <li>Service providers who assist our operations (under strict confidentiality)</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Data Security</h2>
          <p className="text-sand-600">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the Internet is 100% secure, and we cannot guarantee 
            absolute security.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Your Rights</h2>
          <p className="text-sand-600">You have the right to:</p>
          <ul className="text-sand-600 list-disc list-inside space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
          <p className="text-sand-600 mt-4">
            To exercise these rights, please contact us at privacy@petventure.com.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Children's Privacy</h2>
          <p className="text-sand-600">
            Our services are not directed to individuals under 18. We do not knowingly collect 
            personal information from children. If you believe we have collected information from 
            a child, please contact us immediately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Changes to This Policy</h2>
          <p className="text-sand-600">
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new policy on this page and updating the "Last Updated" date. We encourage 
            you to review this policy periodically.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Contact Us</h2>
          <p className="text-sand-600">
            If you have questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-sand-50 rounded-xl p-6 mt-4">
            <p className="text-sand-700">
              <strong>Email:</strong> privacy@petventure.com<br />
              <strong>Phone:</strong> (415) 555-1234<br />
              <strong>Address:</strong> San Francisco, CA
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

