# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# About this project

The portfolio site of a product designer, live at https://mozhfolio.com.
Next.js 16 static export (`output: "export"`): the built site is plain files in `out/`.

- Install: `npm install`
- Run locally: `npm run dev`, then open http://localhost:3000
- Build: `npm run build` (output in `out/`)
- Lint: `npm run lint`

Where things are:

- Case study pages: `components/casestudy/*Case.tsx`
- Case list, order and card text on the home page: `data/caseStudies.ts`
- Case card illustrations: `components/CaseCardArt.tsx`
- Styles: `app/globals.css` and `app/work/case-study.css`
- The case studies form a loop: each one ends with a "Next case" link to the next. When the order changes, update those links too.

# Publishing

- **`main` is the live branch.** Every push to `main` publishes the site to mozhfolio.com through GitHub Actions (`.github/workflows/deploy.yml`).
- Open every pull request against `main`, never push to `main` directly.
- Every pull request gets a Netlify preview link: `https://deploy-preview-<PR number>--mozhfolio.netlify.app`.
- The `CASE_PASSWORD` secret lives in GitHub Settings, never in the code.

# How to work with me

- Reply in Persian (فارسی).
- **Never merge** a pull request until I say «مرج کن» or "merge".
- When I say «پریویو بده», push the change to a pull request and give me its Netlify preview link.
- When I ask to see a change first, show me the proposal and wait before editing.
- Change only what I asked for. If anything else had to change, tell me.
- Before opening a pull request, run `npm run build` and make sure it passes.
- Check every visual change on both desktop and phone widths.
