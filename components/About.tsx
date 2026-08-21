export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-100 text-center">
        Tentang Saya
      </h2>
      
      <div className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 px-6 md:px-0 text-justify md:text-center">
        <p>
          Lulusan Teknik Informatika dari Universitas Malikussaleh dengan pengalaman akademik dalam pengembangan <em>machine learning</em> dan dukungan laboratorium IT. Telah menyelesaikan proyek skripsi mengenai klasifikasi penyakit mata menggunakan algoritma SVM dan <em>Modified Balanced Random Forest</em> (MBRF).
        </p>
        <p>
          Memiliki beberapa sertifikasi di bidang teknologi informasi. Sebagai seorang pembelajar cepat dengan kemampuan analitis yang kuat dan teliti terhadap detail, saya sangat antusias untuk berkontribusi dan berkembang melalui kesempatan magang (<em>internship</em>).
        </p>
      </div>
    </section>
  );
}