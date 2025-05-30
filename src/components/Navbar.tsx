"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Youtube, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/induware", label: "InduWare" },
    { href: "/courses", label: "Course" },
    { href: "/blogs", label: "Blog" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight font-mono text-white">
            CodeIndu
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm transition-colors",
                pathname === href
                  ? "text-[#0066ff] font-semibold"
                  : "text-gray-300 hover:text-[#0066ff]"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Socials + Login */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://github.com/sigmavikki"
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
            href="https://www.youtube.com/@codeindu"
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
            className="text-gray-300 hover:text-white hover:bg-[#0066ff]/20 cursor-pointer"
          >
            <Twitter size={18} />
          </Button>

          <Link href="/login">
            <Button className="bg-gradient-to-r from-[#0066ff] to-[#cc00ff] text-white hover:opacity-90 cursor-pointer">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-lg py-3 px-4 text-white border-b border-gray-800 hover:bg-[#0066ff]/10",
                  pathname === href &&
                    "bg-[#0066ff]/10 text-[#0066ff] font-semibold"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

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
              href="https://www.youtube.com/@codeindu"
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
