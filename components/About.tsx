export default function About() {
  return (
    <section id="about" className="py-12 px-6 md:px-0 border-t border-slate-100 dark:border-slate-800">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 text-left">
        Tentang Saya
      </h2>
      
      {/* mx-auto dan pembatasan lebar dihapus, diganti w-full agar sejajar dengan judul */}
      <div className="w-full text-center text-base text-slate-600 dark:text-slate-400 leading-relaxed space-y-5">
        <p>
          Halo! Saya Muhammad Arief, seorang lulusan Teknik Informatika dari Universitas Malikussaleh. Saya memiliki ketertarikan besar pada eksplorasi data, pengembangan <em>machine learning</em>, dan penyelesaian masalah berbasis teknologi.
        </p>
        <p>
          Selama menempuh pendidikan, saya aktif mendukung kegiatan akademik sebagai Asisten Laboratorium IT dan baru saja merampungkan riset akhir mengenai sistem klasifikasi penyakit mata menggunakan algoritma SVM dan <em>Modified Balanced Random Forest</em> (MBRF).
        </p>
        <p>
          Sebagai pembelajar yang cepat, saya sangat antusias untuk membawa kemampuan teknis saya ke dunia industri yang sesungguhnya. Saat ini, saya sedang mencari peluang magang (<em>internship</em>) untuk berkontribusi dan berkolaborasi dalam tim.
        </p>
      </div>
    </section>
  );
}