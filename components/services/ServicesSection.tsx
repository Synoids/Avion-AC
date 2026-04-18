const services = [
  {
    title: "AC Service and Repair",
    description: "Perbaikan dan servis AC untuk semua merek dengan teknisi berpengalaman",
    icon: "🔧",
  },
  {
    title: "AC Cleaning",
    description: "Pembersihan menyeluruh AC untuk performa optimal dan udara sehat",
    icon: "🧹",
  },
  {
    title: "Freon Refill",
    description: "Pengisian ulang freon dengan kualitas terbaik sesuai spesifikasi",
    icon: "💨",
  },
  {
    title: "AC Installation",
    description: "Instalasi AC baru dengan standar profesional dan garansi",
    icon: "📦",
  },
  {
    title: "AC Relocation or Dismantling",
    description: "Pemindahan atau pembongkaran AC dengan aman dan hati-hati",
    icon: "📍",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan AC profesional untuk memenuhi kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-heading font-medium text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
