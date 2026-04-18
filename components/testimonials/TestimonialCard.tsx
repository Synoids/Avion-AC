"use client";

import React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
  };
  index: number;
}

export function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="h-full p-8 bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 mb-6 leading-relaxed italic">
          "{testimonial.content}"
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
          {/* Avatar */}
          <div className="text-4xl">{testimonial.image}</div>

          {/* Author Info */}
          <div>
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
