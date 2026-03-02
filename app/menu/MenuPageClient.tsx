"use client";

import { motion } from "framer-motion";
import { MessageCircle, ExternalLink } from "lucide-react";
import { MENU_CATEGORIES, WHATSAPP_URL, MENU_DIGITAL_URL } from "@/lib/constants";

export default function MenuPageClient() {
  return (
    <div className="pt-16">
      <section className="bg-[#2B2521] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-[#E39B2B] text-xs uppercase tracking-[0.2em] mb-3">Monti Tiburtini · Roma</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Il nostro Menu</h1>
            <p className="text-white/65 text-lg max-w-xl mx-auto">Pizza al taglio, fritti artigianali e tavola calda preparati ogni giorno. Prezzi indicativi — chiedi al banco per le disponibilit\u00e0.</p>
          </motion.div>
        </div>
      </section>

      <div className="bg-[#F5EFE4] border-b border-[#2B2521]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#2B2521]/70 text-sm">Vuoi vedere il menu sempre aggiornato?</p>
          <a href={MENU_DIGITAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#B33A2E] font-semibold text-sm hover:underline">
            Apri su menudigitale.io <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {MENU_CATEGORIES.map((category, catIndex) => (
          <motion.section key={category.slug} id={category.slug} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: catIndex * 0.05 }}>
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-[#B33A2E]/15">
              <span className="text-4xl" aria-hidden="true">{category.icon}</span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2B2521]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>{category.name}</h2>
                <p className="text-[#2B2521]/55 text-sm mt-0.5">{category.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, itemIndex) => (
                <motion.article key={item.name} className="bg-white rounded-2xl p-5 border border-[#2B2521]/6 hover:border-[#B33A2E]/20 hover:shadow-md transition-all duration-200" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: itemIndex * 0.06 }} whileHover={{ y: -2 }}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#2B2521] text-base leading-tight" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>{item.name}</h3>
                    <span className="text-[#B33A2E] font-semibold text-sm flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="text-[#2B2521]/60 text-xs leading-relaxed">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <div className="bg-[#2B2521] py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Hai scelto cosa vuoi?</h2>
          <p className="text-white/60 mb-8">Ordina su WhatsApp e passa a ritirare, oppure vieni direttamente al banco in Via dei Monti Tiburtini 536.</p>
          <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-[#E39B2B] text-[#2B2521] font-bold px-8 py-4 rounded-xl shadow-lg" whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} aria-label="Ordina su WhatsApp">
            <MessageCircle size={20} />Ordina su WhatsApp
          </motion.a>
        </div>
      </div>
    </div>
  );
}
