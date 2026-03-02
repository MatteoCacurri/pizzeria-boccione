import type { Metadata } from "next";
import MenuPageClient from "./MenuPageClient";

export const metadata: Metadata = {
  title: "Menu Pizzeria al Taglio Boccione | Roma Monti Tiburtini",
  description: "Scopri il menu completo della Pizzeria Boccione: pizza al taglio, teglie speciali, fritti artigianali, panini e tavola calda a Monti Tiburtini, Roma.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() { return <MenuPageClient />; }
