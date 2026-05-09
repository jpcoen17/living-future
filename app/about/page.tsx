"use client";
import { motion } from "framer-motion";
import { Award, Target, Eye, Heart } from "lucide-react";
import { TEAM, STATS } from "@/data/properties";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TIMELINE = [
  { year: "2014", title: "Foundation", desc: "Living Future was born with a vision to redefine luxury living." },
  { year: "2016", title: "First Project", desc: "Launched our debut property — The Skyline Tower, setting new standards." },
  { year: "2018", title: "Expansion", desc: "Expanded to 8 cities, delivering 200+ premium homes." },
  { year: "2020", title: "Innovation", desc: "Pioneered virtual property tours and smart home integration." },
  { year: "2022", title: "Recognition", desc: "Named Best Luxury Developer for 3 consecutive years." },
  { year: "2024", title: "Future", desc: "50+ landmark projects across 15 cities and growing." },
];

const VALUES = [
  { icon: Eye, title: "Vision", desc: "We see beyond the present — designing homes that anticipate tomorrow." },
  { icon: Target, title: "Precision", desc: "Every detail matters. Our architecture speaks without words." },
  { icon: Heart, title: "Passion", desc: "We're not just building structures — we're crafting lifestyles." },
  { icon: Award, title: "Excellence", desc: "Decades of expertise, delivering nothing short of extraordinary." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85"
          alt="Architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-bg/40" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/60" />
              <span className="font-number text-xs text-gold uppercase tracking-widest">Our Story</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-7xl text-soft-white mb-6 leading-tight">
              Building the<br /><span className="text-gold">Future of Living</span>
            </h1>
            <p className="text-soft-white/50 text-lg max-w-lg leading-relaxed">
              A decade of crafting extraordinary homes where architecture meets aspiration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-number font-bold text-4xl text-gold">{s.number}</p>
                <p className="text-soft-white/40 text-sm mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeader
                eyebrow="Philosophy"
                title="Architecture"
                titleHighlight="Redefined"
                subtitle="We believe a home should be more than a place to live. It should inspire, comfort, and elevate every moment of your life."
              />
              <div className="mt-10 space-y-4">
                {["Sustainable design principles", "Smart technology integration", "Premium material selection", "Biophilic architecture"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-soft-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
                alt="Architecture"
                className="rounded-3xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 glass gradient-border rounded-2xl p-6 max-w-xs">
                <p className="font-display font-semibold text-2xl text-gold">10+</p>
                <p className="text-soft-white/60 text-sm">Years of architectural excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Core Values" title="What Drives" titleHighlight="Us" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-light border border-border-subtle rounded-2xl p-6 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display font-semibold text-lg text-soft-white mb-2">{title}</h3>
                <p className="text-soft-white/40 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="History" title="Our" titleHighlight="Journey" center />
          <div className="relative mt-16 max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border-subtle" />

            {TIMELINE.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex mb-12 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${i % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <span className="font-number font-bold text-gold text-sm">{year}</span>
                  <h3 className="font-display font-semibold text-lg text-soft-white mt-1">{title}</h3>
                  <p className="text-soft-white/40 text-sm leading-relaxed mt-1">{desc}</p>
                </div>
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-bg top-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Team" title="Meet Our" titleHighlight="Experts" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-2 border-border-subtle group-hover:border-gold/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-semibold text-soft-white">{member.name}</h3>
                <p className="text-gold text-xs font-number mt-1">{member.role}</p>
                <p className="text-soft-white/40 text-xs mt-2 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
