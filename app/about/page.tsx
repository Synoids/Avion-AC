export const metadata = {
  title: "Tentang Avion AC - Jasa AC Palembang",
  description: "Pelajari tentang Avion AC, penyedia layanan AC terpercaya di Palembang dengan pengalaman dan komitmen terhadap kualitas.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-8 text-center">
              Tentang Avion AC
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-medium text-gray-900 mb-4">
                  Latar Belakang Perusahaan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Avion AC adalah perusahaan jasa layanan air conditioner yang telah berpengalaman
                  melayani masyarakat Palembang dan sekitarnya. Kami didirikan dengan komitmen untuk
                  memberikan layanan AC berkualitas tinggi dengan harga yang terjangkau.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan tim teknisi yang profesional dan berpengalaman, kami siap membantu Anda
                  dalam segala kebutuhan perawatan, perbaikan, dan instalasi AC untuk rumah maupun bisnis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-medium text-gray-900 mb-4">
                  Deskripsi Layanan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami menyediakan berbagai layanan AC yang komprehensif, mulai dari instalasi AC baru,
                  servis dan perbaikan, pembersihan AC, pengisian freon, hingga relokasi atau pembongkaran AC.
                  Setiap layanan kami lakukan dengan standar kualitas tertinggi menggunakan peralatan modern
                  dan bahan berkualitas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kami memahami bahwa AC merupakan investasi penting untuk kenyamanan rumah atau bisnis Anda,
                  oleh karena itu kami berkomitmen untuk memberikan pelayanan yang dapat diandalkan dan memuaskan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-medium text-gray-900 mb-4">
                  Wilayah Pelayanan
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Avion AC melayani seluruh wilayah Palembang. Kami siap datang ke lokasi Anda dengan respon yang cepat dan waktu yang fleksibel untuk memenuhi kebutuhan layanan Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
