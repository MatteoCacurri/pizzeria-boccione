"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Menu", href: "/menu" },
  { label: "Galleria", href: "/galleria" },
  { label: "Recensioni", href: "/#recensioni" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#2B2521]/97 shadow-lg backdrop-blur-sm" : "bg-[#2B2521]/90 backdrop-blur-sm"}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Pizzeria Boccione \u2014 Home">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image src="/images/logo.jpg" alt="Logo Pizzeria Boccione" fill sizes="48px" className="object-cover" priority />
            </div>
            <div className="hidden sm:block">
              <span className="text-white text-lg font-semibold leading-tight block" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Pizzeria Boccione</span>
              <span className="text-[#E39B2B] text-xs tracking-widest uppercase">dal 1989</span>
            </div>
          </Link>
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${pathname === link.href ? "text-[#E39B2B]" : "text-white/80 hover:text-white hover:bg-white/10"}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <motion.a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 bg-[#E39B2B] text-[#2B2521] font-semibold text-sm px-4 py-2 rounded-xl shadow hover:bg-[#c8871f] transition-colors duration-200" whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.97 }} aria-label="Ordina su WhatsApp"><MessageCircle size={16} /><span>Ordina ora</span></motion.a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors" aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed top-0 right-0 bottom-0 w-72 bg-[#2B2521] z-50 md:hidden flex flex-col">
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="text-white font-semibold" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Pizzeria Boccione</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-white/70 hover:text-white rounded-lg" aria-label="Chiudi menu"><X size={20} /></button>
              </div>
              <nav className="flex-1 p-5 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                    <Link href={link.href} className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-colors">{link.label}</Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-5 border-t border-white/10">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#E39B2B] text-[#2B2521] font-semibold py-3 rounded-xl" aria-label="Ordina su WhatsApp"><MessageCircle size={18} />Ordina su WhatsApp</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
