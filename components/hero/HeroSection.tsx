import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTools, FaImages, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-gray-900 mb-6 leading-tight">
            Avion AC
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Layanan AC Profesional di Palembang
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Kami menyediakan jasa instalasi, servis, perbaikan, dan maintenance AC
            dengan teknisi berpengalaman dan peralatan modern untuk rumah dan bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6285357607825?text=Halo%20Avion%20AC%2C%20saya%20ingin%20konsultasi%20layanan%20AC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors shadow-soft"
            >
              <FaWhatsapp className="w-5 h-5" />
              Hubungi WhatsApp
            </a>

            <a
              href="https://www.instagram.com/cuciac_plg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors shadow-soft"
            >
              <FaInstagram className="w-5 h-5" />
              Kunjungi Instagram
            </a>

            <a
              href="https://www.facebook.com/avion.ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-soft"
            >
              <FaFacebook className="w-5 h-5" />
              Kunjungi Facebook
            </a>
          </div>

          {/* Quick Navigation for Mobile/UX */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
              Navigasi Cepat
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { name: "Layanan", href: "/services", icon: <FaTools />, color: "text-blue-600" },
                { name: "Galeri", href: "/gallery", icon: <FaImages />, color: "text-purple-600" },
                { name: "Tentang", href: "/about", icon: <FaInfoCircle />, color: "text-amber-600" },
                { name: "Kontak", href: "/contact", icon: <FaPhoneAlt />, color: "text-green-600" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-soft-lg hover:scale-105 transition-all duration-300 group border border-transparent hover:border-primary-100"
                >
                  <div className={`text-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
