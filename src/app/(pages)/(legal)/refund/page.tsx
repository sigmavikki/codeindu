export default function RefundCancellationPolicy() {
  return (
    <div className="mx-auto px-6 py-10 text-gray-100 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center mt-20">
        Refund & Cancellation Policy
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

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8">1. Refunds</h2>
        <p>
          All products and services offered by CodeIndu are eligible for a
          refund unless explicitly marked as non-refundable at the time of
          purchase. Eligible refund requests will be processed within 7 working
          days from the date of approval.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8">2. Non-Refundable Items</h2>
        <p>
          Any course, service, or digital product marked as{" "}
          <strong>“non-refundable”</strong> during the transaction process is
          strictly not eligible for refunds under any circumstances.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8">3. Cancellations</h2>
        <p>
          Subscription-based services can be cancelled at any time from your
          account settings or by contacting our support team. However, charges
          already processed before cancellation are{" "}
          <strong>non-refundable</strong>, unless otherwise stated explicitly.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8">4. Contact</h2>
        <p>For refund or cancellation inquiries, please contact us at:</p>
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
