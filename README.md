# useragent404@fieldmanual

Personal security hub — a searchable CPTS field manual plus Writeups and About.

## Structure
- `index.html` — Field Manual (searchable cheatsheet, sidebar accordion)
- `writeups.html` — Writeups (edit the `WRITEUPS` array inside to add entries)
- `about.html` — About Me
- `assets/style.css` — shared theme · `assets/app.js` — shared nav + theme toggle

## Deploy to GitHub Pages
1. New repo (Private) → upload this whole folder (keep paths).
2. Settings → Pages → Deploy from a branch → `main` / root → Save.
3. Live at `https://<username>.github.io/<repo>/`
   (Pages is public on Free/Pro even with a private repo — see note in chat.)

## Update the cheatsheet later
Regenerate `index.html` from the master markdown:
`python3 build_site.py`  then commit & push.
