"use client";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  BedDouble, Bath, Maximize2, MapPin, Calendar, Car, Home,
  ArrowLeft, Heart, Share2, CheckCircle2, ChevronLeft, ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { PROPERTIES } from "@/data/properties";

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = PROPERTIES.find((p) => p.id === id);
  if (!property) notFound();

  const [currentImage, setCurrentImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const prevImage = () => setCurrentImage((c) => (c - 1 + property.images.length) % property.images.length);
  const nextImage = () => setCurrentImage((c) => (c + 1) % property.images.length);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image Gallery */}
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <motion.img
          key={currentImage}
          src={property.images[currentImage]}
          alt={property.name}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 to-transparent" />

        {/* Navigation Arrows */}
        <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-soft-white hover:bg-gold/20 transition-all duration-300">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-soft-white hover:bg-gold/20 transition-all duration-300">
          <ChevronRight size={20} />
        </button>

        {/* Back button */}
        <Link href="/properties" className="absolute top-8 left-6">
          <button className="glass flex items-center gap-2 px-4 py-2 rounded-full text-soft-white/80 hover:text-soft-white text-xs font-number transition-all duration-300">
            <ArrowLeft size={14} />
            Back
          </button>
        </Link>

        {/* Actions */}
        <div className="absolute top-8 right-6 flex gap-3">
          <button
            onClick={() => setLiked(!liked)}
            className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-all duration-300"
          >
            <Heart size={16} className={liked ? "fill-gold text-gold" : "text-soft-white/60"} />
          </button>
          <button className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-all duration-300">
            <Share2 size={16} className="text-soft-white/60" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {property.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-12 h-8 md:w-16 md:h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${i === currentImage ? "border-gold scale-110" : "border-transparent opacity-50"}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Title & Price */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <span className="font-number text-xs text-gold/70 tracking-widest uppercase capitalize">{property.type}</span>
                  <h1 className="font-display font-semibold text-4xl md:text-5xl text-soft-white mt-2">{property.name}</h1>
                  <div className="flex items-center gap-2 mt-3">
                    <MapPin size={14} className="text-gold/70" />
                    <span className="text-soft-white/50 text-sm">{property.location}</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="font-number font-bold text-3xl text-gold">{property.priceFormatted}</p>
                  <p className="text-soft-white/30 text-xs mt-1 text-right">Market Value</p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: BedDouble, label: "Bedrooms", val: property.beds },
                  { icon: Bath, label: "Bathrooms", val: property.baths },
                  { icon: Maximize2, label: "Area", val: `${property.area} m²` },
                  { icon: Car, label: "Parking", val: property.parkingSpaces },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="glass-light border border-border-subtle rounded-xl p-4 text-center">
                    <Icon size={18} className="text-gold mx-auto mb-2" />
                    <p className="font-number font-bold text-xl text-soft-white">{val}</p>
                    <p className="text-soft-white/40 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="font-display font-semibold text-xl text-soft-white mb-4">Property Overview</h2>
                <p className="text-soft-white/50 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-10">
                <h2 className="font-display font-semibold text-xl text-soft-white mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-gold shrink-0" />
                      <span className="text-soft-white/60 text-sm">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floor Plan Placeholder */}
              <div>
                <h2 className="font-display font-semibold text-xl text-soft-white mb-6">Floor Plan</h2>
                <div className="glass-light border border-border-subtle rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Home size={32} className="text-gold/40 mx-auto mb-3" />
                    <p className="text-soft-white/30 text-sm">Interactive floor plan available on request</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-28"
            >
              {/* Booking form */}
              <div className="glass gradient-border rounded-2xl p-6 mb-6">
                <h3 className="font-display font-semibold text-xl text-soft-white mb-2">Schedule a Visit</h3>
                <p className="text-soft-white/40 text-xs mb-6">Book a private viewing with our luxury specialist</p>

                <div className="space-y-4">
                  <input type="text" placeholder="Your Full Name" className="input-luxury" />
                  <input type="email" placeholder="Email Address" className="input-luxury" />
                  <input type="tel" placeholder="Phone Number" className="input-luxury" />
                  <div className="relative">
                    <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                    <input type="date" className="input-luxury pl-10" />
                  </div>
                  <textarea
                    placeholder="Additional message..."
                    rows={3}
                    className="input-luxury resize-none"
                  />
                  <button className="btn-gold w-full">Schedule Visit</button>
                </div>
              </div>

              {/* Property meta */}
              <div className="glass-light border border-border-subtle rounded-2xl p-5">
                <div className="space-y-3">
                  {[
                    { label: "Year Built", val: property.yearBuilt },
                    { label: "Property Type", val: property.type.charAt(0).toUpperCase() + property.type.slice(1) },
                    { label: "Status", val: property.status.replace("-", " ").toUpperCase() },
                    { label: "Property ID", val: property.id.slice(0, 8).toUpperCase() },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-border-subtle last:border-0">
                      <span className="text-soft-white/40 text-xs">{label}</span>
                      <span className="font-number font-semibold text-sm text-soft-white">{val}</span>
                    </div>
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
