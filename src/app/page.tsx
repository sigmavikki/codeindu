"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaProjectDiagram,
  FaRobot,
  FaMobileAlt,
  FaClock,
  FaUserCheck,
  FaUsers,
  FaMoneyBillWave,
  FaHeartbeat,
  FaGraduationCap,
  FaShoppingCart,
  FaTruckMoving,
  FaRocket,
  FaGlobeAsia,
  FaClipboardList,
  FaDraftingCompass,
  FaVial,
  FaHandshake,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function HomePage() {
  // Services
  const services = [
    {
      icon: <FaCode className="text-blue-500 text-3xl" />,
      title: "Custom Software Development",
      desc: "Tailor-made software solutions designed to match your business logic.",
      descHindi:
        "100% custom software jo aapke business logic ke hisaab se banaya jaata hai.",
    },
    {
      icon: <FaLaptopCode className="text-green-500 text-3xl" />,
      title: "Business Website Development",
      desc: "Modern, responsive, and conversion-driven websites for startups & enterprises.",
      descHindi: "High-performance website jo trust aur traffic dono laaye.",
    },
    {
      icon: <FaProjectDiagram className="text-purple-500 text-3xl" />,
      title: "SaaS Tools & Dashboards",
      desc: "Productized tools and dashboards with real-time analytics.",
      descHindi:
        "SaaS tools aur dashboards jo client aur admin dono ke liye useful hote hain.",
    },
    {
      icon: <FaCogs className="text-yellow-500 text-3xl" />,
      title: "Automation & Integration",
      desc: "Connect your systems with automated workflows using APIs.",
      descHindi:
        "Manual kaam hataayein — APIs aur automation workflows ke saath.",
    },
    {
      icon: <FaRobot className="text-red-500 text-3xl" />,
      title: "AI-based Tools (Future Ready)",
      desc: "AI integrations like chatbots, recommendations, and process automation.",
      descHindi:
        "Chatbot, prediction system jaise AI tools jo future-ready solutions hain.",
    },
    {
      icon: <FaMobileAlt className="text-indigo-500 text-3xl" />,
      title: "Mobile App Development",
      desc: "Cross-platform Android & iOS apps tailored to your business.",
      descHindi: "Android/iOS apps – fast, responsive aur brand-oriented.",
    },
  ];
  // Why Choise us
  const reasons = [
    {
      icon: <FaUserCheck className="text-blue-500 text-3xl" />,
      title: "Personalized Development",
      desc: "We build exactly what you need – tailored to your vision and logic.",
      descHindi:
        "Har project aapke business ke hisaab se customize kiya jaata hai.",
    },
    {
      icon: <FaUsers className="text-green-500 text-3xl" />,
      title: "India-Based Trusted Team",
      desc: "Reliable, skilled professionals you can communicate with easily.",
      descHindi:
        "Bharat ka trusted aur responsive development team – no outsourcing mess.",
    },
    {
      icon: <FaMoneyBillWave className="text-yellow-500 text-3xl" />,
      title: "Cost-effective & Scalable",
      desc: "Affordable pricing with future-proof scalability.",
      descHindi:
        "Kam cost mein aapko milta hai scalable aur high-quality solution.",
    },
    {
      icon: <FaClock className="text-red-500 text-3xl" />,
      title: "Timely Delivery & Satisfaction",
      desc: "We deliver on time with a 100% satisfaction mindset.",
      descHindi:
        "Time par delivery aur complete transparency ke saath client-first focus.",
    },
  ];
  // Indures we serve
  const industries = [
    {
      icon: <FaHeartbeat className="text-pink-500 text-3xl" />,
      title: "Healthcare",
      desc: "Secure & scalable healthcare tech for hospitals and clinics.",
      descHindi: "Hospital aur medical sector ke liye digital solutions.",
    },
    {
      icon: <FaGraduationCap className="text-indigo-500 text-3xl" />,
      title: "Education",
      desc: "EdTech tools for institutes, online courses, and training platforms.",
      descHindi:
        "Online classes, LMS aur institutes ke liye customized portals.",
    },
    {
      icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
      title: "Retail",
      desc: "E-commerce platforms, POS, and inventory systems.",
      descHindi: "E-commerce websites, billing aur inventory ke liye apps.",
    },
    {
      icon: <FaTruckMoving className="text-green-500 text-3xl" />,
      title: "Logistics",
      desc: "Real-time tracking, dispatch & automation systems.",
      descHindi:
        "Transport aur delivery ke liye automation & tracking software.",
    },
    {
      icon: <FaRocket className="text-red-500 text-3xl" />,
      title: "Startups",
      desc: "Tech architecture & MVPs for scaling new-age businesses.",
      descHindi: "Naye startups ke liye fast MVPs aur scalable tools.",
    },
    {
      icon: <FaGlobeAsia className="text-blue-500 text-3xl" />,
      title: "More Domains",
      desc: "Custom solutions for various industries globally.",
      descHindi: "Multiple sectors ke liye global tech solutions.",
    },
  ];
  // Our Process
  const steps = [
    {
      icon: <FaClipboardList className="text-blue-500 text-3xl" />,
      title: "1. Requirement Gathering",
      desc: "We understand your needs, goals, and challenges.",
      descHindi: "Sabse pehle hum aapki requirements ko clearly samajhte hain.",
    },
    {
      icon: <FaDraftingCompass className="text-yellow-400 text-3xl" />,
      title: "2. Planning & Design",
      desc: "We design UI/UX and architect the system for performance and scalability.",
      descHindi:
        "Project ka blueprint aur design banaya jaata hai – visually aur technically.",
    },
    {
      icon: <FaCode className="text-green-500 text-3xl" />,
      title: "3. Development",
      desc: "We write clean, scalable, and optimized code – frontend to backend.",
      descHindi:
        "Software ko code kiya jaata hai – har feature carefully develop hota hai.",
    },
    {
      icon: <FaVial className="text-red-500 text-3xl" />,
      title: "4. Testing & Delivery",
      desc: "We rigorously test before delivering the final product.",
      descHindi:
        "Delivery se pehle sab kuch test kiya jaata hai – quality guarantee ke saath.",
    },
    {
      icon: <FaHandshake className="text-purple-500 text-3xl" />,
      title: "5. Ongoing Support",
      desc: "We stay with you – updates, maintenance, and future upgrades.",
      descHindi:
        "Baad mein bhi support milta hai – technical issues aur updates ke liye.",
    },
  ];
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
    alert("Form submitted! We’ll contact you shortly.");
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
      {/* Hero Section 1 */}
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
              CodeIndu - Code Innovative Network for Digital Upliftment.
            </div>
          </div>

          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-6 relative font-mono tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              We code what you imagine.
            </span>
            <div className="absolute -inset-0.5 bg-[#0066ff]/20 blur opacity-30 animate-pulse"></div>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8">
            At CodeIndu, we don’t just code — we engineer possibilities. From
            startups to enterprises, we build tailor-made solutions in web,
            mobile, and AI that align with your business vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Button
              className="bg-[#0066ff] hover:bg-[#0066ff]/90 text-white px-8 py-6 rounded-md text-lg cursor-pointer"
              onClick={() => (window.location.href = "/courses")}
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
      {/* Sections 2:-  */}
      <section id="services" className="py-16 bg-[#0e0e0e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Services{" "}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.desc}</p>
                <p className="text-sm text-gray-400 italic mt-2">
                  {service.descHindi}
                </p>
              </motion.div>
            ))}
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
                <p className="text-sm text-gray-400 italic mt-2">
                  {item.descHindi}
                </p>
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
                <p className="text-sm text-gray-400 italic mt-2">
                  {industry.descHindi}
                </p>
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
                <p className="text-sm text-gray-400 italic mt-2">
                  {step.descHindi}
                </p>
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
              🚀 Let &lsquo s Build Your Solution
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
