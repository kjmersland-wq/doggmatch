# Complete training translations

## Scope
Complete the missing training category, goal, and lesson content for Danish, Swedish, Finnish, German, French, and Dutch. Keep the existing English, Norwegian, and Polish content and all current page structure, styling, and behavior unchanged.

## Implementation
- Use the current English category and lesson files as the structural source.
- Add one complete category/goal data file and one complete lesson data file for each missing language.
- Preserve every identifier, category, goal, age stage, duration, visual key, breed reference, lesson link, array length, and optional safety/progression field exactly.
- Rewrite all reader-facing text naturally for each language, keeping the calm, supportive, reward-based DoggMatch voice.
- Extend the locale-aware category and lesson accessors so all nine supported language paths select their own content instead of falling back to English.
- Leave route copy, layout, design, matching logic, progress tracking, and functionality untouched.

## Verification
- Programmatically compare every localized file with English for matching lesson/category IDs, object shape, array lengths, and required optional fields.
- Check that no English source strings remain in the six newly completed language files.
- Run focused type checks and inspect all supported training-library paths in the browser.
- Confirm the latest preview build is healthy and update the project roadmap.
