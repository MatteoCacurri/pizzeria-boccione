"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ChiSiamo() {
  return (
    <SectionWrapper id="chi-siamo" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Testo */}
          <div>
            <motion.span
              className="inline-block text-[#B33A2E] text-xs font-medium uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Chi siamo
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2521] leading-tight mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              La pizzeria di quartiere,{" "}
              <span className="text-[#B33A2E]">dal 1989</span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-[#2B2521]/75 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Siamo Boccione, pizzeria al taglio e caffetteria nel cuore di
                Monti Tiburtini. Da oltre trent&apos;anni sforniamo tranci per i
                residenti del quartiere, i lavoratori in pausa pranzo e le
                famiglie di Pietralata e Tiburtina.
              </p>
              <p>
                Non siamo una catena e non vogliamo esserlo. Ogni teglia è
                preparata ogni giorno con impasto a lunga lievitazione,
                ingredienti selezionati e la cura di chi fa questo lavoro
                perché ci crede davvero.
              </p>
              <p>
                Pizza al taglio, fritti croccanti, panini e piatti di tavola
                calda: da Boccione trovi tutto quello che ti serve, dal mattino
                a mezzanotte, tutti i giorni.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#2B2521]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {[
                { value: "1989", label: "Anno di fondazione" },
                { value: "17h", label: "Apertura giornaliera" },
                { value: "7/7", label: "Giorni su sette" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl font-bold text-[#B33A2E]"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#2B2521]/50 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Immagine */}
          <motion.div
            className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Image
              src="/images/pizza-al-taglio-1.jpg"
              alt="Bancone pizza al taglio Pizzeria Boccione Monti Tiburtini Roma"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={80}
            />
            {/* Badge */}
            <div className="absolute bottom-5 left-5 bg-[#2B2521]/90 backdrop-blur-sm text-white px-4 py-2.5 rounded-xl">
              <span
                className="text-[#E39B2B] font-bold text-lg block"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Monti Tiburtini
              </span>
              <span className="text-white/70 text-xs">Via dei Monti Tiburtini 536</span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
