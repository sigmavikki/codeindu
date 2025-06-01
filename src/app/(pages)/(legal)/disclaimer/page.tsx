export default function Disclaimer() {
  return (
    <div className="mx-auto px-6 py-10 text-gray-100 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center mt-20">Disclaimer</h1>
      <p className="text-sm text-gray-400 text-center mb-8">
        Effective Date: 01-Jun-2025
      </p>

      <div className="space-y-6 text-base leading-7">
        <p>
          <strong>Company:</strong> CodeIndu
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8">1. No Warranties</h2>
        <p>
          All content provided through our website, courses, tools, or platforms
          is intended strictly for educational purposes. CodeIndu does not
          guarantee any specific results, certifications, or employment
          outcomes.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8">2. Cybersecurity Risks</h2>
        <p>
          Any cybersecurity tools or knowledge provided are solely for ethical,
          legal, and educational use. Users are fully responsible for ensuring
          compliance with applicable laws. Misuse may lead to legal
          consequences, for which CodeIndu bears no liability.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8">3. Software Use</h2>
        <p>
          Users are expected to operate only licensed and authorized software in
          accordance with local and international copyright regulations. Any
          misuse or pirated software usage is solely at the user’s risk.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8">
          4. Limitation of Liability
        </h2>
        <p>
          CodeIndu shall not be held liable for any loss of data, direct or
          indirect damages, or incidental consequences arising from the use of
          our products, platforms, or services.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8">5. Contact</h2>
        <p>For any clarification or legal inquiries, contact us at:</p>
        <ul className="ml-6 list-disc">
          <li>
            Email:{" "}
            <a
              href="mailto:support@codeindu.com"
              className="text-blue-400 underline"
            >
              support@codeindu.com
            </a>
          </li>
          <li>Address: Sikanderpur, Ballia, Uttar Pradesh, 277303</li>
        </ul>
      </div>
    </div>
  );
}
