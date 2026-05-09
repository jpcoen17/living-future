import Link from "next/link";
import { Compass, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                <Compass size={16} className="text-gold" />
              </div>
              <span className="font-display font-semibold text-lg">
                LIVING <span className="text-gold">FUTURE</span>
              </span>
            </Link>
            <p className="text-soft-white/40 text-sm leading-relaxed mb-6">
              Discover premium homes built for a better tomorrow. Where luxury meets the future of living.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full glass-light border border-border-subtle flex items-center justify-center text-soft-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-number text-xs font-semibold tracking-widest text-gold uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/properties", label: "Properties" },
                { href: "/virtual-tour", label: "Virtual Tour" },
                { href: "/map", label: "Explore Map" },
                { href: "/calculator", label: "Investment Calc" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-soft-white/40 hover:text-gold text-sm transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-number text-xs font-semibold tracking-widest text-gold uppercase mb-6">Properties</h4>
            <ul className="space-y-3">
              {["Apartments", "Villas", "Penthouses", "Houses", "Commercial", "New Projects"].map((item) => (
                <li key={item}>
                  <Link href="/properties" className="text-soft-white/40 hover:text-gold text-sm transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-number text-xs font-semibold tracking-widest text-gold uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-soft-white/40 text-sm">350 Fifth Avenue, New York, NY 10118</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:+12125551234" className="text-soft-white/40 hover:text-gold text-sm transition-colors">+1 (212) 555-1234</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold shrink-0" />
                <a href="mailto:hello@livingfuture.com" className="text-soft-white/40 hover:text-gold text-sm transition-colors">hello@livingfuture.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-soft-white/25 text-xs">
            © {new Date().getFullYear()} Living Future. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-soft-white/25 hover:text-gold text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
