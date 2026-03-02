"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({ children, id, className = "", delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section id={id} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, ease: "easeOut", delay }} className={`py-16 md:py-24 ${className}`}>
      {children}
    </motion.section>
  );
}
