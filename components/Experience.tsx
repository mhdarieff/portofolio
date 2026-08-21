export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6 md:px-0 border-t border-slate-100 dark:border-slate-800">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 text-left">
        Pengalaman
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-transparent p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col items-center text-center">
          
          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            Asisten Teknis Laboratorium Informatika
          </h3>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
            2024 – 2025
          </span>
          
          <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
            Universitas Malikussaleh
          </p>

          {/* list-none agar peluru (bullet) hilang dan teks rapi di tengah */}
          <ul className="list-none text-slate-600 dark:text-slate-400 space-y-3 text-sm md:text-base leading-relaxed">
            <li>Membantu mahasiswa dalam memahami konsep pemrograman, perancangan sistem, dan penggunaan perangkat lunak selama sesi praktikum.</li>
            <li>Melakukan pemeliharaan perangkat keras dan <em>troubleshooting</em> sistem untuk memastikan kinerja optimal.</li>
            <li>Berkolaborasi dengan manajemen laboratorium untuk menjaga lingkungan akademik yang produktif.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}