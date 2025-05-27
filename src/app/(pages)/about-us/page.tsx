"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target); // Unobserve once animated
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4), transparent 40%)",
        }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066ff] to-[#cc00ff]">
                  About SigmaCodeX
                </span>
              </h2>

              <p className="text-gray-300 mb-6">
                SigmaCodeX is a tech content platform dedicated to empowering
                the next generation of developers, ethical hackers, and tech
                enthusiasts through cutting-edge tutorials, tools, and
                resources.
              </p>

              <p className="text-gray-400 mb-8">
                Our mission is to break down complex technical concepts into
                accessible content while staying at the forefront of emerging
                technologies.
              </p>

              <Button className="group">
                Our Story
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>

            <div className="w-full md:w-1/2 animate-on-scroll opacity-0">
              <div className="relative border border-[#0066ff]/20 rounded-xl p-6 bg-black/40 backdrop-blur-sm">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0066ff] to-[#cc00ff] rounded-xl opacity-20 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/10 to-[#cc00ff]/10 rounded-xl"></div>

                <h3 className="text-xl font-mono font-bold mb-4 relative z-10">
                  Our Expertise
                </h3>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#0066ff]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0066ff]"
                      >
                        <path d="M18 16.98h-6l-2 2H8"></path>
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7c-1.87 0-3.63-.4-5.2-1.13"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Development</h4>
                      <p className="text-gray-400 text-sm">
                        Modern web, mobile, and software development tutorials
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#cc00ff]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#cc00ff]"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Ethical Hacking
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Security research, pentesting, and vulnerability
                        analysis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#0066ff]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0066ff]"
                      >
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.4 11.5 7.8 11.8a.5.5 0 0 0 .7 0c.3-.3 7.5-6.4 7.5-11.8a8 8 0 0 0-8-8Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        AI & Machine Learning
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Practical AI applications, model training, and LLM
                        engineering
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#cc00ff]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#cc00ff]"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="15"
                          rx="2"
                          ry="2"
                        ></rect>
                        <polyline points="17 2 12 7 7 2"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Tech Reviews</h4>
                      <p className="text-gray-400 text-sm">
                        Latest gadgets, dev tools, and hardware reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
