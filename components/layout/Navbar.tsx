"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Menu", href: "/menu" },
  { label: "Galleria", href: "/galleria" },
  { label: "Recensioni", href: "/#recensioni" },
  { label: "Contatti", href: "/contatti" },
];

function isActive(href: string, pathname: string) {
  if (href === "/" || href.startsWith("/#")) return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#2B2521] shadow-xl border-b border-white/5"
            : "bg-gradient-to-b from-black/55 via-black/20 to-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          style={{ height: "72px" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="Pizzeria Boccione — Home"
          >
            <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-[#E39B2B]/50 transition-all duration-300">
              <Image
                src="/images/logo.jpg"
                alt="Logo Pizzeria Boccione"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="text-white text-base font-semibold leading-tight block"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Pizzeria Boccione
              </span>
              <span className="text-[#E39B2B] text-[10px] tracking-[0.2em] uppercase font-medium">
                dal 1989
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 inline-block ${
                      active
                        ? "text-[#E39B2B]"
                        : "text-white/75 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-[#E39B2B] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#E39B2B] text-[#2B2521] font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-[#E39B2B]/20"
              whileHover={{ y: -2, scale: 1.03, boxShadow: "0 6px 20px rgba(227,155,43,0.35)" }}
              whileTap={{ scale: 0.97 }}
              aria-label="Ordina su WhatsApp"
            >
              <MessageCircle size={15} strokeWidth={2.5} />
              <span>Ordina ora</span>
            </motion.a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-white rounded-xl hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#1e1a17] z-50 md:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="relative h-9 w-9 rounded-full overflow-hidden ring-1 ring-white/15">
                    <Image
                      src="/images/logo.jpg"
                      alt="Logo Pizzeria Boccione"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span
                      className="text-white text-sm font-semibold block leading-tight"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      Pizzeria Boccione
                    </span>
                    <span className="text-[#E39B2B] text-[10px] tracking-widest uppercase">
                      dal 1989
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-8 h-8 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Chiudi menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href, pathname);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.08, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-150 ${
                          active
                            ? "bg-[#E39B2B]/10 text-[#E39B2B] border border-[#E39B2B]/20"
                            : "text-white/75 hover:text-white hover:bg-white/8"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#E39B2B]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="px-4 pb-6 pt-4 border-t border-white/8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#E39B2B] text-[#2B2521] font-bold py-3.5 rounded-xl text-sm shadow-lg shadow-[#E39B2B]/20"
                  aria-label="Ordina su WhatsApp"
                >
                  <MessageCircle size={17} strokeWidth={2.5} />
                  Ordina su WhatsApp
                </a>
                <p className="text-white/30 text-xs text-center mt-3">
                  Aperti tutti i giorni · 07:00 – 00:00
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
