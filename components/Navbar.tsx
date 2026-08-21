import ThemeToggle from "./ThemeToggle"; // Import saklarnya

export default function Navbar() {
  return (
    // 1. py-6 diubah jadi py-3 (agar tidak terlalu tebal)
    // 2. mb-10 diubah jadi mb-6 (agar konten di bawahnya tidak terlalu jauh)
    <nav className="flex justify-between items-center py-3 mb-6 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* 3. text-2xl diubah menjadi text-xl di layar HP, dan kembali 2xl di layar laptop (md:text-2xl) */}
      <div className="text-xl md:text-2xl font-bold tracking-tighter text-slate-800 dark:text-slate-100">
        Muhammad Arief<span className="text-[#D4A373]">.</span>
      </div>
      
      {/* 4. Ukuran teks menu sedikit disesuaikan agar proporsional dengan navbar yang baru */}
      <div className="flex items-center gap-5 md:gap-6 text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">
        <a href="#projects" className="hover:text-slate-900 dark:hover:text-[#E5D5B5] transition-colors hidden md:block">Proyek</a>
        <a href="#techstack" className="hover:text-slate-900 dark:hover:text-[#E5D5B5] transition-colors hidden md:block">Tech Stack</a>
        <a href="#contact" className="hover:text-slate-900 dark:hover:text-[#E5D5B5] transition-colors hidden md:block">Kontak</a>
        
        {/* Tombol saklar muncul di sini */}
        <ThemeToggle /> 
      </div>
    </nav>
  );
}