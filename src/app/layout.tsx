import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeIndu - Code Innovative Network for Digital Upliftment",
  description:
    "CodeIndu is an AI-driven software and consultancy company delivering custom tools, websites, and programs tailored for startups and enterprises.",
  keywords: [
    "CodeIndu",
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
  authors: [
    {
      name: "Vikki Verma",
      url: "https://codeindu.com/about-us/",
    },
  ],
  creator: "CodeIndu Team",
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
  icons: {
    icon: "/favicon.ico",
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
        {/* Google Analytics - gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z0RMYJZG72"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z0RMYJZG72');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
