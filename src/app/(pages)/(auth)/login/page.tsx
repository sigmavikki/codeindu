import { FaWhatsapp } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 px-4">
      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-2xl w-full max-w-md border border-white/10">
        <h1 className="text-4xl font-extrabold text-white mb-4 text-center">
          Sign in to CodeIndu
        </h1>
        <p className="text-sm text-gray-300 text-center mb-6">
          Authentication is currently disabled. Contact support directly.
        </p>

        <a
          href="https://wa.me/917380365295"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md mb-8 transition-all"
        >
          <FaWhatsapp className="text-xl" />
          Message us on WhatsApp
        </a>

        <div className="border-t border-white/20 my-6" />

        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              className="mt-1 w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="mt-1 w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
