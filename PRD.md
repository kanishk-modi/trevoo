# Product Requirements Document (PRD)
## Trevoo — High-Fidelity Cultural Travel Planning Platform

---

### 1. Product Overview & Problem Statement

#### 1.1 Executive Summary
Trevoo is an intelligent, editorial-grade travel planning platform engineered for discerning travelers exploring the Indian subcontinent. Unlike conventional mass-market online travel agencies (OTAs) that overwhelm users with uncurated lists of hundreds of commercial hotels, generic attractions, and disjointed transport logistics, Trevoo operates on the principles of **Active Curation**, **Mathematical Logistics**, and **Atmospheric Pacing**.

The platform guides travelers through an 8-stage interactive monograph: transforming ambiguous travel aspirations into a reality-locked, zero-backtracking, multi-day master dossier complete with verified heritage havelis, private docent access, real-time microclimate alignment, and dedicated trip retainers.

#### 1.2 The Problem Statement
1. **The Paradox of Choice in Cultural Tourism**: India's architectural landscape contains thousands of historic forts, stepwells, and living sanctuaries. Mainstream booking engines treat a 16th-century palace the same as an airport transit hotel, leading to cognitive exhaustion and generic tourist-trap itineraries.
2. **Ignorance of Microclimates and Festivals**: Travel decisions are often ruined by local climatic factors (e.g., peak afternoon dry-heat, high monsoon humidity, post-harvest agricultural smoke) or missed cultural phenomena (e.g., Diwali in Varanasi, Pushkar camel fair, early morning bird migrations).
3. **The Backtracking & Exhaustion Trap**: Most self-planned multi-city itineraries suffer from geometric inefficiency—forcing travelers into 6–8 hours of daily transit, noon-sun exhaustion at open-air sandstone citadels, and zero built-in recovery buffers.
4. **Disconnected Planning and Execution**: A wide gap exists between aspirational visual inspiration (Pinterest/Instagram) and executable logistics (chauffeur routing, closed-door museum permissions, dietary accommodations).

#### 1.3 Value Proposition
* **Zero-Backtracking Route Synthesis**: Topological routing algorithms guarantee smooth vector progression between geographical waypoints with 0% logistical backtracking.
* **Pacing & Thermal Comfort Modeling**: Real-time integration of sunlight vectors, temperature peaks, and crowd density algorithms guarantees a protected 2.5–3.8 hour afternoon rest window.
* **Proprietary Geography**: Rigorous footfall filtering removes commercial tour-bus stops in favor of vetted sanctuary havelis, private textile guilds, and secret stepwells.
* **Executive Master Dossier**: Generates a shareable, print-ready, unlisted dossier (`TRV-YYYY-XXXX`) ready for execution by high-end chauffeurs and concierge teams.

---

### 2. Core User Personas & Primary User Journeys

#### 2.1 Target User Personas

| Dimension | Persona 1: The Discerning Heritage Seeker | Persona 2: The Strategic Professional Planner | Persona 3: Multi-Generational Family Curators |
| :--- | :--- | :--- | :--- |
| **Demographics** | Culturally curious couples, 30–55 yrs | Solo / Duo Tech & Finance Execs, 26–42 yrs | Extended families (parents, kids, elders), 32–60 yrs |
| **Primary Motivation** | Authentic architectural immersion, private docent access, historic havelis | Maximizing gazetted holidays/long weekends with zero administrative friction | Safe transit, spacious havelis, strict dietary purity (Sattvic/Jain/Pure Veg), slow pace |
| **Key Frustration** | Tourist bus crowds, commercialized itineraries, mediocre food | Fragmented booking steps, wasting PTO days, unreliable transit estimates | High physical strain on elderly members, unhygienic kitchens, erratic schedules |
| **Budget Aperture** | ₹35k – ₹75k / person / day (Palace Wings) | ₹15k – ₹35k / person / day (Heritage Havelis) | ₹15k – ₹35k or ₹75k+ / day (Royal Enclaves) |
| **Preferred Pacing** | Balanced (4–5 sites/day, 40% buffer) | Balanced to Packed (optimizing short window) | Relaxed (2–3 sites/day, 65% buffer) |

#### 2.2 Primary End-to-End User Journey (The 8-Stage Stitch Sequence)

