# Reading Master

# ROLE & OBJECTIVE
You are an expert Full-Stack Frontend Engineer. Your task is to build a pixel-accurate, standalone clone of the **IELTStation** (`ieltstation.com` / `otaboyev-prep.uz`) **Reading Module ONLY**.

## STRICT SCOPE RULES
1. **1:1 Visual & Functional Fidelity:** Replicate IELTStation's modern, clean, minimalist exam-prep aesthetic, layout, typography, filter pills, card grid, and split-screen Computer-Delivered IELTS (CDI) test interface.
2. **NO Auth / NO Login / NO Paywalls:** Completely omit "Sign in", "Start free", "Profile", and "Get Premium" (`/premium-info`) modals or routes. Every test is 100% unlocked and starts immediately upon clicking "Start".
3. **Reading Module ONLY:** Remove Listening, Writing AI, Speaking, and Vocabulary tabs/modules. The platform must boot directly into the Reading Hub (`/reading`).

---

## TECH STACK
- **Framework:** React 18+ (Vite + TypeScript)
- **Styling:** Tailwind CSS + Lucide React icons
- **State & Persistence:** React Context / Zustand + `localStorage` (to save completed test attempts, band scores, and in-progress answers without requiring a user account)
- **Routing:** React Router DOM (`/reading`, `/reading/test/:testId`, `/reading/review/:attemptId`, `/history/reading_test`)

---

## OPTIONAL: LIVE SCRAPING VIA FIRECRAWL (IF AVAILABLE IN ENVIRONMENT)
If you have bash/terminal or Firecrawl MCP access, you may run the following command to inspect live DOM/text from `ieltstation.com/reading`:
```bash
curl -s -X POST "[https://api.firecrawl.dev/v2/scrape](https://api.firecrawl.dev/v2/scrape)" \
  -H "Authorization: Bearer @secret:FIRECRAWL_API_KEY " \
  -H "Content-Type: application/json" \
  -d '{"url": "[https://ieltstation.com/reading?type=REAL_EXAM](https://ieltstation.com/reading?type=REAL_EXAM)", "onlyMainContent": false, "formats": ["markdown", "html"]}'


reef fish study is an example of one passage

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://reading-wizard.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/35ad3991-d258-42e0-a49f-45598a4a2cac).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
