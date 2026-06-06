# davidsebbag.com

Personal portfolio for David Sebbag — developer, maker, and problem-solver based in Perth, Western Australia.

Live at **[www.davidsebbag.com](https://www.davidsebbag.com)**

---

## What this is

A hand-built, single-page portfolio site. No frameworks, no CMS, no templates — written from scratch in vanilla HTML, CSS, and JavaScript, with a small React layer powering a live design tweaks panel.

It showcases selected projects, a skills marquee, and a contact section, all wrapped in a dark, typographic aesthetic built around the Boldonse display font and a teal accent palette.

---

## Stack

| Layer | Tech |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS with custom properties (`--accent`, `--bg`, etc.) |
| Interactions | Vanilla JS (`site.js`) — scroll reveals, 3D motif, smooth nav |
| Tweaks panel | React 18 + Babel (in-browser, no build step) |
| Fonts | Boldonse (display), Space Grotesk (body/mono) via Google Fonts |
| Hosting | GitHub Pages via CNAME → `www.davidsebbag.com` |

---

## Structure

```
/
├── index.html          # Main page — all sections live here
├── styles.css          # Full site stylesheet (CSS variables + responsive)
├── site.js             # Vanilla JS: 3D motif, scroll reveals, nav, marquee
├── global.css          # Reset / body defaults
├── tweaks-panel.jsx    # Reusable Tweaks UI shell and form controls
├── tweaks-app.jsx      # Site-specific tweak definitions (accent, bg, motif…)
├── Frame 6.svg         # Figma social icon
├── Frame 7.svg         # GitHub social icon
├── maker-world.svg     # MakerWorld social icon
├── glasseslogo 1.png   # Brand mark / favicon
├── 3dfidgets-thumb.png # Project thumbnail
├── CNAME               # GitHub Pages custom domain
└── README.md
```

---

## Features

- **3D rotating cube** — CSS `preserve-3d` with pointer-tracking and idle spin, fades out on scroll
- **Skills marquee** — seamless infinite scroll built in JS, pauses on hover
- **Scroll reveals** — `IntersectionObserver`-driven fade-up animations
- **Live tweaks panel** — accent colour, background variant, motif shape, motion speed, and heading font — all hot-swappable at runtime without a reload
- **Responsive** — collapses to single-column at 860px, further simplifies at 560px
- **Reduced motion** — respects `prefers-reduced-motion` throughout

---

## Sections

1. **Hero** — Name, kicker line, intro lede, social links
2. **Skills marquee** — Scrolling strip of skill tags
3. **About** — Self-description + what I work with / off-screen / how I work
4. **Work** — Four project cards: 3dfidgets.shop, WhatsApp Chess Bot, Better Beggars, 3-Stage Plan
5. **Contact** — Email CTA + social links
6. **Footer** — Brand, copyright, back to top

---

## Running locally

No build step needed. Just serve the files from a local server (so fonts and relative paths resolve correctly):

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`.

---

## Customising

Most visual settings are exposed through the **Tweaks panel** (bottom-right corner when active). For deeper changes:

- **Palette** — edit `--accent`, `--bg`, `--fg` in `:root` inside `styles.css`
- **Projects** — update the `.card` blocks in `index.html`
- **Skills** — edit the `skills` array in the inline `<script>` at the bottom of `index.html`
- **Tweak defaults** — edit `TWEAK_DEFAULTS` in `tweaks-app.jsx`

---

## AI Declaration

This is a transparent account of how AI tools were used in building this site. It exists because honesty about process matters — especially when the work is meant to represent what I can actually do.

### What AI helped with

**Ideation and iteration** — Early design direction was explored through conversation with AI, discussing layout approaches, colour palette logic, and typographic pairings. The final decisions were mine; AI was a sounding board, not a decision-maker.

**Code acceleration** — AI tools (primarily Claude) were used to speed up boilerplate and help debug tricky parts — particularly the CSS `preserve-3d` cube, the `IntersectionObserver` reveal system, and the seamless marquee loop. I wrote, read, tested, and modified every line of code in this site. Nothing was pasted in blindly.

**Copywriting drafts** — Some project descriptions were drafted with AI assistance and then edited to better reflect my actual voice and the real details of each project.

**This README** — Drafted with AI assistance based on the actual source files, then reviewed for accuracy.

### What AI did not do

- **Design decisions** — the visual direction, font choices, colour palette, layout structure, and spacing are my own. No AI-generated UI was used as a template.
- **The projects themselves** — 3dfidgets.shop, the WhatsApp Chess Bot, Better Beggars, and 3-Stage Plan were all built by me. AI was used as a coding assistant during development (as any developer might use docs, Stack Overflow, or a colleague), but the architecture, product decisions, and implementation are mine.
- **The brand mark** — the glasses logo is my own design.

### Why I'm declaring this

AI is a tool. Used well, it makes a solo developer faster. Used dishonestly, it produces work that doesn't reflect real skill.

I want anyone reading this — potential collaborators, clients, or employers — to know exactly what they're evaluating. The work on this site represents my thinking, my taste, and my ability to build things. AI was part of the process, not a replacement for it.

---

## License

Code is open for reference and learning. Please don't copy the design wholesale or use it as your own portfolio without meaningful changes.

© 2026 David Sebbag
