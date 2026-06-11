---
name: mxa-design
description: Use this skill to generate well-branded interfaces and assets for MXA, the Uruguayan tax/accounting/legal/notary consultancy, either for production or throwaway prototypes/mocks/proposals. Contains essential design guidelines, colors, type, fonts, assets, and the proposal-document UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (proposals, slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view. If working on production code, copy assets and read the rules in `readme.md` to become an expert in designing with the MXA brand.

Key facts:
- **Brand:** MXA — *consultora fiscal, contable y tributaria* in Montevideo, Uruguay, serving all of Latin America. Tagline "Tax · Accounting · Legal · Notary".
- **Flagship artifact:** the A4 portrait client **proposal** (`ui_kits/proposal/`). Use `templates/proposal/` as a ready starting scaffold.
- **Fonts:** Ubuntu (Bold for display/headings) + Roboto (body). Exact matches on Google Fonts.
- **Palette:** ink `#080C11`, cream paper `#FAF6F1`, beige `#F3F0E2`, taupe accent `#C9B8A7`, logo blue `#7ABBE5`. Warm, editorial, no gradients.
- **Voice:** formal Rioplatense Spanish, usted, third-person ("MXA"), no emoji, precise and courteous.
- **Components:** link `styles.css`, load `_ds_bundle.js`, read from `window.MXADesignSystem_5dc0a4` — `Button`, `IconButton`, `Badge`, `Card`, `Divider`, `SectionLabel`, `DocFooter`, `DataTable`, `ClauseList`, `SignatureBlock`.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
