export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-10 text-slate-800 dark:text-slate-100 border-b-2 border-[#E5D5B5] inline-block pb-2 transition-colors">
        Proyek
      </h2>
      
      <div className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#E5D5B5] dark:hover:border-[#E5D5B5]">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 max-w-2xl leading-tight">
            Model Machine Learning untuk Klasifikasi Penyakit Mata, <span className="font-medium text-lg block md:inline text-slate-500 dark:text-slate-400 mt-1 md:mt-0">Proyek Tugas Akhir</span>
          </h3>
          <span className="text-sm font-semibold text-[#D4A373] dark:text-[#E5D5B5] mt-3 md:mt-1 whitespace-nowrap">
            2025 – 2026
          </span>
        </div>

        {/* Tag Teknologi */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-[#E5D5B5]/20 dark:bg-[#E5D5B5]/10 text-slate-700 dark:text-[#E5D5B5] text-sm px-3 py-1 rounded-full font-medium transition-colors">Python</span>
          <span className="bg-[#E5D5B5]/20 dark:bg-[#E5D5B5]/10 text-slate-700 dark:text-[#E5D5B5] text-sm px-3 py-1 rounded-full font-medium transition-colors">Scikit-learn</span>
          <span className="bg-[#E5D5B5]/20 dark:bg-[#E5D5B5]/10 text-slate-700 dark:text-[#E5D5B5] text-sm px-3 py-1 rounded-full font-medium transition-colors">Data Classification</span>
        </div>
        
        <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed list-outside ml-4 md:ml-0" style={{ listStyleType: "disc" }}>
          <li>Mengembangkan sistem klasifikasi <i>machine learning</i> untuk mengkategorikan pasien penyakit mata menggunakan dataset medis dari Rumah Sakit PIM.</li>
          <li>Mengimplementasikan dan membandingkan dua algoritma - Support Vector Machine (SVM) dan Modified Balanced Random Forest (MBRF) - untuk menentukan model klasifikasi yang paling akurat.</li>
          <li><strong>MBRF mengungguli SVM dengan rata-rata akurasi 85% berbanding 82,3%</strong>, menjadikan MBRF sebagai model yang lebih efektif untuk dataset ini.</li>
          <li>Merancang dokumentasi sistem yang komprehensif, mencakup <i>flowchart</i> dan diagram aktivitas (activity diagrams) untuk proses <i>User</i> maupun <i>Admin</i>.</li>
          <li>Dibangun menggunakan bahasa pemrograman Python dengan pustaka scikit-learn untuk pelatihan dan evaluasi model.</li>
        </ul>

      </div>
    </section>
  );
}