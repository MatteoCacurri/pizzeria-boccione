"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pizza-teglia-3.jpg"
          alt="Pizza al taglio artigianale Pizzeria Boccione Monti Tiburtini Roma"
          fill
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 100vw"
          className="object-cover object-center"
          priority
          quality={95}
        />
        {/* Gradient overlay — più scuro sui bordi per leggibilità testo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-block text-[#E39B2B] text-xs font-medium uppercase tracking-[0.2em] mb-4 px-3 py-1.5 border border-[#E39B2B]/40 rounded-full">
            Dal 1989 · Monti Tiburtini, Roma
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-5"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Pizzeria al Taglio{" "}
          <span className="text-[#E39B2B]">a Monti Tiburtini</span>, Roma
        </motion.h1>

        {/* Sottotitolo */}
        <motion.p
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Tranci appena sfornati, fritti fatti bene e servizio veloce.
          Passa da Boccione quando vuoi — siamo aperti tutti i giorni
          dalle 7 a mezzanotte.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#E39B2B] text-[#2B2521] font-bold text-base px-8 py-4 rounded-xl shadow-lg"
            whileHover={{ y: -3, scale: 1.03, boxShadow: "0 8px 30px rgba(227,155,43,0.4)" }}
            whileTap={{ scale: 0.97 }}
            aria-label="Ordina su WhatsApp"
          >
            <MessageCircle size={20} />
            Ordina su WhatsApp
          </motion.a>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-white/70 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-200"
            >
              Guarda il Menu
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
