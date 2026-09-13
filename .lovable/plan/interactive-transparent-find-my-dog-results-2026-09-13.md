# Interactive, transparent Find My Dog results

## Goal
Make the completed quiz feel more personal and useful without changing DoggMatch’s deterministic matching approach or visual system.

## What will change
- Turn the top result’s existing explanation into a clearer **Why this breed scored high** section, with each reason tied directly to an answer the person gave.
- Show **Trade-offs to consider** for every displayed top match, not only the first breed.
- Preserve breeds excluded by a selected hard limit and show a short **Why this breed was removed** list below the ranked matches.
- Add a compact **Adjust my answers** panel on the results page for activity level, hours alone, shedding tolerance, and dog experience.
- Recalculate and reorder results immediately when an answer changes, save those changes on the device, and keep the full-quiz restart option.
- Keep all new English copy warm, personal, positive, and explicit about how the result was calculated. Existing translated quiz labels will be reused where possible; English remains the source language for new copy.

## Technical details
- Extend the matching engine with a detailed result function returning both ranked matches and hard-limit eliminations, while preserving the current `matchBreeds()` API for existing callers.
- Reuse the existing answer-based insight rules for both the lead match and the smaller match cards.
- Return the concrete hard-limit warning responsible for each elimination; if all breeds are excluded, preserve the current safe fallback and explain that limits were relaxed.
- Build the adjustment controls from the existing localized quiz options so option values always match the scoring engine.
- Keep all work within the existing Find My Dog route, matching utilities, and current DoggMatch design components.

## Verification
- Check that changing each quick answer updates the ranking and score without replaying the quiz.
- Check that hard-limit removals appear only when a selected hard limit actually excludes breeds.
- Verify English and representative localized paths on desktop and mobile, with no runtime, typecheck, or preview build errors.
