# Complete DoggMatch localization review

## Goal
Bring every public DoggMatch page to complete, natural localization in Norwegian, Danish, Swedish, Finnish, German, French, Dutch, and Polish, using current English content as the source of truth. Preserve the existing design, page structure, matching logic, and functionality.

## Work plan

1. **Build a complete translation inventory**
   - Map every route, shared component, metadata block, data library, form state, error state, and printable document.
   - Detect explicit English fallbacks, missing locale keys, partially translated arrays, English labels embedded in page files, and incomplete breed/editorial records.
   - Track coverage by language and product area so no route is skipped.

2. **Complete shared and high-traffic language layers first**
   - Finish global navigation, footer, buttons, forms, loading/error states, sharing, account/auth, matching explanations, comparison labels, and reusable care/training controls.
   - Correct wording that is technically translated but unnatural, overly literal, inconsistent, or outside DoggMatch’s warm and honest voice.

3. **Complete product-area content**
   - Homepage and Find My Dog, including results and post-match journey.
   - Breed library, all editorial breed profiles, comparison, mixed-breed support, costs, FAQs, and onward links.
   - Guide hub and every lifestyle guide.
   - DoggMatch+, Partners, membership/account flows, and benefit explanations.
   - Training categories, plans, journeys, and every lesson.
   - My Dog, care, health, food, weight, calendar, contacts, vet notes, and printable Dog Pack.
   - Get a Dog, Travel, Dog Life, food-safety pages, brochure, and remaining supporting pages.
   - About, Sources, Contact, Privacy, Terms, checkout, verification, and all other existing routes.

4. **Complete localized discovery text**
   - Translate each page’s title, description, Open Graph text, structured-data text, headings, image alt text, and share labels.
   - Keep canonical and language-link behavior unchanged.

5. **Native-language quality pass**
   - Review each language as a whole for terminology, pronouns, punctuation, currency/unit wording, and cultural naturalness.
   - Keep the meaning and safety/legal accuracy of the English source while rewriting idiomatically rather than literally.
   - Preserve breed names where local convention uses the established international name.

6. **Verification**
   - Run automated parity checks for keys, array lengths, lesson/category IDs, breed coverage, and remaining English source phrases.
   - Visit every generated locale route and check successful rendering, page language, and obvious mixed-language output.
   - Check representative desktop and mobile pages in each major product area.
   - Confirm the final build and runtime logs are clean.

## Technical details

- Expand existing locale maps and localized data modules; do not change route structure or visual components.
- Remove runtime English fallback usage only after the corresponding localized content exists.
- Keep English as the canonical source and retain stable IDs, ordering, links, deterministic scores, prices, and legal meaning.
- Use automated source scans as a safety net, followed by contextual review because names and technical terms can legitimately remain English.
- Work language-by-language through shared content, then route-specific content, to avoid inconsistent terminology.

## Completion standard

A language is complete only when every public route renders without unintended English, all source content has a localized equivalent, shared controls are localized, metadata is localized, and wording is consistent with DoggMatch’s calm, personal voice.
