export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 md:px-0 border-t border-slate-100 dark:border-slate-800">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 text-left">
        Proyek & Riset
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-transparent p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col items-center text-center">
          
          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            Model Machine Learning Klasifikasi Penyakit Mata
          </h3>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
            2025 – 2026
          </span>
          
          <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">
            Proyek Skripsi Akademik (Rumah Sakit PIM)
          </p>

          <ul className="list-none text-slate-600 dark:text-slate-400 space-y-3 text-sm md:text-base leading-relaxed mb-6">
            <li>Mengembangkan sistem klasifikasi <em>machine learning</em> untuk mengategorikan pasien penyakit mata menggunakan <em>dataset</em> medis.</li>
            <li>Menerapkan dan membandingkan algoritma <strong>SVM</strong> dan <strong>MBRF</strong>.</li>
            <li>MBRF mengungguli SVM dengan rata-rata akurasi <strong>85% berbanding 82.3%</strong>.</li>
            <li>Merancang dokumentasi sistem, <em>flowchart</em>, dan <em>activity diagram</em> untuk Pengguna dan Admin.</li>
          </ul>

          {/* justify-center agar tag keahlian berada di tengah */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700">Python</span>
            <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700">Scikit-learn</span>
            <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700">Machine Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}