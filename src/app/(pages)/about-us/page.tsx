"use client";

import Image from "next/image";
import React from "react";
import {
  FaRocket,
  FaLaptopCode,
  FaCogs,
  FaBrain,
  FaShieldAlt,
} from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <main className="bg-[#0B0B0B] text-white px-6 py-16 md:px-12 lg:px-32">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <section className="text-center mt-14">
          <h1 className="text-5xl font-extrabold leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              CodeIndu
            </span>
          </h1>
          <p className="text-gray-400 mt-4 text-xl">
            Code Innovative Network for Digital Upliftment
          </p>
        </section>

        {/* Who We Are */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-300 leading-loose">
              Founded by <strong>Vikki Verma</strong>, CodeIndu is a tech
              startup from India building scalable digital products for modern
              businesses. From software development to automation and AI, we
              deliver what enterprises and startups need to thrive.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              width={400}
              height={350}
              src="/images/about-us.jpg"
              alt="Who We Are"
              className="rounded-xl shadow-xl opacity-90"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses with modern, intelligent software that
              enables smarter operations, seamless automation, and rapid growth
              — driven by innovation.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become India&apos;s most trusted software partner, offering
              affordable access to enterprise-grade technology, automation, and
              AI tools.
            </p>
          </div>
        </section>

        {/* What We Stand For */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            {[
              {
                icon: <FaRocket />,
                title: "Innovation First",
                desc: "Solving real-world problems with smart tech.",
              },
              {
                icon: <FaLaptopCode />,
                title: "Client-Centric",
                desc: "Tailored solutions aligned with your vision.",
              },
              {
                icon: <FaBrain />,
                title: "AI & Automation",
                desc: "Tools that simplify and scale your workflow.",
              },
              {
                icon: <FaCogs />,
                title: "Scalable Delivery",
                desc: "Architecture that grows with your business.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Security-Minded",
                desc: "Data and systems protected by design.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[#121212] rounded-xl border border-gray-800 hover:border-blue-600 transition"
              >
                <div className="text-blue-500 text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300 text-center">
            {[
              "Custom Software Development",
              "Business Website Development",
              "SaaS Tools & Dashboards",
              "Automation & Integration",
              "AI-based Tools",
              "Mobile App Development",
              "Cloud Deployment & Monitoring",
            ].map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#121212] py-4 px-6 rounded-lg hover:ring-1 hover:ring-blue-600 transition"
              >
                {cap}
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Industries We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            {[
              "Healthcare",
              "Education",
              "Retail & E-commerce",
              "Logistics & Supply Chain",
              "Startups & SMBs",
              "Finance & Real Estate",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-[#121212] px-4 py-2 rounded-full border border-gray-700 hover:bg-blue-600 transition"
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            {[
              [
                "Requirement Gathering",
                "We understand your exact needs and goals.",
              ],
              ["Planning & Design", "UI/UX, architecture, roadmap creation."],
              ["Development", "Agile-based coding using latest stacks."],
              [
                "Testing & QA",
                "Functionality, performance, and security testing.",
              ],
              [
                "Delivery & Support",
                "Launch, documentation, and post-launch help.",
              ],
            ].map(([title, desc], idx) => (
              <div
                key={idx}
                className="bg-[#121212] p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition"
              >
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Meet the Founder</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Vikki Verma</strong> is a full-stack engineer and visionary
            who launched CodeIndu to transform how startups and businesses adopt
            digital tech. With expertise in automation, AI, and scalable
            systems, his mission is to make intelligent software accessible,
            practical, and powerful.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold">Ready to Build With Us?</h3>
          <p className="text-gray-400 mt-2 mb-6">
            Let&apos;s build software that transforms your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-full shadow-lg transition"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </main>
  );
}
