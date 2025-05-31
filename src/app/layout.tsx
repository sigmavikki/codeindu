import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Analytics
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeIndu - AI-Powered Software Development and Consultancy Services",
  authors: [
    {
      name: "CodeIndu Team",
      url: "https://codeindu.com",
    },
    {
      name: "Vikki Verma",
      url: "https://vikkiverma.com",
    },
  ],
  creator: "CodeIndu Team",
  openGraph: {
    title: "CodeIndu - AI-Powered Software Development",
    description:
      "CodeIndu is a cutting-edge AI-powered code Software Development and Skills base Consultancy services provider.",
    url: "https://codeindu.com",
    siteName: "CodeIndu",
    images: [
      {
        url: "https://codeindu.com/logo.png",
        width: 1200,
        height: 630,
        alt: "CodeIndu - AI-Powered Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "CodeIndu is a cutting-edge AI-powered code Software Development and Skills base Consultancy services provider.",
  keywords: [
    "AI",
    "code generation",
    "machine learning",
    "natural language processing",
    "software development",
    "programming",
    "automation",
    "productivity",
    "technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
