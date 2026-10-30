/**
 * Trevoo — Foundational Engineering Entrypoint
 * 
 * This file serves as the canonical application anchor and module registry
 * for the Trevoo Cultural Travel Planning Suite.
 * 
 * ARCHITECTURAL DOCUMENTATION SUITE:
 * - Product Requirements: ./PRD.md
 * - Comprehensive Architecture: ./architecture.md
 * - Essential Architecture: ./architecture-essential.md
 * - Autonomous Agent Guidelines: ./agents.md
 * - Operational Runbook: ./CLAUDE.md
 * 
 * TODO: Implement Next.js 15 App Router migration from raw HTML prototypes:
 * 1. Screen 01 (Cinematic Hook): src/app/page.tsx (from index.html)
 * 2. Screen 02 (Visual Explore): src/app/explore/page.tsx (from S2_Explore.html)
 * 3. Screen 03 (Calendar Engine): src/app/calendar/page.tsx (from S3_DateSelection.html)
 * 4. Screen 04 (Preferences): src/app/preferences/page.tsx (from S4_Preferences.html)
 * 5. Screen 05 (Active Waiting): src/app/synthesizing/page.tsx (from S5_ActiveWaiting.html)
 * 6. Screen 06 (Results): src/app/results/page.tsx (from S6_Results.html)
 * 7. Screen 07 (Builder): src/app/builder/page.tsx (from S7_Builder.html)
 * 8. Screen 08 (Final Dossier): src/app/dossier/[code]/page.tsx (from S8_FinalItinerary.html)
 */

export const APPLICATION_METADATA = {
  name: 'Trevoo',
  tagline: 'High-Fidelity Cultural Travel Planning Platform',
  version: '1.0.0',
  season: 'Autumn 2026 Golden Hour',
  targetRegion: 'Indian Subcontinent',
  invariants: [
    'ZERO_BACKTRACKING',
    'PROTECTED_AFTERNOON_THERMAL_REPRIEVE',
    'MAX_FEASIBLE_CAPACITY_8_HOURS',
    'DETERMINISTIC_AI_FALLBACK_GUARANTEE'
  ]
} as const;

export default APPLICATION_METADATA;

