"use client";

import { motion } from "framer-motion";
import { Flame, UtensilsCrossed, Bike, MapPin } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { STRENGTHS } from "@/lib/constants";

const ICONS = {
  flame: Flame,
  utensils: UtensilsCrossed,
  bike: Bike,
  "map-pin": MapPin,
} as const;

type IconKey = keyof typeof ICONS;

export default function PuntiForza() {
  return (
    <SectionWrapper id="punti-forza" className="bg-[#F5EFE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#B33A2E] text-xs font-medium uppercase tracking-[0.2em] mb-3">
            Perché sceglierci
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2B2521]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Tutto quello che cerchi,{" "}
            <span className="text-[#B33A2E]">vicino a te</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS.map((item, i) => {
            const Icon = ICONS[item.icon as IconKey];
            return (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#B33A2E]/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#B33A2E]" strokeWidth={1.8} />
                </div>

                <h3
                  className="text-lg font-bold text-[#2B2521] mb-2"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#2B2521]/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
