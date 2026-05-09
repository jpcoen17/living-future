"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,168,95,0.05)_0%,transparent_70%)]" />
      <div className="text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-number font-bold text-[120px] md:text-[180px] leading-none text-gold/10 select-none">
            404
          </p>
          <h1 className="font-display font-semibold text-3xl md:text-4xl text-soft-white mt-4 mb-4">
            Page Not Found
          </h1>
          <p className="text-soft-white/40 mb-10 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/">
              <button className="btn-gold flex items-center gap-2">
                <Home size={14} />
                Go Home
              </button>
            </Link>
            <Link href="/properties">
              <button className="btn-outline flex items-center gap-2">
                <ArrowLeft size={14} />
                Browse Properties
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