```mermaid
journey
    title The Trevoo 8-Stage User Journey
    section Stage 01: Prologue
      Watch Cinematic Hook: 5: User
      Lookup Dossier ID: 4: User
      Select Subcontinent Pillar: 5: User
    section Stage 02: Exploration
      Browse Seasonal Curations: 5: User
      Review Hidden Gems: 5: User
      Inspect Weather/AQI Telemetry: 4: User
    section Stage 03: Calendar Logistics
      Select Month & Year: 4: User
      Evaluate Long Weekend PTO Hack: 5: User
      Lock Date Window: 5: User
    section Stage 04: Constraints
      Select Party Configuration: 5: User
      Set Pacing & Buffer Ratio: 5: User
      Define Budget & Dietary Ethos: 5: User
      Select Passion Inclinations: 4: User
    section Stage 05: Active Synthesis
      Observe Multi-Tier Haveli Vetting: 5: User
      Track Live GIS Topology: 5: User
      Read Architectural Fragments: 4: User
    section Stage 06: Archetypes
      Review Ranked Recommendation: 5: User
      Compare Alternative Routes: 4: User
      Audit Pacing & Calculus: 5: User
    section Stage 07: Timeline Builder
      Inspect Chronological Stops: 5: User
      Drag & Drop Reorder Nodes: 4: User
      Verify Physics & Transit Ribbon: 5: User
    section Stage 08: Master Dossier
      Review Reality-Locked Itinerary: 5: User
      Share via WhatsApp / QR: 5: User
      Download Offline PDF: 5: User
      Submit Concierge Waitlist: 4: User
```

---

### 3. Key Feature Breakdown by Stage & Screen

#### 3.1 Screen 01: The Cinematic Hook (`index.html`)
* **Module Description**: Establishes brand gravitas, stoic architectural tone, and emotional resonance through full-bleed visuals, micro-interactions, and fast-lookup access.
* **Functional Requirements**:
  1. **Cinematic Hero**: Full-viewport ambient background, soundscape toggle (`Ambient Soundscape: On/Off`), and fast return navigation (`Fast Return: 1.0s Enabled`).
  2. **Dossier Quick-Lookup**: Input field supporting reference code pattern `TRV-YYYY-XXXX` with instantaneous cryptographic validation.
  3. **The Three Subcontinent Pillars**:
     * Pillar I: *High Altitude Sanctuaries* (Ladakh, Ooty colonial estates).
     * Pillar II: *Royal Heritage Bastions* (Mewar courtyards, Rajput forts, Chettinad mansions).
     * Pillar III: *Coastal & Riverine Drift* (Kerala solar-powered houseboats, Konkan villas).
  4. **Trip Simulator / Destination Launcher**: Direct selection pills for popular autumn corridors (Rajasthan Forts 32°C, Kerala Backwaters 29°C, Kashmir Autumn Chinar 18°C).
* **Validation Rules & Edge Cases**:
  * *Invalid Dossier Format*: Displays an inline warning if regex `^TRV-\d{4}-[A-Z0-9]{4}$` fails.
  * *Audio Autoplay Restrictions*: Respects browser autoplay policies; defaults soundscape to Mute with visible toggle.

#### 3.2 Screen 02: Visual Curation Explore (`S2_Explore.html`)
* **Module Description**: Editorial discovery feed organizing destinations by meteorological alignments, seasonal viability, and proprietary off-trail geography.
* **Functional Requirements**:
  1. **Season Dispatch Capsule**: Live seasonal dispatch indicator (e.g., `Current Season • Autumn 2026 Golden Hour / Live Dispatch 04`).
  2. **Best Places This Season Carousel**: 4 primary curated circuits with high-resolution visual anchors:
     * *Rajasthan Royal Circuits* (Sandstone architecture, desert havelis).
     * *Western Ghats Mist Retreat* (Rainforest canopy retreats).
     * *Varanasi Dev Deepawali* (One million earthen river lamps).
     * *Andaman Reef & Canopy* (Marine biodiversity).
  3. **Meteorological Alignments**: Live AQI safety scanner, temperature range projections, and rainfall probability telemetry.
  4. **Hidden Gems (Trevoo Proprietary Geography)**: Footfall-filtered cards (Ziro Valley, Hampi Coracles, Spiti Monasteries) showing elevation, transit mode, and peak sun window.
* **Validation Rules & Edge Cases**:
  * *Extreme Weather / AQI Warnings*: When AQI > 250 or rain probability > 60%, the card displays an amber badge advising alternate dates.

