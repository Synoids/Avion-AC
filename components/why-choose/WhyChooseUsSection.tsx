"use client";

import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Teknisi Bersertifikat",
    description:
      "Tim teknisi kami telah tersertifikat dan berpengalaman lebih dari 10 tahun di bidang AC.",
  },
  {
    number: "02",
    title: "Garansi Kepuasan",
    description:
      "Kami memberikan garansi 100% kepuasan atau uang kembali untuk setiap layanan.",
  },
  {
    number: "03",
    title: "Respons Cepat",
    description:
      "Tim kami siap merespons panggilan Anda dalam hitungan menit, 24/7.",
  },
  {
    number: "04",
    title: "Spare Part Original",
    description:
      "Hanya menggunakan spare part original untuk hasil perbaikan yang sempurna.",
  },
  {
    number: "05",
    title: "Harga Kompetitif",
    description:
      "Harga terjangkau tanpa mengurangi kualitas layanan yang kami berikan.",
  },
  {
    number: "06",
    title: "Layanan Purna Jual",
    description:
      "Kami tetap peduli dengan kepuasan Anda setelah layanan selesai.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mengapa Memilih <span className="text-gradient">Avion AC</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Komitmen kami adalah memberikan layanan terbaik dengan integritas
            tinggi dan kepuasan pelanggan sebagai prioritas utama.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors mb-4">
                {reason.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>

              {/* Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mt-6 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
