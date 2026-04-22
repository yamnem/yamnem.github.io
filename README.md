
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tokyo — May 2025</title>
  <style>
    :root {
      --bg:       #F4F4F0;
      --card:     #FFFFFF;
      --border:   #E8E8E0;
      --text:     #1A1A1A;
      --muted:    #7A7A72;
      --navy:     #1A1A2E;
      --crimson:  #6B1A2A;
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
    .header h1 { font-size: 20px; font-weight: 700; letter-spacing: -0.2px; }
    .header-chips { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px; }
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

    /* ── Content ── */
    .content { max-width: 700px; margin: 0 auto; padding: 22px 24px 60px; }

    /* ── Legend ── */
    .legend { display: flex; flex-wrap: wrap; gap: 10px 14px; padding: 0 0 18px; }
    .legend-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--muted); }
    .legend-swatch { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

    /* ── Calendar card ── */
    .calendar-card {
      background: var(--card);
      border-radius: 16px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.07), 0 3px 12px rgba(0,0,0,0.06);
      overflow: hidden;
    }
    .cal-month-header {
      padding: 16px 18px 10px;
      display: flex;
      align-items: baseline;
      gap: 9px;
    }
    .cal-month-title { font-size: 15px; font-weight: 700; color: var(--navy); }
    .cal-month-hint { font-size: 11px; color: var(--muted); }
    .cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
    .cal-dow {
      padding: 4px 0 7px;
      text-align: center;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--muted);
      border-bottom: 1px solid var(--border);
    }
    .cal-dow.wknd { color: #B8A8A8; }

    .cal-cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 11px 3px 13px;
      min-height: 90px;
      border-bottom: 1px solid #F0F0E8;
    }
    .cal-num {
      width: 40px; height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 15px;
      font-weight: 500;
      color: #AAAAAA;
      transition: background 0.15s, color 0.15s, transform 0.13s, box-shadow 0.15s;
      flex-shrink: 0;
    }

    /* empty */
    .cal-cell.empty .cal-num { visibility: hidden; }

    /* regular non-trip May day */
    .cal-cell.regular .cal-num { color: #C0BEB8; font-weight: 400; }

    /* gap / travel day */
    .cal-cell.gap-day { background: #FAFAF8; }
    .cal-cell.gap-day .cal-num { color: #D4D0C8; font-weight: 400; font-size: 11.5px; }
    .gap-icon { font-size: 8px; color: #D0C8BC; margin-top: 2px; }

    /* trip day */
    .cal-cell.trip-day { cursor: pointer; }
    .cal-cell.trip-day .cal-num {
      background: rgba(26,26,46,0.06);
      color: var(--navy);
      font-weight: 700;
    }
    .cal-cell.trip-day:hover .cal-num {
      background: rgba(26,26,46,0.13);
      transform: scale(1.06);
    }
    .cal-cell.trip-day:active .cal-num { transform: scale(0.96); }

    /* holiday trip day */
    .cal-cell.trip-day.holiday .cal-num {
      background: rgba(107,26,42,0.08);
      color: var(--crimson);
    }
    .cal-cell.trip-day.holiday:hover .cal-num {
      background: rgba(107,26,42,0.16);
    }

    /* selected */
    .cal-cell.trip-day.selected .cal-num {
      background: var(--navy) !important;
      color: #fff !important;
      transform: scale(1.1) !important;
      box-shadow: 0 2px 10px rgba(26,26,46,0.38);
    }
    .cal-cell.trip-day.holiday.selected .cal-num {
      background: var(--crimson) !important;
      box-shadow: 0 2px 10px rgba(107,26,42,0.38);
    }

    .cal-day-name {
      font-size: 10px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      color: var(--muted);
      margin-top: 3px;
      opacity: 0.7;
    }
    .cal-dots {
      display: flex;
      gap: 3px;
      margin-top: 7px;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 38px;
    }
    .cal-dot { width: 5px; height: 5px; border-radius: 50%; }

    /* gap legend footer inside card */
    .cal-footer {
      padding: 8px 18px 11px;
      display: flex;
      align-items: center;
      gap: 7px;
      border-top: 1px solid var(--border);
    }
    .cal-footer-swatch {
      width: 10px; height: 10px;
      border-radius: 2px;
      background: #ECEAE4;
      flex-shrink: 0;
    }
    .cal-footer span { font-size: 10.5px; color: var(--muted); font-style: italic; }

    /* ── Detail panel ── */
    .detail-outer { margin-top: 8px; }
    .detail-panel {
      background: var(--card);
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.13), 0 1px 5px rgba(0,0,0,0.07);
      overflow: hidden;
      opacity: 0;
      transform: translateY(-8px) scaleY(0.97);
      transform-origin: top center;
      transition: opacity 0.22s ease, transform 0.26s cubic-bezier(0.34, 1.25, 0.64, 1);
      pointer-events: none;
    }
    .detail-panel.open {
      opacity: 1;
      transform: translateY(0) scaleY(1);
      pointer-events: auto;
    }

    /* detail header */
    .detail-header {
      display: flex;
      align-items: stretch;
      border-bottom: 1px solid var(--border);
    }
    .detail-date-box {
      flex-shrink: 0;
      width: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
      background: var(--navy);
      color: #fff;
    }
    .detail-date-box.holiday { background: var(--crimson); }
    .detail-date-num { font-size: 30px; font-weight: 800; line-height: 1; }
    .detail-date-mo {
      font-size: 10px; letter-spacing: 1px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
      margin-top: 2px;
    }
    .detail-title-area { flex: 1; padding: 14px 14px 12px; }
    .detail-title {
      font-size: 15px; font-weight: 700;
      display: flex; align-items: center;
      gap: 7px; flex-wrap: wrap;
      color: var(--navy);
    }
    .detail-sub { font-size: 12px; color: var(--muted); margin-top: 4px; }
    .detail-close {
      flex-shrink: 0;
      display: flex; align-items: center;
      padding: 0 16px;
      cursor: pointer;
      background: none; border: none;
      font-size: 17px; color: var(--muted);
      font-family: inherit;
      transition: color 0.15s;
    }
    .detail-close:hover { color: var(--text); }

    /* badge */
    .badge {
      font-size: 9.5px; font-weight: 700;
      padding: 2px 6px; border-radius: 4px;
      letter-spacing: 0.3px; text-transform: uppercase;
    }
    .badge.holiday { background: #FDE8D8; color: #9A3412; }
    .badge.last    { background: #E0F2FE; color: #075985; }

    /* time slot */
    .time-slot { padding: 14px 18px 12px; border-bottom: 1px solid var(--border); }
    .time-slot:last-child { border-bottom: none; }
    .time-label {
      font-size: 9.5px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.9px;
      color: var(--muted); margin-bottom: 9px;
    }

    /* activity */
    .act {
      display: flex; align-items: flex-start;
      gap: 10px; padding: 6px 0 6px 10px;
      border-left: 2.5px solid #D0D0C8;
      margin-bottom: 7px;
    }
    .act:last-child { margin-bottom: 0; }
    .act.closed { opacity: 0.38; }
    .act.closed .act-name { text-decoration: line-through; }
    .act-content { flex: 1; }
    .act-name { font-size: 13px; font-weight: 600; line-height: 1.35; }
    .act-note { font-size: 11.5px; color: var(--muted); margin-top: 2px; line-height: 1.3; }
    .act-arch { font-size: 10.5px; font-style: italic; margin-top: 2px; }
    .rec { color: #B7770D; font-weight: 700; }
    .opt {
      font-size: 9.5px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.4px; color: var(--muted);
      border: 1px solid var(--border); padding: 1px 4px;
      border-radius: 3px; margin-left: 4px; vertical-align: middle;
    }
    .c-arch     { border-left-color: var(--arch); }
    .c-food     { border-left-color: var(--food); }
    .c-anime    { border-left-color: var(--anime); }
    .c-volley   { border-left-color: var(--volley); }
    .c-shopping { border-left-color: var(--shopping); }
    .c-sight    { border-left-color: var(--sight); }
    .c-night    { border-left-color: var(--night); }
    .c-accom    { border-left-color: var(--accom); }
    .c-arch .act-arch { color: var(--arch); }

    @media (max-width: 600px) {
      .header { padding: 18px 16px 14px; }
      .header h1 { font-size: 17px; }
      .warning { padding: 9px 16px; font-size: 11.5px; }
      .content { padding: 14px 12px 48px; }
      .cal-cell { min-height: 66px; padding: 8px 1px 9px; }
      .cal-num { width: 32px; height: 32px; font-size: 12.5px; }
      .cal-day-name { font-size: 8.5px; margin-top: 2px; }
      .cal-dots { gap: 2.5px; max-width: 28px; margin-top: 5px; }
      .cal-dot { width: 4px; height: 4px; }
      .detail-date-box { width: 56px; }
      .detail-date-num { font-size: 25px; }
      .detail-title { font-size: 13.5px; }
      .time-slot { padding: 11px 14px 10px; }
      .act-name { font-size: 12.5px; }
      .act-note { font-size: 11px; }
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

  <!-- ── Calendar ── -->
  <div class="calendar-card">
    <div class="cal-month-header">
      <span class="cal-month-title">May 2025</span>
      <span class="cal-month-hint">Tap a trip day to expand</span>
    </div>

    <div class="cal-grid">
      <!-- Day-of-week headers (Mon–Sun) -->
      <div class="cal-dow">Mon</div>
      <div class="cal-dow">Tue</div>
      <div class="cal-dow">Wed</div>
      <div class="cal-dow">Thu</div>
      <div class="cal-dow">Fri</div>
      <div class="cal-dow wknd">Sat</div>
      <div class="cal-dow wknd">Sun</div>

      <!-- Row 1: May 1 starts on Thursday (offset 3) -->
      <div class="cal-cell empty"><div class="cal-num"></div></div>
      <div class="cal-cell empty"><div class="cal-num"></div></div>
      <div class="cal-cell empty"><div class="cal-num"></div></div>
      <div class="cal-cell regular"><div class="cal-num">1</div></div>
      <div class="cal-cell regular"><div class="cal-num">2</div></div>
      <div class="cal-cell regular"><div class="cal-num">3</div></div>
      <!-- May 4 — Trip Day 1, Golden Week -->
      <div class="cal-cell trip-day holiday" data-day="day1" onclick="selectDay('day1')">
        <div class="cal-num">4</div>
        <div class="cal-day-name">Sun</div>
        <div class="cal-dots">
          <div class="cal-dot" style="background:var(--accom)"></div>
          <div class="cal-dot" style="background:var(--food)"></div>
          <div class="cal-dot" style="background:var(--sight)"></div>
          <div class="cal-dot" style="background:var(--anime)"></div>
          <div class="cal-dot" style="background:var(--night)"></div>
        </div>
      </div>

      <!-- Row 2 -->
      <!-- May 5 — Trip Day 2, Golden Week -->
      <div class="cal-cell trip-day holiday" data-day="day2" onclick="selectDay('day2')">
        <div class="cal-num">5</div>
        <div class="cal-day-name">Mon</div>
        <div class="cal-dots">
          <div class="cal-dot" style="background:var(--sight)"></div>
          <div class="cal-dot" style="background:var(--food)"></div>
          <div class="cal-dot" style="background:var(--shopping)"></div>
          <div class="cal-dot" style="background:var(--night)"></div>
        </div>
      </div>
      <!-- May 6 — Trip Day 3 -->
      <div class="cal-cell trip-day" data-day="day3" onclick="selectDay('day3')">
        <div class="cal-num">6</div>
        <div class="cal-day-name">Tue</div>
        <div class="cal-dots">
          <div class="cal-dot" style="background:var(--arch)"></div>
          <div class="cal-dot" style="background:var(--sight)"></div>
          <div class="cal-dot" style="background:var(--food)"></div>
          <div class="cal-dot" style="background:var(--volley)"></div>
        </div>
      </div>
      <!-- Gap days 7–11 -->
      <div class="cal-cell gap-day"><div class="cal-num">7</div><div class="gap-icon">✈</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">8</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">9</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">10</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">11</div></div>

      <!-- Row 3: gap days 12–18 -->
      <div class="cal-cell gap-day"><div class="cal-num">12</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">13</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">14</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">15</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">16</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">17</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">18</div></div>

      <!-- Row 4: gap days 19–25 -->
      <div class="cal-cell gap-day"><div class="cal-num">19</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">20</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">21</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">22</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">23</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">24</div></div>
      <div class="cal-cell gap-day"><div class="cal-num">25</div></div>

      <!-- Row 5 -->
      <!-- May 26 — Trip Day 4 -->
      <div class="cal-cell trip-day" data-day="day4" onclick="selectDay('day4')">
        <div class="cal-num">26</div>
        <div class="cal-day-name">Mon</div>
        <div class="cal-dots">
          <div class="cal-dot" style="background:var(--accom)"></div>
          <div class="cal-dot" style="background:var(--arch)"></div>
          <div class="cal-dot" style="background:var(--sight)"></div>
          <div class="cal-dot" style="background:var(--volley)"></div>
          <div class="cal-dot" style="background:var(--food)"></div>
        </div>
      </div>
      <!-- May 27 — Trip Day 5, Last day -->
      <div class="cal-cell trip-day" data-day="day5" onclick="selectDay('day5')">
        <div class="cal-num">27</div>
        <div class="cal-day-name">Tue</div>
        <div class="cal-dots">
          <div class="cal-dot" style="background:var(--arch)"></div>
          <div class="cal-dot" style="background:var(--sight)"></div>
          <div class="cal-dot" style="background:var(--food)"></div>
          <div class="cal-dot" style="background:var(--anime)"></div>
          <div class="cal-dot" style="background:var(--volley)"></div>
        </div>
      </div>
      <!-- Regular non-trip May days -->
      <div class="cal-cell regular"><div class="cal-num">28</div></div>
      <div class="cal-cell regular"><div class="cal-num">29</div></div>
      <div class="cal-cell regular"><div class="cal-num">30</div></div>
      <div class="cal-cell regular"><div class="cal-num">31</div></div>
      <div class="cal-cell empty"><div class="cal-num"></div></div>
    </div>

    <div class="cal-footer">
      <div class="cal-footer-swatch"></div>
      <span>May 7–25 · Kumano Kodo &amp; other destinations</span>
    </div>
  </div>

  <!-- ── Detail panel (populated by JS) ── -->
  <div class="detail-outer" id="detail-outer" style="display:none">
    <div class="detail-panel" id="detail-panel">
      <div class="detail-header" id="detail-header"></div>
      <div id="detail-body"></div>
    </div>
  </div>

</div><!-- /content -->


<!-- ══════════════ Day content templates ══════════════ -->

<div id="tpl-day1" style="display:none">
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

<div id="tpl-day2" style="display:none">
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

<div id="tpl-day3" style="display:none">
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

<div id="tpl-day4" style="display:none">
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

<div id="tpl-day5" style="display:none">
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


<script>
  const META = {
    day1: {
      dateNum: '4', dateMo: 'May',
      title: 'Day 1 — Arrival + Ikebukuro',
      sub: 'Sunday · Check in, explore Ikebukuro, karaoke',
      badge: 'holiday', badgeText: 'Golden Week', holiday: true
    },
    day2: {
      dateNum: '5', dateMo: 'May',
      title: 'Day 2 — Shinjuku + Harajuku',
      sub: "Monday · Children's Day · Start early",
      badge: 'holiday', badgeText: 'Golden Week', holiday: true
    },
    day3: {
      dateNum: '6', dateMo: 'May',
      title: 'Day 3 — Omotesando + Shibuya',
      sub: 'Tuesday · Regular weekday · Best day for sightseeing',
      badge: null, holiday: false
    },
    day4: {
      dateNum: '26', dateMo: 'May',
      title: 'Day 4 — Asakusa + Ginza',
      sub: 'Monday · Check-in day · East Tokyo loop',
      badge: null, holiday: false
    },
    day5: {
      dateNum: '27', dateMo: 'May',
      title: 'Day 5 — Roppongi + Tokyo Tower',
      sub: 'Tuesday · Architecture morning · Choose your afternoon',
      badge: 'last', badgeText: 'Last day', holiday: false
    }
  };

  let current = null;

  function selectDay(id) {
    const panel  = document.getElementById('detail-panel');
    const outer  = document.getElementById('detail-outer');

    // Deselect all cells
    document.querySelectorAll('.cal-cell.trip-day').forEach(c => c.classList.remove('selected'));

    if (current === id) {
      // Toggle off
      panel.classList.remove('open');
      setTimeout(() => { outer.style.display = 'none'; }, 260);
      current = null;
      return;
    }

    current = id;
    document.querySelector(`[data-day="${id}"]`).classList.add('selected');

    const m = META[id];

    // Build header
    document.getElementById('detail-header').innerHTML =
      `<div class="detail-date-box${m.holiday ? ' holiday' : ''}">
        <span class="detail-date-num">${m.dateNum}</span>
        <span class="detail-date-mo">${m.dateMo}</span>
      </div>
      <div class="detail-title-area">
        <div class="detail-title">
          ${m.title}
          ${m.badge ? `<span class="badge ${m.badge}">${m.badgeText}</span>` : ''}
        </div>
        <div class="detail-sub">${m.sub}</div>
      </div>
      <button class="detail-close" onclick="selectDay('${id}')">✕</button>`;

    // Populate body
    document.getElementById('detail-body').innerHTML =
      document.getElementById(`tpl-${id}`).innerHTML;

    // Show with animation
    outer.style.display = 'block';
    panel.classList.remove('open');

    requestAnimationFrame(() => requestAnimationFrame(() => {
      panel.classList.add('open');
      setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'center' }), 40);
    }));
  }
</script>

</body>
</html>
