#!/usr/bin/env node
/*  CricVega static site builder — Node 18+ (no dependencies)
    node build.mjs              -> static pages + live prerender (match/series pages) + sitemap
    node build.mjs --no-dynamic -> only static pages + sitemap (offline)                       */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const DYN = !process.argv.includes('--no-dynamic');

/* ---------- self-deploy: repo root par gira koi bhi *.zip khud extract karo ---------- */
try {
  const { execSync } = await import('node:child_process');
  const oldZip = path.join(ROOT, 'CricVega-UPDATE.zip');
  if (fs.existsSync(oldZip)) { fs.unlinkSync(oldZip); console.log('self-deploy: removed stale CricVega-UPDATE.zip'); }
  for (const f of fs.readdirSync(ROOT)) {
    if (f.toLowerCase().endsWith('.zip')) {
      execSync(`unzip -o -q "${path.join(ROOT, f)}" -d "${ROOT}"`, { stdio: 'inherit' });
      fs.unlinkSync(path.join(ROOT, f));
      console.log('self-deploy: extracted + removed', f);
    }
  }
  for (const stray of ['blog.html', 'CNAME', 'auto-rebuild.yml', 'cricket-formats.html', 'dls-method.html', 'how-live-scores-work.html', 'ipl-auction.html', 'net-run-rate.html']) {
    const p = path.join(ROOT, stray); if (fs.existsSync(p)) { fs.unlinkSync(p); console.log('self-deploy: removed stray', stray); }
  }
} catch (e) { console.error('self-deploy note:', e.message); }

const OUT = (process.argv.find(a => a.startsWith('--out=')) || '').slice(6) || ROOT;
const BRAND = 'CricVega';

/* ---------- site URL / base path ---------- */
let SITE = 'https://cricvega.github.io/', BASE = '/';
const cnameFile = path.join(ROOT, 'CNAME');
if (fs.existsSync(cnameFile) && fs.readFileSync(cnameFile, 'utf8').trim()) {
  SITE = 'https://' + fs.readFileSync(cnameFile, 'utf8').trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '') + '/'; BASE = '/';
} else if (process.env.GITHUB_REPOSITORY) {
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
  if (repo.toLowerCase() === (owner + '.github.io').toLowerCase()) { SITE = 'https://' + repo.toLowerCase() + '/'; BASE = '/'; }
  else { SITE = 'https://' + owner.toLowerCase() + '.github.io/' + repo + '/'; BASE = '/' + repo + '/'; }
}
const U = p => SITE + (p || '');

/* ---------- optional: bundle src/*.js -> app.js (dev only) ---------- */
const SRC = path.join(ROOT, 'src');
if (fs.existsSync(SRC) && fs.existsSync(path.join(SRC, 'core.js'))) {
  const order = ['team_i18n.js', 'i18n.js', 'core.js', 'data.js', 'views.js', 'match.js', 'shell.js'];
  const js = order.filter(f => fs.existsSync(path.join(SRC, f))).map(f => '/* ' + f + ' */\n' + fs.readFileSync(path.join(SRC, f), 'utf8')).join('\n');
  fs.writeFileSync(path.join(ROOT, 'app.js'), '/*! CricVega — live cricket scores */\n(function(){"use strict";\n' + js + '\n})();\n');
}
const ver = crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, 'app.js'))).update(fs.readFileSync(path.join(ROOT, 'app.css'))).digest('hex').slice(0, 8);

/* ---------- helpers ---------- */
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const dec = s => String(s == null ? '' : s).replace(/&amp;/g, '&').replace(/&dagger;/g, '†').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const slug = s => String(s || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
const ymd = off => { const d = new Date(Date.now() + 5.5 * 3600e3 + off * 86400000); return d.toISOString().slice(0, 10).replace(/-/g, ''); };
const fmtIST = iso => { try { return new Date(iso).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' IST'; } catch (e) { return iso; } };
const write = (rel, content) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, content); };
const YEAR = new Date().getFullYear();

/* ---------- page heads (also used by the client router) ---------- */
const HEADS = {
  'home': ['Live Cricket Score Today – Ball by Ball Commentary, Scorecard & Schedule | ' + BRAND, 'Fastest live cricket score for every match today: ball-by-ball commentary, full scorecards, fixtures, results, points tables and cricket news. India, IPL, T20, ODI & Test — in Hindi and English.'],
  'live-scores': ['Live Cricket Scores – All Matches Today, Ball by Ball Updates | ' + BRAND, 'All live cricket matches today with auto-updating scores, run rates, recent overs and ball-by-ball commentary. International, domestic, league and women\'s cricket.'],
  'schedule': ['Cricket Schedule ' + YEAR + ' – Upcoming Matches, Fixtures & Timings (IST) | ' + BRAND, 'Upcoming cricket match schedule with dates, venues and start times: international series, T20 leagues, domestic and women\'s cricket fixtures for the next 7 days.'],
  'results': ['Cricket Results – Latest Match Results & Scorecards | ' + BRAND, 'Latest cricket results with final scores, winning margins and full scorecards for international, league, domestic and women\'s matches from the past week.'],
  'news': ['Cricket News Today – Latest Headlines & Updates | ' + BRAND, 'Latest cricket news, match reports, team updates and headlines from ESPNcricinfo and BBC Sport, updated through the day.'],
  'series': ['Cricket Series ' + YEAR + ' – Ongoing & Upcoming Tours, Tournaments & Leagues | ' + BRAND, 'All current cricket series, tours, tournaments and T20 leagues with fixtures, results, live scores and points tables.'],
  'teams': ['Cricket Teams – India, Australia, England & All International Teams | ' + BRAND, 'International cricket teams with live scores, upcoming fixtures, recent results and news: India, Australia, England, Pakistan, South Africa, New Zealand and more.'],
};

