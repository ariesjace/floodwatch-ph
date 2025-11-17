// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Fonts
const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "FloodWatch PH - Real-Time Flood Awareness",
  description: "Real-Time Flood News and Solutions for Every Filipino.",
  keywords: [
    "floodwatch.ph",
    "philippines floods",
    "flood news",
    "disaster preparedness",
    "typhoon updates",
    "flood awareness",
    "flood solutions",
  ],
  authors: [{ name: "FloodWatch PH Team" }],
  metadataBase: new URL("https://floodwatch-ph.vercel.app"),
  icons: {
    icon: [{ url: "/img/floodwatch.ph.png" }],
  },
  openGraph: {
    title: "FloodWatch PH - Real-Time Flood Awareness",
    description: "Real-Time Flood News and Solutions for Every Filipino.",
    type: "website",
    url: "https://floodwatch-ph.vercel.app",
    siteName: "FloodWatch PH",
    images: [
      {
        url: "/img/floodwatch.ph.png",
        width: 1200,
        height: 630,
        alt: "FloodWatch Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FloodWatch PH",
    description: "Real-Time Flood News and Solutions for Every Filipino.",
    images: ["/img/floodwatch.ph.png"],
  },
};

// Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
