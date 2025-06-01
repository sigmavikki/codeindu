export default function PrivacyPolicy() {
  return (
    <div className="mx-auto px-6 py-10 text-gray-100 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center mt-20">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-400 text-center mb-8">
        Effective Date: 01-Jun-2025
      </p>

      <div className="space-y-6 text-base leading-7">
        <p>
          <strong>Company:</strong> CodeIndu
        </p>
        <p>
          <strong>Founder & CEO:</strong> Vikki Verma
        </p>
        <p>
          <strong>Address:</strong> Sikanderpur, Ballia, Uttar Pradesh, 277303
        </p>
        <p>
          <strong>Contact:</strong>{" "}
          <a
            href="mailto:support@codeindu.com"
            className="text-blue-400 underline"
          >
            support@codeindu.com
          </a>
        </p>

        <p>
          This Privacy Policy explains how CodeIndu (&ldquo;we&#34;,
          &ldquo;our&ldquo;, &ldquo;us&#34;) collects, uses, and safeguards your
          personal information when you use our platforms, services, and
          products.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6">
          <li>Personal details: name, email, phone number</li>
          <li>Usage data: course progress, feature usage, session behavior</li>
          <li>
            Payment data: transaction IDs, UPI references (no card data stored)
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Data</h2>
        <ul className="list-disc ml-6">
          <li>To deliver and improve our services and user experience</li>
          <li>To provide customer and technical support</li>
          <li>
            For internal analytics, product enhancements, and marketing (with
            opt-out)
          </li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8">3. Data Sharing</h2>
        <p>
          We do not sell your personal information. Data is shared only with
          trusted third-party service providers such as payment gateways,
          analytics tools, and communication platforms solely for operational
          purposes.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8">4. Cookies & Tracking</h2>
        <p>
          We use cookies and similar technologies to personalize your
          experience, analyze traffic, and support site functionality. You can
          manage cookie preferences through your browser settings.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8">5. Data Security</h2>
        <p>
          We implement administrative, technical, and physical safeguards to
          protect your personal data from unauthorized access, disclosure,
          alteration, or destruction.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8">6. Your Rights</h2>
        <ul className="list-disc ml-6">
          <li>
            You have the right to access and request correction of your data
          </li>
          <li>You can request deletion of your personal data</li>
          <li>
            To exercise your rights, contact us at{" "}
            <a
              href="mailto:support@codeindu.com"
              className="text-blue-400 underline"
            >
              support@codeindu.com
            </a>
          </li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-8">7. Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with the revised effective date. Continued use of
          our services implies acceptance.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-8">8. Contact</h2>
        <p>
          For any privacy concerns or requests, contact us at:{" "}
          <a
            href="mailto:support@codeindu.com"
            className="text-blue-400 underline"
          >
            support@codeindu.com
          </a>
        </p>
      </div>
    </div>
  );
}
