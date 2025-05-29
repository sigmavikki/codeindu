"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CoursePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const coursesPerPage = 4;

  const allCourses = [
    {
      id: 1,
      title: "Mastering HTML 5 Complete Course 2025 - Learn Web Development",
      thumbnail: "/images/courses/html.png",
      category: "Development",
      originalPrice: 499,
      discountedPrice: 49,
    },
    {
      id: 2,
      title: "Mastering CSS Complete Course 2025 - Advanced Styling Techniques",
      thumbnail: "/images/courses/coming.jpg",
      category: "Development",
      originalPrice: 499,
      discountedPrice: 49,
    },
    {
      id: 3,
      title:
        "JavaScript Essentials: Learn Modern JavaScript for Web Development",
      thumbnail: "/images/courses/coming.jpg",
      category: "Development",
      originalPrice: 499,
      discountedPrice: 49,
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(allCourses.map((c) => c.category))),
  ];

  const filteredCourses = allCourses
    .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
    .filter((c) => category === "All" || c.category === category);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const paginatedCourses = filteredCourses.slice(
    (page - 1) * coursesPerPage,
    page * coursesPerPage
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 font-mono text-transparent bg-gradient-to-r from-[#0066ff] to-[#cc00ff] bg-clip-text">
          Tech Courses
        </h1>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-1/2 px-4 py-2 rounded-md border border-[#0066ff]/50 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setPage(1);
                }}
                className={`px-4 py-1 text-sm rounded-full border ${
                  category === cat
                    ? "bg-[#0066ff] text-white"
                    : "border-[#0066ff]/40 text-[#0066ff] hover:bg-[#0066ff]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading
            ? Array.from({ length: coursesPerPage }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-[#0066ff]/20 backdrop-blur-md animate-pulse rounded overflow-hidden"
                >
                  <div className="aspect-video bg-gray-700/20" />
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-700/40 w-3/4 rounded" />
                    <div className="h-3 bg-gray-700/30 w-1/2 rounded" />
                  </div>
                </div>
              ))
            : paginatedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white/5 border border-[#0066ff]/20 backdrop-blur-md rounded overflow-hidden group transition hover:shadow-xl"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-1">{course.title}</h2>
                    <p className="text-sm text-gray-400">{course.category}</p>
                    <p className="text-sm text-gray-400">Duration: 90 Min</p>
                    <div className="mt-2">
                      <p className="text-sm text-gray-400 line-through">
                        ₹{course.originalPrice}
                      </p>
                      <p className="text-base font-semibold text-[#00ff99]">
                        Now ₹{course.discountedPrice}
                      </p>
                    </div>
                    <button className="mt-3 px-4 py-2 cursor-pointer bg-[#0066ff] text-white rounded hover:bg-[#0052cc] transition">
                      <Link href="/courses/html">View Course</Link>
                    </button>
                  </div>
                </div>
              ))}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`px-3 py-1 text-sm rounded border ${
                  page === n
                    ? "bg-[#0066ff] text-white"
                    : "border-[#0066ff]/40 text-[#0066ff] hover:bg-[#0066ff]/10"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
