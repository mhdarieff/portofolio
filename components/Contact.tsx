export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center border-t border-slate-100 dark:border-slate-800 mt-8 transition-colors">
      <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100 transition-colors">Mari Berkolaborasi</h2>
      
      <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed transition-colors">
        Tertarik untuk membahas teknologi, pengembangan model algoritma, atau bahkan mabar bareng? Saat ini saya berbasis di <span className="font-semibold text-slate-800 dark:text-slate-100">Lhokseumawe, Aceh</span>, dan selalu terbuka untuk peluang kerja sama maupun diskusi teknis.
      </p>
      
      <div className="flex justify-center gap-6">
        <a href="mailto:ariefm0311@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-[#D4A373] dark:hover:text-[#E5D5B5] font-semibold transition-colors duration-300 underline underline-offset-4 hover:-translate-y-1 inline-block">
          Email
        </a>
        <a href="https://www.linkedin.com/in/muhammad-arief-9541ab3b7/" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[#D4A373] dark:hover:text-[#E5D5B5] font-semibold transition-colors duration-300 underline underline-offset-4 hover:-translate-y-1 inline-block">
          LinkedIn
        </a>
        <a href="https://github.com/mhdarieff" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[#D4A373] dark:hover:text-[#E5D5B5] font-semibold transition-colors duration-300 underline underline-offset-4 hover:-translate-y-1 inline-block">
          GitHub
        </a>
      </div>
    </section>
  );
}