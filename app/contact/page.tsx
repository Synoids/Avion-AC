export const metadata = {
  title: "Kontak Avion AC - Hubungi Kami",
  description: "Hubungi Avion AC untuk layanan AC di Palembang. Telepon, WhatsApp, alamat, dan jam operasional.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-8 text-center">
              Kontak Kami
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-heading font-medium text-gray-900 mb-4">
                    Informasi Kontak
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📞</div>
                      <div>
                        <h3 className="font-medium text-gray-900">Telepon / WhatsApp</h3>
                        <div className="space-y-1 text-primary-700">
                          <a
                            href="tel:+6285357607825"
                            className="block hover:text-primary-800"
                          >
                            0853-5760-7825
                          </a>
                          <a
                            href="tel:+6287884746263"
                            className="block hover:text-primary-800"
                          >
                            0878-8474-6263
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl">💬</div>
                      <div>
                        <h3 className="font-medium text-gray-900">WhatsApp</h3>
                        <a
                          href="https://wa.me/6285357607825?text=Halo%20Avion%20AC%2C%20saya%20ingin%20konsultasi%20layanan%20AC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.394 2.124 7.712l-2.256 6.556 6.722-2.213c2.308 1.268 4.909 1.937 7.612 1.937 5.388 0 9.803-4.414 9.803-9.805 0-2.618-.674-5.074-1.954-7.178A9.86 9.86 0 0012.051 6.979z" />
                          </svg>
                          Hubungi WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📱</div>
                      <div>
                        <h3 className="font-medium text-gray-900">Media Sosial</h3>
                        <div className="space-y-1 text-primary-700">
                          <a
                            href="https://www.instagram.com/cuciac_plg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-primary-800"
                          >
                            Instagram
                          </a>
                          <a
                            href="https://www.facebook.com/avion.ac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-primary-800"
                          >
                            Facebook
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📍</div>
                      <div>
                        <h3 className="font-medium text-gray-900">Alamat</h3>
                        <p className="text-gray-600">
                          Palembang, Sumatera Selatan<br />
                          Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🕐</div>
                      <div>
                        <h3 className="font-medium text-gray-900">Jam Operasional</h3>
                        <p className="text-gray-600">
                          Senin - Minggu<br />
                          07:00 - 18:00 WIB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-xl font-heading font-medium text-gray-900 mb-4">
                  Lokasi Kami
                </h2>
                <div className="relative rounded-xl overflow-hidden h-64 shadow-md group">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://maps.google.com/maps?q=-2.9793,104.7104&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />

                  {/* Overlay transparan bisa diklik */}
                  <a
                    href="https://maps.app.goo.gl/SWwrhJiK3u5kNZZ1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all duration-300"
                    title="Buka di Google Maps"
                  />

                  {/* Badge buka di maps */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-lg pointer-events-none group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Buka di Google Maps
                  </div>
                </div>

                {/* Alamat di bawah peta */}
                <p className="text-sm text-gray-500 mt-2 text-center">
                  📍 Jl. Tanjung Barangan, Lorong Temiyang XIV, Palembang
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

