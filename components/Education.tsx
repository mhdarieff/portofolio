export default function Education() {
  return (
    <section id="education" className="py-12 px-6 md:px-0 border-t border-slate-100 dark:border-slate-800">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 text-left">
        Pendidikan
      </h2>
      
      <div className="max-w-4xl">
        {/* Kotak yang lebih clean dan seragam */}
        <div className="bg-transparent p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
              S1 Teknik Informatika
            </h3>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
              Juli 2021 – Agustus 2026
            </span>
          </div>
          
          <div className="mt-2">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Universitas Malikussaleh
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11 0 .308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.02.01.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
              Lhokseumawe, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}