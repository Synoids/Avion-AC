"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    features: string[];
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -10 }}
        className="h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer"
      >
        {/* Icon */}
        <div className="text-5xl mb-6">{service.icon}</div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={
            isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3 }}
          className="mb-6 overflow-hidden"
        >
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <span className="text-primary-600 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/6285357607825?text=Saya%20tertarik%20dengan%20layanan%20${service.title.replace(/\s+/g, "%20")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          <FaWhatsapp className="text-xl" />
          Pesan Sekarang
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
