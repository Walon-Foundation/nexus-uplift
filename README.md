# Nexus Uplift Foundation

**Science-based health education for children. Replacing myths with medical facts — one child at a time.**

Nexus Uplift Foundation is a non-profit organisation based in Freetown, Sierra Leone. We run community workshops that teach children and their caregivers the real causes, real symptoms, and real treatments for common health conditions — directly addressing the cultural superstitions that delay treatment and cost lives.

---

## Why This Exists

In many communities, asthma is called a spiritual attack. Depression is dismissed as weakness or sin. Stomach ulcers are blamed on witchcraft. These beliefs are not harmless — they stop families from seeking treatment until it is too late.

Nexus Uplift was founded after a child died from a treatable asthma attack while the family sought a spiritual cure. This website is the public face of that mission: a place where communities, partners, volunteers, and supporters can learn about our work and get in touch.

---

## What the Site Covers

| Page | Purpose |
|------|---------|
| **Home** | Full overview — hero, mission pillars, health topics, impact stats, testimonials, call to action |
| **About** | Foundation story, mission & vision, core values, team profiles |
| **Contact** | Form for volunteers, educators, healthcare professionals, partner organisations, and press |
| **Privacy Policy** | Data handling and user privacy |
| **Terms of Service** | Usage terms for the site |

### Health Topics We Plan to Cover

- **Asthma** — airway inflammation, trigger management, inhaler use
- **Mental Health** — depression, anxiety, emotion literacy, destigmatisation
- **Peptic Ulcer** — H. pylori bacteria, symptoms, antibiotic treatment
- **Malaria & Fever** — Plasmodium parasite, mosquito nets, treatment
- **Anaemia** — iron deficiency, nutrition, fatigue
- **Oral Health** — tooth decay, brushing, fluoride

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| 3D | Three.js · @react-three/fiber · @react-three/drei |
| UI Primitives | Radix UI (Dialog, Dropdown, Navigation, Toast, Label) |
| Icons | Lucide React |
| Theming | next-themes (light / dark / system) |
| Fonts | Geist Sans · Geist Mono (Google Fonts) |
| Runtime | React 19 |
| PWA | Web App Manifest · Service Worker |

---

## Project Structure

```
nexus-uplift/
├── app/
│   ├── layout.tsx          # Root layout — Navbar, Footer, ThemeProvider, PWA
│   ├── page.tsx            # Homepage (composes all sections)
│   ├── globals.css         # Global styles, CSS variables, keyframe animations
│   ├── about/page.tsx      # About page — story, team, values
│   ├── contact/page.tsx    # Contact page — form + contact details
│   ├── privacy/page.tsx    # Privacy Policy
│   └── terms/page.tsx      # Terms of Service
│
├── components/
│   ├── Navbar.tsx          # Responsive navigation with mobile menu
│   ├── Footer.tsx          # Site footer with links and legal
│   ├── ThemeProvider.tsx   # Wraps next-themes provider
│   ├── ScrollProgress.tsx  # Thin progress bar at the top of the viewport
│   ├── LogoMark.tsx        # SVG logo mark component
│   ├── ServiceWorkerRegistrar.tsx  # Registers the PWA service worker
│   │
│   ├── sections/           # Homepage sections
│   │   ├── Hero.tsx        # Animated hero with gradient mesh and featured quote
│   │   ├── Mission.tsx     # Mission statement and four founding pillars
│   │   ├── HealthTopics.tsx # Dark glass-card grid of all six health topics
│   │   ├── Stats.tsx       # Animated counting stat blocks
│   │   ├── Testimonials.tsx # Participant testimonials carousel/grid
│   │   └── CTA.tsx         # Call-to-action section
│   │
│   ├── three/
│   │   └── HeroScene.tsx   # Three.js 3D scene used in the hero section
│   │
│   └── ui/                 # Reusable low-level primitives
│       ├── button.tsx      # Button with variant/size props (CVA)
│       ├── card.tsx        # Card, CardHeader, CardContent, CardFooter
│       └── badge.tsx       # Badge with variant props
│
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
│
├── public/
│   ├── logo.png            # Full logotype
│   ├── logo-mark.svg       # Icon-only mark
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── manifest.json       # PWA manifest
│   ├── sw.js               # Service worker
│   └── icons/              # PWA icon set (192×192, 512×512)
│
└── scripts/
    └── gen-favicon.mjs     # Script to regenerate favicon assets from source
```

---

## Getting Started

### Prerequisites

- **Node.js** 20 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Install & Run

```bash
# Clone
git clone https://github.com/Walon-Foundation/nexus-uplift.git
cd nexus-uplift

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Design Notes

- **Colour system** — Built on CSS custom properties (`--primary`, `--foreground`, `--muted`, etc.) that swap between light and dark themes automatically.
- **Animations** — Framer Motion powers all entrance animations. Each section uses `useInView` so animations only fire once as the user scrolls down.
- **PWA** — The site registers a service worker on first load and includes a full `manifest.json`, making it installable on mobile devices.
- **Typography** — Geist Sans for body/UI text, Geist Mono for any monospaced content.
- **3D** — The Hero section optionally mounts a Three.js scene (`HeroScene.tsx`) rendered via `@react-three/fiber`. This degrades gracefully if WebGL is unavailable.

---

## Contributing

This repository is not open to external contributions. See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## Contact

**Nexus Uplift Foundation**
Freetown, Sierra Leone

- Email: hello@nexusuplift.org
- Phone: +232 76 000 0000
- Web contact form: [nexusuplift.org/contact](https://nexusuplift.org/contact)

---

## License

All code, content, design, and assets in this repository are the exclusive property of **Nexus Uplift Foundation**. See [LICENSE](./LICENSE) for full terms.
