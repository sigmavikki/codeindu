"use client";

import { useState } from "react";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "5",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send data to backend (e.g., Firebase or Django API)
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "", rating: "5" });
  };

  return (
    <div className="mx-auto px-6 py-12 text-gray-100 bg-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 mt-20">Feedback</h1>
      <p className="text-center text-gray-400 mb-10">
        We value your insights. Please share your thoughts below.
      </p>

      {submitted ? (
        <div className="bg-green-700 p-4 rounded-md text-center">
          Thank you for your feedback! 🎉
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            >
              <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
              <option value="4">⭐️⭐️⭐️⭐️ Good</option>
              <option value="3">⭐️⭐️⭐️ Average</option>
              <option value="2">⭐️⭐️ Poor</option>
              <option value="1">⭐️ Terrible</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}
