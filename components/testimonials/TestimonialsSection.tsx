"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Ibu Siti",
    role: "Pemilik Rumah",
    content:
      "Pelayanan Avion AC sangat memuaskan. Teknisinya profesional dan pekerjaan rapi. AC saya sekarang dingin seperti baru lagi.",
    rating: 5,
    image: "👩‍💼",
  },
  {
    id: 2,
    name: "Pak Budi",
    role: "Pemilik Usaha Kecil",
    content:
      "Saya sudah menggunakan jasa Avion AC selama 2 tahun untuk maintenance rutin kantor. Response cepat dan harga bersaing.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    id: 3,
    name: "Ny. Dewi",
    role: "Rumah Sakit Swasta",
    content:
      "Avion AC selalu tepat waktu menangani emergency AC kami. Profesional dan dapat diandalkan untuk kebutuhan medis.",
    rating: 5,
    image: "👩‍⚕️",
  },
  {
    id: 4,
    name: "Pak Rudi",
    role: "Pemilik Ruko",
    content:
      "Instalasi 3 unit AC dilakukan dengan sangat rapih dan profesional. Hasil kerjanya memuaskan dan sesuai ekspektasi.",
    rating: 5,
    image: "👨‍💻",
  },
  {
    id: 5,
    name: "Ibu Ani",
    role: "Pemilik Apartemen",
    content:
      "Terima kasih Avion AC! Sewaktu AC mogok, saya langsung hubungi dan mereka datang dengan cepat. Sangat puas!",
    rating: 5,
    image: "👩‍🦰",
  },
  {
    id: 6,
    name: "Pak Hendra",
    role: "Pemilik Kafe",
    content:
      "Avion AC adalah pilihan terbaik untuk maintenance AC kafe saya. Mereka memahami kebutuhan bisnis dengan baik.",
    rating: 5,
    image: "👨‍🍳",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kepuasan <span className="text-gradient">Pelanggan Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ribuan pelanggan telah mempercayai Avion AC untuk kebutuhan AC
            mereka. Berikut kisah sukses mereka.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
