"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AdBanner from "@/components/adsense/AdBanner";

const blog = {
  title: "🛡️ We're Hiring: Ethical Hackers (Hybrid | Paid | Skill-Based Role)",
  author: "Vikki Verma",
  publishedAt: "2025-06-4",
  views: "500 +",
  content: `
Join the Cyber Defense Revolution 🚨
MENDSEC INNOVATIONS PRIVATE LIMITED, a government-registered cybersecurity firm based in Gomti Nagar, Lucknow (UP), is actively looking for skilled ethical hackers to join our growing internal Red Team Force.

We are offering paid hybrid opportunities — both full-time and part-time — based on your skills, tool expertise, and real-world offensive security capabilities.

🔍 Who We're Looking For:
Deep understanding of ethical hacking, exploit development, and CVEs

Hands-on experience with tools like Burp Suite, Metasploit, Nmap, Wireshark, etc.

Exposure to web application, network, cloud, or API penetration testing

🧠 Why Join MendSec?
💰 Fixed, skill-based pay structure

🔐 Work under NDAs in a professional white-hat setup

🔭 Long-term cybersecurity research opportunities

✅ Direct work with a registered cybersecurity firm

📬 How to Apply:
Interested candidates can send their CV or portfolio, along with their preferred working mode (Full-time / Part-time), to:

📧 vikki.verma@mendsec.com
📱 WhatsApp: +91 7380365295

Let's Defend the Digital Frontier — Legally and Intelligently.
🧠 Serious professionals only. White-hat ethics mandatory. All applicants are subject to NDA and background verification.


Poster: MENDSEC Hiring Drive 20251

Google forms:

Link:- https://forms.gle/ZQCRXhh7igLcfM8t6 

`,
  image: "/images/blogs/blogs1.jpeg",
};

const initialComments = [
  {
    id: 1,
    name: "John Doe",
    comment: "Thanks you.",
  },
  { id: 2, name: "Jane Smith", comment: "Thanks for the insightful write-up!" },
];

const latestBlogs = [
  {
    id: "2",
    slug: "nextjs-13-best-practices",
    title: "Next.js 13: Best Practices",
    author: "Leslie Alexander",
    image: "/blog2.jpg",
  },
  {
    id: "3",
    slug: "cybersecurity-prediction",
    title: "Predictive Cybersecurity",
    author: "Courtney Henry",
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
{
  /* Google ads */
}
<div className="bg-black mb-5">
  <AdBanner
    dataAdFormat="auto"
    dataFullWidthResponsive={true}
    dataAdSlot="6247561145"
  />
</div>;

export default function BlogDetailPage() {
  const [comments, setComments] = useState(initialComments);
  const [formData, setFormData] = useState({ name: "", comment: "" });

  useEffect(() => {
    loadAdSense();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newComment = {
      id: comments.length + 1,
      name: formData.name,
      comment: formData.comment,
    };
    setComments([newComment, ...comments]);
    setFormData({ name: "", comment: "" });
  };

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
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            <span>{blog.views} Views</span>
          </div>
          <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
            {blog.content}
          </p>

          {/* Google Ad */}
          <div className="my-12">
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

          {/* Comments Display */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">All Comments</h2>
            <div className="space-y-6">
              {comments.map((c) => (
                <div key={c.id} className="bg-[#1a1a1a] p-4 rounded-xl">
                  <p className="font-semibold text-blue-400">{c.name}</p>
                  <p className="text-gray-300">{c.comment}</p>
                </div>
              ))}
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
          <div className="space-y-6">
            {latestBlogs.map(({ id, slug, title, author, image }) => (
              <Link
                key={id}
                href={`/blogs/${slug}`}
                className="block bg-[#1a1a1a] hover:bg-[#222] p-4 rounded-xl transition"
              >
                <div className="flex gap-4">
                  <Image
                    width={50}
                    height={50}
                    src={image}
                    alt={title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-blue-400">{author}</p>
                    <h4 className="text-md font-semibold">{title}</h4>
                  </div>
                </div>
              </Link>
            ))}
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
      </div>
    </div>
  );
}
