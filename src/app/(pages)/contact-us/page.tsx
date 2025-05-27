"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in", "opacity-100");
            }
          });
        },
        { threshold: 0.1 }
      );

      const children =
        sectionRef.current?.querySelectorAll(".animate-on-scroll");
      children?.forEach((el) => observer.observe(el));
      return () => children?.forEach((el) => observer.unobserve(el));
    }
  }, [loading]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center animate-on-scroll opacity-0">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0066ff] to-[#cc00ff]">
            Contact Us
          </h1>
          <p className="text-gray-400 mt-4">
            Reach out for consulting, collaborations, or general inquiries.
          </p>
        </div>

        <form
          className="space-y-6 animate-on-scroll opacity-0 border border-[#0066ff]/20 bg-white/5 backdrop-blur-md rounded-lg p-8"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted (not connected to backend)");
          }}
        >
          <div>
            <label className="mb-1 text-sm font-medium text-gray-300 flex items-center gap-2">
              <User size={16} />
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-black border border-[#0066ff]/30 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-1 text-sm font-medium text-gray-300 flex items-center gap-2">
              <Mail size={16} />
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-black border border-[#0066ff]/30 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-1 text-sm font-medium text-gray-300 flex items-center gap-2">
              <MessageSquare size={16} />
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-black border border-[#0066ff]/30 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              placeholder="Your message"
            />
          </div>

          <Button
            type="submit"
            className="bg-[#0066ff] hover:bg-[#0055cc] text-white px-6 py-2 rounded transition duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
