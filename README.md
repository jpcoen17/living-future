# 🏙️ Living Future — Luxury Real Estate Website

A premium, cinematic real estate website built with Next.js 15, TailwindCSS, and Framer Motion.

---

## ✨ Features

- **8 Full Pages**: Home, Properties, Property Detail, Virtual Tour, Map, Calculator, About, Contact
- **Cinematic UI** with parallax, ambient motion & mouse interactions
- **Glassmorphism** design language with gold accents
- **Framer Motion** page transitions & scroll animations
- **Custom Cursor** with smooth follower
- **Scroll Progress** indicator
- **Investment Calculator** with animated charts
- **Interactive SVG Map** with property markers
- **Virtual Tour** with mouse parallax viewer
- **Property Filter** (search, type, price range, city)
- **Fully Responsive** (mobile, tablet, desktop)
- **Dark-first** luxury aesthetic

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🗂️ Project Structure

```
living-future/
├── app/
│   ├── layout.tsx              # Root layout (navbar, footer, cursor)
│   ├── page.tsx                # Home page
│   ├── loading.tsx             # Global loading state
│   ├── not-found.tsx           # 404 page
│   ├── properties/
│   │   ├── page.tsx            # Property listing with filters
│   │   └── [id]/page.tsx       # Property detail page
│   ├── virtual-tour/page.tsx   # Immersive virtual tour
│   ├── map/page.tsx            # Interactive SVG map
│   ├── calculator/page.tsx     # Investment calculator
│   ├── about/page.tsx          # About company page
│   └── contact/page.tsx        # Contact & offices
│
├── components/
│   ├── Navbar.tsx              # Glassmorphism navbar
│   ├── Footer.tsx              # Full footer
│   ├── ui/
│   │   ├── PropertyCard.tsx    # Property card component
│   │   ├── SectionHeader.tsx   # Reusable section header
│   │   ├── CustomCursor.tsx    # Animated cursor
│   │   └── ScrollProgress.tsx  # Scroll progress bar
│   ├── sections/
│   │   ├── HeroSection.tsx     # Cinematic hero
│   │   ├── FeaturedProperties.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   └── animations/
│       └── PageTransition.tsx  # Framer Motion page wrap
│
├── data/
│   └── properties.ts           # All property data & mocks
│
├── hooks/
│   └── useScrollReveal.ts      # Scroll & mouse parallax hooks
│
├── lib/
│   └── utils.ts                # Utility helpers
│
└── styles/
    └── globals.css             # Global styles, tokens, animations
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#06070A` |
| Secondary Dark | `#0D1117` |
| Gold Accent | `#D6A85F` |
| Soft White | `#F5F5F5` |
| Emerald Glow | `#0E8F74` |
| Display Font | Clash Display |
| Body Font | Inter |
| Number Font | Satoshi |

---

## 📦 Tech Stack

- **Next.js 15** — App Router
- **TypeScript** — Type safety
- **TailwindCSS** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **Lucide React** — Icon library

---

## 🌐 Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, Featured, Testimonials, CTA |
| `/properties` | Listing with search & filters |
| `/properties/[id]` | Property detail with gallery & booking |
| `/virtual-tour` | Immersive room walkthrough |
| `/map` | Interactive SVG property map |
| `/calculator` | Mortgage & ROI calculator |
| `/about` | Company story, team, timeline |
| `/contact` | Contact form & office locations |

---

## 🔧 Customization

### Add a property
Edit `data/properties.ts` and add a new entry to the `PROPERTIES` array.

### Change colors
Edit `tailwind.config.ts` and `styles/globals.css` CSS variables.

### Change fonts
Update the `@import` URL in `styles/globals.css` and `fontFamily` in `tailwind.config.ts`.

---

Made with ❤️ for luxury living experiences.
