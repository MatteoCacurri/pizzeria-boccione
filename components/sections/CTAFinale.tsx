"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Navigation } from "lucide-react";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY, MAPS_URL } from "@/lib/constants";

export default function CTAFinale() {
  const actions = [
    {
      icon: MessageCircle,
      label: "Ordina su WhatsApp",
      sublabel: "Risposta rapida",
      href: WHATSAPP_URL,
      external: true,
      className:
        "bg-[#E39B2B] text-[#2B2521] hover:bg-[#c8871f] shadow-lg shadow-[#E39B2B]/30",
    },
    {
      icon: Phone,
      label: "Chiama ora",
      sublabel: PHONE_DISPLAY,
      href: PHONE_HREF,
      external: false,
      className:
        "bg-white/15 text-white border-2 border-white/30 hover:bg-white/25",
    },
    {
      icon: Navigation,
      label: "Come arrivare",
      sublabel: "Via dei Monti Tiburtini 536",
      href: MAPS_URL,
      external: true,
      className:
        "bg-white/15 text-white border-2 border-white/30 hover:bg-white/25",
    },
  ];

  return (
    <section className="bg-[#B33A2E] py-20 md:py-28 overflow-hidden relative">
      {/* Texture decorativa */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 0%, transparent 60%), radial-gradient(circle at 80% 20%, white 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Siamo qui per te
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Hai voglia di pizza?
          </h2>
          <p className="text-white/75 text-lg mb-12 max-w-xl mx-auto">
            Passa da noi o ordina direttamente: siamo aperti tutti i giorni
            dalle 7 a mezzanotte in Via dei Monti Tiburtini 536.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {actions.map((action, i) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className={`inline-flex flex-col items-center gap-1 px-7 py-4 rounded-2xl font-semibold transition-all duration-200 min-w-[180px] ${action.className}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 + 0.2 }}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label={action.label}
              >
                <action.icon size={22} strokeWidth={1.8} />
                <span className="text-base">{action.label}</span>
                <span className="text-xs opacity-70">{action.sublabel}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
