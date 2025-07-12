import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// Components
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://mendsec.com"),
  title: "mendsec - Code Innovative Network for Digital Upliftment.",
  description:
    "mendsec offers affordable and expert IT consulting services, custom software development, AI solutions, and digital transformation for startups and enterprises in India and globally. Partner with us for scalable, on-time, and budget-friendly tech solutions.",
  keywords: [
    "IT consulting services",
    "affordable IT consultancy",
    "custom software development",
    "digital transformation agency",
    "AI software solutions",
    "IT services for startups",
    "budget software company",
    "mendsec IT consulting India",
    "top IT consultancy 2025",
    "trusted software agency India",
    "MVP app development",
    "SaaS product developers",
    "enterprise tech partner",
  ],
  creator: "mendsec Team",
  authors: [
    {
      name: "Vikki Verma",
      url: "https://mendsec.com/about-us/",
    },
  ],
  openGraph: {
    title: "mendsec - Trusted IT Consulting & Software Solutions",
    description:
      "Get cost-effective, scalable IT consultancy and development with mendsec - India's trusted partner for software, AI, and digital innovation.",
    url: "https://mendsec.com",
    siteName: "mendsec",
    images: [
      {
        url: "https://mendsec.com/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "mendsec logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mendsec",
    creator: "@mendsec",
    title:
      "mendsec - Affordable IT & Software Services for Growing Businesses",
    description:
      "Partner with mendsec for custom software, web apps, AI automation, and IT consulting - all within your budget.",
    images: ["https://mendsec.com/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  alternates: {
    canonical: "https://mendsec.com",
    languages: {
      "en-IN": "/",
      "hi-IN": "/hi",
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
        <link rel="preload" as="image" href="/logo/logo.png" />
        <link rel="preload" as="image" href="/og-banner.jpg" />

        {/* Google ads */}

        <AdSense pId="ca-pub-2797234004548975" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900 dark:bg-black dark:text-white`}
      >
{/*         <Navbar /> */}
        {children}
{/*         <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
