"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { MENU_CATEGORIES } from "@/lib/constants";

export default function MenuPreview() {
  return (
    <SectionWrapper id="menu" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div>
            <span className="inline-block text-[#B33A2E] text-xs font-medium uppercase tracking-[0.2em] mb-3">
              Cosa offriamo
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2B2521]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Il nostro{" "}
              <span className="text-[#B33A2E]">menu</span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-[#B33A2E] font-semibold text-sm hover:gap-3 transition-all duration-200 flex-shrink-0"
            aria-label="Vedi il menu completo"
          >
            Vedi tutto il menu <ArrowRight size={16} />
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {MENU_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link
                href={`/menu#${cat.slug}`}
                className="group flex flex-col items-start p-6 rounded-2xl border border-[#2B2521]/8 hover:border-[#B33A2E]/30 hover:bg-[#F5EFE4] transition-all duration-200 h-full"
              >
                <span className="text-3xl mb-3" aria-hidden="true">
                  {cat.icon}
                </span>
                <h3
                  className="font-bold text-[#2B2521] text-base mb-1 group-hover:text-[#B33A2E] transition-colors"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {cat.name}
                </h3>
                <p className="text-[#2B2521]/55 text-xs leading-relaxed line-clamp-2">
                  {cat.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-2.5 bg-[#B33A2E] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#922f24] transition-colors duration-200 shadow-md"
              aria-label="Apri il menu completo"
            >
              Apri menu completo <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
