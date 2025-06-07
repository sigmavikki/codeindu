"use client";

import AdBanner from "@/components/adsense/AdBanner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  views: string;
  image: string;
}

const dummyBlogs: BlogSummary[] = [
  {
    id: "1",
    slug: "we-are-hiring-ethical-hacker",
    title:
      "🛡️ We're Hiring: Ethical Hackers (Hybrid | Paid | Skill-Based Role)",
    excerpt:
      "We are offering paid hybrid opportunities — both full-time and part-time — based on your skills, tool expertise, and real-world offensive security capabilities.",
    publishedAt: "2025-06-4",
    author: "Vikki Verma",
    views: "12K",
    image: "/images/blogs/blogs1.jpeg",
  },
  {
    id: "2",
    slug: "nextjs-13-best-practices",
    title: "Next.js 13: Best Practices for Modern Web Apps",
    excerpt:
      "A deep dive into Next.js 13 features, routing, and how to architect scalable web applications using the latest framework...",
    publishedAt: "2025-05-18",
    author: "Leslie Alexander",
    views: "54K",
    image: "/blog2.jpg",
  },
  {
    id: "3",
    slug: "cybersecurity-prediction",
    title: "From Reactive to Predictive Cybersecurity",
    excerpt:
      "Why AI-powered threat detection is the future of cybersecurity in a hyperconnected world...",
    publishedAt: "2025-05-15",
    author: "Courtney Henry",
    views: "32K",
    image: "/blog3.jpg",
  },
];

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

function loadAdSense() {
  if (window.adsbygoogle) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  script.setAttribute("data-ad-client", "ca-pub-2797234004548975");
  document.head.appendChild(script);
  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.push({});
}

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    loadAdSense();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 mx-auto font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#1f2937] p-10 rounded-3xl text-center shadow-xl mb-16 mt-15">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Discover Tech-Driven Articles
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Daily insights curated around software, AI, and future tech
          disruptions.
        </p>
      </section>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {["All", "AI", "Next.js", "Cybersecurity"].map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border ${
              cat === selectedCategory
                ? "bg-blue-700 text-white shadow-md"
                : "bg-[#1e1e1e] text-gray-300 hover:bg-[#2c2c2c]"
            } transition-all duration-200`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtered Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogs
          .filter((blog) =>
            selectedCategory === "All"
              ? true
              : blog.title.includes(selectedCategory)
          )
          .map(
            ({
              id,
              slug,
              title,
              excerpt,
              publishedAt,
              author,
              views,
              image,
            }) => (
              <Link
                key={id}
                href={`/blogs/${slug}`}
                className="bg-[#161616] hover:bg-[#1f1f1f] p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg border border-transparent hover:border-[#333]"
              >
                <Image
                  width={400}
                  height={300}
                  src={image}
                  alt={title}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />
                <p className="text-sm text-blue-400 font-medium mb-1">
                  {author}
                </p>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                  {excerpt}
                </p>
                <div className="text-gray-500 text-xs flex justify-between">
                  <span>{new Date(publishedAt).toLocaleDateString()}</span>
                  <span>{views} Views</span>
                </div>
              </Link>
            )
          )}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex justify-center gap-2">
        {Array.from(
          { length: Math.ceil(dummyBlogs.length / 8) },
          (_, i) => i + 1
        ).map((p) => (
          <button
            key={p}
            onClick={() => console.log(`Navigating to page ${p}`)} // Add functionality for page navigation
            className={`px-4 py-2 rounded-full text-sm transition ${
              p === 1 // Assume page 1 is active by default
                ? "bg-blue-600 text-white"
                : "bg-[#1a1a1a] text-gray-400 hover:bg-[#2a2a2a]"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Google Ads */}
      <div className="mt-20">
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-2797234004548975"
          data-ad-slot="6247561145"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      {/* Google ads */}
      <div className="bg-black mb-5">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="6247561145"
        />
      </div>
    </div>
  );
}
