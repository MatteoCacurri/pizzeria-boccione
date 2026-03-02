"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { REVIEWS, MAPS_URL } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Valutazione: ${rating} su 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-[#E39B2B] fill-[#E39B2B]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Recensioni() {
  return (
    <SectionWrapper id="recensioni" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#B33A2E] text-xs font-medium uppercase tracking-[0.2em] mb-3">
            Recensioni Google
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2B2521] mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Cosa dicono{" "}
            <span className="text-[#B33A2E]">i nostri clienti</span>
          </h2>
          {/* Rating medio */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="text-[#E39B2B] fill-[#E39B2B]" />
              ))}
            </div>
            <span
              className="text-4xl font-bold text-[#2B2521]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              4.8
            </span>
            <span className="text-[#2B2521]/50 text-sm">/ 5 su Google</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.article
              key={review.name}
              className="bg-[#F5EFE4] rounded-2xl p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -3 }}
            >
              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="text-[#2B2521]/75 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#2B2521]/10">
                <div
                  className="w-9 h-9 rounded-full bg-[#B33A2E] flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  aria-hidden="true"
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#2B2521] text-sm">{review.name}</p>
                  <p className="text-[#2B2521]/45 text-xs">{review.date}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Google */}
        <div className="text-center mt-10">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#B33A2E] font-semibold text-sm hover:underline"
            aria-label="Leggi tutte le recensioni su Google Maps"
          >
            Leggi tutte le recensioni su Google <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
