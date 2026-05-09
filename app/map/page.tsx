"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { School, ShoppingBag, Hospital, Train, Plane, MapPin, Clock, Navigation } from "lucide-react";
import { PROPERTIES } from "@/data/properties";

const NEARBY_PLACES = [
  { icon: School, label: "School", time: "5 min", color: "#D6A85F" },
  { icon: ShoppingBag, label: "Shopping Mall", time: "7 min", color: "#0E8F74" },
  { icon: Hospital, label: "Hospital", time: "10 min", color: "#E85F5F" },
  { icon: Train, label: "Train Station", time: "12 min", color: "#5F7FE8" },
  { icon: Plane, label: "Airport", time: "25 min", color: "#B85FD6" },
];

// SVG Map grid positions for properties
const MAP_NODES = [
  { id: "skyline-apartment", x: 45, y: 35, name: "Skyline Apt", price: "$320K" },
  { id: "greenwood-villa", x: 25, y: 60, name: "Greenwood Villa", price: "$450K" },
  { id: "lakeview-house", x: 65, y: 55, name: "Lakeview House", price: "$380K" },
  { id: "aurora-penthouse", x: 78, y: 25, name: "Aurora Penthouse", price: "$890K" },
  { id: "cedar-villa", x: 15, y: 40, name: "Cedar Villa", price: "$1.2M" },
];

const ROADS = [
  { x1: 10, y1: 20, x2: 90, y2: 20 },
  { x1: 10, y1: 50, x2: 90, y2: 50 },
  { x1: 10, y1: 80, x2: 90, y2: 80 },
  { x1: 20, y1: 10, x2: 20, y2: 90 },
  { x1: 50, y1: 10, x2: 50, y2: 90 },
  { x1: 80, y1: 10, x2: 80, y2: 90 },
  { x1: 10, y1: 10, x2: 90, y2: 90 },
  { x1: 10, y1: 90, x2: 90, y2: 10 },
];

export default function MapPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const selected = MAP_NODES.find((n) => n.id === selectedNode);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold/60" />
            <span className="font-number text-xs text-gold uppercase tracking-widest">Explore</span>
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-soft-white">
            Everything<br /><span className="text-gold">Within Reach</span>
          </h1>
          <p className="text-soft-white/40 mt-3 max-w-lg">
            Explore nearby places around your future home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass gradient-border rounded-3xl overflow-hidden"
              style={{ height: "520px" }}
            >
              {/* Map SVG */}
              <div className="relative w-full h-full">
                {/* Dark map background with grid */}
                <div className="absolute inset-0 bg-[#080C12]">
                  {/* Grid pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(214,168,95,0.2)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  {/* Roads SVG */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {ROADS.map((r, i) => (
                      <line
                        key={i}
                        x1={`${r.x1}%`} y1={`${r.y1}%`}
                        x2={`${r.x2}%`} y2={`${r.y2}%`}
                        stroke="rgba(214,168,95,0.15)"
                        strokeWidth="0.5"
                      />
                    ))}
                    {/* Glowing roads */}
                    {ROADS.slice(0, 2).map((r, i) => (
                      <line
                        key={`glow-${i}`}
                        x1={`${r.x1}%`} y1={`${r.y1}%`}
                        x2={`${r.x2}%`} y2={`${r.y2}%`}
                        stroke="rgba(14,143,116,0.4)"
                        strokeWidth="1"
                        filter="url(#glow)"
                      />
                    ))}
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                  </svg>

                  {/* Animated route line when node selected */}
                  {selectedNode && selected && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <motion.line
                        x1="50%" y1="50%"
                        x2={`${selected.x}%`}
                        y2={`${selected.y}%`}
                        stroke="#D6A85F"
                        strokeWidth="0.6"
                        strokeDasharray="2 2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                    </svg>
                  )}

                  {/* Property nodes */}
                  {MAP_NODES.map((node) => (
                    <motion.button
                      key={node.id}
                      className="absolute group"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                    >
                      {/* Pulse ring */}
                      <div className={`absolute inset-0 rounded-full animate-ping ${selectedNode === node.id ? "bg-gold/40" : "bg-gold/20"}`} />

                      {/* Node */}
                      <div
                        className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedNode === node.id
                            ? "bg-gold border-gold shadow-gold"
                            : "bg-bg border-gold/60 hover:border-gold"
                        }`}
                      >
                        <MapPin size={14} className={selectedNode === node.id ? "text-bg" : "text-gold"} />
                      </div>

                      {/* Label */}
                      <AnimatePresence>
                        {(selectedNode === node.id) && (
                          <motion.div
                            initial={{ opacity: 0, y: -5, scale: 0.9 }}
                            animate={{ opacity: 1, y: -44, scale: 1 }}
                            exit={{ opacity: 0, y: -5, scale: 0.9 }}
                            className="absolute left-1/2 -translate-x-1/2 glass rounded-xl px-3 py-2 whitespace-nowrap z-10 border border-gold/30"
                            style={{ bottom: "100%" }}
                          >
                            <p className="font-number font-semibold text-xs text-soft-white">{node.name}</p>
                            <p className="font-number font-bold text-xs text-gold text-center">{node.price}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  ))}

                  {/* Center "Your Home" marker */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald/30 rounded-full animate-ping scale-150" />
                      <div className="relative w-10 h-10 rounded-full bg-emerald/20 border-2 border-emerald-glow flex items-center justify-center shadow-emerald">
                        <div className="w-3 h-3 bg-emerald-glow rounded-full" />
                      </div>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-number text-emerald-glow">
                        Your Future Home
                      </span>
                    </div>
                  </div>

                  {/* Ambient glow overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,143,116,0.08)_0%,transparent_70%)] pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="font-display font-semibold text-xl text-soft-white mb-6">Nearby Places</h3>

              {NEARBY_PLACES.map(({ icon: Icon, label, time, color }) => (
                <motion.button
                  key={label}
                  whileHover={{ x: 4 }}
                  onClick={() => setSelectedPlace(selectedPlace === label ? null : label)}
                  className={`w-full glass-light border rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 text-left ${
                    selectedPlace === label ? "border-gold/40 bg-gold/5" : "border-border-subtle hover:border-gold/20"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-number font-semibold text-sm text-soft-white">{label}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Navigation size={10} className="text-soft-white/30" />
                      <span className="text-soft-white/30 text-xs">{time} away</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-soft-white/40">
                    <Clock size={12} />
                    <span className="text-xs font-number">{time}</span>
                  </div>
                </motion.button>
              ))}

              {/* Properties count */}
              <div className="glass gradient-border rounded-2xl p-4 mt-6">
                <p className="font-number text-xs text-soft-white/40 uppercase tracking-widest mb-3">Available Properties</p>
                <div className="space-y-2">
                  {MAP_NODES.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => setSelectedNode(selectedNode === n.id ? null : n.id)}
                      className={`w-full flex items-center justify-between text-sm p-2 rounded-lg transition-all duration-300 ${
                        selectedNode === n.id ? "bg-gold/10 text-gold" : "text-soft-white/50 hover:text-soft-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-gold/60" />
                        <span className="font-number text-xs">{n.name}</span>
                      </div>
                      <span className="font-number font-bold text-xs text-gold">{n.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
