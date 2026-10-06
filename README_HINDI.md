# 🏏 CricVega — AUTO SYSTEM Package (cricvega.github.io ke liye)
**Banaya: 3 Oct 2026** — Is package mein poori site + **automatic match-page generator** hai.

---

## 🤖 AUTO SYSTEM kya hai (sabse badi cheez)
`.github/workflows/auto-rebuild.yml` — GitHub ka **free automatic system**:
- **Har 30 minute** mein khud chalta hai (GitHub Actions par, bilkul free)
- ESPN feed se **saare naye/live/recent/upcoming matches** uthata hai
- Har match ka **static HTML page** banata hai (SEO ke liye, HTTP 200)
- Khud **commit + push** kar deta hai → site par live ho jata hai
- **Zindagi bhar ke matches** — aapko kuch karne ki zaroorat nahi 🎉

### Manual button
GitHub repo → **Actions** tab → **"auto-rebuild"** → **"Run workflow"** button —
jab chaaho turant naye matches generate karo (bade tournament ke din use karna).

### Pehli baar setup (sirf ek baar)
1. Poora package upload karo (neeche dekho)
2. Repo → **Settings → Actions → General** → sab default rehne do (allowed)
3. **Actions** tab kholo → agar "Enable workflows" dikhe to enable karo
4. "Run workflow" se ek baar manual test karo → commit khud hoga

> Note: GitHub cron thoda late (10-20 min) ho sakta hai — normal hai.
> Live scores browser mein hamesha REAL-TIME hi dikhte hain (app.js se) —
> auto-build sirf **naye pages + SEO** ke liye hai.

---

## 📤 Upload kaise karein
1. Zip kholo — andar ki **saari files/folders** (`.github` folder samet!)
2. GitHub → `cricvega/cricvega.github.io` → **Add file → Upload files**
3. Sab upload karo (purani files replace ho jayengi) → **Commit**
4. 1-2 min mein site live; Actions tab mein workflow dikhega

⚠️ `.github` folder **hidden** hota hai — use zaroor upload karna, isi se auto-system chalta hai.

---

## ✅ Is package mein kya-kya hai
| Cheez | Detail |
|---|---|
| Root paths fix | `/Cricket-/` ki jagah `/` — cricvega.github.io par sab 200 |
| 62 match + 21 series + 12 team pages | Static, Google-indexable (ab auto-update honge) |
| **Blog (5 original articles)** | DLS, formats, NRR, live-scores tech, IPL auction — AdSense ke liye original content |
| **Terms of Use + strong Disclaimer** | Non-affiliation, trademark fair-use, takedown process |
| Service worker resilience | Feed down ho to bhi site tootegi nahi |
| Sitemap (113 URLs) + robots | SEO ready |
| `.github/workflows/auto-rebuild.yml` | Har 30 minute auto-generator |

## 💰 AdSense roadmap (yaad rakho)
- Turant apply mat karo; 15-20 original posts + acha traffic hone par apply karo
- Custom domain (jaise cricvega.in) se approval aasan
- Kabhi full article copy mat karo, "official" mat likho, betting content mat daalo,
  copyright complaint aaye to turant hatao — **bas yehi 4 rules se koi problem nahi hogi**

## 🔧 Developer ke liye
- `node build.mjs` — locally poora build (network chahiye)
- `node build.mjs --no-dynamic` — sirf static pages (offline)
- Build kabhi bhi blog/, terms.html, app.js, sw.js ko overwrite **nahi** karta —
  yeh files manually maintain hoti hain.

## 💵 ADS — current status (5 Oct 2026)
- Purana CPM network (ProfitableRateCPM) **poori tarah hata diya gaya** — scripts, ad cards,
  CSS styles, constants — sab kuch. Site ab 100% ad-free aur clean hai.
- Wajah (imandari se): woh network internet par scammy/malware-flagged tha, withdrawal
  reliable nahi tha, users ko scam pages par bhejta tha, aur Google trust girata tha.
- **Akeli monetization = Google AdSense** (upar wala roadmap). Approval ke baad jo code
  mile woh build mein cleanly add ho jayega — tab tak site ad-free rahegi.

---

# 📱 MOBILE SE UPLOAD (aasan tariqa — sirf ~30 files, baaki robot banayega)

match/series/team folders ko upload karne ki ZARORAT NAHI — pehli baar "Run workflow"
dabate hi robot unhe khud bana kar commit kar dega! Bas ye karo:

**Step 1:** ZArchiver (Play Store) se zip extract karo.
**Step 2:** Chrome mein github.com kholo → repo `cricvega.github.io` kholo.
**Step 3:** "Add file → Upload files" → extract waale folder ki ye files select karke upload + commit:
   index.html, live-scores.html, schedule.html, results.html, series.html, teams.html,
   news.html, about.html, contact.html, privacy-policy.html, disclaimer.html, terms.html,
   404.html, app.css, app.js, sw.js, build.mjs, robots.txt, sitemap.xml, manifest.webmanifest,
   favicon.svg, icon-192.png, icon-512.png, apple-touch-icon.png, og-image.png
**Step 4:** Repo mein `blog` folder kholo (naya hai to root par "Add file → Upload files" se
   pehle blog ke 6 files select karke upload — GitHub folder naam poochhe to `blog` likho):
   blog/index.html, blog/dls-method.html, blog/cricket-formats.html, blog/net-run-rate.html,
   blog/how-live-scores-work.html, blog/ipl-auction.html
**Step 5:** "Add file → **Create new file**" → file ka naam likho exactly:
   `.github/workflows/auto-rebuild.yml`
   → neeche wala poora text copy-paste karo → Commit:

```yaml
name: auto-rebuild

on:
  schedule:
    - cron: '0 */2 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Generate static match/series/team pages
        run: node build.mjs
      - name: Commit & push updates
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add -A
          if ! git diff --staged --quiet; then
            git commit -m "auto: live match pages update"
            git push
          fi
```

**Step 6:** **Actions** tab → "auto-rebuild" → **"Run workflow"** → 1-2 min ruko.
   Robot match/series/team pages + sitemap bana kar commit kar dega. Site live! 🎉
**Step 7:** Search Console mein sitemap.xml submit karo. Bas — ab zindagi bhar khud chalta rahega.

> PC/laptop mile to saari 130 files ek saath drag-drop kar dena — woh bhi theek hai.

---
## 👨‍💻 CREDITS
**CricVega — Developed by Pawan Verma · PAWANGAMINGSTUDIO**
Website ka design, code aur original content 100% PAWANGAMINGSTUDIO ka karya hai.
