# Operational Runbook & Agent Instructions (`CLAUDE.md`)
## Trevoo — Quick-Start Guide for Engineers & AI Agents

---

### 1. High-Priority Guardrails & Operational Commands

#### 1.1 CLI Commands Quick Sheet

```bash
# Development Server (Runs Next.js app or Express backend)
npm run dev           # Next.js 15 App Router dev server (http://localhost:3000)
npm run start         # Production server runner (node server.js)

# Quality Assurance & Testing
npm run test          # Execute Vitest / Jest unit & invariant tests
npm run test:watch    # Run tests in interactive watch mode
npm run lint          # Run ESLint + Prettier syntax audit
npm run type-check    # Run TypeScript compiler check (tsc --noEmit)

# Database & Schema (Prisma + PostGIS)
npx prisma generate   # Generate updated Prisma Client types
npx prisma migrate dev # Apply migration in local dev environment
npx prisma db seed    # Seed Indian cultural heritage & haveli knowledge graph
```

#### 1.2 Environment Variables Checklist (`.env`)

```ini
# Database & In-Memory Cache
DATABASE_URL="postgresql://trevoo_admin:secret@localhost:5432/trevoo_db?schema=public"
REDIS_URL="redis://default:token@localhost:6379"

# Google Gemini AI Integration (Required for Bespoke Synthesis)
GEMINI_API_KEY="AIzaSy..."

# Authentication & Session Security
NEXTAUTH_SECRET="f6c8d7e4b2a1..."
NEXTAUTH_URL="http://localhost:3000"
DOSSIER_CRYPTO_SALT="trevoo-subcontinent-salt-2026"

# Port & Network
PORT=3000
NODE_ENV="development"
```

---

### 2. Strict Do's and Don'ts

#### DO:
* **DO** prioritize deterministic fallbacks: Any Gemini AI call must have an immediate fallback to `services/itineraryService.js` curated data.
* **DO** maintain strict design token fidelity: Always match Stitch typography (`Epilogue`, `Cinzel`, `Plus Jakarta Sans`, `Inter`) and colors.
* **DO** preserve the 8-stage sequence: Screens 01 through 08 form an unbroken conceptual chain. Never break the handoff flow.
* **DO** ensure zero-backtracking: Verify that stops within a day follow continuous geographical vector progression.
* **DO** enforce minimum touch targets: Every button, chip, and slider must have a hit area of at least $44 \times 44\text{px}$ on mobile.

#### DO NOT:
* **DO NOT** commit API keys or credentials to version control.
* **DO NOT** use generic third-party hotel names (e.g., "Holiday Inn", "Marriott") in Trevoo mock data; only use authentic vetted heritage havelis (e.g., *Chhatra Sagar*, *Ambrai Haveli*, *Samode Palace*).
* **DO NOT** schedule outdoor architectural excursions between 1:00 PM and 3:45 PM in Rajasthan itineraries (violates thermal comfort invariant).
* **DO NOT** use TypeScript `any` under any circumstances.
* **DO NOT** write arbitrary hex codes in React components when configured Tailwind classes exist.

---

### 3. Git Commit & Branching Hygiene

#### 3.1 Branch Naming Conventions
* `feat/s03-calendar-pto-optimizer` (New features)
* `fix/s07-route-physics-overlap` (Bug fixes)
* `refactor/postgis-spatial-queries` (Performance / refactoring)
* `docs/architecture-prd-updates` (Documentation)

#### 3.2 Semantic Commit Format
Follow the conventional commits standard: `<type>(<scope>): <concise description>`

```bash
# Examples:
git commit -m "feat(s03): implement long weekend PTO opportunity calculator"
git commit -m "fix(s07): prevent daily schedule capacity from exceeding 8.0 hours"
git commit -m "perf(s05): optimize spatial GIS mesh render with requestAnimationFrame"
git commit -m "docs(prd): add dietary constraint matrix for Sattvic & Pure Veg"
```

---

### 4. Rapid Context Retrieval Cheat Sheet

When starting a new session on this repository, follow this 60-second orientation sequence:

1. **Understand the Core Flow**: Check the 8-stage pipeline table in [`PRD.md`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/PRD.md#L36).
2. **Review Tech Stack & Invariants**: Scan the 7 non-negotiable rules in [`architecture-essential.md`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/architecture-essential.md#L66).
3. **Inspect Existing UI Screens**:
   * S01: [`index.html`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/index.html)
   * S02: [`S2_Explore.html`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/S2_Explore.html)
   * S03: [`S3_DateSelection.html`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/S3_DateSelection.html)
   * S04: [`S4_Preferences.html`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/S4_Preferences.html)
   * S05: [`S5_ActiveWaiting.html`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/S5_ActiveWaiting.html)
   * S06: [`S6_Results.html`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/S6_Results.html)
   * S07: [`S7_Builder.html`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/S7_Builder.html)
   * S08: [`S8_FinalItinerary.html`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/S8_FinalItinerary.html)
4. **Inspect Backend Services**: Review [`services/itineraryService.js`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/services/itineraryService.js) and [`server.js`](file:///Users/kanishkmodi/Downloads/minor%20project%2040%/server.js).

