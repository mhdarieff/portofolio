export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-10 text-slate-800 dark:text-slate-100 border-b-2 border-[#E5D5B5] inline-block pb-2 transition-colors">
        Pengalaman
      </h2>
      
      <div className="relative border-l-2 border-[#E5D5B5] ml-4 md:ml-6">
        
        <div className="ml-8 relative group">
          {/* Titik Timeline */}
          <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FAFAFA] dark:bg-neutral-950 border-4 border-[#E5D5B5] group-hover:scale-125 transition-transform duration-300"></span>
          
          <div className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#E5D5B5] dark:hover:border-[#E5D5B5]">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Asisten Laboratorium Teknik Informatika
              </h3>
              <span className="text-sm font-semibold text-[#D4A373] dark:text-[#E5D5B5] mt-1 md:mt-0 whitespace-nowrap">
                2024 – 2025
              </span>
            </div>
            
            <h4 className="text-md font-medium text-slate-500 dark:text-slate-400 mb-6">
              Universitas Malikussaleh
            </h4>
            
            <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed list-outside ml-4 md:ml-0" style={{ listStyleType: "disc" }}>
              <li>Membimbing mahasiswa dalam memahami konsep pemrograman, perancangan sistem, dan penggunaan perangkat lunak selama sesi praktikum laboratorium.</li>
              <li>Melakukan pemeliharaan perangkat keras (hardware) rutin dan pemecahan masalah (troubleshooting) sistem untuk memastikan performa laboratorium yang optimal.</li>
              <li>Berkolaborasi dengan manajemen laboratorium untuk menjaga lingkungan akademik yang produktif dan berfungsi dengan baik.</li>
              <li>Mendukung instalasi dan konfigurasi perangkat lunak yang digunakan di berbagai mata kuliah.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}