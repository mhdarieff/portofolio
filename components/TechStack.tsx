export default function TechStack() {
  return (
    <section id="techstack" className="py-16 border-b border-slate-200 dark:border-slate-800">
      
      {/* Sub judul tetap di kiri, kecil, dan elegan sesuai desain baru */}
      <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-8 text-left">
        Keahlian
      </h2>
      
      {/* Konten dikembalikan ke gaya semula (gelembung/kotak) dan diposisikan tepat di tengah */}
      <div className="w-full flex flex-col items-center justify-center text-center">
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
          
          {/* Bahasa & Framework */}
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            Python
          </span>
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            React.js
          </span>
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            Next.js
          </span>
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            Tailwind CSS
          </span>
          
          {/* Fokus Keahlian & Alat */}
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            Machine Learning
          </span>
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            Scikit-learn
          </span>
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            Data Classification
          </span>
          <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-default">
            System Analysis
          </span>

        </div>
      </div>
    </section>
  );
}