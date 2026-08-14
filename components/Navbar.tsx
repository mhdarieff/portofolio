import ThemeToggle from "./ThemeToggle"; // Import saklarnya

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 mb-10 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="text-2xl font-bold tracking-tighter text-slate-800 dark:text-slate-100">
        Muhammad Arief<span className="text-[#D4A373]">.</span>
      </div>
      
      <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400 font-medium">
        <a href="#projects" className="hover:text-slate-900 dark:hover:text-[#E5D5B5] transition-colors hidden md:block">Proyek</a>
        <a href="#techstack" className="hover:text-slate-900 dark:hover:text-[#E5D5B5] transition-colors hidden md:block">Tech Stack</a>
        <a href="#contact" className="hover:text-slate-900 dark:hover:text-[#E5D5B5] transition-colors hidden md:block">Kontak</a>
        
        {/* Tombol saklar muncul di sini */}
        <ThemeToggle /> 
      </div>
    </nav>
  );
}