import Image from "next/image";

export default function Hero() {
  return (
    // Hapus "items-center" dan ganti jadi rata kiri ("items-start")
    <section className="pt-24 pb-16 px-6 md:px-0 flex flex-col items-start text-left">
      
{/* 1. Foto Profil (Warna Asli) */}
      {/* Hapus kata "grayscale" dan "hover:grayscale-0" di sini */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 overflow-hidden rounded-full border border-slate-200 dark:border-slate-800 transition-all duration-500">
        <Image 
          src="/arief-baru.jpg" /* <-- Pastikan nama ini sudah sesuai dengan fotomu */
          alt="Muhammad Arief"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Nama Super Besar & Rata Kiri */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
        Muhammad Arief
      </h1>

      {/* 3. Deskripsi Singkat Langsung di Hero (menggantikan tulisan Tech Enthusiast) */}
      <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
        Lulusan Teknik Informatika dengan pengalaman akademik dalam pengembangan <em>machine learning</em> dan analisis sistem. Berfokus pada klasifikasi data dan perancangan arsitektur teknologi yang terstruktur.
      </p>
      
      {/* 4. Tombol Gaya Formal (Kotak dengan sudut tumpul) */}
      <div className="flex items-center gap-4">
        <a href="#contact" className="px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-md font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-sm">
          Hubungi Saya
        </a>
        <a href="/CV_Muhammad_Arief.pdf" target="_blank" className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">
          Unduh CV
        </a>
      </div>
      
    </section>
  );
}