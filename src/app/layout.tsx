// src/app/layout.tsx
import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Font
const notoSerif = Noto_Serif({
  weight: ["400"], // Regular
  subsets: ["latin"],
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "floodwatch.ph",
  description: "Real-Time Flood News for Every Filipino.",
  keywords: [
    "floodwatch.ph",
    "philippines floods",
    "flood news",
    "disaster preparedness",
    "typhoon updates",
    "flood awareness",
  ],
  authors: [{ name: "ariesjace" }],
  metadataBase: new URL("https://floodwatch-ph.vercel.app"),
  icons: {
    icon: [{ url: "/img/floodwatch.ph.png" }],
  },
  openGraph: {
    title: "floodwatch.ph",
    description: "Real-Time Flood News for Every Filipino.",
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
    title: "floodwatch.ph",
    description: "Real-Time Flood News for Every Filipino.",
    images: ["/img/floodwatch.ph.png"],
  },
};

// Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${notoSerif.className} antialiased`}>
        <main className="px-2 md:px-20">
          <Header />
          <section className="flex justify-between">
            {children}
            {/* LatestNews */}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}