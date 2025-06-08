"use client";

import AdBanner from "@/components/adsense/AdBanner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogSummary {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  created_at: string;
  author: string;
  views: number;
  image: string;
  category: string;
}

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
  const [blogs, setBlogs] = useState<BlogSummary[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAdSense();

    async function fetchBlogs() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://codeindu-api-ju0w.onrender.com/api/blogs/"
        );
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-[#161616] p-6 rounded-2xl animate-pulse"
        >
          <div className="bg-[#2a2a2a] h-48 w-full rounded-lg mb-4" />
          <div className="bg-[#2a2a2a] h-4 w-24 rounded mb-2" />
          <div className="bg-[#2a2a2a] h-6 w-3/4 rounded mb-2" />
          <div className="bg-[#2a2a2a] h-4 w-full rounded mb-2" />
          <div className="bg-[#2a2a2a] h-4 w-2/3 rounded mb-3" />
          <div className="flex justify-between">
            <div className="bg-[#2a2a2a] h-3 w-20 rounded" />
            <div className="bg-[#2a2a2a] h-3 w-16 rounded" />
          </div>
        </div>
      ))}
    </div>
  );

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

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-full bg-[#1e1e1e] text-white border border-[#333] focus:border-blue-500 focus:outline-none transition-all duration-200"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {["All", "Codeindu", "AI", "DevOps", "Cybersecurity"].map(
          (cat, idx) => (
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
          )
        )}
      </div>

      {/* Loading State or Filtered Blogs */}
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs
            .filter((blog) => {
              const matchesCategory =
                selectedCategory === "All"
                  ? true
                  : blog.category
                      .toLowerCase()
                      .includes(selectedCategory.toLowerCase()) ||
                    blog.title
                      .toLowerCase()
                      .includes(selectedCategory.toLowerCase());

              const matchesSearch =
                searchQuery === "" ||
                blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.author.toLowerCase().includes(searchQuery.toLowerCase());

              return matchesCategory && matchesSearch;
            })
            .map(
              ({
                id,
                slug,
                title,
                excerpt,
                created_at,
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
                    <span>{new Date(created_at).toLocaleDateString()}</span>
                    <span>{views} Views</span>
                  </div>
                </Link>
              )
            )}
        </div>
      )}

      {/* Pagination - only show when not loading */}
      {!isLoading && (
        <div className="mt-16 flex justify-center gap-2">
          {Array.from(
            { length: Math.ceil(blogs.length / 8) },
            (_, i) => i + 1
          ).map((p) => (
            <button
              key={p}
              onClick={() => console.log(`Navigating to page ${p}`)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                p === 1
                  ? "bg-blue-600 text-white"
                  : "bg-[#1a1a1a] text-gray-400 hover:bg-[#2a2a2a]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}

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
