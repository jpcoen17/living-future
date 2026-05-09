"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, BedDouble, Bath, Maximize2, MapPin } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden glass-light border border-border-subtle hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(214,168,95,0.08)]"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-xs font-number font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${
              property.status === "for-sale"
                ? "bg-gold/20 text-gold border border-gold/30"
                : property.status === "for-rent"
                ? "bg-emerald/20 text-emerald-glow border border-emerald/30"
                : "bg-white/10 text-white/60 border border-white/20"
            }`}
          >
            {property.status.replace("-", " ")}
          </span>
        </div>

        {/* Favorite */}
        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Heart
            size={16}
            className={`transition-colors duration-300 ${liked ? "fill-gold text-gold" : "text-white/60"}`}
          />
        </button>

        {/* Type badge */}
        <div className="absolute bottom-4 left-4">
          <span className="text-xs font-number uppercase tracking-widest text-soft-white/50 capitalize">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display font-semibold text-lg text-soft-white group-hover:text-gold transition-colors duration-300">
              {property.name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-gold/60" />
              <span className="text-soft-white/40 text-xs">{property.location}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-number font-bold text-xl text-gold">{property.priceFormatted}</p>
            <p className="text-soft-white/30 text-xs">Market Value</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-subtle my-4" />

        {/* Stats */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-soft-white/50">
            <BedDouble size={14} className="text-gold/60" />
            <span className="text-xs font-number">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-soft-white/50">
            <Bath size={14} className="text-gold/60" />
            <span className="text-xs font-number">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-soft-white/50">
            <Maximize2 size={14} className="text-gold/60" />
            <span className="text-xs font-number">{property.area} m²</span>
          </div>
        </div>

        {/* CTA */}
        <Link href={`/properties/${property.id}`} className="block mt-4">
          <button className="w-full py-3 rounded-lg border border-gold/20 text-gold text-xs font-number font-semibold tracking-widest uppercase hover:bg-gold/10 hover:border-gold/40 transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
