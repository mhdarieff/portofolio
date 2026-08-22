import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Arief",
  description: "Portofolio Teknik Informatika",
  icons: {
    icon: '/arief-baru.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Perhatikan class "scroll-smooth" di bawah ini. Inilah senjata rahasianya!
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}