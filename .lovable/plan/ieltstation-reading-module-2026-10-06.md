# IELTStation Reading Module

## Build
- Replace the starter screen with a focused Reading hub at `/reading`, and redirect `/` there.
- Add the supplied Reef Fish Study plus two complete playable academic reading sets, alongside a 12-item catalog.
- Build filtering, search, category and part controls, target-band display, theme control, and attempt-aware cards.
- Build the timed split-pane reading player with resizable panes, answer autosave, question navigation, flags, font sizing, pause, highlighting, notes, and submission.
- Build instant scoring, band estimation, locked answer review with explanations and passage evidence.
- Build local attempt history with summary metrics, review, and retake actions.

## Technical details
- Keep the existing TanStack Start routing stack and implement equivalent requested URLs with file routes.
- Store in-progress answers, preferences, and completed attempts in browser local storage; no account or remote backend.
- Use semantic Tailwind v4 tokens and the existing UI controls, with a clean neutral/blue exam interface.
- Add unique metadata for each content route and verify desktop/mobile layouts and the full test-to-review flow.
