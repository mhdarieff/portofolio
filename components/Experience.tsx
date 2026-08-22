export default function Experience() {
  return (
    <section id="experience" className="py-16 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="md:w-1/4 shrink-0">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
          Pengalaman
        </h2>
      </div>
      
      <div className="md:w-3/4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Asisten Teknis Laboratorium Informatika</h3>
        <p className="text-base text-slate-600 dark:text-slate-400 mt-1 mb-2">Universitas Malikussaleh</p>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">2024 – 2025</p>
        
        <ul className="list-disc list-outside ml-4 text-slate-700 dark:text-slate-300 space-y-2 text-base leading-relaxed">
          <li>Membantu mahasiswa dalam memahami konsep pemrograman, perancangan sistem, dan penggunaan perangkat lunak selama sesi praktikum.</li>
          <li>Melakukan pemeliharaan perangkat keras dan <em>troubleshooting</em> sistem untuk memastikan kinerja optimal.</li>
          <li>Berkolaborasi dengan manajemen laboratorium untuk menjaga lingkungan akademik yang produktif.</li>
        </ul>
      </div>
    </section>
  );
}