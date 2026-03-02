import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, MessageCircle, Mail } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS, HOURS_DISPLAY, MAPS_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#2B2521] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Pizzeria Boccione</h3>
            <p className="text-[#E39B2B] text-xs uppercase tracking-widest mb-4">Caffetteria \u00b7 Dal 1989</p>
            <p className="text-white/60 text-sm leading-relaxed">Pizza al taglio artigianale, fritti e tavola calda nel cuore di Monti Tiburtini, Roma. Dal 1989, la pizzeria del quartiere.</p>
            <div className="flex gap-3 mt-5">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Seguici su Instagram" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><Instagram size={18} className="text-white/80" /></a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><MessageCircle size={18} className="text-white/80" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#E39B2B] mb-5 font-medium">Contatti</h4>
            <ul className="space-y-3">
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm" aria-label="Apri indirizzo su Google Maps"><MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#E39B2B]" /><span>{ADDRESS}</span></a></li>
              <li><a href={PHONE_HREF} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"><Phone size={16} className="flex-shrink-0 text-[#E39B2B]" /><span>{PHONE_DISPLAY}</span></a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"><Mail size={16} className="flex-shrink-0 text-[#E39B2B]" /><span>{EMAIL}</span></a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#E39B2B] mb-5 font-medium">Orari</h4>
            <div className="flex items-start gap-3 text-white/70 text-sm mb-6"><Clock size={16} className="mt-0.5 flex-shrink-0 text-[#E39B2B]" /><span>{HOURS_DISPLAY}</span></div>
            <h4 className="text-sm uppercase tracking-widest text-[#E39B2B] mb-3 font-medium">Link utili</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="text-white/60 hover:text-white transition-colors">Menu completo</Link></li>
              <li><Link href="/galleria" className="text-white/60 hover:text-white transition-colors">Galleria foto</Link></li>
              <li><Link href="/contatti" className="text-white/60 hover:text-white transition-colors">Come arrivare</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>\u00a9 {currentYear} Pizzeria Boccione \u2014 Via dei Monti Tiburtini 536, Roma</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
