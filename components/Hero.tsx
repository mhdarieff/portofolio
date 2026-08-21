import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-16 pb-20 px-6">
      
      {/* KONTENER FOTO PROFIL BUBBLE */}
      <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8 animate-blob overflow-hidden border-4 border-[#D4A373] shadow-xl hover:scale-105 transition-transform duration-500">
        <Image 
          src="/foto-profilmu.jpg" /* Ganti dengan nama file fotomu yang ada di folder public */
          alt="Muhammad Arief"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Teks Perkenalan di Bawah Foto */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 text-center">
        Muhammad Arief
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 text-center font-medium">
        Tech Enthusiast | System Analyst
      </h2>
      
      {/* Tombol CTA */}
      <div className="flex gap-4">
        <a href="#contact" className="px-6 py-3 bg-slate-900 dark:bg-[#E5D5B5] text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-white transition-colors">
          Hubungi Saya
        </a>
        <a href="/cv-arief.pdf" target="_blank" className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300">
          Unduh CV
        </a>
      </div>
      
    </section>
  );
}