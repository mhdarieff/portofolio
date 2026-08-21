export default function Education() {
  return (
    <section id="education" className="py-12 px-6 md:px-0 border-t border-slate-100 dark:border-slate-800">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 text-left">
        Pendidikan
      </h2>
      
      {/* Diganti w-full agar kotaknya sejajar rata kiri dengan judul */}
      <div className="w-full">
        <div className="bg-transparent p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col items-center text-center">
          
          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            S1 Teknik Informatika
          </h3>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
            Juli 2021 – Agustus 2026
          </span>
          
          <p className="text-slate-700 dark:text-slate-300 font-medium">
            Universitas Malikussaleh
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-center gap-2">
            Lhokseumawe, Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}