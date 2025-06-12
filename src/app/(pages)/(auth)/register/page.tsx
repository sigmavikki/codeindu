"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [role, setRole] = useState<"student" | "business">("student");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl bg-gray-900/60 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Left Side */}
        <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-purple-800/30 to-indigo-900/20">
          <h1 className="text-4xl font-bold mb-6">Register</h1>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Welcome to <span className="text-blue-400">Codeindu</span>
            </h3>
            <p className="text-gray-300">
              Grow with high-tech, faster and future-based technology.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 space-y-6">
          {/* Toggle Buttons */}
          <div className="flex gap-4 mb-6 justify-center">
            <button
              className={`px-5 py-2 cursor-pointer rounded-full transition ${
                role === "student"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setRole("student")}
            >
              Student
            </button>
            <button
              className={`px-5 py-2 cursor-pointer rounded-full transition ${
                role === "business"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setRole("business")}
            >
              Business
            </button>
          </div>

          {/* Forms */}
          <form className="space-y-4">
            {role === "student" ? (
              <>
                <Input label="Full Name" placeholder="ex. Vikki..." />
                <Input label="Username" placeholder="ex. vikki_123" />
                <Input
                  label="Email"
                  placeholder="example@mail.com"
                  type="email"
                />
                <Input label="Phone Number" placeholder="+1234567890" />
                <Input label="Date of Birth" type="date" placeholder="DOB" />
                <Select label="Gender" options={["Male", "Female", "Other"]} />
                <Input
                  label="Password"
                  type="password"
                  placeholder="********"
                />
              </>
            ) : (
              <>
                <Input label="Full Name" placeholder="ex. Vikki..." />
                <Input label="Position" placeholder="ex. Manager" />
                <Input label="Company Name" placeholder="ex. TechCorp" />
                <Input
                  label="Email"
                  placeholder="business@example.com"
                  type="email"
                />
                <Input label="Phone Number" placeholder="+1234567890" />
                <TextArea
                  label="Business Address"
                  placeholder="Street, City, ZIP..."
                />
              </>
            )}

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="mt-1"
              />
              <label>
                I agree to the{" "}
                <a href="/terms" className="text-blue-400 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={!agreed}
              className={`w-full cursor-pointer ${
                agreed
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-600 cursor-not-allowed"
              } transition text-white font-semibold py-3 rounded-xl`}
            >
              {role === "student"
                ? "Register as Student"
                : "Register as Business"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <hr className="flex-grow border-gray-700" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Google Auth */}
          <button
            type="button"
            className="w-full flex cursor-pointer items-center justify-center gap-3 border border-gray-600 py-3 rounded-xl hover:bg-gray-800 transition"
            onClick={() => alert("Google Sign In Triggered")}
          >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </button>
          <p className="text-sm text-gray-400 text-center mt-4">
            Have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

// Input Component
function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

// Select Component
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <select className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

// TextArea Component
function TextArea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        rows={3}
        className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
