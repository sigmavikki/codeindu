"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Zap,
  Code,
  Shield,
  Cpu,
  Youtube,
  Bell,
} from "lucide-react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
            <div className="text-sm font-mono uppercase tracking-wider text-[#0066ff] py-1 px-3 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 mb-4">
              Welcome to the future of tech content
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative font-mono tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              Code. Hack.{" "}
              <span className="relative">
                Build
                <span className="absolute -inset-1 blur-sm bg-[#0066ff]/30 animate-pulse"></span>
              </span>{" "}
              Future.
            </span>
            <div className="absolute -inset-0.5 bg-[#0066ff]/20 blur opacity-30 animate-pulse"></div>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8">
            Join the elite community of developers, ethical hackers, AI
            enthusiasts and tech innovators breaking boundaries and building the
            next generation of technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Button className="bg-[#0066ff] hover:bg-[#0066ff]/90 text-white px-8 py-6 rounded-md text-lg">
              Explore Content
            </Button>
            <Button
              variant="outline"
              className="border-[#0066ff]/50 text-[#0066ff] hover:bg-[#0066ff]/10 px-8 py-6 rounded-md text-lg"
            >
              Subscribe
            </Button>
          </div>

          <div className="flex justify-center gap-8 md:gap-16 text-gray-400 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">
                250+
              </span>
              <span className="text-sm font-mono">Videos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">
                50K+
              </span>
              <span className="text-sm font-mono">Subscribers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">
                15+
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

          {/* Floating Icons */}
          <div className="absolute top-1/4 left-[10%] hidden lg:block">
            <div className="relative w-16 h-16 bg-[#0066ff]/10 rounded-lg backdrop-blur-sm flex items-center justify-center border border-[#0066ff]/20 animate-float">
              <Code className="text-[#0066ff]" size={28} />
            </div>
          </div>
          <div className="absolute bottom-1/3 right-[15%] hidden lg:block">
            <div className="relative w-16 h-16 bg-[#cc00ff]/10 rounded-lg backdrop-blur-sm flex items-center justify-center border border-[#cc00ff]/20 animate-float-delay">
              <Shield className="text-[#cc00ff]" size={28} />
            </div>
          </div>
          <div className="absolute top-2/3 left-[20%] hidden lg:block">
            <div className="relative w-16 h-16 bg-[#0066ff]/10 rounded-lg backdrop-blur-sm flex items-center justify-center border border-[#0066ff]/20 animate-float-delay-2">
              <Cpu className="text-[#0066ff]" size={28} />
            </div>
          </div>
          <div className="absolute top-1/3 right-[10%] hidden lg:block">
            <div className="relative w-16 h-16 bg-[#cc00ff]/10 rounded-lg backdrop-blur-sm flex items-center justify-center border border-[#cc00ff]/20 animate-float-delay-3">
              <Zap className="text-[#cc00ff]" size={28} />
            </div>
          </div>
        </div>
      </section>
      {/* Sections 2:-  */}
      <section
        ref={sectionRef}
        id="about"
        className="bg-[#0a0a0a] text-white py-16 px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 text-center">
            We are a community of developers, ethical hackers, AI enthusiasts,
            and tech innovators who are passionate about breaking boundaries and
            building the next generation of technology. Our mission is to
            empower individuals with the knowledge and skills they need to
            succeed in the fast-paced world of technology.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#0066ff] hover:bg-[#0066ff]/90 text-white px-8 py-4 rounded-md text-lg">
              Join Us
            </Button>
          </div>
        </div>
      </section>
      {/* Sections 03:- Serices */}
      <section className="bg-[#0a0a0a] text-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 text-center">
            We offer a wide range of services to help you succeed in the world
            of technology. From coding tutorials to ethical hacking courses, we
            have something for everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Youtube className="text-[#0066ff] mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Coding Tutorials</h3>
              <p className="text-gray-400">
                Learn to code with our comprehensive tutorials and resources.
              </p>
            </div>
            {/* Service Card */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Bell className="text-[#cc00ff] mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Ethical Hacking</h3>
              <p className="text-gray-400">
                Master the art of ethical hacking with our expert-led courses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
