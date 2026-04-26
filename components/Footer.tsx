"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
                href="https://wa.me/6285357607825"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-blue-600 hover:text-blue-500 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
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
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary-400 mt-1 shrink-0" />
                <span>Jalan Tanjung Barangan Lorong Temiyang XIV, Palembang, Indonesia</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary-400 shrink-0" />
                <a
                  href="mailto:eriel473@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  eriel473@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500 shrink-0" />
                <a
                  href="https://wa.me/6285357607825"
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
