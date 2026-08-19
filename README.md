# CamCO — Certificate of Origin (Ministry of Commerce, Cambodia)

Public landing site for CamCO, the national platform for issuing and
verifying digital Certificates of Origin, operated by the Ministry of
Commerce, Kingdom of Cambodia.

React + Vite + Tailwind CSS v4 + React Router. Bilingual (EN / ខ្មែរ),
mobile-first, WCAG 2.1 AA–oriented.

> **Status:** preview build. Stats, fees and announcements currently show
> **demo data** — replace with the Ministry's official figures via the data
> files in `src/data/` before production launch.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Structure

- `src/pages/` — one file per route (see `src/App.jsx` for the route map)
- `src/components/layout/` — government top bar, header/nav, footer, mobile sticky bar
- `src/components/home/` — the 14 homepage sections
- `src/data/` — services catalogue, FAQ, announcements, form list (single source of truth)
- `src/config/links.js` — the four portal URLs (Exporter / Buyer / Freight Forwarder / Admin)
- `src/context/LocaleContext.jsx` — EN/KM translation + text-resize (A/A+)

## Portals

Three of the four portals are external redirects configured in
`src/config/links.js`. The Buyer portal is served from this same app
(`/login`, `/register-buyer`) — see the comment in that file for why.
