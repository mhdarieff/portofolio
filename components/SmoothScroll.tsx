"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // Kita hapus properti 'options' agar Lenis menggunakan kecepatan normal bawaannya
    <ReactLenis root>
      {/* @ts-ignore */}
      {children}
    </ReactLenis>
  );
}