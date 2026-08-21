export default function About() {
  return (
    // 1. py-20 dikurangi jadi py-12, ditambahkan text-left agar rata kiri
    <section id="about" className="py-12 px-6 md:px-0 flex flex-col items-start text-left border-t border-slate-100 dark:border-slate-800">
      
      {/* 2. Ukuran judul dipangkas dari 4xl menjadi 2xl */}
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Tentang Saya
      </h2>
      
      {/* 3. Ukuran teks dikembalikan ke standar (text-base), mx-auto dihapus agar merapat ke kiri */}
      <div className="max-w-3xl text-base text-slate-600 dark:text-slate-400 leading-relaxed space-y-5">
        <p>
          Halo! Saya Muhammad Arief, seorang lulusan Teknik Informatika dari Universitas Malikussaleh. Saya memiliki ketertarikan besar pada eksplorasi data, pengembangan <em>machine learning</em>, dan penyelesaian masalah berbasis teknologi.
        </p>
        <p>
          Selama menempuh pendidikan, saya aktif mendukung kegiatan akademik sebagai Asisten Laboratorium IT dan baru saja merampungkan riset akhir mengenai sistem klasifikasi penyakit mata menggunakan algoritma SVM dan <em>Modified Balanced Random Forest</em> (MBRF). Pengalaman ini melatih saya untuk berpikir analitis, bekerja dengan teliti, dan menerjemahkan logika sistem yang rumit menjadi solusi yang terstruktur.
        </p>
        <p>
          Sebagai pembelajar yang cepat dan selalu penasaran dengan inovasi teknologi, saya sangat antusias untuk membawa kemampuan teknis saya ke dunia industri yang sesungguhnya. Saat ini, saya sedang mencari peluang magang (<em>internship</em>) untuk berkontribusi langsung, berkolaborasi dalam tim, dan terus mengembangkan diri.
        </p>
      </div>
    </section>
  );
}