import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Impor komponen SmoothScroll di sini
import SmoothScroll from "@/components/SmoothScroll"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Muhammad Arief",
  description: "Portofolio Teknik Informatika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        {/* 2. Bungkus children dengan SmoothScroll */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}