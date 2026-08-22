export default function About() {
  return (
    <section id="about" className="py-16 border-b border-slate-200 dark:border-slate-800">
      
      {/* Sub Judul: Di atas dan di tengah layar */}
      <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 text-center mb-8">
        Tentang Saya
      </h2>
      
      {/* Isi Teks: Berada di bawah judul, dibungkus agar ada di tengah (mx-auto) dan teksnya rata tengah (text-center) */}
      <div className="max-w-3xl mx-auto text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 text-center">
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