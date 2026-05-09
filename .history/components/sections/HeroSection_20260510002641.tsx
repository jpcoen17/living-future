"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, MapPin } from "lucide-react";

// Static particle positions — fixed to avoid SSR/client hydration mismatch
const PARTICLES = [
  { left: 10, top: 20, duration: 3.2, delay: 0.0 },
  { left: 25, top: 65, duration: 4.1, delay: 0.5 },
  { left: 38, top: 42, duration: 3.8, delay: 1.1 },
  { left: 52, top: 80, duration: 5.0, delay: 0.3 },
  { left: 60, top: 15, duration: 3.5, delay: 1.8 },
  { left: 70, top: 55, duration: 4.4, delay: 0.7 },
  { left: 80, top: 30, duration: 3.9, delay: 2.0 },
  { left: 88, top: 72, duration: 4.7, delay: 1.4 },
  { left: 15, top: 88, duration: 3.3, delay: 0.9 },
  { left: 44, top: 10, duration: 4.8, delay: 1.6 },
  { left: 5,  top: 50, duration: 3.6, delay: 2.3 },
  { left: 33, top: 28, duration: 5.1, delay: 0.1 },
  { left: 62, top: 90, duration: 3.7, delay: 1.2 },
  { left: 77, top: 5,  duration: 4.2, delay: 2.8 },
  { left: 90, top: 45, duration: 4.9, delay: 0.6 },
  { left: 48, top: 60, duration: 3.4, delay: 1.9 },
  { left: 20, top: 35, duration: 4.6, delay: 3.0 },
  { left: 55, top: 22, duration: 3.1, delay: 0.4 },
  { left: 73, top: 78, duration: 4.3, delay: 2.1 },
  { left: 30, top: 95, duration: 5.2, delay: 1.0 },
];

const FLOATING_CARDS = [
  { name: "Skyline Apartment", location: "Downtown, Manhattan", price: "$320,000", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80", delay: 0 },
  { name: "Greenwood Villa", location: "Ventura Hills, CA", price: "$450,000", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80", delay: 0.2 },
  { name: "Lakeview House", location: "Lakeside, Chicago", price: "$380,000", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80", delay: 0.4 },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Cinematic background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=85"
          alt="Luxury cityscape"
          className="w-full h-full object-cover scale-110"
        />
        {/* Layered overlays for cinematic look */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/30" />
        <div className="absolute inset-0 bg-bg/20" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald/8 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Animated particles — static positions to avoid SSR mismatch */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="container mx-auto px-6 py-32 md:py-0 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-8 bg-gold/60" />
                <span className="font-number text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                  Premium Real Estate
                </span>
              </motion.div>

              {/* Main Headline */}
              <div className="overflow-hidden mb-6">
                {["FIND THE", "FUTURE OF", "LIVING"].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h1
                      className={`font-display font-semibold leading-[0.95] tracking-tight ${
                        i === 1
                          ? "text-gold text-5xl md:text-7xl lg:text-8xl"
                          : "text-soft-white text-5xl md:text-7xl lg:text-8xl"
                      }`}
                    >
                      {line}
                    </h1>
                  </motion.div>
                ))}
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-soft-white/50 text-lg leading-relaxed mb-10 max-w-md"
              >
                Discover premium homes built for a better tomorrow. Where luxury meets the future of living.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/properties">
                  <button className="btn-gold flex items-center gap-2 text-xs">
                    Explore Properties
                    <ArrowRight size={14} />
                  </button>
                </Link>
                <Link href="/virtual-tour">
                  <button className="btn-outline flex items-center gap-2 text-xs">
                    <div className="w-6 h-6 rounded-full border border-soft-white/30 flex items-center justify-center">
                      <Play size={9} fill="currentColor" />
                    </div>
                    Virtual Tour
                  </button>
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-border-subtle"
              >
                {[
                  { n: "1200+", l: "Happy Families" },
                  { n: "50+", l: "Projects" },
                  { n: "15", l: "Cities" },
                  { n: "10+", l: "Years Experience" },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <p className="font-number font-bold text-2xl text-gold">{n}</p>
                    <p className="text-soft-white/40 text-xs mt-1">{l}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Floating Cards */}
            <div className="hidden lg:flex flex-col gap-4 items-end">
              {FLOATING_CARDS.map((card, i) => (
                <motion.div
                  key={card.name}
                  initial={{ opacity: 0, x: 60, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + card.delay, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: -8, scale: 1.02 }}
                  className="glass gradient-border rounded-2xl overflow-hidden w-72 cursor-pointer shadow-card"
                  style={{
                    animation: `float ${6 + i}s ease-in-out ${i * 1.5}s infinite`,
                  }}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={card.image} alt={card.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin size={10} className="text-gold/70 shrink-0" />
                        <p className="text-soft-white/40 text-xs truncate">{card.location}</p>
                      </div>
                      <p className="font-display font-semibold text-sm text-soft-white truncate">{card.name}</p>
                      <p className="font-number font-bold text-gold text-sm mt-1">{card.price}</p>
                    </div>
                    {/* Glow dot */}
                    <div className="w-2 h-2 rounded-full bg-emerald-glow animate-pulse shrink-0" />
                  </div>
                </motion.div>
              ))}

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex items-center gap-3 mt-4 text-soft-white/30 text-xs font-number"
              >
                <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/40" />
                <span className="rotate-90 origin-left ml-4">Scroll</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-10" />
    </section>
  );
}