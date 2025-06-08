"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AdBanner from "@/components/adsense/AdBanner";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  author: string;
  slug: string;
  content: string;
  image: string;
  views: number;
  created_at: string;
  comments: { id: number; name: string; comment: string }[];
  category: string;
}

interface Comment {
  id: number;
  name: string;
  comment: string;
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

export default function BlogDetailPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({ name: "", comment: "" });
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    loadAdSense();
    setIsLoading(true);
    fetch("https://codeindu-api-ju0w.onrender.com/api/blogs/2/")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setComments(Array.isArray(data.comments) ? data.comments : []);
        // Fetch related blogs
        fetch("https://codeindu-api-ju0w.onrender.com/api/blogs/")
          .then((res) => res.json())
          .then((blogs) => {
            const related = blogs
              .filter(
                (b: Blog) => b.id !== data.id && b.category === data.category
              )
              .slice(0, 3);
            setRelatedBlogs(related);
          });
      })
      .catch((error) => console.error("Error fetching blog:", error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    try {
      const res = await fetch(
        "https://codeindu-api-ju0w.onrender.com/api/comments/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blog: blog?.id,
            name: formData.name,
            comment: formData.comment,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to post comment");

      const newComment = await res.json();
      setComments([newComment, ...comments]);
      setFormData({ name: "", comment: "" });
    } catch (error) {
      console.error(error);
    }
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="flex flex-col lg:flex-row gap-12 mt-20">
      <div className="lg:w-2/3">
        <div className="bg-[#1a1a1a] h-[350px] rounded-xl mb-6 animate-pulse" />
        <div className="space-y-4">
          <div className="bg-[#1a1a1a] h-12 w-3/4 rounded-lg animate-pulse" />
          <div className="flex gap-4">
            <div className="bg-[#1a1a1a] h-4 w-24 rounded animate-pulse" />
            <div className="bg-[#1a1a1a] h-4 w-32 rounded animate-pulse" />
            <div className="bg-[#1a1a1a] h-4 w-20 rounded animate-pulse" />
          </div>
          <div className="space-y-3">
            <div className="bg-[#1a1a1a] h-4 w-full rounded animate-pulse" />
            <div className="bg-[#1a1a1a] h-4 w-full rounded animate-pulse" />
            <div className="bg-[#1a1a1a] h-4 w-3/4 rounded animate-pulse" />
          </div>
        </div>

        {/* Comments Skeleton */}
        <div className="mt-10">
          <div className="bg-[#1a1a1a] h-8 w-48 rounded-lg mb-4 animate-pulse" />
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-4 rounded-xl animate-pulse"
              >
                <div className="bg-[#2a2a2a] h-4 w-32 rounded mb-2" />
                <div className="bg-[#2a2a2a] h-4 w-full rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Skeleton */}
      <div className="lg:w-1/3">
        <div className="bg-[#1a1a1a] h-8 w-40 rounded-lg mb-6 animate-pulse" />
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-4 rounded-xl animate-pulse"
            >
              <div className="bg-[#2a2a2a] h-4 w-full rounded mb-2" />
              <div className="bg-[#2a2a2a] h-4 w-3/4 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="bg-[#0a0a0a] text-white px-4 py-10 mx-auto">
        <LoadingSkeleton />
      </div>
    );
  }

  if (!blog) return <p className="text-white text-center">Blog not found</p>;

  return (
    <div className="bg-[#0a0a0a] text-white px-4 py-10 mx-auto">
      {/* Top Ad Banner */}
      <div className="max-w-4xl mx-auto mb-8">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="6247561145"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-20 max-w-7xl mx-auto">
        {/* Blog Content */}
        <div className="lg:w-2/3">
          <div className="bg-[#161616] rounded-2xl overflow-hidden shadow-xl">
            <Image
              width={800}
              height={450}
              src={blog.image}
              alt={blog.title}
              className="w-full h-[450px] object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                  {blog.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{blog.views} Views</span>
              </div>
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-lg font-bold">{blog.author[0]}</span>
                </div>
                <div>
                  <p className="font-medium text-blue-400">{blog.author}</p>
                  <p className="text-sm text-gray-400">Author</p>
                </div>
              </div>
              <div
                className="prose prose-invert max-w-none text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

          {/* In-content Ad */}
          <div className="my-12 bg-[#161616] p-6 rounded-2xl">
            <AdBanner
              dataAdFormat="auto"
              dataFullWidthResponsive={true}
              dataAdSlot="6247561145"
            />
          </div>

          {/* Comments Section */}
          <div className="bg-[#161616] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8">
              Comments ({comments.length})
            </h2>
            <div className="space-y-6 mb-8">
              {comments.length > 0 ? (
                comments.map((c) => (
                  <div key={c.id} className="bg-[#1a1a1a] p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                        <span className="text-sm font-bold">{c.name[0]}</span>
                      </div>
                      <p className="font-semibold text-blue-400">{c.name}</p>
                    </div>
                    <p className="text-gray-300 ml-11">{c.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-8">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 bg-[#1a1a1a] rounded-xl text-white outline-none border border-gray-700 focus:border-blue-500 transition-colors"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Comment
                </label>
                <textarea
                  id="comment"
                  placeholder="Write your comment here..."
                  rows={4}
                  className="w-full p-3 bg-[#1a1a1a] rounded-xl text-white outline-none border border-gray-700 focus:border-blue-500 transition-colors"
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors w-full sm:w-auto"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          {/* Sidebar Ad */}
          <div className="bg-[#161616] p-6 rounded-2xl">
            <AdBanner
              dataAdFormat="auto"
              dataFullWidthResponsive={true}
              dataAdSlot="6247561145"
            />
          </div>

          {/* Related Blogs */}
          <div className="bg-[#161616] rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-700">
              Related Articles
            </h3>
            <div className="space-y-6">
              {relatedBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="block group"
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        width={80}
                        height={80}
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest tech insights and
              updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-[#1a1a1a] rounded-xl text-white outline-none border border-gray-700 focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="max-w-4xl mx-auto mt-12">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="6247561145"
        />
      </div>
    </div>
  );
}