/* ---------- SEO text blocks (visible, bilingual) ---------- */
const SEO = {
  'home': `<h2>Live cricket score, ball by ball</h2>
<p>${BRAND} brings you fast <strong>live cricket scores</strong> for every match being played today — international Tests, ODIs and T20Is, T20 leagues, domestic first-class and one-day cricket, and women's cricket. Scores refresh automatically every few seconds, and every live match has <strong>ball-by-ball commentary</strong>, current run rate, required run rate, the current over, batters at the crease and the bowler's figures.</p>
<h3>Everything for every match</h3>
<ul><li><strong>Full scorecard</strong> — batting and bowling figures, extras, strike rates, economy and fall of wickets.</li><li><strong>Squads &amp; playing XI</strong> — captain and wicketkeeper marked, bench players listed.</li><li><strong>Match info</strong> — toss, venue, umpires, match days and hours of play.</li><li><strong>Points tables</strong> for tournaments and leagues, plus complete series fixtures and results.</li></ul>
<h3>Schedule, results and news</h3>
<p>Use the <a href="${BASE}schedule">cricket schedule</a> to see upcoming fixtures for the next seven days with start times in your own time zone, check <a href="${BASE}results">recent results</a>, follow <a href="${BASE}series">ongoing series</a> and read the latest <a href="${BASE}news">cricket news</a>.</p>
<h2 lang="hi">लाइव क्रिकेट स्कोर — गेंद-दर-गेंद</h2>
<p lang="hi">${BRAND} पर आज के हर क्रिकेट मैच का <strong>लाइव स्कोर</strong> देखें — भारत के मैच, टेस्ट, वनडे, टी20, लीग और महिला क्रिकेट। हर गेंद पर स्कोर अपने आप अपडेट होता है। साथ में गेंद-दर-गेंद कमेंट्री, पूरा स्कोरकार्ड, प्लेइंग XI, पॉइंट्स टेबल, शेड्यूल और ताज़ा क्रिकेट न्यूज़ — हिंदी, English, বাংলা, தமிழ், Español और Français में।</p>
<h3>Frequently asked questions</h3>
<p><strong>How often do live scores update?</strong> The score list refreshes every 10 seconds and an open live match checks for new deliveries every 4 seconds.</p>
<p><strong>Is ${BRAND} free?</strong> Yes. There is no sign-up, and it can be installed on your phone as an app from the browser menu.</p>
<p><strong>Can I see the score in Hindi?</strong> Yes — choose हिन्दी from the language menu at the top. Team names and match status are translated too.</p>`,
  'live-scores': `<h2>All live cricket matches today</h2><p>This page lists every cricket match in progress right now, grouped by series. Use the filters to show only international, domestic &amp; league, or women's matches. Open any match for ball-by-ball commentary, the full scorecard, squads and match info.</p><p lang="hi">आज चल रहे सभी क्रिकेट मैचों का लाइव स्कोर — इंटरनेशनल, घरेलू, लीग और महिला क्रिकेट। किसी भी मैच पर टैप करके गेंद-दर-गेंद कमेंट्री और स्कोरकार्ड देखें।</p>`,
  'schedule': `<h2>Cricket schedule and fixtures</h2><p>Pick a day to see all scheduled cricket matches with venues and start times shown in your local time zone. The schedule covers international tours, ICC events, T20 franchise leagues, domestic competitions and women's cricket.</p><p lang="hi">अगले 7 दिनों के सभी क्रिकेट मैचों का शेड्यूल — तारीख, मैदान और आपके समय अनुसार शुरू होने का समय।</p>`,
  'results': `<h2>Latest cricket results</h2><p>Final results from the past seven days, with winning margins and a link to every full scorecard including batting, bowling and fall of wickets.</p><p lang="hi">पिछले 7 दिनों के क्रिकेट मैचों के परिणाम और पूरा स्कोरकार्ड।</p>`,
  'news': `<h2>Cricket news</h2><p>The latest cricket headlines collected from ESPNcricinfo and BBC Sport. Each story opens on the original publisher's website.</p><p lang="hi">ESPNcricinfo और BBC Sport से क्रिकेट की ताज़ा खबरें।</p>`,
  'series': `<h2>Cricket series and tournaments</h2><p>Every cricket series with matches this week: bilateral tours, multi-team tournaments, T20 leagues and domestic championships. Open a series for its complete fixture list, results and points table.</p><p lang="hi">सभी चल रही और आने वाली क्रिकेट सीरीज़, टूर्नामेंट और लीग — पूरा शेड्यूल, परिणाम और पॉइंट्स टेबल।</p>`,
  'teams': `<h2>International cricket teams</h2><p>Follow your team: each team page shows its live matches, upcoming fixtures, recent results and related news.</p><p lang="hi">अपनी पसंदीदा टीम के लाइव मैच, आने वाले मुकाबले, परिणाम और न्यूज़ देखें।</p>`,
};
const H1 = { 'home': 'Live Cricket Score', 'live-scores': 'Live Cricket Scores', 'schedule': 'Cricket Schedule', 'results': 'Cricket Results', 'news': 'Cricket News', 'series': 'Cricket Series', 'teams': 'Cricket Teams' };

