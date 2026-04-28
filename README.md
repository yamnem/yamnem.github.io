# Japón — Mayo 2026

Itinerary SPA for Yamil & Mel's Japan trip (May 3–28, 2026).

Live at: https://yamnem.github.io

---

## Changelog

### v0.1.1 — 2026-04-27
- Kumano Kodo section complete: full 5-day hiking itinerary with emoji timeline badges, PDF map modal, day tabs (Reservas · Preparación · Día 1–5)
- Reservas tab: 6 booking cards with photos, check-in/out, map codes, Google Maps links, PDF route maps; Kumano Travel confirmation & outline PDFs
- Nikko day-trip section complete: Itinerario + Información sub-tabs, transport cards with collapsible non-chosen options, getting-around maps
- Información importante: Links / Documentos tabs; passport photos, medical assist vouchers, Ethiopian flight confirmation
- PDF modal system for all local map PDFs and documents
- Mobile tap-highlight removed; press animation on all buttons
- Collapsible transport cards with chevron indicator

### v0.1.0 — 2026-04-24
- Mobile UX overhaul: FAB + popover card menu replaces clipping navbar on mobile
- Desktop navbar unchanged
- Calendar grid overflow fix (`minmax(0,1fr)` columns)
- Trip-day cells show place + time range on two lines on mobile
- Add ニッポン katakana to hero title
- Fix Golden Week notice dates (3–6 mayo)
- Remove color-coding legend and "Toca un día" hint
- Shorten WIP calendar notice
- Add day trips: Uji (May 11), Naoshima (May 12), La Collina (May 14), Kamakura + Enoshima (May 25)
- Fix calendar year to May 2026 (correct day-of-week grid)
- Add today highlight + past-days grey-out with `daySelector()` test helper
- Replace all yen mentions with ¥ symbol
- Add emoji accents to all day-plan section labels
- Fix scroll fade on day detail panel (listener timing bug)
- Add 🚄 to city-transition calendar days + emoji index
