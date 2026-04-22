<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tokyo — May 2025</title>
  <style>
    :root {
      --bg:     #F4F4F0;
      --card:   #FFFFFF;
      --border: #E0E0D8;
      --text:   #1A1A1A;
      --muted:  #7A7A72;
      --navy:   #1A1A2E;

      --arch:     #C89A00;
      --food:     #1E8449;
      --anime:    #6C3483;
      --volley:   #1A5276;
      --shopping: #BA4A00;
      --sight:    #0B7A6E;
      --night:    #7B241C;
      --accom:    #5D6D7E;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
      font-size: 14px;
      min-height: 100vh;
    }

    /* ── Header ── */
    .header {
      background: var(--navy);
      color: #fff;
      padding: 28px 32px 22px;
    }
    .header h1 {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.2px;
    }
    .header-chips {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .chip {
      font-size: 11.5px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      color: #BFC8DC;
      padding: 3px 9px;
      border-radius: 20px;
    }
    .chip strong { color: #fff; }

    /* ── Warning ── */
    .warning {
      background: #FEF3C7;
      border-left: 4px solid #D97706;
      padding: 9px 32px;
      font-size: 12px;
      color: #78350F;
      line-height: 1.5;
    }

    /* ── Content wrapper ── */
    .content {
      max-width: 700px;
      margin: 0 auto;
      padding: 28px 24px 60px;
    }

    /* ── Stay heading ── */
    .stay-heading {
      display: flex;
      align-items: baseline;
      gap: 10px;
      margin-bottom: 14px;
      margin-top: 8px;
    }
    .stay-heading h2 {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--navy);
    }
    .stay-heading span {
      font-size: 12px;
      color: var(--muted);
    }

    /* ── Day card ── */
    .day-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 10px;
      margin-bottom: 10px;
      overflow: hidden;
    }

    /* ── Day card header (button) ── */
    .day-btn {
      width: 100%;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: stretch;
      text-align: left;
      font-family: inherit;
      color: var(--text);
      transition: background 0.12s;
    }
    .day-btn:hover { background: #FAFAF6; }
    .day-card.open .day-btn { border-bottom: 1px solid var(--border); }

    /* date box */
    .date-box {
      flex-shrink: 0;
      width: 62px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 14px 0;
      background: var(--navy);
      color: #fff;
    }
    .day-card.holiday .date-box { background: #6B1A2A; }
    .date-num {
      font-size: 26px;
      font-weight: 800;
      line-height: 1;
    }
    .date-mo {
      font-size: 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
      margin-top: 2px;
    }

    /* day info */
    .day-info {
      flex: 1;
      padding: 13px 14px 12px;
    }
    .day-title {
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 7px;
      flex-wrap: wrap;
    }
    .badge {
      font-size: 9.5px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }
    .badge.holiday { background: #FDE8D8; color: #9A3412; }
    .badge.last    { background: #E0F2FE; color: #075985; }
    .day-sub {
      font-size: 12px;
      color: var(--muted);
      margin-top: 4px;
      line-height: 1.35;
    }
    .cat-dots {
      display: flex;
      gap: 4px;
      margin-top: 8px;
      flex-wrap: wrap;
    }
    .cat-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    /* chevron */
    .chevron {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      padding: 0 16px;
      color: var(--muted);
      font-size: 18px;
      transition: transform 0.25s ease;
      line-height: 1;
    }
    .day-card.open .chevron { transform: rotate(180deg); }

    /* ── Day body ── */
    .day-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease;
    }

    /* ── Time slot ── */
    .time-slot {
      padding: 14px 18px 12px;
      border-bottom: 1px solid var(--border);
    }
    .time-slot:last-child { border-bottom: none; }
    .time-label {
      font-size: 9.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.9px;
      color: var(--muted);
      margin-bottom: 9px;
    }

    /* ── Activity ── */
    .act {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 6px 0 6px 10px;
      border-left: 2.5px solid #D0D0C8;
      margin-bottom: 7px;
    }
    .act:last-child { margin-bottom: 0; }
    .act.closed { opacity: 0.38; }
    .act.closed .act-name { text-decoration: line-through; }

    .act-bar { flex-shrink: 0; }

    .act-content { flex: 1; }
    .act-name {
      font-size: 13px;
      font-weight: 600;
      line-height: 1.35;
    }
    .act-note {
      font-size: 11.5px;
      color: var(--muted);
      margin-top: 2px;
      line-height: 1.3;
    }
    .act-arch {
      font-size: 10.5px;
      font-style: italic;
      margin-top: 2px;
    }
    .rec { color: #B7770D; font-weight: 700; }
    .opt {
      font-size: 9.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: var(--muted);
      border: 1px solid var(--border);
      padding: 1px 4px;
      border-radius: 3px;
      margin-left: 4px;
      vertical-align: middle;
    }

    /* category colors applied to .act border-left */
    .c-arch     { border-left-color: var(--arch); }
    .c-food     { border-left-color: var(--food); }
    .c-anime    { border-left-color: var(--anime); }
    .c-volley   { border-left-color: var(--volley); }
    .c-shopping { border-left-color: var(--shopping); }
    .c-sight    { border-left-color: var(--sight); }
    .c-night    { border-left-color: var(--night); }
    .c-accom    { border-left-color: var(--accom); }
    .c-arch .act-arch { color: var(--arch); }

    /* ── Stay gap ── */
    .stay-gap {
      position: relative;
      text-align: center;
      margin: 24px 0;
    }
    .stay-gap::before {
      content: '';
      position: absolute;
      left: 0; right: 0; top: 50%;
      border-top: 1px dashed var(--border);
    }
    .stay-gap-label {
      position: relative;
      background: var(--bg);
      padding: 0 14px;
      font-size: 11.5px;
      color: var(--muted);
      font-style: italic;
    }

    /* ── Legend ── */
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 16px 0 4px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      color: var(--muted);
    }
    .legend-swatch {
      width: 9px; height: 9px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  @media (max-width: 600px) {
    .header { padding: 18px 16px 14px; }
    .header h1 { font-size: 17px; }
    .chip { font-size: 10.5px; padding: 3px 8px; }
    .warning { padding: 9px 16px; font-size: 11.5px; }

    .content { padding: 14px 12px 48px; }

    .stay-heading { margin-top: 18px; }
    .stay-heading h2 { font-size: 11px; }
    .stay-heading span { font-size: 11px; }

    .date-box { width: 52px; }
    .date-num { font-size: 22px; }
    .date-mo  { font-size: 9px; }

    .day-info { padding: 10px 10px 10px; }
    .day-title { font-size: 13px; gap: 5px; }
    .day-sub { font-size: 11px; margin-top: 3px; }
    .badge { font-size: 9px; padding: 1px 5px; }
    .cat-dots { margin-top: 6px; }

    .chevron { padding: 0 12px; font-size: 16px; }

    .time-slot { padding: 11px 12px 10px; }
    .time-label { font-size: 9px; margin-bottom: 7px; }

    .act { padding-left: 8px; gap: 8px; margin-bottom: 6px; }
    .act-name { font-size: 12.5px; }
    .act-note { font-size: 11px; }
    .act-arch { font-size: 10px; }

    .legend { gap: 8px 12px; padding: 10px 0 2px; }
    .legend-item { font-size: 10.5px; }

    .stay-gap-label { font-size: 10.5px; }
  }
  </style>
</head>
<body>

<div class="header">
  <h1>Tokyo — May 2025</h1>
  <div class="header-chips">
    <span class="chip"><strong>Stay 1</strong> May 4–6 · AirBnb · Ikebukuro</span>
    <span class="chip"><strong>Stay 2</strong> May 26–27 · Lang Hotel · Kameido</span>
    <span class="chip">Suica covers all transport</span>
  </div>
</div>

<div class="warning">
  ⚠️ <strong>Golden Week (May 4–5):</strong> National holidays. Meiji Shrine, Shibuya Crossing, Harajuku will be packed — aim to start before 9am for iconic spots.
</div>

<div class="content">

  <div class="legend">
    <div class="legend-item"><div class="legend-swatch" style="background:var(--arch)"></div>Architecture</div>
    <div class="legend-item"><div class="legend-swatch" style="background:var(--food)"></div>Food</div>
    <div class="legend-item"><div class="legend-swatch" style="background:var(--anime)"></div>Anime / Gaming</div>
    <div class="legend-item"><div class="legend-swatch" style="background:var(--volley)"></div>Volleyball</div>
    <div class="legend-item"><div class="legend-swatch" style="background:var(--shopping)"></div>Shopping</div>
    <div class="legend-item"><div class="legend-swatch" style="background:var(--sight)"></div>Sightseeing</div>
    <div class="legend-item"><div class="legend-swatch" style="background:var(--night)"></div>Nightlife</div>
  </div>

  <!-- ═══ STAY 1 ═══ -->
  <div class="stay-heading" style="margin-top:22px">
    <h2>Stay 1 — AirBnb, Ikebukuro</h2>
    <span>May 4–6</span>
  </div>

  <!-- DAY 1 -->
  <div class="day-card holiday" id="day1">
    <button class="day-btn" onclick="toggle('day1')">
      <div class="date-box">
        <span class="date-num">4</span>
        <span class="date-mo">May</span>
      </div>
      <div class="day-info">
        <div class="day-title">
          Day 1 — Arrival + Ikebukuro
          <span class="badge holiday">Golden Week</span>
        </div>
        <div class="day-sub">Sunday · Check in, explore Ikebukuro, karaoke</div>
        <div class="cat-dots">
          <div class="cat-dot" style="background:var(--accom)" title="Accommodation"></div>
          <div class="cat-dot" style="background:var(--food)" title="Food"></div>
          <div class="cat-dot" style="background:var(--sight)" title="Sightseeing"></div>
          <div class="cat-dot" style="background:var(--anime)" title="Anime / Gaming"></div>
          <div class="cat-dot" style="background:var(--shopping)" title="Shopping"></div>
          <div class="cat-dot" style="background:var(--night)" title="Nightlife"></div>
        </div>
      </div>
      <div class="chevron">⌄</div>
    </button>
    <div class="day-body">

      <div class="time-slot">
        <div class="time-label">Morning — settle in</div>
        <div class="act c-accom">
          <div class="act-content">
            <div class="act-name">Check in — AirBnb</div>
            <div class="act-note">Ikebukuro / Sugamo area</div>
          </div>
        </div>
        <div class="act c-food">
          <div class="act-content">
            <div class="act-name">Bozu 'n Coffee</div>
            <div class="act-note">Buddhist monk-run café — calm start to the trip</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Jardín de Mejiro</div>
            <div class="act-note">Traditional garden, ~45 min. Good to decompress after travel</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Afternoon — Ikebukuro</div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Sunshine 60</div>
            <div class="act-note">Observation deck, city views</div>
          </div>
        </div>
        <div class="act c-anime">
          <div class="act-content">
            <div class="act-name">Anime Tokyo Station</div>
            <div class="act-note">Next door to Sunshine 60</div>
          </div>
        </div>
        <div class="act c-anime">
          <div class="act-content">
            <div class="act-name">Gashapon Ikebukuro Main Store</div>
            <div class="act-note">Capsule toy heaven — budget some time here</div>
          </div>
        </div>
        <div class="act c-anime closed">
          <div class="act-content">
            <div class="act-name">Centro Pokémon Mega Tokio</div>
            <div class="act-note">Temporarily closed</div>
          </div>
        </div>
        <div class="act c-anime">
          <div class="act-content">
            <div class="act-name">Plaza Capcom Ikebukuro</div>
            <div class="act-note">Arcade, ~1 hour</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Evening</div>
        <div class="act c-shopping">
          <div class="act-content">
            <div class="act-name">BIC Camera · LABI1 · GU · OWNDAYS</div>
            <div class="act-note">Electronics + fashion — all within a few blocks</div>
          </div>
        </div>
        <div class="act c-food">
          <div class="act-content">
            <div class="act-name">Dinner: Kailaku or Misaki Hogyo</div>
            <div class="act-note"><span class="rec">⭐ Rec. Agus &amp; Joni</span></div>
          </div>
        </div>
        <div class="act c-night">
          <div class="act-content">
            <div class="act-name">Karaoke Hundred Ikebukuro</div>
            <div class="act-note">Karaoke &amp; Darts bar</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- DAY 2 -->
  <div class="day-card holiday" id="day2">
    <button class="day-btn" onclick="toggle('day2')">
      <div class="date-box">
        <span class="date-num">5</span>
        <span class="date-mo">May</span>
      </div>
      <div class="day-info">
        <div class="day-title">
          Day 2 — Shinjuku + Harajuku
          <span class="badge holiday">Golden Week</span>
        </div>
        <div class="day-sub">Monday · Children's Day · Start early</div>
        <div class="cat-dots">
          <div class="cat-dot" style="background:var(--sight)"></div>
          <div class="cat-dot" style="background:var(--food)"></div>
          <div class="cat-dot" style="background:var(--night)"></div>
          <div class="cat-dot" style="background:var(--shopping)"></div>
        </div>
      </div>
      <div class="chevron">⌄</div>
    </button>
    <div class="day-body">

      <div class="time-slot">
        <div class="time-label">Morning — Shinjuku</div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Tokyo Metropolitan Gov. Building</div>
            <div class="act-note">Free observatory — go early before queues build</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">3D Cat Cross Shinjuku Space + Godzilla Head</div>
            <div class="act-note">Near east exit, ~10 min walk</div>
          </div>
        </div>
        <div class="act c-shopping">
          <div class="act-content">
            <div class="act-name">OWNDAYS 新宿東口店</div>
            <div class="act-note">Quick stop if needed</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Midday — Shinjuku streets</div>
        <div class="act c-food">
          <div class="act-content">
            <div class="act-name">Uogashi Nihon-Ichi</div>
            <div class="act-note"><span class="rec">⭐ Rec. Agus &amp; Joni</span> — Standing sushi, no wait</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Omoide Yokochō (Memory Lane)</div>
            <div class="act-note">Tiny yakitori alleyway, very atmospheric</div>
          </div>
        </div>
        <div class="act c-night">
          <div class="act-content">
            <div class="act-name">Shinjuku Golden-Gai</div>
            <div class="act-note">200+ tiny bars across 6 alleys — wander even just for photos</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Afternoon — Harajuku</div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Santuario Meiji</div>
            <div class="act-note">Arrive by 3–4pm, ~1 hour. Forest walk is worth it</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Calle Takeshita</div>
            <div class="act-note">Chaotic and fun, ~30–45 min</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Tokyu Plaza Harajuku "HARAKADO"</div>
            <div class="act-note">Rooftop garden + shops</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Evening</div>
        <div class="act c-food">
          <div class="act-content">
            <div class="act-name">Shinjuku Kabuki Hall / Kabuki Yokocho</div>
            <div class="act-note"><span class="rec">⭐ Rec. Agus &amp; Joni</span> — Lively food alley, long dinner</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- DAY 3 -->
  <div class="day-card" id="day3">
    <button class="day-btn" onclick="toggle('day3')">
      <div class="date-box">
        <span class="date-num">6</span>
        <span class="date-mo">May</span>
      </div>
      <div class="day-info">
        <div class="day-title">Day 3 — Omotesando + Shibuya</div>
        <div class="day-sub">Tuesday · Regular weekday · Best day for sightseeing</div>
        <div class="cat-dots">
          <div class="cat-dot" style="background:var(--arch)"></div>
          <div class="cat-dot" style="background:var(--sight)"></div>
          <div class="cat-dot" style="background:var(--food)"></div>
          <div class="cat-dot" style="background:var(--volley)"></div>
        </div>
      </div>
      <div class="chevron">⌄</div>
    </button>
    <div class="day-body">

      <div class="time-slot">
        <div class="time-label">Morning — Omotesando architecture walk</div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">BLUE ELEPHANT HARAJUKU + Japanime Art Gallery</div>
            <div class="act-note">Opens 11am — warm up on Takeshita side streets</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Cat Street + 3-chōme-18 Jingūmae</div>
            <div class="act-note">Indie shops, less touristy</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">DIOR Tokyo Omotesando</div>
            <div class="act-arch">SANAA</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">Miu Miu Aoyama</div>
            <div class="act-arch">Herzog &amp; De Meuron</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">Prada Tokyo Aoyama</div>
            <div class="act-arch">Herzog &amp; De Meuron</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">Louis Vuitton Omotesando</div>
            <div class="act-arch">Jun Aoki</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">SunnyHills Minamiaoyama</div>
            <div class="act-arch">Kengo Kuma</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Gentle Monster Aoyama Flagship</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Midday — Shibuya</div>
        <div class="act c-food">
          <div class="act-content">
            <div class="act-name">Miyashita Park lunch</div>
            <div class="act-note">Rooftop park with food options (11am–9pm)</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Shibuya Crossing</div>
            <div class="act-note">Late afternoon is most photogenic</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">Tokyo Toilet Project</div>
            <div class="act-note">4 designer bathrooms within ~1km — Tadao Ando, Kengo Kuma, Nigo</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Afternoon</div>
        <div class="act c-volley">
          <div class="act-content">
            <div class="act-name">Sports Shop Gallery 2 Shibuya</div>
            <div class="act-note">Volleyball gear</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Nakameguro <span class="opt">optional</span></div>
            <div class="act-note">Canal walk + coffee shops — 1 stop Tokyu Toyoko line</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Gap -->
  <div class="stay-gap">
    <span class="stay-gap-label">May 7 – 25 · Kumano Kodo &amp; other destinations</span>
  </div>

  <!-- ═══ STAY 2 ═══ -->
  <div class="stay-heading">
    <h2>Stay 2 — Lang Hotel, Kameido</h2>
    <span>May 26–27</span>
  </div>

  <!-- DAY 4 -->
  <div class="day-card" id="day4">
    <button class="day-btn" onclick="toggle('day4')">
      <div class="date-box">
        <span class="date-num">26</span>
        <span class="date-mo">May</span>
      </div>
      <div class="day-info">
        <div class="day-title">Day 4 — Asakusa + Ginza</div>
        <div class="day-sub">Monday · Check-in day · East Tokyo loop</div>
        <div class="cat-dots">
          <div class="cat-dot" style="background:var(--accom)"></div>
          <div class="cat-dot" style="background:var(--arch)"></div>
          <div class="cat-dot" style="background:var(--sight)"></div>
          <div class="cat-dot" style="background:var(--volley)"></div>
          <div class="cat-dot" style="background:var(--food)"></div>
        </div>
      </div>
      <div class="chevron">⌄</div>
    </button>
    <div class="day-body">

      <div class="time-slot">
        <div class="time-label">Morning — East Tokyo</div>
        <div class="act c-accom">
          <div class="act-content">
            <div class="act-name">Check in — Lang Hotel</div>
            <div class="act-note">Kameido area · drop bags and go</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Age.3 Asakusa</div>
            <div class="act-note">~20–25 min by train. Explore the area on foot</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Anegawa Bookstores Nyankodo + Tokyo Dome City</div>
            <div class="act-note">Near Korakuen station (~25 min from Asakusa)</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">Catedral de Santa María de Tokio</div>
            <div class="act-note">10 min walk from Tokyo Dome</div>
            <div class="act-arch">Kenzo Tange</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Afternoon — Ginza architecture</div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">Tokyo International Forum</div>
            <div class="act-note">Free atrium entry. Stunning space</div>
            <div class="act-arch">Rafael Viñoly</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">Maison Hermès Le Forum</div>
            <div class="act-note">Glowing glass brick tower</div>
            <div class="act-arch">Renzo Piano</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Evening</div>
        <div class="act c-volley">
          <div class="act-content">
            <div class="act-name">MIZUNO TOKYO</div>
            <div class="act-note">Ginza flagship — allow 30–60 min</div>
          </div>
        </div>
        <div class="act c-food">
          <div class="act-content">
            <div class="act-name">Dinner in Ginza</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- DAY 5 -->
  <div class="day-card" id="day5">
    <button class="day-btn" onclick="toggle('day5')">
      <div class="date-box">
        <span class="date-num">27</span>
        <span class="date-mo">May</span>
      </div>
      <div class="day-info">
        <div class="day-title">
          Day 5 — Roppongi + Tokyo Tower
          <span class="badge last">Last day</span>
        </div>
        <div class="day-sub">Tuesday · Architecture morning · Choose your afternoon</div>
        <div class="cat-dots">
          <div class="cat-dot" style="background:var(--arch)"></div>
          <div class="cat-dot" style="background:var(--sight)"></div>
          <div class="cat-dot" style="background:var(--food)"></div>
          <div class="cat-dot" style="background:var(--anime)"></div>
          <div class="cat-dot" style="background:var(--volley)"></div>
        </div>
      </div>
      <div class="chevron">⌄</div>
    </button>
    <div class="day-body">

      <div class="time-slot">
        <div class="time-label">Morning — Roppongi / Minato</div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">National Art Center, Tokyo</div>
            <div class="act-note">Free building entry. Undulating glass facade (~30 min via Oedo line)</div>
            <div class="act-arch">Kisho Kurokawa</div>
          </div>
        </div>
        <div class="act c-arch">
          <div class="act-content">
            <div class="act-name">21-21 Design Sight</div>
            <div class="act-note">Check current exhibition before going</div>
            <div class="act-arch">Tadao Ando</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Azabudai Hills</div>
            <div class="act-note">Newest mega-complex (2023) — worth walking through</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Midday — Tokyo Tower</div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">RED° TOKYO TOWER</div>
            <div class="act-note">Entertainment complex at the tower base</div>
          </div>
        </div>
        <div class="act c-food">
          <div class="act-content">
            <div class="act-name">Lunch near Tokyo Tower</div>
          </div>
        </div>
      </div>

      <div class="time-slot">
        <div class="time-label">Afternoon — choose one</div>
        <div class="act c-anime">
          <div class="act-content">
            <div class="act-name">Option A · Nakano Broadway</div>
            <div class="act-note">Mandarake, figures, vintage anime — Chuo line from Shinjuku (~5 min)</div>
          </div>
        </div>
        <div class="act c-sight">
          <div class="act-content">
            <div class="act-name">Option B · SKWAT / twelvebooks</div>
            <div class="act-note">Near the hotel — quiet final afternoon</div>
          </div>
        </div>
        <div class="act c-volley">
          <div class="act-content">
            <div class="act-name">Option C · Gallery 2 Shinjuku + Sports Zyuen</div>
            <div class="act-note">Last volleyball gear run</div>
          </div>
        </div>
      </div>

    </div>
  </div>

</div><!-- /content -->

<script>
  function toggle(id) {
    const card = document.getElementById(id);
    const body = card.querySelector('.day-body');
    const isOpen = card.classList.contains('open');

    if (isOpen) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => {
        body.style.maxHeight = '0';
      });
      card.classList.remove('open');
    } else {
      card.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      body.addEventListener('transitionend', () => {
        if (card.classList.contains('open')) body.style.maxHeight = 'none';
      }, { once: true });
    }
  }

  // Open day 1 by default
  const first = document.getElementById('day1');
  const firstBody = first.querySelector('.day-body');
  first.classList.add('open');
  firstBody.style.maxHeight = 'none';
</script>

</body>
</html>
