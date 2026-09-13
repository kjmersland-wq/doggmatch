# Expand the breed library with 40 editorial profiles

## Goal
Grow DoggMatch from 28 to 68 breed profiles. English remains the source language. Every new profile will appear at the same path and with the same visual structure in all supported languages, falling back to English until translated copy is added.

## Breed set
Add these 40 high-interest breeds and mixes, with the three requested designer mixes first:

1. Labradoodle
2. Goldendoodle
3. Cavapoo
4. Cockapoo
5. Maltipoo
6. Bernedoodle
7. Great Dane
8. Dobermann
9. Great Pyrenees
10. Newfoundland
11. Cane Corso
12. Bullmastiff
13. English Bulldog
14. Boston Terrier
15. Pembroke Welsh Corgi
16. Belgian Malinois
17. Shetland Sheepdog
18. Australian Cattle Dog
19. Dalmatian
20. Weimaraner
21. English Springer Spaniel
22. Brittany
23. German Shorthaired Pointer
24. Havanese
25. Maltese
26. Pomeranian
27. Papillon
28. Akita
29. Basenji
30. Rhodesian Ridgeback
31. Basset Hound
32. Bloodhound
33. Italian Greyhound
34. West Highland White Terrier
35. Cairn Terrier
36. Airedale Terrier
37. Bull Terrier
38. Chinese Shar-Pei
39. Chow Chow
40. Portuguese Water Dog

The requested priority pure breeds already exist in the current 28-breed library. Their established pages and matching data will remain intact.

## Editorial content
For each new breed, add:
- A concise introduction covering origin and original purpose
- Honest strengths and everyday considerations
- A normal-day description derived from the same measurable traits used by matching
- Full 1–5 trait data for activity, training, sociability, home life, coat care, independence, family fit, and tolerance
- Realistic exercise, weekly time, grooming, space, annual cost, and lifespan information
- Balanced health notes without diagnosis or alarmist language
- A specific “Poor match if…” section with genuine hard limits
- A compact “Key trade-offs” section
- Similar breeds selected by the existing deterministic similarity logic

Designer mixes will clearly explain that coat, size, temperament, and health can vary by parent lines and are not guaranteed by the mix name.

## Visual presentation
- Preserve the current DoggMatch colors, typography, spacing, cards, trait bars, and responsive layout.
- Add one cohesive editorial portrait for every new breed so the pages, breed directory, comparison, and matching results do not show generic placeholders.
- Reuse each portrait across every language path; only copy changes by language.
- Add the two new editorial sections to the existing breed-page flow without redesigning the page.

## Language behavior
- Keep all new source copy in English.
- Update localized breed-content loading so existing translated profiles stay translated, while the 40 new profiles safely fall back to English on `/no`, `/pl`, `/dk`, `/se`, `/fi`, `/de`, `/fr`, and `/nl`.
- Preserve path-based locale URLs and never introduce language query parameters.

## Technical details
- Extend the stable breed ID union, breed records, traits, costs, origins, and lifespans.
- Extend the English editorial content schema with `originalPurpose`, `poorMatchFor`, and `keyTradeoffs`.
- Keep non-English content maps partial and merge them over the complete English source at read time.
- Register the new portraits in the existing breed image map.
- Let existing route generation, comparison, related-breed logic, sitemap, hreflang, and JSON-LD pick up all 40 records automatically.
- Preserve deterministic matching; no chatbot or generated-at-runtime claims.

## Verification
- Confirm 68 breed records, 68 English editorial entries, and 68 registered portraits.
- Type-check the changed files and confirm the preview build is healthy.
- Open representative new pages for a pure breed and a designer mix on `/`, `/no`, and `/pl`.
- Check desktop and mobile layouts, one H1, metadata, JSON-LD, images, trait bars, hard limits, trade-offs, and similar-breed links.
