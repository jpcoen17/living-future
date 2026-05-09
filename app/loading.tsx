"use client";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full border-2 border-gold/30 border-t-gold flex items-center justify-center"
        >
          <Compass size={20} className="text-gold" />
        </motion.div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-gold"
            />
          ))}
        </div>
        <p className="font-number text-xs text-soft-white/30 uppercase tracking-widest">Loading</p>
      </motion.div>
    </div>
  );
}
