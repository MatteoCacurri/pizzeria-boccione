import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ChiSiamo from "@/components/sections/ChiSiamo";
import PuntiForza from "@/components/sections/PuntiForza";
import MenuPreview from "@/components/sections/MenuPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Recensioni from "@/components/sections/Recensioni";
import CTAFinale from "@/components/sections/CTAFinale";

export const metadata: Metadata = {
  title: "Pizzeria al Taglio Monti Tiburtini Roma | Boccione",
  description: "Pizza al taglio a Monti Tiburtini, Roma: teglie, fritti e tavola calda. Scopri menu, orari e ordina su WhatsApp. Aperti tutti i giorni 07:00\u201300:00.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (<><Hero /><ChiSiamo /><PuntiForza /><MenuPreview /><GalleryPreview /><Recensioni /><CTAFinale /></>);
}
