"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { GALLERY_IMAGES } from "@/lib/constants";

const PREVIEW_IMAGES = GALLERY_IMAGES.slice(0, 4);

export default function GalleryPreview() {
  return (
    <SectionWrapper id="galleria" className="bg-[#F5EFE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <span className="inline-block text-[#B33A2E] text-xs font-medium uppercase tracking-[0.2em] mb-3">
              Le nostre foto
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2B2521]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Dal banco{" "}
              <span className="text-[#B33A2E]">alla tua tavola</span>
            </h2>
          </div>
          <Link
            href="/galleria"
            className="inline-flex items-center gap-2 text-[#B33A2E] font-semibold text-sm hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            Vedi tutta la galleria <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PREVIEW_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-auto md:min-h-[360px]" : "h-40 md:h-[170px]"
              }`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={i === 0 ? "(max-width: 768px) 50vw, 40vw" : "(max-width: 768px) 50vw, 20vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={75}
              />
              {/* Caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2521]/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link galleria */}
        <div className="text-center mt-8">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/galleria"
              className="inline-flex items-center gap-2 border-2 border-[#B33A2E] text-[#B33A2E] font-semibold px-7 py-3 rounded-xl hover:bg-[#B33A2E] hover:text-white transition-colors duration-200"
            >
              Tutta la galleria <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
