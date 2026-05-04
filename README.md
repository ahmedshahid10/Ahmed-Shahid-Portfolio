# Ahmed Shahid — Portfolio

Personal portfolio website for Ahmed Shahid, GenAI Specialist. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages via GitHub Actions.

**Live site:** https://ahmedshahid10.github.io/Ahmed-Shahid-Portfolio

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **3D / WebGL:** Three.js
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000/Ahmed-Shahid-Portfolio](http://localhost:3000/Ahmed-Shahid-Portfolio) in your browser.

---

## Build

```bash
npm run build
```

The static export is written to the `./out` directory.

---

## GitHub Pages Deployment

Deployment is fully automated. Every push to `main` triggers the GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes the `./out` folder to the `gh-pages` branch.

**One-time setup steps:**
1. Go to your repo on GitHub → **Settings → Pages**
2. Set **Source** to `Deploy from a branch` and select the `gh-pages` branch
3. Push to `main` — the workflow handles everything from there

---

## Editing Your Content

All site content lives in the `data/` directory. You only need to edit these files — no component code required.

| File | What it controls |
|---|---|
| [data/site.ts](data/site.ts) | Name, role, tagline, summary, GPA, university |
| [data/experience.ts](data/experience.ts) | Work history — companies, roles, dates, bullet points |
| [data/projects.ts](data/projects.ts) | Project cards — title, description, tools, outcomes |
| [data/skills.ts](data/skills.ts) | Skills grouped by category |
| [data/contact.ts](data/contact.ts) | Email, LinkedIn, GitHub, resume URL |

---

## Resume

To update the resume, replace `public/resume.pdf` with your new file. The download link in the site automatically points to this file.

---

## Changing the GitHub Pages Path

If you fork this repo or change the repository name, update `basePath` and `assetPrefix` in [next.config.ts](next.config.ts):

```ts
basePath: "/your-repo-name",
assetPrefix: "/your-repo-name",
```

Also update `resumeUrl` in [data/contact.ts](data/contact.ts) to match.
