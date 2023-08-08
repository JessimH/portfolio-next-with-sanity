// app/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heddadi Jessim | Vue.js and React Developer ",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-t from-green-300 to-teal-700 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}