import { FaWhatsapp, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaInstagram } from "react-icons/fa";

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
                      <div className="text-2xl text-primary-600">
                        <FaPhone />
                      </div>
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
                      <div className="text-2xl text-green-500">
                        <FaWhatsapp />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">WhatsApp</h3>
                        <a
                          href="https://wa.me/6285357607825?text=Halo%20Avion%20AC%2C%20saya%20ingin%20konsultasi%20layanan%20AC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <FaWhatsapp className="w-4 h-4" />
                          Hubungi WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl text-pink-600">
                        <FaInstagram />
                      </div>
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
                      <div className="text-2xl text-red-500">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Alamat</h3>
                        <p className="text-gray-600">
                          Palembang, Sumatera Selatan<br />
                          Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-2xl text-orange-500">
                        <FaClock />
                      </div>
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

