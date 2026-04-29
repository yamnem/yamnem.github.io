# Japón — Mayo 2026

Itinerary SPA for Yamil & Mel's Japan trip (May 3–28, 2026).

Live at: https://yamnem.github.io

---

## PWA Testing

### Android (Pixel 10 Pro) — 2026-04-29 ✅
- Installed via Chrome → Add to Home Screen; cover photo used as app icon
- SW precached all 43 assets on first WiFi visit
- Full offline functionality confirmed: app loads, navigation works, PDFs open
- Verified with Chrome fully closed — PWA runs independently from browser

### iOS (iPhone 17) — pending

---

## Changelog

### v0.3.0 — 2026-04-29
- Service Worker added (`sw.js`): cache-first offline support, precaches 43 assets (HTML, PDFs, images), skipWaiting + clients.claim for immediate activation
- Web App Manifest added (`manifest.json`): PWA installability on Android, standalone display mode
- `<html lang="es">` corrected; page title fixed to "Travel Buddy — Japón 2026"
- Ethiopian Airlines Documentos card: added Detalles, Recibo Yamil and Recibo Melu PDFs; ⚠ notice that documents are not valid boarding passes
- Calendar days 1, 2, 29: now clickable with gray "city-transit" color coding; full flight schedule in day focus (ET 0507 / ET 0672 / ET 0673 / ET 0506 with segments, times, seats)
- Calendar days 3 and 28: arrival and departure flight details added to day focus; flight document redirect pill
- 🌍 Tránsito legend entry added to calendar footer

### v0.2.3 — 2026-04-29
- Ethiopian Airlines Documentos card: added Detalles, Recibo Yamil and Recibo Melu PDFs; ⚠ notice that documents are not valid boarding passes
- Calendar days 1, 2, 29: now clickable with gray "city-transit" color coding; full flight schedule in day focus (ET 0507 / ET 0672 / ET 0673 / ET 0506 with segments, times, seats)
- Calendar days 3 and 28: arrival and departure flight details added to day focus; flight document redirect pill
- 🌍 Tránsito legend entry added to calendar footer

### v0.2.2 — 2026-04-29
- Unplanned day focus cards now show a styled empty state (dashed border, off-white background, ✏️ icon)
- Calendar cells for unplanned days 13, 16, 26, 27 now show ✏️ + faded "Por planificar" label
- Renamed Büuteon → Bluteon across all instances

### v0.2.1 — 2026-04-29
- Calendar day focus: full itinerary for days 4, 5, 6 (Daikanyama→Shinjuku · Omotesando→Akihabara · Meiji→Shibuya) with Golden Week time limits; calendar cell previews updated
- Calendar day 10: Osaka Bluteon SV League semifinal (May 10 · 18:05 · Asue Arena Osaka) with Hankyu travel recommendation from Kyoto, Google Maps link, and SV Japan app ticket notice
- Links & Documentos: Osaka Bluteon receipt card (Osaka amber color coding + highlight pulse on redirect from Calendar)

### v0.2.0 — 2026-04-28
- Rebranded site header from "Itinerario de Viaje" to **Travel Buddy**
- Added themed easter egg 🤫
- Footer now lives at the bottom of every section's scroll container (not fixed); consistent 32px symmetric spacing across all pages
- Card widths unified across all sections (Alojamientos, Trenes, Atracciones, Links & Documentos)
- Hamburger menu fixed on Mapa section (Google Maps iframe no longer intercepts taps)

### v0.1.3 — 2026-04-28
- Kumano Kodo Calendar focus days (17–21): full schedule, meals, map PDFs, redirect pills to day tabs and Reservas booking cards with Kumano-green pulse highlight
- Calendar overview previews for Kumano days (17–21) with overnight destination; boat emoji on day 20
- Calendar overview train previews on days 9, 17, 22 (train name + departure time)
- Grinding Matcha Experience (day 11): new Atracciones card, calendar preview, day focus schedule, receipt PDF + Maps link
- Day 23 Sorpresas banners (gradient + shimmer) and subtle calendar cell shimmer; fades when day ≥ 24
- Redirect pills at top of Calendar day focus cards: chronological order (train → KK day tab → lodging); Kumano days also get stay redirect pills with pulse highlight
- Atracciones: city color coding + highlight pulse on redirect; Nintendo Museum info corrected
- Trenes section: city color coding + highlight pulse on redirect; train tickets linked in Links & Documentos; Ver boletos pill on each card
- Alojamientos: Google Maps links on all 5 cards; all stays marked PAGADO
- HEIC train ticket files converted to PNG for in-app preview
- Footer: now injected into every section's scroll container (visible on scroll to bottom, symmetric 32px spacing); no longer fixed
- Card widths unified across Alojamientos, Trenes, Atracciones and Links & Documentos (consistent 24px desktop / 12px mobile padding)
- Hamburger menu fixed on Mapa section (iframe no longer captures taps over button)
- Renamed Información Importante → Links & Documentos

### v0.1.2 — 2026-04-27
- Version footer: centered at bottom, GitHub repo link with Octocat icon and underline
- Información importante: Links / Documentos tabs

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
