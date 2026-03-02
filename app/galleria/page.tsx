import type { Metadata } from "next";
import GalleriaClient from "./GalleriaClient";

export const metadata: Metadata = {
  title: "Foto Pizzeria Boccione | Pizza al Taglio Monti Tiburtini Roma",
  description: "Guarda le foto della Pizzeria Boccione: tranci di pizza al taglio, fritti artigianali, teglie speciali e il nostro bancone a Monti Tiburtini, Roma.",
  alternates: { canonical: "/galleria" },
};

export default function GalleriaPage() { return <GalleriaClient />; }
