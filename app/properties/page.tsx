"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ChevronDown, X, MapPin } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TYPES = ["All", "Apartment", "Villa", "House", "Penthouse"];
const CITIES = ["All Cities", "Manhattan", "California", "Chicago", "Miami", "Los Angeles", "Seattle"];

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [priceMax, setPriceMax] = useState(2000000);
  const [city, setCity] = useState("All Cities");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return PROPERTIES.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());
      const matchType = type === "All" || p.type === type.toLowerCase();
      const matchPrice = p.price <= priceMax;
      const matchCity = city === "All Cities" || p.location.includes(city);
      return matchSearch && matchType && matchPrice && matchCity;
    });
  }, [search, type, priceMax, city]);

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-96">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
          alt="Skyline"
          className="w-full h-full object-cover object-bottom opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg to-bg" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <SectionHeader
            eyebrow="Discover"
            title="Find Your"
            titleHighlight="Perfect Home"
            subtitle="Browse our curated collection of premium properties."
          />
        </div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass gradient-border rounded-2xl p-4 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-luxury pl-11"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-soft-white/30 hover:text-soft-white transition-colors">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* City select */}
            <div className="relative md:w-48">
              <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input-luxury pl-10 appearance-none pr-8"
              >
                {CITIES.map((c) => <option key={c} value={c} className="bg-bg-secondary">{c}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-soft-white/40 pointer-events-none" />
            </div>

            {/* Toggle filters */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-outline flex items-center gap-2 whitespace-nowrap"
            >
              <SlidersHorizontal size={14} />
              More Filters
            </button>

            {/* Search btn */}
            <button className="btn-gold flex items-center gap-2">
              <Search size={14} />
              Search
            </button>
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-border-subtle"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Type chips */}
                <div>
                  <label className="text-xs font-number text-soft-white/40 uppercase tracking-widest mb-3 block">Property Type</label>
                  <div className="flex flex-wrap gap-2">
                    {TYPES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`px-4 py-2 rounded-full text-xs font-number font-semibold tracking-wide uppercase transition-all duration-300 ${
                          type === t
                            ? "bg-gold text-bg shadow-gold-sm"
                            : "glass-light border border-border-subtle text-soft-white/50 hover:border-gold/30 hover:text-soft-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price slider */}
                <div className="flex-1 min-w-[200px]">
                  <label className="text-xs font-number text-soft-white/40 uppercase tracking-widest mb-3 block">
                    Max Price: <span className="text-gold">${(priceMax / 1000).toFixed(0)}K</span>
                  </label>
                  <input
                    type="range"
                    min={100000}
                    max={2000000}
                    step={10000}
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="w-full accent-[#D6A85F] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-soft-white/30 mt-1">
                    <span>$100K</span>
                    <span>$2M</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-soft-white/40 text-sm">
            <span className="text-gold font-number font-semibold">{filtered.length}</span> properties found
          </p>
          {(search || type !== "All" || city !== "All Cities") && (
            <button
              onClick={() => { setSearch(""); setType("All"); setCity("All Cities"); setPriceMax(2000000); }}
              className="text-xs text-soft-white/40 hover:text-gold transition-colors flex items-center gap-1"
            >
              <X size={12} />
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-soft-white/30 mb-3">No properties found</p>
            <p className="text-soft-white/20 text-sm">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
