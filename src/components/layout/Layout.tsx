export default function ClinicLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">


      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Sizning salomatligingiz bizning ustuvorligimiz</h2>
        <p className="max-w-2xl mx-auto mb-6">Eng zamonaviy uskunalar va malakali shifokorlar bilan sifatli tibbiy xizmat taqdim etamiz.</p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-xl shadow hover:bg-gray-100 font-medium">
          Qabulga yozilish
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Xizmatlarimiz</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {title: "Umumiy tekshiruv", desc: "Kasalliklarni erta aniqlash va profilaktika."},
            {title: "Laboratoriya tahlillari", desc: "Aniq va tezkor diagnostika xizmati."},
            {title: "Stomatologiya", desc: "Sifatli va zamonaviy davolash usullari."},
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Bizning shifokorlar</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold">Dr. Shifokor {i}</h4>
              <p className="text-gray-500">Mutaxassis</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Biz bilan bog‘laning</h3>
        <form className="grid gap-6 bg-white p-8 rounded-2xl shadow">
          <input type="text" placeholder="Ismingiz" className="border rounded-xl px-4 py-3 w-full" />
          <input type="email" placeholder="Email" className="border rounded-xl px-4 py-3 w-full" />
          <textarea placeholder="Xabaringiz" rows={4} className="border rounded-xl px-4 py-3 w-full"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">Yuborish</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        <p>&copy; 2025 HealthCare Clinic. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}