/* ---------- static info pages ---------- */
const INFO = {
  'about': ['About ' + BRAND + ' – Live Cricket Scores in 6 Languages', 'About ' + BRAND + ': a fast, free live cricket score website with ball-by-ball commentary, scorecards, schedules and news in six languages.',
    `<h1>About ${BRAND}</h1><p>${BRAND} is a free, fast and lightweight website for following cricket. It is built for fans who want the score <em>now</em> — on any phone, even on a slow connection.</p>
<h2>What you get</h2><ul><li>Live scores for international, league, domestic and women's cricket, refreshed automatically.</li><li>Ball-by-ball commentary with the current over, batters, bowler, run rates and target.</li><li>Full scorecards with fall of wickets, squads and playing XI, match info and points tables.</li><li>Schedules and results for the week, series pages, team pages and player profiles.</li><li>Cricket news from ESPNcricinfo and BBC Sport.</li><li>Six languages — English, हिन्दी, বাংলা, தமிழ், Español and Français — plus dark mode.</li><li>Installable as an app on Android, iPhone and desktop.</li></ul>
<h2>Where the data comes from</h2><p>Match data is loaded directly in your browser from ESPN's publicly available cricket feed, which is powered by Cricinfo. News headlines link to the original publishers. ${BRAND} is an independent fan project and is not affiliated with any cricket board, league or broadcaster.</p>
<h2>Developer</h2><p>${BRAND} is designed, developed and maintained by <strong>Pawan Verma</strong> — <strong>PAWANGAMINGSTUDIO</strong>. The website, its original code, design and original articles are the work of PAWANGAMINGSTUDIO.</p><p lang="hi">यह वेबसाइट <strong>पवन वर्मा (PAWANGAMINGSTUDIO)</strong> द्वारा बनाई और विकसित की गई है।</p>
<h2 lang="hi">हमारे बारे में</h2><p lang="hi">${BRAND} एक मुफ़्त और तेज़ क्रिकेट वेबसाइट है — लाइव स्कोर, गेंद-दर-गेंद कमेंट्री, स्कोरकार्ड, शेड्यूल और न्यूज़, 6 भाषाओं में।</p>`],
  'privacy-policy': ['Privacy Policy – ' + BRAND, BRAND + ' privacy policy: no accounts, no personal data collection. Learn what is stored in your browser and which services are contacted.',
    `<h1>Privacy Policy</h1><p><em>Last updated: ${new Date().toISOString().slice(0, 10)}</em></p><p>${BRAND} does not require an account and does not collect, sell or share personal information.</p>
<h2>Stored on your device</h2><p>Your language and theme choices are saved in your browser's local storage. A service worker caches the site's files so that it loads quickly and works offline. You can clear this at any time from your browser settings.</p>
<h2>Third-party services</h2><p>To show scores and news, your browser connects directly to ESPN's public cricket API (espn.com), the rss2json.com service (to read the BBC Sport RSS feed) and image servers (espncdn.com, bbci.co.uk). These services may receive your IP address and browser details as part of a normal web request, under their own privacy policies. The site is hosted on GitHub Pages, which may log requests for security purposes.</p>
<h2>Advertising</h2><p>To keep the site free, we may show advertisements served by third-party ad networks (ProfitableRateCPM / Monetag family). These networks may use cookies or similar technologies to serve and measure ads on their own pages. Pop-up advertisements may occasionally open in a new tab; you can close them or use a content blocker if you prefer. We never collect personal information for advertising ourselves.</p>
<h2>Children</h2><p>The site is suitable for all ages and does not knowingly collect information from anyone.</p>
<h2>Changes</h2><p>Any change to this policy will be published on this page.</p>`],
  'contact': ['Contact – ' + BRAND, 'Contact the ' + BRAND + ' team with feedback, corrections or suggestions.',
    `<h1>Contact us</h1><p>Found a wrong score, a bug or have an idea? We would love to hear from you.</p><ul><li>GitHub: <a href="https://github.com/cricvega" rel="noopener" target="_blank">github.com/cricvega</a> — open an issue on the site's repository.</li></ul><p>Please include the match or page link and a screenshot if possible. Scores come from a live data feed, so small delays or corrections by the official scorers can occasionally occur.</p><p lang="hi">गलत स्कोर, बग या सुझाव? ऊपर दिए लिंक से हमें बताएं।</p>`],
  'disclaimer': ['Disclaimer – ' + BRAND, BRAND + ' disclaimer: independent non-commercial fan site, no affiliation with ICC/BCCI/ESPN, third-party data and trademark fair-use policy, takedown contact.',
    `<h1>Disclaimer</h1><p><em>Last updated: ${new Date().toISOString().slice(0, 10)}</em></p><p>${BRAND} is an independent, free, non-commercial fan and educational website created by cricket fans, for cricket fans.</p>
<h2>1. No affiliation</h2><p>${BRAND} is <strong>not affiliated with, endorsed by, or sponsored by</strong> the ICC, BCCI, ESPN, ESPNcricinfo, the BBC, any cricket board, league, franchise, team, or broadcaster. We do not claim any official status.</p>
<h2>2. Match data (scores, statistics, commentary)</h2><p>Live scores, scorecards, statistics and short commentary excerpts are <strong>factual data</strong> loaded in your browser from publicly available third-party feeds (powered by ESPN / Cricinfo). This data is shown "as is" for informational purposes only. We cannot guarantee that it is complete, accurate, real-time or free from delay. For official information always refer to the official sources of the concerned cricket board.</p>
<h2>3. News, headlines and media</h2><p>News headlines and short summaries are the property of their respective publishers (such as ESPNcricinfo and BBC Sport). We display only limited excerpts and always link to the original article. Photographs and thumbnails remain the property of their owners and are loaded directly from the source.</p>
<h2>4. Trademarks — nominative fair use</h2><p>Team names, short abbreviations and logos are the trademarks of their respective owners (boards, leagues and franchises). They are used <strong>solely to identify the teams and matches</strong> being reported, with no suggestion of endorsement or affiliation. If you are a rights holder and believe any use is inappropriate, please contact us (see section 7) and it will be addressed promptly.</p>
<h2>5. No betting or gambling advice</h2><p>Nothing on this website is betting, wagering or financial advice. ${BRAND} does not promote, link to, or facilitate gambling in any way.</p>
<h2>6. External links</h2><p>This site contains links to third-party websites (for example, news publishers). We are not responsible for the content, availability or practices of those sites.</p>
<h2>7. Copyright / takedown requests</h2><p>We respect the intellectual property of others. If you are a rights holder and believe any content on ${BRAND} infringes your rights, please raise an issue on our GitHub repository clearly marked "Copyright request". We will review and remove or adjust the concerned material promptly and in good faith.</p>
<h2>8. Acceptance</h2><p>By using ${BRAND} you accept this disclaimer and our <a href="${BASE}terms">Terms of Use</a>.</p><p lang="hi">हिंदी: यह एक स्वतंत्र, गैर-व्यावसायिक फैन वेबसाइट है; किसी भी क्रिकेट बोर्ड या प्रसारक से संबद्ध नहीं है।</p>`],
};

