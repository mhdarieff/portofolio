export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold mb-10 text-slate-800 dark:text-slate-100 border-b-2 border-[#E5D5B5] inline-block pb-2 transition-colors">
        Pendidikan
      </h2>
      
      <div className="relative border-l-2 border-[#E5D5B5] ml-4 md:ml-6">
        
        {/* Item Pendidikan Utama */}
        <div className="ml-8 relative group">
          {/* Titik Timeline */}
          <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FAFAFA] dark:bg-neutral-950 border-4 border-[#E5D5B5] group-hover:scale-125 transition-transform duration-300"></span>
          
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#E5D5B5] dark:hover:border-[#E5D5B5]">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Bachelor of Computer Science
              </h3>
              <span className="text-sm font-semibold text-[#D4A373] dark:text-[#E5D5B5] mt-1 md:mt-0">
                Jul 2021 – Aug 2026
              </span>
            </div>
            
            <h4 className="text-md font-medium text-slate-500 dark:text-slate-400">
              Malikussaleh University | Lhokseumawe, Indonesia
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
}