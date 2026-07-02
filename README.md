# Vedant Shetty — Portfolio Website

A fast, dependency-free static website showcasing Vedant's chess and science achievements.
No build step, no framework to maintain — just HTML, CSS, and one content file.

**Live demo:** deploy it in 5 minutes with Cloudflare Pages (guide below).

---

## Repository layout

```
├── index.html            page structure (rarely needs editing)
├── css/style.css         colours, fonts, layout
├── js/content.js         ★ ALL text, links, and photo references — edit this
├── js/main.js            renders content.js onto the page (don't edit)
└── assets/images/        all photos
```

## How to update the site

Everything editable lives in **`js/content.js`**. Open it — every section is commented.

### Change text or a link
Find the section, change the words between quotes, save/commit. Done.

```js
title: "CAC Festival — double gold",
links: [{ text: "Read the news →", url: "https://..." }]
```

### Add or replace a photo
1. Add the photo to `assets/images/` (JPEG, ideally under ~900 px wide / ~200 KB).
2. Reference it in `content.js`:
   ```js
   img: "assets/images/new-tournament-2026.jpg",
   ```

### Add a new achievement card
Copy an existing `{ ... }` block inside `world.cards` or `science.cards`,
paste it after the last one (keep the comma between blocks), edit the fields:

```js
{
  img: "assets/images/new-photo.jpg",
  tag: "🥇 Gold", tagStyle: "gold",     // gold | silver | bronze | star
  where: "City, Country · 2026 · U12",
  title: "Tournament name — result",
  text: "One or two sentences about it.",
  links: [{ text: "Results →", url: "https://..." }]
},
```

The same pattern works for the year tiles (`chess.years`), polaroid photos
(`chess.polaroids`, `club.polaroids`), and media links (`media.links`).

### Editing without any tools
You can do all of this from your phone or browser on **github.com**:
open the file → pencil icon (Edit) → make changes → **Commit changes**.
To add a photo: `assets/images/` → **Add file → Upload files**.
Cloudflare redeploys the site automatically ~1 minute after every commit.

### Preview locally (optional)
Just open `index.html` in a browser — no server needed.

---

## Deploy on Cloudflare Pages (free)

### One-time setup
1. **Put this folder on GitHub**
   - Create a repository at github.com (e.g. `vedant-portfolio`), then either
     upload these files via the web UI (*Add file → Upload files*), or:
     ```bash
     git init && git add -A && git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/vedant-portfolio.git
     git push -u origin main
     ```
2. **Connect Cloudflare**
   - Sign up / log in at [dash.cloudflare.com](https://dash.cloudflare.com)
   - **Workers & Pages → Create → Pages → Connect to Git**
   - Authorize GitHub and select the `vedant-portfolio` repository
   - Build settings — leave everything default:
     - Framework preset: **None**
     - Build command: *(empty)*
     - Build output directory: `/`
   - Click **Save and Deploy**
   - Your site is live at `https://vedant-portfolio.pages.dev` in under a minute.

### Custom domain (optional)
In the Pages project → **Custom domains → Set up a custom domain**
(e.g. `vedantshetty.com`). If the domain's DNS is on Cloudflare, it's one click;
otherwise Cloudflare shows you the CNAME record to add at your registrar.
HTTPS certificates are automatic and free.

### Day-to-day maintenance
- **Every commit to `main` = automatic redeploy.** Nothing else to do.
- Non-`main` branches get free **preview URLs** — try changes safely before merging.
- Roll back anytime: Pages project → **Deployments → ⋯ → Rollback**.
- There are no servers, databases, or dependencies to patch. The only
  "maintenance" is adding new trophies. 🏆

---

## Credits
Built from Vedant's 2026 portfolio document. Fonts: Fraunces & Archivo (Google Fonts).
