"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* BG image */}
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=85"
            alt="City nightscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bg/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/60 to-transparent" />

          {/* Glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-gold/15 rounded-full blur-[80px]" />

          <div className="relative z-10 p-12 md:p-20 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold/60" />
              <span className="font-number text-xs font-semibold tracking-[0.2em] text-gold uppercase">Start Now</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-soft-white mb-4 leading-tight">
              Your Future Home<br />
              <span className="text-gold">Is Waiting</span>
            </h2>
            <p className="text-soft-white/50 text-base mb-10 leading-relaxed">
              Let&apos;s find the perfect place for your better tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="btn-gold flex items-center gap-2">
                  Schedule Visit
                  <ArrowRight size={14} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-outline flex items-center gap-2">
                  <Phone size={14} />
                  Talk to Agent
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
