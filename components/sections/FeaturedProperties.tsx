"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROPERTIES } from "@/data/properties";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedProperties() {
  const featured = PROPERTIES.filter((p) => p.featured);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Premium Listings"
            title="Featured"
            titleHighlight="Properties"
            subtitle="Handpicked luxury properties designed for extraordinary living."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/properties">
              <button className="btn-outline flex items-center gap-2 whitespace-nowrap">
                View All
                <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
