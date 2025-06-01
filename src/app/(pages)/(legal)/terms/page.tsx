export default function TermsAndConditions() {
  return (
    <div className=" mx-auto px-6 py-10 text-gray-100 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center mt-16">
        Terms and Conditions
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
          By accessing and using our website, services, applications, and
          products, you agree to comply with and be bound by the following Terms
          and Conditions (“Terms”). Please read them carefully. If you do not
          agree, do not use our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8">1. Services Offered</h2>
        <ul className="list-disc ml-6">
          <li>Self-paced and live courses</li>
          <li>SaaS-based tools, AI dashboards, and utilities</li>
          <li>Cybersecurity products, education, and consulting</li>
          <li>Downloadable and web-based software solutions</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8">2. Conditions of Use</h2>
        <p>All users must adhere to ethical and lawful conduct. You may not:</p>
        <ul className="list-disc ml-6">
          <li>
            Use our platforms for malicious, illegal, or deceptive purposes
          </li>
          <li>Distribute, copy, or reverse engineer our code or tools</li>
          <li>Share or sell login credentials or platform access</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8">3. User Eligibility</h2>
        <p>
          You must be at least 16 years old to use our services.
          Parents/guardians are responsible for minors accessing our platform.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8">
          4. Intellectual Property
        </h2>
        <p>
          All content, trademarks, source code, and design elements are the
          exclusive property of CodeIndu or its partners/licensors. Unauthorized
          use is strictly prohibited.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8">
          5. Payments and Subscriptions
        </h2>
        <ul className="list-disc ml-6">
          <li>All payments are in INR</li>
          <li>UPI is the current supported method</li>
          <li>Razorpay will be integrated in the future</li>
          <li>Subscriptions auto-renew unless manually canceled</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8">6. Refund Policy</h2>
        <p>
          Refunds are offered by default unless otherwise specified at the point
          of sale. Specific terms may apply to certain products or services.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-8">
          7. Account Suspension & Termination
        </h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate our
          policies or engage in harmful behavior, without prior notice.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-8">
          8. Limitation of Liability
        </h2>
        <p>
          CodeIndu shall not be liable for indirect, incidental, or
          consequential damages arising from the use or inability to use our
          services.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-8">
          9. Third-Party Links & Integrations
        </h2>
        <p>
          We may link to third-party websites or tools. We are not responsible
          for their content, privacy, or operations.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-8">10. Modifications</h2>
        <p>
          We may update these terms periodically. Continued use of our services
          implies your acceptance of any changes.
        </p>

        {/* Section 11 */}
        <h2 className="text-2xl font-semibold mt-8">
          11. Governing Law & Jurisdiction
        </h2>
        <p>
          These terms are governed under Indian law. Any disputes shall be
          resolved in the jurisdiction of Ballia, Uttar Pradesh.
        </p>

        {/* Section 12 */}
        <h2 className="text-2xl font-semibold mt-8">12. Contact</h2>
        <p>
          For questions, email us at{" "}
          <a
            href="mailto:support@codeindu.com"
            className="text-blue-400 underline"
          >
            support@codeindu.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
