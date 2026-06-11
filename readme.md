# MXA — Design System

**MXA** is a tax, accounting, legal and notary consultancy (*consultora fiscal, contable y tributaria*) based in **Montevideo, Uruguay**, serving clients across **Latin America**. Their work is precise, advisory and regulated: tax-regime analysis (IRAE, IRPF), fiscal-residency certificates, optimization studies, and the formal proposals/contracts that frame those engagements.

Tagline used on the cover lockup: **Tax · Accounting · Legal · Notary**.
Contact block that appears on every document footer:
`mxa.com.uy · Bvr. Gral. Artigas 417 piso 7, Punta Carretas · Montevideo, Uruguay · (+598) 2712 6550`

This is primarily a **document/brand** system, not an app. The flagship artifact is the **client proposal** — an **A4 portrait** PDF with a dark cover, cream body pages, a fee table, and a multi-page terms-and-conditions annex.

## Sources reviewed
- `uploads/logo-vector.svg` — primary "mxa" wordmark (charcoal with a blue diagonal accent through the X).
- `uploads/logo-vector-blanco.svg` — reversed/white wordmark for dark backgrounds.
- `uploads/Autod_SRL_-_Propuesta_servicios_de_consultora_05.2026.pptx` — 10-page service proposal (Autodata S.R.L.).
- `uploads/Propuesta_MXA_Professional_SERVICES-_Asesoramiento_en_la_obtencin_de_un_certificado_de_residencia_fiscal..pptx` — 9-page residency-certificate proposal.

Both proposals are authored in PowerPoint but sized to **A4 portrait** (≈794×1123px @96dpi) — they are documents, not 16:9 decks. Fonts and colors below were extracted directly from those files.

---

## CONTENT FUNDAMENTALS

**Language.** Primary language is **Spanish (Rioplatense / Uruguayan)**. The brand-name lockup tagline is in English ("Tax · Accounting · Legal · Notary"), reflecting the LATAM-wide, international-facing positioning. Write client-facing copy in formal Spanish; English appears only in short brand/positioning fragments.

**Register & person.** Formal, third-person institutional voice. The firm refers to itself as **"MXA"** or **"nuestro equipo"** (never "I"). The client is addressed with the formal **usted/ustedes** ("tenemos el agrado de dirigirnos a usted", "quedamos a vuestra disposición"). Letters open with **"Estimados,"** and close with **"Saluda a usted muy atentamente,"** followed by a named signatory and email (e.g. *Nicolás May — nmay@mxa.com.uy*).

**Tone.** Courteous, exact, and quietly confident. Gratitude is expressed plainly ("MXA agradece la confianza depositada en nuestro equipo"). Obligations are hedged with professional precision — engagements are framed as an **"obligación de medios y no de resultados"** (best-efforts, not guaranteed-outcome).

**Structure & casing.** Documents are organized into clearly labelled capitalised sections: **ANTECEDENTES**, **ALCANCE DE LOS SERVICIOS**, **HONORARIOS PROFESIONALES**, **ANEXO**. Sub-blocks use sentence-case titles ("Etapa 1: Diagnóstico…", "Entregable"). Terms are numbered `1) 2) 3) …`. Legal references are cited formally and in full ("Ley N° 16.906", "literal s) del artículo 66 del Título 4 del T.O. 2023").

**Numbers & money.** Fees in **US dollars**, written `USD 2.000` (period thousands separator, Latin convention). Percentages inline ("10% de la eficiencia fiscal"). Thresholds in local units ("4.000.000 UI"). Dates spelled long-form ("a los ___ días del mes de marzo de 2026").

**No emoji, ever.** No exclamation marks, no marketing hype, no casual contractions. The vibe is a serious professional-services firm: restrained, literate, trustworthy.

---

## VISUAL FOUNDATIONS

**Palette.** Warm and editorial — *paper, ink, taupe*, with one cool accent.
- **Ink `#080C11`** — near-black; cover/section backgrounds and strong headings.
- **Charcoal `#282828`** — the logo's dark and body text on light surfaces.
- **Cream `#FAF6F1`** — the primary page surface ("paper").
- **Beige `#F3F0E2`** — secondary surface / sunken panels.
- **Taupe `#C9B8A7`** — the signature accent: uppercase section labels, hairline rules, small marks. Used sparingly and never for body text.
- **Logo blue `#7ABBE5`** (with darker `#4F87AD` for legibility on cream) — the diagonal accent stroke in the wordmark's X; used only as a tiny brand spark, not as a UI primary.

