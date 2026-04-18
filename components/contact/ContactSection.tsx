"use client";

import React from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami Sekarang
            </h2>
            <p className="text-2xl opacity-90 mb-8">
              Siap membantu kebutuhan AC Anda 24/7
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                💬
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-sm opacity-90 mb-4">
                Respons kilat untuk pertanyaan Anda
              </p>
              <div className="text-sm font-semibold">628xxxxxxxxxx</div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:eriel473@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-sm opacity-90 mb-4">
                Kirim pertanyaan Anda via email
              </p>
              <div className="text-sm font-semibold">eriel473@gmail.com</div>
            </motion.a>

            {/* Telepon */}
            <motion.a
              href="tel:628123456789"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                ☎️
              </div>
              <h3 className="text-xl font-bold mb-2">Telepon</h3>
              <p className="text-sm opacity-90 mb-4">
                Hubungi langsung kami sekarang
              </p>
              <div className="text-sm font-semibold">628123456789</div>
            </motion.a>
          </div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Halo%20Avion%20AC%2C%20saya%20membutuhkan%20layanan%20AC`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Hubungi via WhatsApp Sekarang
            </motion.a>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-sm opacity-80 border-t border-white/20 pt-8"
          >
            <p>
              Kami melayani di seluruh Palembang dengan jaminan respons dalam
              30 menit
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
