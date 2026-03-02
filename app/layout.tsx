import type { Metadata } from "next";
import { Fraunces, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["opsz"], display: "swap" });
const barlow = Barlow({ variable: "--font-barlow", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Pizzeria al Taglio Monti Tiburtini Roma | Boccione", template: "%s | Pizzeria Boccione" },
  description: "Pizza al taglio a Monti Tiburtini, Roma: teglie, fritti e tavola calda. Scopri menu, orari e ordina su WhatsApp. Aperti tutti i giorni 07:00\u201300:00.",
  keywords: ["pizzeria al taglio Monti Tiburtini Roma", "pizza a taglio Pietralata Roma", "pizza in teglia Tiburtina", "pizzeria asporto Monti Tiburtini", "Boccione pizzeria Roma"],
  openGraph: { type: "website", locale: "it_IT", title: "Pizzeria al Taglio Monti Tiburtini Roma | Boccione", description: "Pizza al taglio a Monti Tiburtini, Roma: teglie, fritti e tavola calda. Aperti tutti i giorni 07:00\u201300:00.", siteName: "Pizzeria Boccione" },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "Restaurant", name: "Pizzeria Boccione",
  description: "Pizzeria al taglio e caffetteria a Monti Tiburtini, Roma. Pizza in teglia, fritti artigianali e tavola calda. Dal 1989.",
  address: { "@type": "PostalAddress", streetAddress: "Via dei Monti Tiburtini 536 A/B", addressLocality: "Roma", postalCode: "00157", addressRegion: "Lazio", addressCountry: "IT" },
  geo: { "@type": "GeoCoordinates", latitude: 41.9065, longitude: 12.5639 },
  telephone: "+39-06-4506821", email: "pizzeria.boccione@gmail.com", url: "https://www.pizzeriaboccione.it",
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "07:00", closes: "00:00" }],
  servesCuisine: "Pizza, Cucina italiana", priceRange: "\u20ac", image: "/images/pizza-teglia-3.jpg",
  sameAs: ["https://www.instagram.com/pizzeria_boccione.89/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /></head>
      <body className={`${fraunces.variable} ${barlow.variable} antialiased`}>
        <Navbar /><main>{children}</main><Footer /><WhatsAppFloating />
      </body>
    </html>
  );
}
