import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// Google ads
import AdSense from "@/components/adsense/AdSense";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://codeindu.com"),
  title: "CodeIndu - Code Innovative Network for Digital Upliftment",
  description:
    " **CodeIndu** is your premier destination for tailored digital solutions, specializing in custom software development, mobile app creation, and AI-based tools. Serving startups and enterprises alike, CodeIndu engineers possibilities that align with your business vision. Benefit from a trusted, India-based team dedicated to delivering cost-effective, scalable solutions on time. With expertise spanning healthcare, education, retail, and logistics, CodeIndu transforms ideas into high-performance websites and SaaS tools. Experience personalized development that prioritizes your needs and ensures satisfaction. Join CodeIndu to build innovative solutions that elevate your business to new heights. ",
  keywords: [
    "CodeIndu",
    "custom software development",
    "business website development",
    "mobile app for business",
    "ai solutions for business",
    "api integration services",
    "real-time analytics dashboards",
    "bilingual development services",
    "logistics tracking systems",
    "healthcare software solutions",
    "saas tools development",
    "startup mvp development",
    "AI software development",
    "Custom web development",
    "Tech consultancy India",
    "SaaS tools",
    "Digital transformation",
    "Full stack development",
    "Next.js agency",
    "Django API development",
    "Startup software partner",
  ],
  creator: "CodeIndu Team",
  authors: [
    {
      name: "Vikki Verma",
      url: "https://codeindu.com/about-us/",
    },
  ],
  openGraph: {
    title: "CodeIndu - AI-Powered Software Development & Tech Solutions",
    description:
      "CodeIndu builds high-impact software, tools, and AI-based systems to help businesses scale and innovate faster. India's trusted digital tech partner.",
    url: "https://codeindu.com",
    siteName: "CodeIndu",
    images: [
      {
        url: "https://codeindu.com/logo.png",
        width: 1200,
        height: 630,
        alt: "CodeIndu logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@codeindu",
    creator: "@codeindu",
    title: "CodeIndu - Future of Software & SaaS in India",
    description:
      "Empowering startups and enterprises with smart automation, AI software, and cybersecurity tools.",
    images: ["https://codeindu.com/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  alternates: {
    canonical: "https://codeindu.com",
    languages: {
      "en-IN": "/",
      "hi-IN": "/hi", // prepare for multilingual
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z0RMYJZG72"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z0RMYJZG72', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Preload logo/image assets */}
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="preload" as="image" href="/og-banner.jpg" />

        {/* Google ads */}

        <AdSense pId="ca-pub-2797234004548975" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900 dark:bg-black dark:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
