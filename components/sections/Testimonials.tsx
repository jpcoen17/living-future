"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/properties";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,168,95,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by Our"
          titleHighlight="Residents"
          subtitle="Real stories from people who found their dream home."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass gradient-border rounded-2xl p-6 hover:shadow-gold-sm transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-soft-white/60 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold/20"
                />
                <div>
                  <p className="font-display font-semibold text-sm text-soft-white">{t.name}</p>
                  <p className="text-soft-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
