"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function FloatingHomeButton() {
  const pathname = usePathname();

  // Don't show on the homepage
  if (pathname === "/") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 20 }}
        className="fixed bottom-8 left-8 z-40"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-3 bg-white text-primary-600 rounded-full shadow-lg border border-primary-100 hover:shadow-xl hover:bg-primary-50 transition-all group"
          title="Kembali ke Beranda"
        >
          <div className="bg-primary-100 p-2 rounded-full group-hover:scale-110 transition-transform">
            <FaHome className="text-xl" />
          </div>
          <span className="font-semibold text-sm pr-1">Beranda</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
