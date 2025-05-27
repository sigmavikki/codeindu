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
  title: "SigmaCodeX - Decode the Future",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "SigmaCodeX is a cutting-edge AI-powered code generation platform that helps developers write code faster and more efficiently.",
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
