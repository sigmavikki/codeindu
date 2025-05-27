"use client";

import Link from "next/link";
import { useEffect } from "react";

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
    slug: "future-of-ai-software",
    title: "The Future of AI in Software Engineering",
    excerpt:
      "Explore how AI is transforming software development workflows and the impact it will have over the next decade...",
    publishedAt: "2025-05-20",
    author: "Saraji Kolhyseg",
    views: "12K",
    image: "/blog1.jpg",
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
  useEffect(() => {
    loadAdSense();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-700 p-10 rounded-xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Discover Nice Articles Here
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto text-lg">
          All the articles and contents of the site have been updated today.
          Explore insights on tech, engineering, and the future.
        </p>
      </section>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Technology", "Programming", "AI", "Cybersecurity"].map(
          (cat, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-full text-sm font-semibold ${
                cat === "Technology"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Featured */}
      <div className="bg-[#131313] p-6 rounded-xl mb-12 flex flex-col md:flex-row gap-6 items-center">
        <img
          src="/blog1.jpg"
          alt="featured"
          className="w-full md:w-1/2 rounded-xl"
        />
        <div>
          <p className="text-sm text-blue-400 font-medium mb-1">
            By Saraji Kolhyseg
          </p>
          <h2 className="text-3xl font-bold mb-3">
            Artificial Intelligence Beyond Imaginations
          </h2>
          <p className="text-gray-400">
            AI is advancing beyond what humans have imagined and will dominate
            the future. But when exactly will it surpass us?
          </p>
          <Link
            href="/blogs/future-of-ai-software"
            className="inline-block mt-4 text-blue-500 font-semibold"
          >
            Read More →
          </Link>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogs.map(
          ({ id, slug, title, excerpt, publishedAt, author, views, image }) => (
            <Link
              key={id}
              href={`/blogs/${slug}`}
              className="bg-[#1a1a1a] p-5 rounded-xl hover:shadow-lg transition"
            >
              <img src={image} alt={title} className="rounded-lg mb-4" />
              <p className="text-sm text-blue-500 mb-1">{author}</p>
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
      <div className="mt-14 flex justify-center space-x-2 text-white">
        {[1, 2, 3, 4].map((p) => (
          <button
            key={p}
            className={`px-4 py-2 rounded-full ${
              p === 3 ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Google Ads */}
      <div className="mt-16">
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-2797234004548975"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
