// // app/services/[slug]/page.tsx

// import { services } from "@/api/servicesapi";
// import { notFound } from "next/navigation";
// import Link from "next/link";

// type ServicePageProps = {
//   params: {
//     slug: string;
//   };
// };

// export default function ServicePage({ params }: ServicePageProps) {
//   const service = services.find((s) => s.slug === params.slug);

//   if (!service) {
//     notFound();
//   }

//   return (
//     <section className="min-h-screen bg-[#0e0e0e] text-white py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         <Link href="/services">
//           <button className="mb-8 text-sm text-blue-500 hover:underline">
//             ← Back to All Services
//           </button>
//         </Link>

//         <div className="flex items-center gap-4 mb-6">
//           <div>{service.icon}</div>
//           <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
//         </div>

//         <p className="text-gray-400 text-lg mb-6">{service.desc}</p>

//         <div className="whitespace-pre-line text-gray-300 text-base leading-relaxed">
//           {service.content}
//         </div>

//         <div className="mt-10 flex gap-4">
//           <Link href="/contact">
//             <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl text-sm cursor-pointer">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function ServicesDetailsPage() {
  return (
    <div>
      <h1>Serices</h1>
    </div>
  );
}
