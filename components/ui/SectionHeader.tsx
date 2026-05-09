"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ eyebrow, title, titleHighlight, subtitle, center = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={center ? "text-center" : ""}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
          <div className="h-px w-8 bg-gold/60" />
          <span className="font-number text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            {eyebrow}
          </span>
          <div className="h-px w-8 bg-gold/60" />
        </div>
      )}
      <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-soft-white mb-4">
        {title}{" "}
        {titleHighlight && (
          <span className="text-gold-shimmer">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-soft-white/40 text-base md:text-lg leading-relaxed max-w-2xl ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
