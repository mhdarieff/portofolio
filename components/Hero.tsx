import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      
      <div className="flex-1 text-center md:text-left">
        {/* Class animate-pulse sudah dihilangkan dari baris di bawah ini */}
        <h1 className="text-5xl font-bold mb-6 text-slate-800 dark:text-slate-100 transition-colors">
          Halo, Saya <span className="text-[#D4A373]">Muhammad Arief</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed mx-auto md:mx-0 transition-colors">
          Lulusan Teknik Informatika yang memiliki ketertarikan mendalam pada pengembangan Web dan implementasi Machine Learning. 
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="#contact" className="inline-block bg-[#E5D5B5] text-slate-900 px-7 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#d5c29d] hover:scale-105 hover:shadow-lg hover:-translate-y-1">
            Mari Berkolaborasi
          </a>
          
          <a 
            href="/CV_Muhammad_Arief.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block border-2 border-[#E5D5B5] text-slate-800 dark:text-[#E5D5B5] px-7 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#E5D5B5] hover:text-slate-900 dark:hover:text-slate-900 hover:scale-105 hover:shadow-lg hover:-translate-y-1"
          >
            Lihat CV
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-neutral-900 shadow-2xl hover:-translate-y-2 transition-all duration-500 ring-4 ring-[#E5D5B5]">
          <Image
            src="/profil.jpg" 
            alt="Foto Profil Muhammad Arief"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

    </section>
  );
}