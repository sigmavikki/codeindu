import Link from "next/link";
import {
  Github,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Background grid */}
      <footer className="py-12 border-t border-[#0066ff]/20 relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="col-span-1 md:col-span-1">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/logo/logo.svg"
                    alt="mendsec Logo"
                    width={100} 
                    height={80}
                    priority
                    quality={100}
                    style={{
                      maxHeight: "150px", 
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </Link>
                <br />
                <br />
                <p className="text-gray-400 text-sm mb-6">
                  A tech content platform for coders, ethical hackers, AI
                  enthusiasts, and gadget lovers.
                </p>

                <div className="flex gap-3">
                  <Link
                    href="https://www.youtube.com/@mendsec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0066ff]/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0066ff]/20"
                  >
                    <Youtube size={16} />
                  </Link>
                  <Link
                    href="https://github.com/sigmavikki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0066ff]/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0066ff]/20"
                  >
                    <Github size={16} />
                  </Link>
                  <Link
                    href="https://x.com/mendsec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0066ff]/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0066ff]/20"
                  >
                    <Twitter size={16} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/mendsec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0066ff]/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0066ff]/20"
                  >
                    <Instagram size={16} />
                  </Link>

                  <Link
                    href="https://linkedin.in/mendsec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0066ff]/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0066ff]/20"
                  >
                    <Linkedin size={16} />
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Content</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Ethical Hacking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      AI & Machine Learning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Gadget Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Tech News
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Tools & Downloads
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      GitHub Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Learning Paths
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Community Forum
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Premium Content
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <Mail size={14} />
                    <span>support@mendsec.com</span>
                  </li>
                  <li>
                    <Link
                      href="about-us"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Sponsorships
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="feedback"
                      className="text-gray-400 hover:text-[#0066ff] text-sm"
                    >
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#0066ff]/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm">
                © 2025 Mendsec. All rights reserved.
              </div>

              <div className="flex gap-6 mt-4 md:mt-0">
                <Link
                  href="terms"
                  className="text-gray-500 hover:text-[#0066ff] text-sm"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="privacy"
                  className="text-gray-500 hover:text-[#0066ff] text-sm"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
