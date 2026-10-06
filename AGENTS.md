<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to Lovable. Avoid rewriting published git history.
<!-- LOVABLE:END -->

- Keep the reading experience data-driven from `src/data/readingTests.ts` so catalog, player, and review share one source of truth.
- Persist anonymous reading progress and attempts in browser localStorage because the product intentionally has no authentication or backend.
