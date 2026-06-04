# JCB Tech Solutions — Website Template

A production-ready React + Vite one-page business website.  
Fully componentized, SEO-optimized, and designed to be customized per client in minutes.

## Tech Stack
- React 18 + Vite
- CSS Modules (zero runtime CSS-in-JS)
- react-helmet-async for dynamic SEO meta
- Schema.org JSON-LD structured data in index.html
- Deployed via Vercel

## Project Structure

```
src/
├── data/
│   └── siteConfig.js     ← ✏️  EDIT THIS to customize any client site
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── Services.jsx / .module.css
│   ├── Process.jsx / .module.css
│   ├── WhyUs.jsx / .module.css
│   ├── Testimonials.jsx / .module.css
│   ├── CTA.jsx / .module.css
│   └── Footer.jsx / .module.css
├── App.jsx
├── main.jsx
└── index.css             ← CSS variables / global tokens
```

## To Customize for a New Client

1. Open `src/data/siteConfig.js`
2. Update `company`, `hero`, `services`, `process`, `whyUs`, `testimonials`, `cta`
3. Update meta tags + JSON-LD in `index.html`
4. Run `npm run build` and deploy

That's it — no other files need to change.

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option B — GitHub Import
1. Push this folder to a GitHub repo
2. Go to vercel.com → "Add New Project"
3. Import the repo → Vercel auto-detects Vite
4. Click Deploy

### Option C — Drag & Drop
1. Run `npm run build`
2. Go to vercel.com/new
3. Drag the `dist/` folder onto the page

## Custom Domain
After deploying: Vercel Dashboard → Project → Settings → Domains → Add `jcbtechsolutions.com`

## SEO Checklist
- [x] Semantic HTML (main, section, article, figure, h1-h3)
- [x] Meta description + keywords in index.html
- [x] Open Graph + Twitter Card tags
- [x] Canonical URL
- [x] Schema.org LocalBusiness JSON-LD
- [x] Mobile-first responsive layout
- [x] Fast load — no heavy dependencies
- [ ] Add sitemap.xml after deploying
- [ ] Submit to Google Search Console
- [ ] Add real client photos / before-after screenshots
