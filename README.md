# Pizzeria Boccione — Sito Vetrina

Sito vetrina per la **Pizzeria Boccione** — pizza al taglio e caffetteria a Monti Tiburtini, Roma. Dal 1989.

## Stack

- **Next.js 16** (App Router, static pages)
- **TypeScript** strict mode
- **Tailwind CSS v4** con design system custom
- **Framer Motion** per animazioni scroll
- **Lucide React** per icone
- **Google Fonts**: Fraunces (titoli) + Barlow (body)

## Pagine

| Route | Descrizione |
|-------|-------------|
| `/` | Homepage: Hero, Chi siamo, Punti di forza, Menu preview, Galleria preview, Recensioni, CTA |
| `/menu` | Menu completo per categoria |
| `/galleria` | Galleria foto con lightbox |
| `/contatti` | Mappa, orari, contatti, area consegna |

## Getting Started

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Design System

| Colore | Hex | Uso |
|--------|-----|-----|
| Rosso Forno Romano | `#B33A2E` | Primary, titoli, accenti |
| Verde Erbe | `#5F6B4A` | Secondary |
| Giallo Dorato | `#E39B2B` | CTA, highlights |
| Crema Farina | `#F5EFE4` | Background principale |
| Carbone Caldo | `#2B2521` | Testo, navbar |

## Note

- Il numero WhatsApp in `lib/constants.ts` è un placeholder — sostituire con il numero mobile reale del cliente
- Testi, menu e recensioni sono placeholder — sostituire con i contenuti reali
- Pagine `/privacy` e `/cookie` da creare
