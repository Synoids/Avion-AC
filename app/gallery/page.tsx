"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { galleryPhotos } from "@/data/gallery";


export default function GalleryPage() {
  const [selected, setSelected] = useState<null | (typeof galleryPhotos)[0]>(
    null
  );

  return (
    <>
      <title>Galeri - Avion AC Palembang</title>

      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="pt-24 pb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
          >
            Galeri{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Pekerjaan
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Dokumentasi nyata dari setiap pekerjaan kami
          </motion.p>
        </div>

        {/* Instagram-style Grid */}
        <div className="max-w-5xl mx-auto px-2 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-0.5 md:gap-1"
          >
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative aspect-square overflow-hidden cursor-pointer group bg-gray-100 border-2 border-black"
                onClick={() => setSelected(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 300px"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {galleryPhotos.length === 0 && (
            <div className="text-center py-24 text-gray-500">
              Belum ada foto yang tersedia.
            </div>
          )}
        </div>

        {/* Lightbox */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={900}
                height={900}
                className="rounded-xl object-contain w-full max-h-[80vh]"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </main>
    </>
  );
}
