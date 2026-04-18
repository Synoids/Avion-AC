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
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Halo%20Avion%20AC%2C%20saya%20ingin%20konsultasi%20layanan%20AC`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors shadow-soft"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.394 2.124 7.712l-2.256 6.556 6.722-2.213c2.308 1.268 4.909 1.937 7.612 1.937 5.388 0 9.803-4.414 9.803-9.805 0-2.618-.674-5.074-1.954-7.178A9.86 9.86 0 0012.051 6.979z" />
              </svg>
              Hubungi WhatsApp
            </a>

            <a
              href="https://www.instagram.com/cuciac_plg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors shadow-soft"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm10.25 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
              </svg>
              Kunjungi Instagram
            </a>

            <a
              href="https://www.facebook.com/avion.ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-soft"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.4c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.4.7-1.4 1.4v1.7h2.4l-.4 2.9h-2v7A10 10 0 0022 12z" />
              </svg>
              Kunjungi Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
