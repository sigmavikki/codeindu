"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Youtube, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-[#0066ff]/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-gradient-to-br from-[#0066ff] to-[#cc00ff] rounded-md flex items-center justify-center overflow-hidden">
            <span className="text-white font-bold text-xl font-mono">Σ</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[#0066ff]/40 opacity-70"></div>
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight font-mono",
              isScrolled ? "text-white" : "text-white"
            )}
          >
            CodeIndu
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-300 hover:text-[#0066ff] transition-colors"
          >
            Home
          </Link>
          <Link
            href="services"
            className="text-sm text-gray-300 hover:text-[#0066ff] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/courses"
            className="text-sm text-gray-300 hover:text-[#0066ff] transition-colors"
          >
            Course
          </Link>

          <Link
            href="youtube"
            className="text-sm text-gray-300 hover:text-[#0066ff] transition-colors"
          >
            Youtube
          </Link>

          <Link
            href="/blogs"
            className="text-sm text-gray-300 hover:text-[#0066ff] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="about-us"
            className="text-sm text-gray-300 hover:text-[#0066ff] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="contact-us"
            className="text-sm text-gray-300 hover:text-[#0066ff] transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://github.com/sigma-vikki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-[#0066ff]/20 cursor-pointer"
            >
              <Github size={18} />
            </Button>
          </Link>

          <Link
            href="https://www.youtube.com/@SigmaCode_X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-[#cc00ff]/20 cursor-pointer"
            >
              <Youtube size={18} />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white hover:bg-[#0066ff]/20"
          >
            <Twitter size={18} />
          </Button>
          <Link href="/login" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-[#0066ff] to-[#cc00ff] text-white hover:opacity-90 cursor-pointer">
              Login
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              className="text-lg py-3 px-4 text-white border-b border-gray-800 hover:bg-[#0066ff]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="text-lg py-3 px-4 text-white border-b border-gray-800 hover:bg-[#0066ff]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#content"
              className="text-lg py-3 px-4 text-white border-b border-gray-800 hover:bg-[#0066ff]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Content
            </Link>
            <Link
              href="#videos"
              className="text-lg py-3 px-4 text-white border-b border-gray-800 hover:bg-[#0066ff]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
            </Link>

            <div className="flex gap-3 px-4 py-3">
              <Button
                variant="outline"
                size="icon"
                className="text-gray-300 border-gray-700"
              >
                <Github size={18} />
              </Button>
              <Link
                href="https://www.youtube.com/@SigmaCode_X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="text-gray-300 border-gray-700"
                >
                  <Youtube size={18} />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="icon"
                className="text-gray-300 border-gray-700"
              >
                <Twitter size={18} />
              </Button>
            </div>
            <Link
              href="https://www.youtube.com/@SigmaCode_X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-[#0066ff] to-[#cc00ff] text-white mx-4">
                Subscribe
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