#### 3.3 Screen 03: Proactive Calendar Logistics (`S3_DateSelection.html`)
* **Module Description**: Mathematical calendar engine that detects gazetted holidays, long weekend PTO hacks, and cultural festival alignments.
* **Functional Requirements**:
  1. **Interactive Visual Calendar**: Month/Quarter view navigation (e.g., `October 2026 Q4 / Wave A`), multi-day range selection, departure/return badges.
  2. **Smart Opportunity Detection**: Real-time detection of public holidays (e.g., Gandhi Jayanti Friday Oct 02) calculating optimal PTO leave utilization (e.g., "1 Day PTO unlocks a 4-day golden-hour itinerary").
  3. **Cultural Alignment Sensor**: Highlights regional festivals overlapping with the selected date window (e.g., Diwali & Dev Deepawali Wave Oct 29 – Nov 03).
  4. **Telemetry Dashboard**:
     * *Clear Sky %*: Mathematical projection of cloudless days (e.g., 94%).
     * *Foliage Density*: Seasonal foliage status (Peak / Early / Late).
     * *Crowd Density*: Footfall estimation (Low / Med / High).
  5. **Quick Shift Controls**: Quick shift $\pm 2$ days to jump into cheaper or less crowded departure windows.
* **Validation Rules & Edge Cases**:
  * *Past Date Selection*: Strictly disabled. Minimum booking lead time: 48 hours.
  * *Minimum / Maximum Duration*: Minimum trip duration is 2 days; maximum is 21 days per dossier.
  * *Missing Destination*: If no destination is specified, defaults to "Let AI Propose Based on Climate".

#### 3.4 Screen 04: Taste Architecture & Constraints (`S4_Preferences.html`)
* **Module Description**: Zero-friction constraint formulation capturing party size, daily choreographic rhythm, expenditure aperture, and dietary needs.
* **Functional Requirements**:
  1. **Party Composition**: Single-tap selectors for `Solo`, `Couple` (default), `Family with kids`, `Friends group`. Automatically adjusts room and transport allocations.
  2. **Travel Pace & Daily Choreography**:
     * *Relaxed*: 2–3 sites/day, 65% rest buffer, long terrace breakfasts.
     * *Balanced*: 4–5 sites/day, 40% rest buffer, protected afternoon siesta (Recommended default).
     * *Packed*: 6+ sites/day, 15% buffer, dawn-to-dusk cultural immersion.
  3. **Expenditure Aperture (Per Person / Day)**:
     * `< ₹15k`: Mindful Escapes (Boutique heritage character stays).
     * `₹15k – ₹35k`: Heritage Havelis (Private chauffeur, verified havelis, local docents).
     * `₹35k – ₹75k`: Palace Wings (Resident historians, royal haveli wings, spa treatments).
     * `₹75k+`: Royal Enclaves (Charter flights, private reserves, bespoke palace buyouts).
  4. **Culinary Specification & Dietary Ethos**:
     * `Pure Veg`: Sattvic & dedicated pure vegetarian kitchens.
     * `Veg + Eggs`: Artisan breakfast curations, vegetarian main dining.
     * `Non-Veg`: Regional game, coastal marinades, slow-cooked heritage curations.
     * `No Preference`: Chef tasting menus.
  5. **Atmospheric & Passion Chips**: Multi-select pills: *Living Architecture*, *Ancient Astronomy*, *Textile Guilds*, *High-Altitude Tea Estates*, *Culinary Heritage*, *Wildlife & Coracle Safaris*, *Slow Photography*.
  6. **Live Calibration Matrix**: Sticky telemetry sidebar showing active locked parameters (e.g. `4/4 Locked`) and matched preview sanctuary.
* **Validation Rules & Edge Cases**:
  * *Constraint Conflicts*: If party is `Family with kids` and pace is `Packed`, system shows a gentle advisory: "High physical strain projected for younger travelers."

#### 3.5 Screen 05: The Psychology of Active Waiting (`S5_ActiveWaiting.html`)
* **Module Description**: Perceptual synthesis screen that transforms 2–4 seconds of async algorithmic computation into an engaging proof-of-work experience.
* **Functional Requirements**:
  1. **Synthesis Velocity Telemetry**: Live progress bar (0% $\to$ 100%), elapsed counter (e.g., `00:03.9s elapsed`), target havelis tally.
  2. **Multi-Stage Vetting Pipeline**:
     * *Stage 01 (Complete)*: Sanctuary Vetting (Filters 300+ properties; confirms Tier-1 heritage authenticity).
     * *Stage 02 (Active)*: Transit Ribbon & Buffers (Paces daily halts, ensures zero backtracking, locks afternoon shaded reprieves).
     * *Stage 03 (Queued)*: Unlocking Secret Stepwells (Secures access to private collections and artisan studios).
  3. **Live Spatial Mesh**: Vector topology map connecting route waypoints (e.g., Udaipur $\to$ Jodhpur $\to$ Nimaj $\to$ Jaipur) with radial sightline calculations (e.g., "Mehrangarh Sunset: 17:42").
  4. **Distraction & Wonder Mechanic**: Architectural trivia carousel (e.g., "Jaisalmer Fort is one of the world's last living forts...").