/* ---------- template ---------- */
const NAV = [['home', '', 'Home'], ['live-scores', 'live-scores', 'Live Scores'], ['schedule', 'schedule', 'Schedule'], ['results', 'results', 'Results'], ['series', 'series', 'Series'], ['teams', 'teams', 'Teams'], ['news', 'news', 'News'], ['blog', 'blog', 'Blog']];
const NAVK = { 'home': 'home', 'live-scores': 'live', 'schedule': 'schedule', 'results': 'results', 'series': 'series', 'teams': 'teams', 'news': 'news', 'blog': 'blog' };
/* ---------- ad monetization (publisher zones) ---------- */
const AD_POP_SCRIPTS = ``;
const ORG = { '@type': 'Organization', '@id': U() + '#org', name: BRAND, url: U(), logo: U('icon-512.png') };
function page({ rel, title, desc, canon, main, seo, jsonld = [], noindex = false, isStatic = false, active = '', ogType = 'website' }) {
  const canonical = canon || U(rel.replace(/(^|\/)index\.html$/, '').replace(/\.html$/, ''));
  const ld = [{ '@context': 'https://schema.org', '@graph': [ORG, { '@type': 'WebSite', '@id': U() + '#website', url: U(), name: BRAND, inLanguage: ['en', 'hi'], publisher: { '@id': U() + '#org' } }, ...jsonld] }];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">' : '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">'}
<link rel="canonical" href="${esc(canonical)}">
<meta name="cp-base" content="${BASE}"><meta name="cp-site" content="${SITE}">
<meta name="theme-color" content="#0a2a57">
<meta name="color-scheme" content="light dark">
<meta name="application-name" content="${BRAND}"><meta name="apple-mobile-web-app-title" content="${BRAND}">
<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">
<meta property="og:type" content="${ogType}"><meta property="og:site_name" content="${BRAND}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(canonical)}"><meta property="og:image" content="${U('og-image.png')}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="en_IN"><meta property="og:locale:alternate" content="hi_IN">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${U('og-image.png')}">
<link rel="icon" href="${BASE}favicon.svg" type="image/svg+xml"><link rel="icon" href="${BASE}icon-192.png" sizes="192x192" type="image/png"><link rel="icon" href="${BASE}icon-512.png" sizes="512x512" type="image/png">
<link rel="apple-touch-icon" href="${BASE}apple-touch-icon.png"><link rel="manifest" href="${BASE}manifest.webmanifest">
<link rel="preconnect" href="https://site.web.api.espn.com" crossorigin><link rel="dns-prefetch" href="https://a.espncdn.com">
<link rel="stylesheet" href="${BASE}app.css?v=${ver}">
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>
<script type="application/json" id="cp-heads">${JSON.stringify(HEADS).replace(/</g, '\\u003c')}</script>
</head>
<body>
<script>try{if(localStorage.getItem('cp_theme')==='dark'||(!localStorage.getItem('cp_theme')&&matchMedia('(prefers-color-scheme: dark)').matches))document.body.classList.add('dark')}catch(e){}</script>
<a class="sr-only" href="#app">Skip to content</a>
<header class="hdr">
 <div class="wrap hdr-top">
  <a class="logo" href="${BASE}" aria-label="${BRAND} home"><span class="ball"></span><span>Cric<b>Vega</b></span></a>
  <div class="search" role="search"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="q" type="search" autocomplete="off" placeholder="Search matches, teams, series, news…" aria-label="Search"><div id="sres" class="sres"></div></div>
  <select id="lang" class="hbtn" aria-label="Language"><option value="en">English</option></select>
  <button id="theme" class="hbtn" type="button" aria-label="Dark mode">🌙</button>
  <button id="install" class="hbtn install" type="button" aria-label="Install app">📲</button>
 </div>
 <nav class="nav" aria-label="Main"><div class="wrap">${NAV.map(([k, p, l]) => `<a href="${BASE}${p}" data-nav="${k}" data-k="${NAVK[k]}"${k === active ? ' class="on"' : ''}>${l}</a>`).join('')}</div></nav>
</header>
<div class="strip-w"><div class="wrap"><div id="strip" class="strip" aria-label="Today's matches"><div class="strip-empty">Loading live scores…</div></div></div></div>
<div class="wrap layout">
 <main id="app"${isStatic ? ' data-static="1" class="card prose" style="padding:18px"' : ''}>${main}</main>
 <aside id="side" aria-label="Sidebar"></aside>
</div>
${seo ? `<div class="wrap seo" id="seo"><section class="card"><div class="card-b">${seo}</div></section></div>` : ''}
<footer class="ftr"><div class="wrap">
 <div class="fgrid">
  <div><a class="logo" href="${BASE}" style="color:#fff;margin-bottom:8px"><span class="ball"></span><span>Cric<b>Vega</b></span></a><p data-k="footAbout">Fast live cricket scores, ball-by-ball commentary, full scorecards, schedules and news — in 6 languages.</p></div>
  <div><h4 data-k="quick">Quick Links</h4>${NAV.slice(1).map(([k, p, l]) => `<a href="${BASE}${p}" data-k="${NAVK[k]}">${l}</a>`).join('')}</div>
  <div><h4 data-k="info">Information</h4><a href="${BASE}about" data-full data-k="about">About</a><a href="${BASE}privacy-policy" data-full data-k="privacy">Privacy Policy</a><a href="${BASE}disclaimer" data-full data-k="disclaimer">Disclaimer</a><a href="${BASE}contact" data-full data-k="contact">Contact</a><a href="${BASE}terms" data-full>Terms of Use</a><a href="${BASE}blog" data-full>Blog</a></div>
  <div><h4>Top teams</h4>${['India', 'Australia', 'England', 'Pakistan', 'South Africa', 'New Zealand'].map(n => `<a href="${BASE}team/${slug(n)}">${n}</a>`).join('')}</div>
 </div>
 <div class="copy"><span>© ${YEAR} ${BRAND} · Developed by <b>Pawan Verma</b> · PAWANGAMINGSTUDIO</span><span data-k="dataNote">Match data: ESPN / Cricinfo public feed. News: ESPNcricinfo &amp; BBC Sport. All trademarks belong to their owners.</span></div>
</div></footer>
<script src="${BASE}app.js?v=${ver}" defer></script>
${AD_POP_SCRIPTS}
</body>
</html>
`;
}

/* ---------- data (dynamic mode) ---------- */
const API = 'https://site.web.api.espn.com';
async function get(u) { for (let i = 0; i < 3; i++) { try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0 CricVegaBuild' } }); if (r.ok) return await r.json(); } catch (e) { } await new Promise(r => setTimeout(r, 800)); } return null; }
function norm(e, lg) {
  const c = (e.competitions || [])[0]; if (!c) return null;
  const comps = (c.competitors || []).slice().sort((a, b) => (+a.order || 0) - (+b.order || 0)); if (comps.length < 2) return null;
  const type = ((e.status || {}).type) || ((c.status || {}).type) || {};
  const tm = x => ({ id: String(x.id || (x.team || {}).id || ''), name: dec((x.team || {}).displayName || 'TBC'), abr: (x.team || {}).abbreviation || '', score: dec(x.score || ''), winner: x.winner === true || x.winner === 'true', logo: (x.team || {}).logo || (((x.team || {}).logos || [])[0] || {}).href || '' });
  const t1 = tm(comps[0]), t2 = tm(comps[1]), round = dec(c.description || '').replace(/,.*$/, '');
  const st = type.state || 'pre';
  const m = { id: String(e.id), league: String(lg.id || ''), series: dec(lg.name || ''), t1, t2, round, state: st, status: dec((c.status || {}).summary || (e.status || {}).summary || ''), start: e.date || c.date, end: e.endDate || c.endDate, venue: dec(((c.venue || {}).fullName) || ''), type: dec(((c.class || {}).eventType) || ''), intl: String(((c.class || {}).internationalClassId) || '0') !== '0' };
  m.slug = slug(t1.name + ' vs ' + t2.name + ' ' + round); m.rel = 'match/' + m.id + '-' + m.slug;
  return m;
}
const rowHTML = m => `<a class="mrow" href="${BASE}${m.rel}"><div class="mh"><span>${esc([m.round, m.series].filter(Boolean).join(' • '))}</span></div>
<div class="trow"><span class="tn">${esc(m.t1.name)}</span><span class="ts">${esc(m.t1.score)}</span></div><div class="trow"><span class="tn">${esc(m.t2.name)}</span><span class="ts">${esc(m.t2.score)}</span></div>
<div class="ms">${esc(m.state === 'pre' ? fmtIST(m.start) : m.status)}</div></a>`;

function matchLD(m) {
  const ld = { '@type': 'SportsEvent', name: m.t1.name + ' vs ' + m.t2.name + (m.round ? ', ' + m.round : ''), sport: 'Cricket', startDate: m.start, eventStatus: 'https://schema.org/EventScheduled', eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', url: U(m.rel),
    competitor: [m.t1, m.t2].map(t => ({ '@type': 'SportsTeam', name: t.name })), superEvent: m.series ? { '@type': 'SportsEvent', name: m.series, url: U('series/' + m.league + '-' + slug(m.series)) } : undefined, organizer: undefined };
  if (m.end) ld.endDate = m.end;
  if (m.venue) ld.location = { '@type': 'Place', name: m.venue, address: m.venue };
  ld.description = m.status || (m.t1.name + ' vs ' + m.t2.name + ' cricket match');
  ld.image = [U('og-image.png')];
  return ld;
}
function crumbLD(items) { return { '@type': 'BreadcrumbList', itemListElement: items.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: u })) }; }

function scorecardHTML(sum) {
  const cards = sum && sum.matchcards || []; if (!cards.length) return '';
  const inns = {};
  cards.forEach(c => { const k = c.inningsNumber; (inns[k] = inns[k] || {})[c.headline] = c; });
  return Object.keys(inns).sort((a, b) => b - a).map(k => {
    const b = inns[k].Batting, w = inns[k].Bowling; let h = '';
    if (b) {
      h += `<h2 class="sec-h">${esc(dec(b.teamName))} innings — ${esc(b.runs)} ${esc(b.total)}</h2><div class="tbl"><table class="sc"><tr><th>Batter</th><th>R</th><th>B</th><th>4s</th><th>6s</th></tr>`
        + (b.playerDetails || []).filter(p => p.runs !== '').map(p => `<tr><td><a href="${BASE}player/${p.playerID}-${slug(p.playerName)}">${esc(dec(p.playerName))}</a><span class="d">${esc(dec(p.dismissal))}</span></td><td><b>${esc(p.runs)}</b></td><td>${esc(p.ballsFaced)}</td><td>${esc(p.fours)}</td><td>${esc(p.sixes)}</td></tr>`).join('')
        + `<tr><td>Extras</td><td colspan="4">${esc(b.extras || '')}</td></tr><tr class="tot"><td>Total</td><td colspan="4">${esc(b.runs)} ${esc(b.total)}</td></tr></table></div>`;
      const dnb = (b.playerDetails || []).filter(p => p.runs === '').map(p => esc(dec(p.playerName)));
      if (dnb.length) h += `<p class="small"><b>Did not bat:</b> ${dnb.join(', ')}</p>`;
    }
    if (w) h += `<div class="tbl"><table class="sc"><tr><th>Bowler (${esc(dec(w.teamName))})</th><th>O</th><th>M</th><th>R</th><th>W</th><th>Econ</th></tr>` + (w.playerDetails || []).map(p => `<tr><td><a href="${BASE}player/${p.playerID}-${slug(p.playerName)}">${esc(dec(p.playerName))}</a></td><td>${esc(p.overs)}</td><td>${esc(p.maidens)}</td><td>${esc(p.conceded)}</td><td><b>${esc(p.wickets)}</b></td><td>${esc(p.economyRate)}</td></tr>`).join('') + '</table></div>';
    return h;
  }).join('');
}
function matchPage(m, sum) {
  const nm = m.t1.name + ' vs ' + m.t2.name + (m.round ? ', ' + m.round : '');
  const kind = m.state === 'post' ? 'Scorecard & Result' : m.state === 'in' ? 'Live Score & Ball by Ball Commentary' : 'Live Score, Squads & Preview';
  const title = (m.state === 'in' ? '🔴 LIVE: ' : '') + nm + ' ' + kind + (m.state === 'post' && m.status ? ' – ' + m.status : '') + ' – ' + m.series + ' | ' + BRAND;
  const desc = m.state === 'post' ? `${nm} (${m.series}) result: ${m.status}. Full scorecard, fall of wickets, squads and match details.` : m.state === 'in' ? `${nm} live score (${m.series}): ${[m.t1.score, m.t2.score].filter(Boolean).join(' / ')}. Ball-by-ball commentary, scorecard and stats.` : `${nm} (${m.series}) on ${fmtIST(m.start)}${m.venue ? ' at ' + m.venue : ''}. Live score, squads, venue and match info.`;
  const notes = ((sum || {}).notes || []).filter(n => /toss|matchdays|hoursofplay/.test(n.type)).map(n => `<p><b>${esc(n.type === 'toss' ? 'Toss' : n.type === 'matchdays' ? 'Match days' : 'Hours of play')}:</b> ${esc(dec(n.text))}</p>`).join('');
  const squads = ((sum || {}).squads || []).filter(s => (s.athletes || []).length).map(s => `<h3>${esc(dec((s.team || {}).displayName || ''))} squad</h3><p class="small">${s.athletes.map(a => `<a href="${BASE}player/${a.id}-${slug(a.displayName)}">${esc(dec(a.displayName))}</a>${a.captain ? ' (c)' : ''}${a.keeper ? ' (wk)' : ''}`).join(', ')}</p>`).join('');
  const main = `<div data-pre><nav class="crumb"><a href="${BASE}">Home</a>›<a href="${BASE}series/${m.league}-${slug(m.series)}">${esc(m.series)}</a>›<span>${esc(m.round)}</span></nav>
<section class="card"><div class="mhead"><h1>${esc(nm)} – ${esc(kind)}</h1><div class="sub">${esc([m.type, m.venue, fmtIST(m.start)].filter(Boolean).join(' • '))}</div>
<div class="trow"><span class="tn">${esc(m.t1.name)}</span><span class="ts">${esc(m.t1.score)}</span></div><div class="trow"><span class="tn">${esc(m.t2.name)}</span><span class="ts">${esc(m.t2.score)}</span></div>
${m.status ? `<div class="status">${esc(m.status)}</div>` : ''}</div></section>
<section class="card"><div class="card-b"><p class="muted small">📡 Source: ESPN / Cricinfo public feed · Page updated: ${new Date().toISOString().slice(0, 10)} · Developed by Pawan Verma · PAWANGAMINGSTUDIO</p>
<p>${esc(nm)}${m.round ? ' (' + esc(m.round) + ')' : ''} ${esc(m.series)} ke antargat ${esc(m.type || 'cricket')} match hai${m.venue ? ', jo ' + esc(m.venue) + ' par khela ja raha hai' : ''}. Is page par aapko ${esc(m.t1.name)} aur ${esc(m.t2.name)} ka live score, ball-by-ball commentary, full scorecard, fall of wickets, squads, playing XI aur match information milti hai — CricVega par, bina login, bina app ke, har language mein. ${m.status ? esc(m.status) + '.' : 'Match shuru hote hi yeh page har ball par update hota hai.'}</p>${scorecardHTML(sum)}${notes}${squads}<p class="muted small">${esc(nm)} is part of <a href="${BASE}series/${m.league}-${slug(m.series)}">${esc(m.series)}</a>. This page updates live with ball-by-ball commentary when JavaScript is enabled.</p></div></section></div>`;
  return page({ rel: m.rel + '.html', canon: U(m.rel), title, desc, main, active: 'live-scores', jsonld: [crumbLD([['Home', U()], [m.series, U('series/' + m.league + '-' + slug(m.series))], [nm, U(m.rel)]])] });
}
function seriesPage(lid, name, list) {
  const rel = 'series/' + lid + '-' + slug(name);
  const title = name + ' – Schedule, Results, Live Scores & Points Table | ' + BRAND;
  const desc = name + ': complete fixtures and results (' + list.length + ' matches), live scores, scorecards and points table.';
  const main = `<div data-pre><nav class="crumb"><a href="${BASE}">Home</a>›<a href="${BASE}series">Series</a>›<span>${esc(name)}</span></nav><div class="pg-h"><h1>${esc(name)}</h1><p>Fixtures, results and live scores</p></div><section class="card">${list.map(rowHTML).join('')}</section></div>`;
  return page({ rel: rel + '.html', canon: U(rel), title, desc, main, active: 'series', jsonld: [crumbLD([['Home', U()], ['Series', U('series')], [name, U(rel)]])] });
}

/* ---------- build ---------- */
(async () => {
  let matches = [], news = [];
  const sitemap = new Map();   // url -> lastmod
  const today = new Date().toISOString().slice(0, 10);
  if (DYN) {
    const days = [null]; for (let i = 1; i <= 14; i++) days.push(ymd(-i), ymd(i));
    const panels = await Promise.all(days.map(d => get(API + '/apis/site/v2/sports/cricket/scorepanel' + (d ? '?dates=' + d : ''))));
    const seen = {};
    panels.forEach(j => (j && j.scores || []).forEach(s => { const lg = (s.leagues || [])[0] || {}; (s.events || []).forEach(e => { const m = norm(e, lg); if (m && !seen[m.id]) { seen[m.id] = 1; matches.push(m); } }); }));
    const nj = await get(API + '/apis/site/v2/sports/cricket/8676/news');
    news = ((nj && nj.articles) || []).map(a => ({ title: dec(a.headline || ''), link: (((a.links || {}).web || {}).href || '').replace(/^http:/, 'https:'), date: a.published })).filter(n => n.title && n.link).slice(0, 12);
    console.log('matches:', matches.length, 'news:', news.length);
  }
  const HEALTHY = matches.length >= 50;
  let seriesKept = new Set(); if (!HEALTHY) console.log('WARN: data degraded — keeping existing pages');
  const pri = m => (/\bindia\b/i.test(m.t1.name + m.t2.name) ? 0 : 4) + (m.intl ? 0 : 2);
  const live = matches.filter(m => m.state === 'in').sort((a, b) => pri(a) - pri(b));
  const up = matches.filter(m => m.state === 'pre').sort((a, b) => new Date(a.start) - new Date(b.start));
  const rec = matches.filter(m => m.state === 'post').sort((a, b) => new Date(b.start) - new Date(a.start));
  const sec = (h, list) => list.length ? `<section class="card"><div class="card-h"><h2>${h}</h2></div>${list.map(rowHTML).join('')}</section>` : '';
  const pre = {
    'home': `<div data-pre><h1 class="pg-h" style="font-size:22px;font-weight:900">${H1.home}</h1>${sec('Live Matches', live.slice(0, 8))}${sec('Upcoming Matches', up.slice(0, 8))}${sec('Recent Results', rec.slice(0, 8))}${news.length ? `<section class="card"><div class="card-h"><h2>Top Stories</h2></div>${news.map(n => `<a class="nitem" href="${esc(n.link)}" target="_blank" rel="noopener"><div><h3>${esc(n.title)}</h3></div></a>`).join('')}</section>` : ''}</div>`,
    'live-scores': `<div data-pre><div class="pg-h"><h1>${H1['live-scores']}</h1></div>${sec('Live', live)}${sec('Upcoming', up.slice(0, 15))}${sec('Recent', rec.slice(0, 15))}</div>`,
    'schedule': `<div data-pre><div class="pg-h"><h1>${H1.schedule}</h1></div>${sec('Upcoming', up)}</div>`,
    'results': `<div data-pre><div class="pg-h"><h1>${H1.results}</h1></div>${sec('Results', rec)}</div>`,
    'news': `<div data-pre><div class="pg-h"><h1>${H1.news}</h1></div>${news.length ? `<section class="card">${news.map(n => `<a class="nitem" href="${esc(n.link)}" target="_blank" rel="noopener"><div><h3>${esc(n.title)}</h3></div></a>`).join('')}</section>` : ''}</div>`,
    'series': `<div data-pre><div class="pg-h"><h1>${H1.series}</h1></div>${[...new Map(matches.map(m => [m.league, m])).values()].length ? `<section class="card"><div class="slist">${[...new Map(matches.map(m => [m.league, m])).values()].map(m => `<a href="${BASE}series/${m.league}-${slug(m.series)}"><span>${esc(m.series)}</span></a>`).join('')}</div></section>` : ''}</div>`,
    'teams': `<div data-pre><div class="pg-h"><h1>${H1.teams}</h1></div></div>`,
  };
  const FILES = { 'home': 'index.html', 'live-scores': 'live-scores.html', 'schedule': 'schedule.html', 'results': 'results.html', 'news': 'news.html', 'series': 'series.html', 'teams': 'teams.html' };
  for (const k in FILES) {
    const main = pre[k] || '';
    const jsonld = [crumbLD(k === 'home' ? [['Home', U()]] : [['Home', U()], [H1[k], U(k)]])];
    if (k === 'home') jsonld.push({ '@type': 'WebPage', '@id': U() + '#webpage', url: U(), name: HEADS.home[0], description: HEADS.home[1], isPartOf: { '@id': U() + '#website' }, inLanguage: 'en' });
    if (live.length || up.length) { const list = (k === 'results' ? rec : [...live, ...up]).slice(0, 20); if (list.length && k !== 'news' && k !== 'teams' && k !== 'series') jsonld.push({ '@type': 'ItemList', itemListElement: list.map((m, i) => ({ '@type': 'ListItem', position: i + 1, url: U(m.rel), name: m.t1.name + ' vs ' + m.t2.name + (m.round ? ', ' + m.round : '') })) }); }
    write(FILES[k], page({ rel: FILES[k], title: HEADS[k][0], desc: HEADS[k][1], main: main || `<div data-pre><div class="pg-h"><h1>${H1[k]}</h1></div></div>`, seo: SEO[k], jsonld, active: k }));
    sitemap.set(U(k === 'home' ? '' : k), { lastmod: today, pri: k === 'home' ? '1.0' : '0.9', freq: k === 'teams' ? 'weekly' : 'hourly' });
  }
  for (const k in INFO) {
    write(k + '.html', page({ rel: k + '.html', title: INFO[k][0], desc: INFO[k][1], main: INFO[k][2], isStatic: true, jsonld: [crumbLD([['Home', U()], [INFO[k][0].split(' – ')[0], U(k)]])] }));
    sitemap.set(U(k), { lastmod: today, pri: '0.3', freq: 'monthly' });
  }
  // app shell for deep links (match/series/team/player not prerendered)
  write('404.html', page({ rel: '404.html', canon: U(), title: BRAND + ' – Live Cricket Score', desc: HEADS.home[1], main: '<div class="card"><div class="card-b"><div class="spin"></div></div></div>', noindex: true }));
  // team pages (static shells with text)
  const TEAMS = ['India', 'Australia', 'England', 'Pakistan', 'South Africa', 'New Zealand', 'Sri Lanka', 'West Indies', 'Bangladesh', 'Afghanistan', 'Ireland', 'Zimbabwe'];
  if (DYN) for (const n of TEAMS) {
    const rel = 'team/' + slug(n), tm = matches.filter(m => m.t1.name === n || m.t2.name === n);
    write(rel + '.html', page({ rel: rel + '.html', canon: U(rel), title: n + ' Cricket Team – Live Score, Fixtures, Results & News | ' + BRAND, desc: n + ' cricket team live scores, upcoming matches, recent results and latest news.', active: 'teams',
      main: `<div data-pre><div class="pg-h"><h1>${esc(n)} Cricket Team</h1><p>Live scores, fixtures and results</p></div>${tm.length ? `<section class="card">${tm.map(rowHTML).join('')}</section>` : ''}</div>`, jsonld: [{ '@type': 'SportsTeam', name: n + ' national cricket team', sport: 'Cricket', url: U(rel) }, crumbLD([['Home', U()], ['Teams', U('teams')], [n, U(rel)]])] }));
    sitemap.set(U(rel), { lastmod: today, pri: '0.7', freq: 'daily' });
  }
  if (DYN && HEALTHY) {
    // match pages
    const todo = [...live, ...rec, ...up];
    for (let i = 0; i < todo.length; i += 6) {
      await Promise.all(todo.slice(i, i + 6).map(async m => { const sum = m.state === 'pre' && new Date(m.start) - Date.now() > 36 * 3600e3 ? null : await get(API + '/apis/site/v2/sports/cricket/' + m.league + '/summary?event=' + m.id); write(m.rel + '.html', matchPage(m, sum)); }));
    }
    // series pages
    seriesKept = new Set();
    const leagues = [...new Map(matches.map(m => [m.league, m.series])).entries()];
    for (const [lid, name] of leagues) {
      const y = new Date().getFullYear(), js = await Promise.all([y - 1, y, y + 1].map(yr => get(API + '/apis/site/v2/sports/cricket/' + lid + '/scoreboard?dates=' + yr)));
      const s = {}, list = []; js.forEach(j => (j && j.events || []).forEach(e => { const m = norm(e, (j.leagues || [])[0] || { id: lid, name }); if (m && !s[m.id]) { s[m.id] = 1; list.push(m); } }));
      list.sort((a, b) => new Date(a.start) - new Date(b.start));
      if (list.length) { write('series/' + lid + '-' + slug(name) + '.html', seriesPage(lid, name, list)); seriesKept.add(lid + '-' + slug(name) + '.html'); }
    }
  }
  // sirf current window ke match pages rakho — stale pages hamesha delete (bulletproof)
  if (DYN && HEALTHY) {
    const keep = new Set([...live, ...rec, ...up].map(m => m.rel.split('/').pop() + '.html'));
    const d = path.join(OUT, 'match'); if (fs.existsSync(d)) for (const f of fs.readdirSync(d)) { if (f.endsWith('.html') && !keep.has(f)) fs.unlinkSync(path.join(d, f)); }
    const ds = path.join(OUT, 'series'); if (fs.existsSync(ds)) for (const f of fs.readdirSync(ds)) { if (f.endsWith('.html') && !seriesKept.has(f)) fs.unlinkSync(path.join(ds, f)); }
  }
  // sitemap includes every prerendered page on disk
  for (const dir of ['match', 'series', 'team', 'blog']) {
    const d = path.join(OUT, dir); if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) if (f.endsWith('.html')) { const st = fs.statSync(path.join(d, f)); const u = f === 'index.html' ? U(dir) : U(dir + '/' + f.replace(/\.html$/, '')); if (!sitemap.has(u)) sitemap.set(u, { lastmod: st.mtime.toISOString().slice(0, 10), pri: dir === 'match' ? '0.8' : dir === 'blog' ? '0.7' : '0.7', freq: dir === 'match' ? 'hourly' : dir === 'blog' ? 'weekly' : 'daily' }); }
  }
  sitemap.set(U('terms'), { lastmod: today, pri: '0.3', freq: 'monthly' });
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...sitemap.entries()].map(([u, o]) => `<url><loc>${esc(u)}</loc><lastmod>${o.lastmod}</lastmod><changefreq>${o.freq}</changefreq><priority>${o.pri}</priority></url>`).join('\n')}\n</urlset>\n`);
  write('f3a9c1d8e6b24a7095d1.txt', 'f3a9c1d8e6b24a7095d1');
  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${U('sitemap.xml')}\n`);
  /* ---------- IndexNow: search engines ko turant auto-notify ---------- */
  try {
    const urls = [...sitemap.keys()].filter(u => /\/(match|series|blog|team)\//.test(u)).slice(0, 150);
    if (urls.length) {
      const KEY = 'f3a9c1d8e6b24a7095d1';
      await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host: 'cricvega.github.io', key: KEY, keyLocation: 'https://cricvega.github.io/' + KEY + '.txt', urlList: urls }) }).catch(() => {});
      console.log('IndexNow pinged', urls.length, 'urls');
    }
  } catch (e) { console.log('IndexNow note:', e.message); }


  // service worker: bump cache version on every build
  const swp = path.join(ROOT, 'sw.js');
  if (fs.existsSync(swp)) { const sw = fs.readFileSync(swp, 'utf8').replace(/const V='[^']*'/, `const V='cv-${ver}'`); write('sw.js', sw); }
  console.log('built', sitemap.size, 'urls ->', OUT, 'base', BASE, 'site', SITE);
})();
