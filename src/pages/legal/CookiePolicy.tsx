import PageLayout from '../../components/PageLayout'

export default function CookiePolicy() {
  return (
    <PageLayout
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies on our website."
      heroColor="sand"
      breadcrumb={[{ name: 'Cookie Policy', href: '/cookie-policy' }]}
    >
      <div className="max-w-3xl mx-auto prose prose-sand prose-lg">
        <p className="text-sand-600 text-sm mb-8">
          <strong>Last Updated:</strong> December 1, 2024
        </p>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">What Are Cookies?</h2>
          <p className="text-sand-600">
            Cookies are small text files that are stored on your device when you visit a website. 
            They help websites remember your preferences and understand how you interact with the site.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">How We Use Cookies</h2>
          <p className="text-sand-600">
            PetVenture uses cookies to enhance your experience on our website. We use the following 
            types of cookies:
          </p>

          <h3 className="font-heading text-xl font-semibold text-sand-800 mt-6">Essential Cookies</h3>
          <p className="text-sand-600">
            These cookies are necessary for the website to function properly. They enable core 
            functionality such as page navigation and access to secure areas. The website cannot 
            function properly without these cookies.
          </p>

          <h3 className="font-heading text-xl font-semibold text-sand-800 mt-6">Analytics Cookies</h3>
          <p className="text-sand-600">
            We use analytics cookies to understand how visitors interact with our website. This 
            helps us improve our site and provide a better user experience. These cookies collect 
            information anonymously.
          </p>

          <h3 className="font-heading text-xl font-semibold text-sand-800 mt-6">Functional Cookies</h3>
          <p className="text-sand-600">
            These cookies remember your preferences and choices (such as your preferred contact 
            form settings) to provide a more personalized experience.
          </p>

          <h3 className="font-heading text-xl font-semibold text-sand-800 mt-6">Marketing Cookies</h3>
          <p className="text-sand-600">
            With your consent, we may use marketing cookies to deliver relevant advertisements 
            and track the effectiveness of our marketing campaigns.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden border border-sand-200">
              <thead className="bg-sand-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sand-900 font-semibold">Cookie</th>
                  <th className="px-4 py-3 text-left text-sand-900 font-semibold">Purpose</th>
                  <th className="px-4 py-3 text-left text-sand-900 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                <tr>
                  <td className="px-4 py-3 text-sand-700">_session</td>
                  <td className="px-4 py-3 text-sand-600">Essential session management</td>
                  <td className="px-4 py-3 text-sand-600">Session</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sand-700">_ga</td>
                  <td className="px-4 py-3 text-sand-600">Google Analytics visitor tracking</td>
                  <td className="px-4 py-3 text-sand-600">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sand-700">cookie_consent</td>
                  <td className="px-4 py-3 text-sand-600">Stores your cookie preferences</td>
                  <td className="px-4 py-3 text-sand-600">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Managing Cookies</h2>
          <p className="text-sand-600">
            You can control and manage cookies in several ways:
          </p>
          <ul className="text-sand-600 list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Browser settings:</strong> Most browsers allow you to refuse or delete cookies 
              through their settings. Check your browser's help documentation for instructions.
            </li>
            <li>
              <strong>Our cookie banner:</strong> When you first visit our site, you can choose 
              which types of cookies to accept through our cookie consent banner.
            </li>
            <li>
              <strong>Opt-out links:</strong> For third-party analytics cookies, you can use 
              opt-out tools provided by the service (e.g., Google Analytics opt-out).
            </li>
          </ul>
          <p className="text-sand-600 mt-4">
            Please note that disabling certain cookies may affect the functionality of our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Third-Party Cookies</h2>
          <p className="text-sand-600">
            Some cookies on our site are set by third-party services. We do not control these 
            cookies and recommend reviewing the privacy policies of these third parties:
          </p>
          <ul className="text-sand-600 list-disc list-inside space-y-2 mt-4">
            <li>Google Analytics (analytics)</li>
            <li>Stripe (payment processing)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Updates to This Policy</h2>
          <p className="text-sand-600">
            We may update this Cookie Policy from time to time. Any changes will be posted on this 
            page with an updated "Last Updated" date.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-sand-900">Contact Us</h2>
          <p className="text-sand-600">
            If you have questions about our use of cookies, please contact us:
          </p>
          <div className="bg-sand-50 rounded-xl p-6 mt-4">
            <p className="text-sand-700">
              <strong>Email:</strong> privacy@petventure.com<br />
              <strong>Phone:</strong> (415) 555-1234
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

