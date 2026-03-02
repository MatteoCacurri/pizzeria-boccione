"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Instagram } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS, HOURS_TABLE, MAPS_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

export default function ContattiClient() {
  return (
    <div className="pt-16">
      <section className="bg-[#2B2521] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-[#E39B2B] text-xs uppercase tracking-[0.2em] mb-3">Vieni a trovarci</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Dove siamo</h1>
            <p className="text-white/65 text-lg max-w-xl mx-auto">Siamo a Monti Tiburtini, nel cuore del quartiere. Raggiungici, chiamaci o scrivici su WhatsApp.</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg h-[380px] lg:h-full min-h-[380px]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.4282657!2d12.563944!3d41.906524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f619cd88a5bbb%3A0x1b38a66f0f4b3c1a!2sVia%20dei%20Monti%20Tiburtini%2C%20536%2C%2000157%20Roma%20RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mappa Pizzeria Boccione" aria-label="Mappa Google con la posizione della Pizzeria Boccione" />
          </motion.div>
          <motion.div className="lg:col-span-2 space-y-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div>
              <h2 className="text-xl font-bold text-[#2B2521] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}><MapPin size={18} className="text-[#B33A2E]" />Indirizzo</h2>
              <p className="text-[#2B2521]/70 text-sm mb-3">{ADDRESS}</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#B33A2E] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#922f24] transition-colors" aria-label="Apri percorso su Google Maps"><Navigation size={15} />Come arrivare</a>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2B2521] mb-4" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Contatti diretti</h2>
              <div className="space-y-3">
                <a href={PHONE_HREF} className="flex items-center gap-3 p-3 bg-[#F5EFE4] rounded-xl hover:bg-[#eee4d4] transition-colors"><Phone size={18} className="text-[#B33A2E] flex-shrink-0" /><div><p className="text-xs text-[#2B2521]/50 uppercase tracking-wide">Telefono</p><p className="font-semibold text-[#2B2521]">{PHONE_DISPLAY}</p></div></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[#F5EFE4] rounded-xl hover:bg-[#eee4d4] transition-colors"><MessageCircle size={18} className="text-[#5F6B4A] flex-shrink-0" /><div><p className="text-xs text-[#2B2521]/50 uppercase tracking-wide">WhatsApp</p><p className="font-semibold text-[#2B2521]">Ordina su WhatsApp</p></div></a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 p-3 bg-[#F5EFE4] rounded-xl hover:bg-[#eee4d4] transition-colors"><Mail size={18} className="text-[#B33A2E] flex-shrink-0" /><div><p className="text-xs text-[#2B2521]/50 uppercase tracking-wide">Email</p><p className="font-semibold text-[#2B2521] text-sm">{EMAIL}</p></div></a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[#F5EFE4] rounded-xl hover:bg-[#eee4d4] transition-colors"><Instagram size={18} className="text-[#B33A2E] flex-shrink-0" /><div><p className="text-xs text-[#2B2521]/50 uppercase tracking-wide">Instagram</p><p className="font-semibold text-[#2B2521]">@pizzeria_boccione.89</p></div></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#2B2521] py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}><Clock size={24} className="text-[#E39B2B]" />Orari di apertura</h2>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              {HOURS_TABLE.map((row, i) => (
                <div key={row.day} className={`flex items-center justify-between px-5 py-3.5 ${i < HOURS_TABLE.length - 1 ? "border-b border-white/10" : ""} ${i % 2 === 0 ? "bg-white/5" : ""}`}>
                  <span className="text-white/75 text-sm font-medium">{row.day}</span>
                  <span className="text-[#E39B2B] font-semibold text-sm">{row.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-white/40 text-xs mt-4">* Orari soggetti a variazioni nelle festivit\u00e0</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2B2521] mb-3" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Area di consegna</h2>
          <p className="text-[#2B2521]/60 max-w-lg mx-auto text-sm">Consegniamo nelle zone limitrofe. Per verificare la copertura nella tua zona, contattaci su WhatsApp.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Monti Tiburtini (00157)","Pietralata (00157)","Casal Bertone (00159)","Tiburtina","Portonaccio","Val Melaina"].map((zone, i) => (
            <motion.span key={zone} className="inline-block bg-[#F5EFE4] text-[#2B2521] font-medium text-sm px-4 py-2 rounded-full border border-[#2B2521]/10" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }}>{zone}</motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}
