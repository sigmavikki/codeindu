"use client";

import React, { useState, useEffect, useRef } from "react";
import { Bot, Shield, Zap, Code, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <Bot className="w-8 h-8 text-[#0066ff]" />,
      title: "AI Integration",
      description:
        "Custom OpenAI, GPT-4, and LangChain integrations for business automation.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#cc00ff]" />,
      title: "Cybersecurity Audits",
      description:
        "Penetration testing and zero-trust infrastructure consulting.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "DevOps Automation",
      description:
        "Kubernetes, Docker, and CI/CD systems with IaC best practices.",
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Custom Web Apps",
      description:
        "Next.js, Django REST, PostgreSQL apps with scalable cloud deployment.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-cyan-400" />,
      title: "Tech Consulting",
      description:
        "System design, stack evaluation, and long-term roadmap planning.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
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

      const elements =
        sectionRef.current?.querySelectorAll(".animate-on-scroll");
      elements?.forEach((el) => observer.observe(el));
      return () => elements?.forEach((el) => observer.unobserve(el));
    }
  }, [loading]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#cc00ff] animate-on-scroll opacity-0">
          Our Services
        </h1>
        <p className="text-gray-400 mb-12 max-w-2xl animate-on-scroll opacity-0">
          End-to-end tech services for future-driven companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(loading ? Array.from({ length: 5 }) : services).map(
            (service, index) => {
              // Provide a type for service when not loading
              const typedService = service as {
                icon: React.ReactNode;
                title: string;
                description: string;
              };
              return (
                <div
                  key={index}
                  className={`rounded-lg p-6 border border-[#0066ff]/20 bg-white/5 backdrop-blur-md ${
                    loading ? "animate-pulse" : "animate-on-scroll opacity-0"
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-8 h-8 bg-gray-600 rounded-full mb-4" />
                      <div className="h-4 bg-gray-600 w-1/2 rounded mb-2" />
                      <div className="h-3 bg-gray-700 w-full rounded" />
                    </>
                  ) : (
                    <>
                      <div className="mb-4">{typedService.icon}</div>
                      <h3 className="text-xl font-bold mb-2">
                        {typedService.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {typedService.description}
                      </p>
                    </>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
