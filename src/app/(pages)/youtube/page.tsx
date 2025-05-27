"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, Clock, Eye } from "lucide-react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in", "opacity-100");
        }
      });
    }, { threshold: 0.1 });

    const children = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    children?.forEach((el) => observer.observe(el));
    return () => {
      children?.forEach((el) => observer.unobserve(el));
    };
  }, [loading]);

  const videos = [
    { id: 1, title: "Building a Fullstack AI Application with Next.js and OpenAI", thumbnail: "/images/youtube/thumbnail1.jpg", views: "45K", duration: "18:42", category: "Development" },
    { id: 2, title: "Advanced Ethical Hacking: Web Application Penetration Testing", thumbnail: "/images/youtube/thumbnail1.jpg", views: "32K", duration: "24:15", category: "Ethical Hacking" },
    { id: 3, title: "Building Custom AI Agents with GPT-4 and Vector Databases", thumbnail: "/images/youtube/thumbnail1.jpg", views: "28K", duration: "21:36", category: "AI Tools" },
    { id: 4, title: "Ultimate Developer Setup 2025: Hardware & Software Guide", thumbnail: "/images/youtube/thumbnail1.jpg", views: "62K", duration: "15:50", category: "Gadgets" },
  ];

  const categories = ["All", ...Array.from(new Set(videos.map(v => v.category)))];

  // Filter by category
  let filteredVideos = selectedCategory === "All"
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  // Search by title
  if (searchTerm.trim()) {
    filteredVideos = filteredVideos.filter(v =>
      v.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);
  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
  };

  const SkeletonCard = () => (
    <Card className="bg-white/5 border border-[#0066ff]/20 backdrop-blur-md overflow-hidden animate-pulse">
      <CardContent className="p-0">
        <div className="relative aspect-video bg-gray-800" />
        <div className="p-4">
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-700 rounded w-1/2" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,102,255,0.1))" }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 animate-on-scroll opacity-0">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0066ff] to-[#cc00ff]">
                Latest Videos
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Check out our most recent tech content across development, hacking, AI, and more.
              </p>
            </div>
            <Button
              asChild
              variant="link"
              className="text-[#0066ff] hover:text-[#0066ff]/80 mt-4 md:mt-0 group"
            >
              <a
              href="https://www.youtube.com/@SigmaCode_X"
              target="_blank"
              rel="noopener noreferrer"
              >
              View on YT
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full md:w-1/2 mb-6 px-4 py-2 rounded bg-black border border-[#0066ff]/40 text-white"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll opacity-0">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className={`rounded-full px-4 py-1 text-sm ${
                  selectedCategory === cat
                    ? "bg-[#0066ff] text-white"
                    : "border-[#0066ff]/40 text-[#0066ff] hover:bg-[#0066ff]/10"
                }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
              : paginatedVideos.length === 0 ? (
                  <div className="col-span-full text-center text-gray-400 py-12">
                    No videos found.
                  </div>
                ) : (
                  paginatedVideos.map((video, index) => (
                    <Card
                      key={video.id}
                      className="bg-white/5 border border-[#0066ff]/20 backdrop-blur-md overflow-hidden group animate-on-scroll opacity-0 transition-opacity duration-700"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-0 relative">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button size="icon" className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:scale-110 transition-transform">
                              <Play size={24} fill="white" />
                            </Button>
                          </div>
                          <div className="absolute top-4 left-4 bg-[#0066ff] text-white text-xs py-1 px-2 rounded-full">
                            {video.category}
                          </div>
                          <div className="absolute bottom-4 right-4 flex items-center gap-4">
                            <div className="flex items-center gap-1 text-white text-xs bg-black/60 py-1 px-2 rounded-full">
                              <Eye size={12} /><span>{video.views}</span>
                            </div>
                            <div className="flex items-center gap-1 text-white text-xs bg-black/60 py-1 px-2 rounded-full">
                              <Clock size={12} /><span>{video.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-white text-lg font-bold mb-2 line-clamp-2">
                            {video.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
          </div>

          {/* Pagination Controls */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <Button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                Previous
              </Button>
              <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
              <Button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
