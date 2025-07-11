"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex items-center justify-center px-4 py-10">
      <div className="mt-10 w-full max-w-3xl bg-gray-900/60 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-purple-800/30 to-indigo-900/20">
          <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
          <p className="text-gray-300 text-lg">
            Login to access your Mendsec dashboard and build your future.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>

          <form className="space-y-4">
            <Input label="Email" type="email" placeholder="you@example.com" />
            <PasswordInput
              show={showPassword}
              toggle={() => setShowPassword(!showPassword)}
            />

            <div className="flex justify-end text-sm">
              <a
                href="/forgot-password"
                className="text-blue-400 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <hr className="flex-grow border-gray-700" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-600 py-3 rounded-xl hover:bg-gray-800 transition"
            onClick={() => alert("Google Sign In Triggered")} // Replace with real handler
          >
            <FcGoogle size={20} />
            <span className="text-white cursor-pointer">
              Sign in with Google
            </span>
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Reusable Input
function Input({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
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

// Password Input with Show/Hide
function PasswordInput({
  show,
  toggle,
}: {
  show: boolean;
  toggle: () => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        Password
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="••••••••"
          className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-2 text-sm text-blue-400"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