* **Validation Rules & Edge Cases**:
  * *Async Timeout Fallback*: If API calculation exceeds 6.0s, falls back to deterministic pre-computed archetype matrix without throwing a user-facing error.

#### 3.6 Screen 06: Result Hierarchy & Trust Building (`S6_Results.html`)
* **Module Description**: Presents three tailored route archetypes ranked by cadence match percentage with complete transparency into why each route was chosen.
* **Functional Requirements**:
  1. **Primary Recommendation (Rank #1)**:
     * Card banner: `98% Cadence Match • Match Rank #1`.
     * Title & Archetype: E.g., "Udaipur & The Aravalli Escarpment — Royal Water & Craft Guilds".
     * Key Metrics: Seasonality score (4.9/5.0), Crowd index (Low), Estimated daily cost (₹28.5k/d), Transit time (3.5h total).
     * Curated Daily Exclusives: Sunrise sanctuary wooden boat float, closed-door Crystal Gallery tour, 17th-century vegetable dye atelier.
     * Availability indicator: "2 Haveli Suites Left".
     * Primary CTA: "Plan This Trip (Open Builder) ->".
  2. **Alternative Archetypes**:
     * Archetype 2: *Desert Stargazing* (The Blue City & Thar Dunes, 92% match).
     * Archetype 3: *Living Architecture* (Jaipur & Shekhawati Frescoes, 89% match).
  3. **Transparent Recommendation Calculus**: Explains ranking drivers (e.g., "Departure coincides with pre-Diwali calm, 45% afternoon buffer maintained, 0% backtracking").
  4. **Pacing Fidelity Breakdown**: Backtrack Ratio (0.00%), Rest Window (3.8 hrs/afternoon), Daily Physical Strain (Low/Optimal).
* **Validation Rules & Edge Cases**:
  * *Room Inventory Depletion*: If inventory hits 0, badge swaps to "Waitlist Only" and selects next closest haveli sanctuary.

#### 3.7 Screen 07: Constrained Itinerary Builder (`S7_Builder.html`)
* **Module Description**: Time-budgeted interactive drag-and-drop schedule builder that enforces physical feasibility and prevents burnout.
* **Functional Requirements**:
  1. **Day Schedule Capacity Bar**: Dynamic meter showing allocated time vs. max feasible time (e.g., `6.5 hrs / 8.0 hrs Max Feasible • Optimal Pace`).
  2. **Chronological Stop Architecture**: Cards showing Stop #, Category, Title, Description, Timing window, and transit tags.
  3. **Transit Ribbon Indicators**: Inter-stop cards calculating travel time and mode (e.g., "Heritage Corridor • 25 mins Low Traffic • Live GPS Calibrated", "Foot Transit • 15 mins Shaded Alley").
  4. **Physics & Route Reality Engine**:
     * Validates transit buffers in real time.
     * Badges: `Zero Impossible Gaps • Validated`.
  5. **Nearby Pacing-Aware Additions**: Suggested stops that fit remaining day capacity (e.g., Jantar Mantar +1.0 hr; Nahargarh Fort +2.5 hrs with warning: "Pushes pace to 92%").
  6. **Interactive Actions**: Drag nodes to reorder, remove stop, add curated site, reset day order, auto-save state.
* **Validation Rules & Edge Cases**:
  * *Capacity Overload Constraint*: If stops exceed 8.5 total hours, capacity bar turns amber/red, displaying: "Schedule Overburdened: Transit risk high. Consider removing 1 stop."
  * *Chronological Conflict*: Prevents scheduling two stops with overlapping time windows.

#### 3.8 Screen 08: Final Master Dossier (`S8_FinalItinerary.html`)
* **Module Description**: Production-grade travel monograph providing complete day-by-day itineraries, concierge handover, and viral sharing tools.
* **Functional Requirements**:
  1. **Monograph Header**: Reference Code (e.g., `CONFIRMED DOSSIER TRV-8842`), Duration, Dates, Title, Verified Badges (0% Backtracking, Reality-Locked).
  2. **Day-by-Day Master Schedule**:
     * Stage 01: Arrival, Pichola waterways, Chhatra Sagar haveli wing, sunset boat transfer, candlelit terrace dinner.
     * Stage 02: Sun Gate morning entry, private docent textile vault, Anokhi courtyard lunch, Panna Meena stepwell.
     * Stage 03: Aravalli escarpment, Mercedes E-Class chauffeur, Omendra Rathore.
  3. **Viral Share & Companion Link**:
     * Unlisted read-only companion link: `trevoo.com/dossier/udaipur-oct26-8842`.
     * Native WhatsApp sharing button with formatted trip summary text.
     * Dynamic QR code modal for mobile transfer.
  4. **Assigned Trip Retainers**: Dedicated chauffeur profile (Omendra Rathore, Rajasthan Tourism Board verified), On-call resident physician (Dr. S. K. Mehta, Geetanjali Medical College).
  5. **Concierge Booking Waitlist**: Email capture form for full booking execution with private docent permits and palace keys.
  6. **Print & Offline Export**: Optimized print CSS and downloadable offline emergency dial pack.
* **Validation Rules & Edge Cases**:
  * *Read-Only Companion View*: When accessed via shared link without owner session, edit buttons are hidden; companion can only view and export.

---

### 4. Non-Functional Requirements

#### 4.1 Performance & Core Web Vitals (CWV)
* **Largest Contentful Paint (LCP)**: $\le 1.2\text{s}$ on 4G mobile connections. Hero images must use WebP/AVIF formats with `fetchpriority="high"`.
* **Interaction to Next Paint (INP)**: $\le 100\text{ms}$ across all filter clicks, modal opens, and builder drag-and-drop operations.
* **Cumulative Layout Shift (CLS)**: $\le 0.02$. Explicit width and height attributes required on all cards and image containers.
* **Active Waiting Latency**: Screen 05 synthesis response must stream or resolve within $1.5\text{s} - 3.5\text{s}$.

#### 4.2 Accessibility (a11y)
* **Standard**: Full compliance with WCAG 2.1 Level AA standards.
* **Contrast Ratios**: Minimum 4.5:1 for body copy; 3:1 for large headers and interactive buttons.
* **Keyboard Navigation**: All interactive elements (calendar cells, preference chips, builder stop handles) must be navigable via `Tab`, `Space`, `Enter`, and Arrow keys with visible focus rings.
* **ARIA Roles**: Screen readers must announce status updates on Screen 05 (using `aria-live="polite"`), active calendar selections, and builder reordering actions.

#### 4.3 Security & Privacy
* **Dossier Token Security**: Dossiers are referenced by non-sequential UUIDs or secure alphanumeric hashes (`TRV-YYYY-XXXX`).
* **Transport Encryption**: 100% enforced HTTPS via TLS 1.3 with HSTS.
* **Data Sanitization**: All user inputs (names, emails, search queries) sanitized to prevent XSS, SQL injection, and prompt injection attacks into the LLM service layer.
* **Data Retention**: Unauthenticated draft itineraries expire from cache after 7 days; confirmed dossiers persist indefinitely.

#### 4.4 Responsiveness & Form Factor Adaptation
* **Breakpoints**:
  * Mobile: $390\text{px} - 640\text{px}$ (single-column fluid, $16\text{px}$ side margins, min $44\text{px}$ tap targets).
  * Tablet: $641\text{px} - 1024\text{px}$ (adaptive 2-column grids).
  * Desktop: $1025\text{px} - 1440\text{px}$ (12-column fixed grid, $1280\text{px}$ container max-width).
* **Cross-Browser Support**: Chrome, Safari (macOS & iOS), Firefox, Edge (latest 2 versions).

---

### 5. Success Metrics & Key Performance Indicators (KPIs)

| Metric Category | Specific KPI | Target Benchmark | Measurement Method |
| :--- | :--- | :--- | :--- |
| **Funnel Conversion** | S01 Landing $\to$ S03 Date Selection | $\ge 45\%$ | Analytics pageview funnel |
| **Preference Velocity** | Time spent completing S04 Preferences | $\le 45\text{ seconds}$ | Median session timer |
| **Synthesis Completion** | S04 Submit $\to$ S06 Recommendation View | $\ge 96\%$ | Low abandonment during S05 |
| **Builder Customization** | S06 $\to$ S07 Customization Engagement | $\ge 60\%$ of users interact with stops | Event triggers on drag/add/remove |
| **Dossier Generation** | S01 $\to$ S08 Full Flow Completion Rate | $\ge 32\%$ of inbound users | Unique session completion |
| **Viral Propagation** | Dossier WhatsApp Shares & Companion Views | $\ge 1.4$ companion views / dossier | Unique referrer traffic on shared URLs |
| **System Reliability** | Route Physics Validation Pass Rate | $100\%$ zero impossible transit gaps | Server telemetry exception logs |
| **Backend Latency** | P95 Itinerary Synthesis Latency | $\le 2.8\text{ seconds}$ | APM trace telemetry |

