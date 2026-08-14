"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Membuat pengamat (observer) untuk mendeteksi scroll layar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika elemen masuk ke dalam layar
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Hentikan pantauan agar animasi hanya berjalan satu kali
            observer.unobserve(entry.target); 
          }
        });
      },
      { rootMargin: "-50px" } // Animasi terpicu sesaat sebelum elemen terlihat sepenuhnya
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}