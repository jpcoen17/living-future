"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VIRTUAL_ROOMS } from "@/data/properties";
import { Maximize2, ChevronLeft, ChevronRight, Circle, Play, RotateCcw } from "lucide-react";

export default function VirtualTourPage() {
  const [activeRoom, setActiveRoom] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [started, setStarted] = useState(false);

  const room = VIRTUAL_ROOMS[activeRoom];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });
  };

  const prev = () => setActiveRoom((r) => (r - 1 + VIRTUAL_ROOMS.length) % VIRTUAL_ROOMS.length);
  const next = () => setActiveRoom((r) => (r + 1) % VIRTUAL_ROOMS.length);

  return (
    <div className={`min-h-screen pt-20 relative overflow-hidden ${isFullscreen ? "pt-0" : ""}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,168,95,0.05)_0%,transparent_70%)]" />
      </div>

      {!started ? (
        /* Start screen */
        <div className="min-h-screen flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-2xl mx-auto px-6"
          >
            <div className="relative rounded-3xl overflow-hidden mb-10 h-64 md:h-80">
              <img
                src={VIRTUAL_ROOMS[0].image}
                alt="Virtual Tour"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-bg/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStarted(true)}
                  className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center glow-gold"
                >
                  <Play size={28} className="text-gold ml-1" fill="currentColor" />
                </motion.button>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-8 bg-gold/60" />
              <span className="font-number text-xs text-gold uppercase tracking-widest">Immersive Experience</span>
              <div className="h-px w-8 bg-gold/60" />
            </div>
            <h1 className="font-display font-semibold text-4xl md:text-5xl text-soft-white mb-4">
              Virtual<br /><span className="text-gold">Walkthrough</span>
            </h1>
            <p className="text-soft-white/40 mb-8">
              Experience your future home in an immersive 360° virtual tour. Explore every room with cinematic detail.
            </p>
            <button onClick={() => setStarted(true)} className="btn-gold flex items-center gap-2 mx-auto">
              <Play size={14} />
              Start Tour
            </button>
          </motion.div>
        </div>
      ) : (
        <div className="container mx-auto px-6 py-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-6 bg-gold/60" />
                <span className="font-number text-xs text-gold uppercase tracking-widest">Virtual Tour</span>
              </div>
              <h1 className="font-display font-semibold text-3xl text-soft-white">{room.name}</h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStarted(false)}
                className="glass w-10 h-10 rounded-full flex items-center justify-center text-soft-white/60 hover:text-gold transition-colors"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="glass w-10 h-10 rounded-full flex items-center justify-center text-soft-white/60 hover:text-gold transition-colors"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </motion.div>

          {/* Main viewer */}
          <div
            className="relative rounded-3xl overflow-hidden mb-6 cursor-move"
            style={{ height: isFullscreen ? "80vh" : "60vh" }}
            onMouseMove={handleMouseMove}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <motion.img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  style={{
                    transform: `perspective(1000px) translateX(${mousePos.x}px) translateY(${mousePos.y}px) scale(1.05)`,
                    transition: "transform 0.1s ease-out",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* 360 indicator */}
            <div className="absolute top-6 left-6 glass rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              <span className="font-number text-xs text-gold font-semibold">360°</span>
              <span className="font-number text-xs text-soft-white/60">Live View</span>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-6 top-1/2 -translate-y-1/2 glass w-12 h-12 rounded-full flex items-center justify-center text-soft-white hover:bg-gold/20 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-6 top-1/2 -translate-y-1/2 glass w-12 h-12 rounded-full flex items-center justify-center text-soft-white hover:bg-gold/20 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>

            {/* Hotspots */}
            {[
              { x: 30, y: 40, label: "Window View" },
              { x: 60, y: 55, label: "Main Area" },
              { x: 80, y: 35, label: "Detail" },
            ].map((spot) => (
              <motion.div
                key={spot.label}
                className="absolute group"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative">
                  <Circle size={24} className="text-gold fill-gold/20 animate-pulse" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-bg/80 text-gold text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gold/20">
                    {spot.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Room info overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="glass rounded-xl px-4 py-3">
                <p className="font-display font-semibold text-soft-white">{room.name}</p>
                <p className="text-soft-white/40 text-xs">Greenwood Villa · {activeRoom + 1} of {VIRTUAL_ROOMS.length}</p>
              </div>
              <div className="flex gap-2">
                {VIRTUAL_ROOMS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRoom(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeRoom ? "bg-gold w-6" : "bg-soft-white/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Room thumbnails */}
          <div className="grid grid-cols-5 gap-3">
            {VIRTUAL_ROOMS.map((r, i) => (
              <motion.button
                key={r.id}
                onClick={() => setActiveRoom(i)}
                whileHover={{ scale: 1.03 }}
                className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all duration-300 ${
                  i === activeRoom ? "border-gold" : "border-border-subtle hover:border-gold/40"
                }`}
              >
                <img src={r.thumbnail} alt={r.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 transition-all duration-300 ${i === activeRoom ? "bg-transparent" : "bg-bg/50"}`} />
                <p className="absolute bottom-2 left-0 right-0 text-center text-xs font-number text-soft-white/80 px-1 leading-tight">{r.name}</p>
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
