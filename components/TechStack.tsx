export default function TechStack() {
  return (
    <section id="techstack" className="py-16">
      {/* Warna judul disesuaikan untuk dark mode */}
      <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100 border-b-2 border-[#E5D5B5] inline-block pb-2 transition-colors">
        Tech Stack
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Kotak 1 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-[#E5D5B5] dark:hover:border-[#E5D5B5] transition-all duration-300">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors">Machine Learning</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 font-medium transition-colors">
            <li>Python</li>
            <li>Support Vector Machine (SVM)</li>
            <li>Random Forest</li>
            <li>Data Classification</li>
          </ul>
        </div>

        {/* Kotak 2 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-[#E5D5B5] dark:hover:border-[#E5D5B5] transition-all duration-300">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors">Web Development</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 font-medium transition-colors">
            <li>HTML & CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Kotak 3 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-[#E5D5B5] dark:hover:border-[#E5D5B5] transition-all duration-300">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors">Tools & Sistem</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 font-medium transition-colors">
            <li>Git & GitHub</li>
            <li>UML & Flowchart Design</li>
            <li>Hardware Optimization</li>
          </ul>
        </div>

      </div>
    </section>
  );
}