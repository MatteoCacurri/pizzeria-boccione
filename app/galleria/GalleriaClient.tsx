"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GalleriaClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => { if (lightboxIndex === null) return; setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); };
  const next = () => { if (lightboxIndex === null) return; setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length); };

  return (
    <div className="pt-16">
      <section className="bg-[#2B2521] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-[#E39B2B] text-xs uppercase tracking-[0.2em] mb-3">Le nostre foto</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>Galleria</h1>
            <p className="text-white/65 text-lg max-w-xl mx-auto">Dal banco alla teglia: le foto autentiche della nostra pizzeria a Monti Tiburtini.</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div key={img.src} className="relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }} onClick={() => openLightbox(i)} role="button" tabIndex={0} aria-label={`Ingrandisci: ${img.caption}`} onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}>
              <div className="relative w-full" style={{ aspectRatio: i % 3 === 0 ? "1/1.3" : "1/1" }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" quality={80} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2521]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[#2B2521]/40 text-sm mt-12">Seguici su <a href="https://www.instagram.com/pizzeria_boccione.89/" target="_blank" rel="noopener noreferrer" className="text-[#B33A2E] hover:underline">@pizzeria_boccione.89</a> per le foto pi\u00f9 recenti</p>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={closeLightbox}>
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10" onClick={closeLightbox} aria-label="Chiudi immagine"><X size={28} /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Immagine precedente"><ChevronLeft size={36} /></button>
            <motion.div className="relative w-full max-w-4xl mx-8 aspect-[4/3]" key={lightboxIndex} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()}>
              <Image src={GALLERY_IMAGES[lightboxIndex].src} alt={GALLERY_IMAGES[lightboxIndex].alt} fill sizes="100vw" className="object-contain" quality={90} />
            </motion.div>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Immagine successiva"><ChevronRight size={36} /></button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">{GALLERY_IMAGES[lightboxIndex].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
