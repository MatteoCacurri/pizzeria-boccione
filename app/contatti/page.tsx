import type { Metadata } from "next";
import ContattiClient from "./ContattiClient";

export const metadata: Metadata = {
  title: "Dove Siamo e Orari | Pizzeria Boccione Monti Tiburtini Roma",
  description: "Trova la Pizzeria Boccione in Via dei Monti Tiburtini 536, Roma. Orari, telefono, WhatsApp e mappa. Aperti tutti i giorni dalle 7 a mezzanotte.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() { return <ContattiClient />; }
