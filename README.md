# Mursal Hayat — Portfolio

Editorial, motion-rich portfolio site built around a **WebGL split-face shader** experience — a Japanese samurai × editorial aesthetic in a black (`#0A0A0A`), oxblood (`#8B0F1D`) and vermillion (`#B91729`) palette.

**Live site:** https://mursalhayat.vercel.app

---

## Features

- **WebGL split-face hero** — liquid ripple displacement, chromatic aberration, film grain, per-side dim/desaturation and rim glow, driven by a depth map
- **Custom 3D model** — samurai GLB (`mursal-samurai.glb`) rendered with OGL
- **GSAP + ScrollTrigger** — split-line mask reveals, marquees and scroll-driven scenes
- **Lenis** — smooth inertia scrolling
- **Splitting.js** — per-character/per-word text animation hooks
- **Baked noise & tweak panel** — prebaked shader noise plus a runtime tweak panel for tuning the effect
- **SEO & social ready** — Open Graph tags, canonical URL, web manifest, PWA touch icons, `og.jpg` preview
- **Vercel Analytics + Speed Insights** integrated

## Tech Stack

| Layer | Technology |
|---|---|
| Build | Vite 8 (Rolldown), production build committed under `assets/` |
| Rendering | WebGL via OGL, custom GLSL shaders |
| Animation | GSAP, ScrollTrigger, Splitting.js |
| Scrolling | Lenis |
| Analytics | @vercel/analytics, @vercel/speed-insights |
| Assets | GLB model, depth map, SVG ornaments, webfonts, shamisen audio theme |

## Repository Layout

```
index.html            # Entry point with all SEO/meta + markup
assets/               # Vite build output (JS/CSS bundles), 3D model,
                      # textures, fonts, frames, audio, icons
site.webmanifest      # PWA manifest
*.js (root)           # Small dev utilities (name/module scanners)
```

## Getting Started

```bash
# Clone
git clone https://github.com/mursalhayat1/Portfolio.git
cd Portfolio

# Serve locally (http-server on :3000)
npm install
npm run dev

# Or serve statically
npx serve .
```

Then open http://localhost:3000 in your browser.

## License

Distributed under the [MIT License](LICENSE).
