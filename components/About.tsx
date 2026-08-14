export default function About() {
  return (
    <section id="about" className="py-16">
      {/* Tambahkan dark:text-slate-100 untuk judul */}
      <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100 border-b-2 border-[#E5D5B5] inline-block pb-2 transition-colors">
        Di Balik Layar
      </h2>
      
      {/* Tambahkan dark:bg-slate-800 dan dark:border-slate-700 untuk kotaknya */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
        {/* Tambahkan dark:text-slate-300 untuk teks paragraf */}
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors">
          Selain fokus merancang algoritma <i>Machine Learning</i> dan mengolah data klasifikasi medis, saya juga seorang <i>power user</i> dan <i>hardware enthusiast</i>. Bagi saya, memastikan setiap baris kode berjalan efisien sama pentingnya dengan menjaga performa perangkat tetap optimal—seperti memaksimalkan konfigurasi RAM 32GB dan VRAM 6GB pada RTX 3050.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
          Di waktu luang, insting analitis saya biasanya beralih ke arena kompetitif. Mulai dari menguji responsivitas periferal dengan <i>polling rate</i> 8000Hz di Valorant dan Mobile Legends, hingga sekadar bersantai mengeksplorasi dunia Wuthering Waves.
        </p>
      </div>
    </section>
  );
}