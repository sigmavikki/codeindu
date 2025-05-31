"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaProjectDiagram,
  FaRobot,
  FaMobileAlt,
} from "react-icons/fa";

export default function ServicesPage() {
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
  return (
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
  );
}
