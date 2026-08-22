export default function Education() {
  return (
    <section id="education" className="py-16 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="md:w-1/4 shrink-0">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
          Pendidikan
        </h2>
      </div>
      
      <div className="md:w-3/4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">S1 Teknik Informatika</h3>
        <p className="text-base text-slate-600 dark:text-slate-400 mt-1 mb-2">Universitas Malikussaleh — Lhokseumawe, Indonesia</p>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Juli 2021 – Agustus 2026</p>
      </div>
    </section>
  );
}