"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Avion AC</h3>
            <p className="text-sm mb-4">
              Layanan AC profesional di Palembang dengan teknisi berpengalaman
              dan peralatan modern.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.394 2.124 7.712l-2.256 6.556 6.722-2.213c2.308 1.268 4.909 1.937 7.612 1.937 5.388 0 9.803-4.414 9.803-9.805 0-2.618-.674-5.074-1.954-7.178A9.86 9.86 0 0012.051 6.979z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-primary-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.31c0-2.87 1.77-4.43 4.31-4.43 1.23 0 2.28.09 2.59.13v3h-1.78c-1.39 0-1.65.66-1.65 1.62v2.12h3.29l-.43 3.54h-2.86V20" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang", href: "/about" },
                { name: "Layanan", href: "/services" },
                { name: "Galeri", href: "/gallery" },
                { name: "Kontak", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {[
                "Instalasi AC",
                "Servis & Perbaikan",
                "Pembersihan AC",
                "Pengisian Freon",
                "Relokasi AC",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm hover:text-primary-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-primary-400">Lokasi:</span> Jalan Tanjung Barangan Lorong Temiyang XIV, Palembang,
                Indonesia
              </p>
              <p>
                <span className="text-primary-400">Email:</span>{" "}
                <a
                  href="mailto:eriel473@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  eriel473@gmail.com
                </a>
              </p>
              <p>
                <span className="text-primary-400">WhatsApp:</span>{" "}
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  0853-5760-7825
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            &copy; {currentYear} Avion AC. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
