// import { notFound } from "next/navigation";
// import Image from "next/image";

// interface Blog {
//   id: string;
//   title: string;
//   content: string;
//   excerpt: string;
//   slug: string;
//   publishedAt: string;
//   author: string;
//   image: string;
//   views: string;
// }

// async function getBlogData(slug: string): Promise<Blog | null> {
//   try {
//     const res = await fetch(`http://127.0.0.1:8000/api/blogs/${slug}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) return null;
//     return await res.json();
//   } catch {
//     return null;
//   }
// }

// // ✅ Use built-in typing without generic confusion
// export default async function BlogDetailPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const blog = await getBlogData(params.slug);

//   if (!blog) return notFound();

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 max-w-4xl mx-auto">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
//         <p className="text-sm text-gray-400">
//           By <span className="text-blue-500">{blog.author}</span> •{" "}
//           {new Date(blog.publishedAt).toLocaleDateString()} • {blog.views} views
//         </p>
//       </div>

//       <div className="mb-10 rounded-xl overflow-hidden">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           width={1200}
//           height={600}
//           className="rounded-lg"
//         />
//       </div>

//       <article
//         className="prose prose-invert prose-lg max-w-none text-gray-200"
//         dangerouslySetInnerHTML={{ __html: blog.content }}
//       />

//       <div className="mt-16">
//         <ins
//           className="adsbygoogle"
//           style={{ display: "block", textAlign: "center" }}
//           data-ad-client="ca-pub-2797234004548975"
//           data-ad-slot="1234567890"
//           data-ad-format="auto"
//           data-full-width-responsive="true"
//         />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
//           }}
//         />
//       </div>
//     </div>
//   );
// }


export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Detail Page</h1>
      <p className="text-sm text-gray-400">
        This is a placeholder for the blog detail content.
      </p>
    </div>
  );
}