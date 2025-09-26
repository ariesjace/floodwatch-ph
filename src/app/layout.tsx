import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const trispace = Trispace({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "floodwatch.ph",
  description: "Real-Time Flood News for Every Filipino.",
  icons:{
    icon:[{url:'/img/floodwatch.ph.png'}]
  },
  openGraph:{
    title: 'floodwatch.pg',
    description: "Real-Time Flood News for Every Filipino.",
    type: 'article',
    authors: 'ariesjace',
  },
  keywords: ['floodwatch.ph', 'news', 'news about floods']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className="px-2 md:px-20">
          <Header />
          <section className="flex justify-between">
            {children}
            {/*LatestNews*/}
          </section>
        </main>
      </body>
    </html>
  );
}
