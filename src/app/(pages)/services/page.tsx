// app/services/page.tsx
import ServicesContent from "@/components/services/ServicesContent";

export const metadata = {
  title: "IT Services - Affordable Software Development & Consulting Solutions",
  description:
    "Discover professional IT consulting, custom software development, and digital transformation services tailored to your business needs. Reliable, scalable, and cost-effective solutions.",
  keywords: [
    "IT consulting services",
    "software development",
    "custom software solutions",
    "digital transformation",
    "affordable IT services",
    "tech consulting",
    "web development",
    "enterprise solutions",
  ],

  alternates: {
    canonical: "https://codeindu.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
