"use client";

import { motion } from "framer-motion";
import { services } from "@/api/servicesapi";
import Link from "next/link";

import { reasons, industries, steps } from "@/api/homepageapi";

export default function ServicesContent() {
  return (
    <div id="services" className="py-16 bg-[#0e0e0e] text-white">
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
                <div className="mb-4 text-3xl text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{service.desc}</p>
              </div>

              <div className="mt-auto flex gap-3">
                <Link href="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg cursor-pointer ">
                    Contact Us
                  </button>
                </Link>
                <Link href={`/services/${service.slug}`}>
                  <button className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-white text-sm px-4 py-2 rounded-lg">
                    Explore
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-xl hover:bg-gray-200 transition cursor-pointer">
              View All Services
            </button>
          </Link>
        </div>
      </div>

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
    </div>
  );
}
