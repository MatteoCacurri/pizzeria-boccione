"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ordina su WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-green-900/40 bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-200"
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="w-7 h-7"
            aria-hidden="true"
          >
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.655 4.826 1.8 6.85L2 30l7.35-1.775A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.83-1.595l-.42-.25-4.36 1.05 1.08-4.24-.275-.435A11.44 11.44 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.565c-.345-.173-2.04-1.005-2.355-1.12-.315-.115-.545-.172-.775.173-.23.345-.89 1.12-1.09 1.35-.2.23-.4.26-.745.087-2.04-1.02-3.38-1.82-4.72-4.13-.356-.615.356-.57.99-1.9.11-.23.055-.43-.03-.602-.085-.173-.775-1.87-1.062-2.56-.28-.672-.565-.58-.775-.59-.2-.01-.43-.012-.66-.012-.23 0-.603.086-.92.43-.315.344-1.2 1.173-1.2 2.86 0 1.688 1.23 3.32 1.4 3.55.172.23 2.42 3.695 5.865 5.185 2.184.942 3.04 1.022 4.13.86.664-.098 2.04-.834 2.328-1.64.287-.806.287-1.498.2-1.64-.085-.144-.315-.23-.66-.402z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
