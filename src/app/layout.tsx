// src/app/layout.tsx
import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google"; // Import Noto Serif
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSerif = Noto_Serif({
  weight: ["400"], // Regular
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "floodwatch.ph",
  description: "Real-Time Flood News for Every Filipino.",
  icons: { icon: [{ url: "/img/floodwatch.ph.png" }] },
  openGraph: {
    title: "floodwatch.ph",
    description: "Real-Time Flood News for Every Filipino.",
    type: "website",
    authors: "ariesjace",
  },
  keywords: ["floodwatch.ph", "news", "news about floods"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply Noto Serif globally */}
      <body className={`${notoSerif.className} antialiased`}>
        <main className="px-2 md:px-20">
          <Header />
          <section className="flex justify-between">
            {children}
            {/*LatestNews*/}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
