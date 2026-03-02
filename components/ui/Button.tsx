"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-[#E39B2B] text-[#2B2521] font-semibold hover:bg-[#c8871f] shadow-md hover:shadow-lg",
  secondary: "bg-[#B33A2E] text-white font-semibold hover:bg-[#922f24] shadow-md hover:shadow-lg",
  ghost: "border-2 border-[#B33A2E] text-[#B33A2E] font-semibold hover:bg-[#B33A2E] hover:text-white",
  white: "bg-white text-[#2B2521] font-semibold hover:bg-[#F5EFE4] shadow-md hover:shadow-lg",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({ children, variant = "primary", size = "md", href, onClick, className = "", external = false, "aria-label": ariaLabel }: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const motionProps = { whileHover: { y: -2, scale: 1.02 }, whileTap: { scale: 0.97 }, transition: { type: "spring" as const, stiffness: 400, damping: 20 } };

  if (href) {
    if (external) return (<motion.a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses} aria-label={ariaLabel} {...motionProps}>{children}</motion.a>);
    return (<motion.div {...motionProps} className="inline-block"><Link href={href} className={baseClasses} aria-label={ariaLabel}>{children}</Link></motion.div>);
  }
  return (<motion.button onClick={onClick} className={baseClasses} aria-label={ariaLabel} {...motionProps}>{children}</motion.button>);
}
