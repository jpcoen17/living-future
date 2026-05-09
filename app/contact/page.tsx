"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Linkedin, Youtube, Send, CheckCircle } from "lucide-react";

const OFFICES = [
  { city: "New York", address: "350 Fifth Avenue, Suite 4100", phone: "+1 (212) 555-1234", hours: "Mon–Fri, 9am–6pm" },
  { city: "Los Angeles", address: "9100 Wilshire Blvd, Suite 600", phone: "+1 (310) 555-5678", hours: "Mon–Fri, 9am–6pm" },
  { city: "Miami", address: "1001 Brickell Bay Dr, Suite 200", phone: "+1 (305) 555-9012", hours: "Mon–Sat, 9am–5pm" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "", date: "" });
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80"
          alt="City night"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(214,168,95,0.08)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-gold/60" />
            <span className="font-number text-xs text-gold uppercase tracking-widest">Get In Touch</span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h1 className="font-display font-semibold text-5xl md:text-6xl text-soft-white mb-4">
            Let&apos;s Find Your<br /><span className="text-gold-shimmer">Dream Home</span>
          </h1>
          <p className="text-soft-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            Our luxury specialists are ready to guide you toward your perfect property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick contacts */}
            <div className="glass gradient-border rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg text-soft-white mb-6">Quick Contact</h3>
              <div className="space-y-5">
                <a href="mailto:hello@livingfuture.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-all">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-soft-white/40 text-xs mb-0.5">Email Us</p>
                    <p className="text-soft-white text-sm group-hover:text-gold transition-colors">hello@livingfuture.com</p>
                  </div>
                </a>
                <a href="tel:+12125551234" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-all">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-soft-white/40 text-xs mb-0.5">Call Us</p>
                    <p className="text-soft-white text-sm group-hover:text-gold transition-colors">+1 (212) 555-1234</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-soft-white/40 text-xs mb-0.5">Office Hours</p>
                    <p className="text-soft-white text-sm">Mon–Sat, 9am–6pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg text-soft-white">Our Offices</h3>
              {OFFICES.map(({ city, address, phone, hours }) => (
                <div key={city} className="glass-light border border-border-subtle rounded-2xl p-5 hover:border-gold/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <h4 className="font-display font-semibold text-soft-white">{city}</h4>
                  </div>
                  <div className="space-y-1.5 pl-4">
                    <div className="flex items-start gap-2">
                      <MapPin size={12} className="text-gold/60 mt-0.5 shrink-0" />
                      <span className="text-soft-white/40 text-xs leading-relaxed">{address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-gold/60 shrink-0" />
                      <span className="text-soft-white/40 text-xs">{phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-gold/60 shrink-0" />
                      <span className="text-soft-white/40 text-xs">{hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="glass-light border border-border-subtle rounded-2xl p-5">
              <h3 className="font-display font-semibold text-soft-white mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, label: "@livingfuture" },
                  { Icon: Twitter, label: "@LFuture" },
                  { Icon: Linkedin, label: "Living Future" },
                  { Icon: Youtube, label: "LF Studio" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    title={label}
                    className="w-10 h-10 rounded-xl glass border border-border-subtle flex items-center justify-center text-soft-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass gradient-border rounded-2xl p-8">
              <h3 className="font-display font-semibold text-xl text-soft-white mb-2">Send a Message</h3>
              <p className="text-soft-white/40 text-sm mb-8">Fill out the form and our team will reach out within 24 hours.</p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald/20 border border-emerald/40 flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-emerald-glow" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-soft-white mb-2">Message Sent!</h3>
                  <p className="text-soft-white/40">Our team will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-number text-soft-white/40 uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Alexander Moore"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input-luxury"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-number text-soft-white/40 uppercase tracking-widest mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="hello@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="input-luxury"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-number text-soft-white/40 uppercase tracking-widest mb-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="input-luxury"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-number text-soft-white/40 uppercase tracking-widest mb-2">Preferred Visit Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="input-luxury"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-number text-soft-white/40 uppercase tracking-widest mb-2">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="input-luxury"
                    >
                      <option value="" className="bg-bg-secondary">Select a subject</option>
                      <option value="buy" className="bg-bg-secondary">I want to buy a property</option>
                      <option value="rent" className="bg-bg-secondary">I want to rent a property</option>
                      <option value="invest" className="bg-bg-secondary">Investment inquiry</option>
                      <option value="sell" className="bg-bg-secondary">I want to list my property</option>
                      <option value="tour" className="bg-bg-secondary">Schedule a tour</option>
                      <option value="other" className="bg-bg-secondary">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-number text-soft-white/40 uppercase tracking-widest mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your dream home, budget, or any questions you have..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-luxury resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button type="submit" className="btn-gold flex items-center justify-center gap-2 flex-1">
                      <Send size={14} />
                      Send Message
                    </button>
                    <a href="tel:+12125551234">
                      <button type="button" className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto px-8">
                        <Phone size={14} />
                        Call Now
                      </button>
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div className="glass-light border border-border-subtle rounded-2xl overflow-hidden mt-6 h-48 relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80"
                alt="Location map"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-xl px-5 py-3 flex items-center gap-3 border border-gold/20">
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
                  <span className="font-number text-sm text-soft-white">350 Fifth Avenue, New York</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
