"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, // Tingkat kelembutan (semakin kecil = semakin mulus/lambat)
        duration: 1.5, // Durasi efek scroll
        smoothWheel: true, 
      }}
    >
      {/* @ts-ignore */}
      {children}
    </ReactLenis>
  );
}