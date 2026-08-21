export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <h2 className="text-4xl font-bold mb-12 text-slate-800 dark:text-slate-100 text-center">
        Proyek & Riset
      </h2>
      
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        {/* Kartu Proyek Skripsi */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Model Machine Learning untuk Klasifikasi Penyakit Mata
            </h3>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
              2025 – 2026
            </span>
          </div>
          
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-6">
            Proyek Skripsi Akademik (Rumah Sakit PIM)
          </p>

          <div className="mb-6">
            <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
              <li>
                Mengembangkan sistem klasifikasi <em>machine learning</em> untuk mengategorikan pasien penyakit mata menggunakan <em>dataset</em> medis dari Rumah Sakit PIM.
              </li>
              <li>
                Menerapkan dan membandingkan dua algoritma—<strong>Support Vector Machine (SVM)</strong> dan <strong>Modified Balanced Random Forest (MBRF)</strong>—untuk menentukan model klasifikasi yang paling akurat.
              </li>
              <li>
                MBRF mengungguli SVM dengan rata-rata akurasi <strong>85% berbanding 82.3%</strong>, membuktikan bahwa MBRF adalah model yang lebih efektif untuk <em>dataset</em> ini.
              </li>
              <li>
                Merancang dokumentasi sistem secara komprehensif, termasuk pembuatan <em>flowchart</em> dan <em>activity diagram</em> untuk proses Pengguna (User) maupun Admin.
              </li>
              <li>
                Dibangun menggunakan bahasa pemrograman <strong>Python</strong> dengan <em>library</em> <strong>scikit-learn</strong> untuk proses pelatihan (<em>training</em>) dan evaluasi model.
              </li>
            </ul>
          </div>

          {/* Tag Keahlian */}
          <div className="flex flex-wrap gap-2 mt-8">
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium">Scikit-learn</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium">Machine Learning</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium">System Documentation</span>
          </div>
        </div>
      </div>
    </section>
  );
}