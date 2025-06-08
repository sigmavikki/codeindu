"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AdBanner from "@/components/adsense/AdBanner";

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
}

interface Comment {
  id: number;
  name: string;
  comment: string;
}

export default function BlogDetailPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({ name: "", comment: "" });
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("https://codeindu-api-ju0w.onrender.com/api/blogs/2/")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setComments(Array.isArray(data.comments) ? data.comments : []);
      })
      .catch((error) => console.error("Error fetching blog:", error));
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

  if (!blog) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="bg-[#0a0a0a] text-white px-4 py-10 mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 mt-20">
        {/* Blog Content */}
        <div className="lg:w-2/3">
          <Image
            width={400}
            height={350}
            src={blog.image}
            alt={blog.title}
            className="rounded-xl mb-6 w-full"
          />
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="text-sm text-gray-400 mb-6 flex gap-4">
            <span>By {blog.author}</span>
            <span>{new Date(blog.created_at).toLocaleDateString()}</span>
            <span>{blog.views} Views</span>
          </div>
          <div
            className="text-lg leading-relaxed text-gray-300"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Google Ad */}
          <div className="my-12">
            <ins
              className="adsbygoogle"
              style={{ display: "block", textAlign: "center" }}
              data-ad-client="ca-pub-2797234004548975"
              data-ad-slot="6247561145"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>

          {/* Google ads */}
          <div className="bg-black mb-5">
            <AdBanner
              dataAdFormat="auto"
              dataFullWidthResponsive={true}
              dataAdSlot="6247561145"
            />
          </div>

          {/* Comments Display */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">All Comments</h2>
            <div className="space-y-6">
              {comments.length > 0 ? (
                comments.map((c) => (
                  <div key={c.id} className="bg-[#1a1a1a] p-4 rounded-xl">
                    <p className="font-semibold text-blue-400">{c.name}</p>
                    <p className="text-gray-300">{c.comment}</p>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>

          {/* Comment Form */}
          <div className="mt-14">
            <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-[#1a1a1a] p-6 rounded-xl"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-[#121212] rounded-md text-white outline-none border border-gray-700"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <textarea
                placeholder="Your Comment"
                rows={4}
                className="w-full p-3 bg-[#121212] rounded-md text-white outline-none border border-gray-700"
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <h3 className="text-xl font-bold mb-6 border-b border-gray-600 pb-2">
            Latest Blogs
          </h3>
          <p className="text-gray-400">Coming soon...</p>
          <div className="bg-black mb-5 mt-6">
            <AdBanner
              dataAdFormat="auto"
              dataFullWidthResponsive={true}
              dataAdSlot="6247561145"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
