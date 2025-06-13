"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { reasons, industries, steps } from "@/api/homepageapi";
import { services } from "@/api/servicesapi";
import Link from "next/link";

export default function HomePage() {
  // Contact Forms
  const [form, setForm] = useState({ name: "", email: "", idea: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 Integrate with backend / email service here
    alert("Form submitted! We'll contact you shortly.");
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      containerRef.current.style.setProperty("--mouse-x", `${x}`);
      containerRef.current.style.setProperty("--mouse-y", `${y}`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Section 1:- Hero */}
      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center pt-16 pb-10 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(0, 102, 255, 0.15), transparent 40%)",
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Animated noise overlay */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay animate-[grain_8s_steps(10)_infinite]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
          }}
        ></div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
          <div className="glitch-container relative mb-4 inline-flex">
            <div className="text-sm font-mono uppercase tracking-wider text-[#e5f0ff] py-1 px-3 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 mb-4">
              Codeindu - Code Innovative Network for Digital Upliftment.
            </div>
          </div>

          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-6 relative font-mono tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              We code what you imagine.
            </span>
            <div className="absolute -inset-0.5 bg-[#0066ff]/20 blur opacity-30 animate-pulse"></div>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8">
            At CodeIndu, we turn your business vision into reality with
            innovative IT solutions. As a premier IT consultancy, we focus on
            creating custom web, mobile, and AI-powered applications designed to
            meet the specific needs of startups and enterprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Button
              className="bg-[#0066ff] hover:bg-[#0066ff]/90 text-white px-8 py-6 rounded-md text-lg cursor-pointer"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Lets builds
            </Button>
            <Button
              variant="outline"
              className="border-[#0066ff]/50 text-[#0066ff] cursor-pointer hover:bg-[#fff] px-8 py-6 rounded-md text-lg"
              onClick={() => (window.location.href = "/services")}
            >
              Explore Services
            </Button>
          </div>

          <div className="flex justify-center gap-8 md:gap-16 text-gray-400 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">
                1+
              </span>
              <span className="text-sm font-mono">Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">
                1+
              </span>
              <span className="text-sm font-mono">Subscribers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">
                1+
              </span>
              <span className="text-sm font-mono">Tools</span>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#0066ff] hover:text-[#0066ff] hover:bg-[#0066ff]/10 rounded-full"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <ChevronDown size={30} />
            </Button>
          </div>
        </div>
      </section>
      {/* Sections 2:- Services */}
      <section id="services" className="py-16 bg-[#0e0e0e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 text-3xl text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">{service.desc}</p>
                </div>

                <div className="mt-auto flex gap-3">
                  <Link href="/contact">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg cursor-pointer ">
                      Contact Us
                    </button>
                  </Link>
                  <Link href={`/services/${service.slug}`}>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-lg cursor-pointer ">
                      Explore
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button at Bottom */}
          <div className="mt-12 text-center">
            <Link href="/services">
              <button className="bg-white text-black font-medium px-6 py-3 rounded-xl hover:bg-gray-200 transition cursor-pointer ">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Section 3:- Why Choise us */}
      <section id="why-choose" className="py-16 bg-[#0c0c0c] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Choose <span className="text-blue-500">CodeIndu?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 4:- Industries serve  */}
      <section id="industries" className="py-16 bg-[#0e0e0e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Industries We Serve{" "}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-300">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="our-process" className="py-16 bg-[#0b0b0b] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Process{" "}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 6 : Contact */}
      <section id="contact" className="bg-[#0b0b0b] text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Contact Us{" "}
          </h2>

          <p className="text-center text-gray-400 mb-12">
            Have an idea? Let&apos;s build something amazing together. <br />
            Koi project plan hai? Hum aapke liye solution banayenge - fast,
            scalable aur reliable.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <input
              name="name"
              placeholder="Your Name"
              className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <textarea
              name="idea"
              rows={4}
              placeholder="Project Idea"
              className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              🚀 Let&apos;s Build Your Solution
            </button>
          </form>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
            <a
              href="https://wa.me/917380365295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-500 transition"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <a
              href="mailto:hello@codeindu.com"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <FaEnvelope /> Email: hello@codeindu.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
