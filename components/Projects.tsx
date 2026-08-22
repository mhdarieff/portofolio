export default function Projects() {
  return (
    <section id="projects" className="py-16 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="md:w-1/4 shrink-0">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
          Proyek & Riset
        </h2>
      </div>
      
      <div className="md:w-3/4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Model Machine Learning Klasifikasi Penyakit Mata</h3>
        <p className="text-base text-slate-600 dark:text-slate-400 mt-1 mb-2">Proyek Skripsi Akademik (Rumah Sakit PIM)</p>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">2025 – 2026</p>
        
        <ul className="list-disc list-outside ml-4 text-slate-700 dark:text-slate-300 space-y-2 text-base leading-relaxed mb-6">
          <li>Mengembangkan sistem klasifikasi <em>machine learning</em> untuk mengategorikan pasien penyakit mata menggunakan <em>dataset</em> medis.</li>
          <li>Menerapkan dan membandingkan algoritma <strong>SVM</strong> dan <strong>MBRF</strong>.</li>
          <li>MBRF mengungguli SVM dengan rata-rata akurasi <strong>85% berbanding 82.3%</strong>.</li>
          <li>Merancang dokumentasi sistem, <em>flowchart</em>, dan <em>activity diagram</em> untuk Pengguna dan Admin.</li>
        </ul>

        {/* Tag proyek jadi minimalis (kotak kecil abu-abu yang elegan) */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700">Python</span>
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700">Scikit-learn</span>
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700">Machine Learning</span>
        </div>
      </div>
    </section>
  );
}