Backgrounds are **flat color** — cream paper or ink. **No gradients, no photography, no textures.** The only recurring graphic is a thin **line-art globe** motif (network of meridians) signalling LATAM/global reach.

**Type.** **Ubuntu** (geometric humanist sans, used at **Bold 700**) for display, cover titles and headings; **Roboto** for body, tables and UI. Cover titles are large Ubuntu Bold with tight tracking ("Propuesta de servicios"). Section labels are taupe, uppercase, with wide letter-spacing. Body runs ~10–12pt Roboto at relaxed leading for dense legal text.

**Layout.** Document-led grid: generous A4 margins (~64–72px), a single column of body text, a persistent footer rule + contact line on every page, and a small page-corner mark. Composition is calm and asymmetric — content left-aligned, lots of breathing room, never centered marketing layouts.

**Corners & borders.** Crisp. The brand leans on **sharp edges and hairline rules** (taupe or sand `#E4DACE`) rather than rounded cards. Interactive UI chrome (buttons, inputs) may take a small `3–6px` radius, but document furniture stays square. Borders are 1px; emphasis rules are 2px ink.

**Shadows.** Quiet and warm-neutral, never blue-tinted. Used only to lift true cards/dialogs off the page (`0 6px 18px rgba(8,12,17,.10)`). Document pages get a soft drop shadow to read as paper.

**Motion.** Reserved and professional. Short fades and small transl(120–360ms) on `cubic-bezier(0.2,0,0,1)`. No bounces, no parallax, no infinite loops.

**Hover / press.** Hover darkens fills slightly or shifts to ink; ghost/secondary controls fill faintly with taupe/cream. Press nudges down ~1px and deepens color — no aggressive scale. Focus shows a 2px ink (or blue) outline offset for accessibility.

**Transparency & blur.** Essentially unused. The aesthetic is opaque, printed, archival — blur would feel off-brand.

---

## ICONOGRAPHY

MXA's source documents are **nearly icon-free** — the design relies on typography, rules, and whitespace, not iconography. The only bespoke graphic is the **line-art globe** (`assets/brand/globe-motif.png`): thin navy meridians forming a wireframe sphere, used as a single quiet motif for "LATAM / international reach." There is **no icon font, no emoji, and no decorative illustration set** in the brand materials.

For UI surfaces that genuinely need icons (forms, tables, app chrome), use **[Lucide](https://lucide.dev)** from CDN — thin, geometric, 1.5–2px stroke, which matches the globe motif's line weight and the wordmark's even strokes. **This is a substitution flagged for the user** (MXA ships no icon library of its own). Keep icons monochrome (ink / charcoal / taupe), never multicolor or filled.

---

## VISUAL ASSETS (`assets/`)
- `logos/mxa-logo.svg` — primary wordmark (charcoal + blue X accent), use on light surfaces.
- `logos/mxa-logo-white.svg` / `mxa-logo-white.png` — reversed wordmark for ink backgrounds.
- `logos/mxa-logo-dark.png` — solid dark wordmark (raster).
- `brand/globe-motif.png` — line-art globe, the LATAM/reach motif.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (import this one file). Imports all tokens + fonts.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper.

**Tokens** (`tokens/`)
- `colors.css` · `typography.css` · `spacing.css` · `fonts.css`

**Foundations** (`foundations/`) — specimen cards for the Design System tab (colors, type, spacing, brand).

**Components** (`components/`)
- `core/` — `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Divider`
- `document/` — `SectionLabel`, `DocFooter`, `DataTable`, `SignatureBlock`, `ClauseList`

**UI kits** (`ui_kits/`)
- `proposal/` — the flagship A4 proposal document (cover, antecedents, scope, fees, terms annex).

**Sample document pages** (`templates/` & foundation cards under "Document").

> Fonts (Ubuntu, Roboto, Roboto Mono) are exact matches served from Google Fonts — **no substitution needed**. The only flagged substitution is the **icon set (Lucide via CDN)**, since MXA ships none of its own.
