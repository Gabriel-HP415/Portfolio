# Portfolio Design Specification — Nong Hung Phi

> **Design System:** Kinetic Precision (extends `UI/*/DESIGN.md`)  
> **Stack:** React 19 + Vite + Tailwind CSS v4 + Framer Motion  
> **Target:** Backend Developer Intern — recruiter scan in ≤10 seconds

---

## 1. Portfolio Storytelling (Recruiter Journey)

| Second | What recruiter sees | Psychological signal |
|--------|---------------------|----------------------|
| 0–3s | Name + role + typing line + primary CTA | Identity clarity, backend focus |
| 3–6s | Hero visual + tech marquee | Technical depth, not template |
| 6–10s | First project card + impact metric | Real engineering, measurable outcomes |
| 10–30s | Skills dashboard + timeline | Structured learning, honest proficiency |
| 30s+ | Project case studies + approach | Problem-solving, growth mindset |

**Narrative arc:** *Who I am → What I build → How I think → Proof → Contact*

---

## 2. Information Architecture & Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│ [Scroll Progress]                    [⌘K Command Palette]   │
├─────────────────────────────────────────────────────────────┤
│ NAV: BACKEND_PORTFOLIO | Capabilities Projects Approach... │
├─────────────────────────────────────────────────────────────┤
│ HERO (100vh min)                                            │
│  [Badge] Backend Engineer Portfolio                         │
│  Nong Hung Phi                    │  [Avatar / 3D visual]     │
│  Backend Developer Intern         │  Grid + glow + float    │
│  > typing animation...            │                         │
│  [View Projects] [Download CV] [Contact]                    │
├─────────────────────────────────────────────────────────────┤
│ TECH MARQUEE (infinite scroll)                              │
├─────────────────────────────────────────────────────────────┤
│ TERMINAL WIDGET (mini)                                      │
├─────────────────────────────────────────────────────────────┤
│ ABOUT — quote + 4 pillars + career timeline                 │
├─────────────────────────────────────────────────────────────┤
│ SKILLS — 5 glass cards + honest progress bars               │
├─────────────────────────────────────────────────────────────┤
│ PROJECTS — featured cards + expandable case study modal     │
├─────────────────────────────────────────────────────────────┤
│ APPROACH — philosophy + 3 principles (from UI/approach)     │
├─────────────────────────────────────────────────────────────┤
│ EXPERIENCE — vertical timeline + coursework chips           │
├─────────────────────────────────────────────────────────────┤
│ GITHUB ACTIVITY — contribution heatmap style                │
├─────────────────────────────────────────────────────────────┤
│ CONTACT — form + social links                               │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Routing:** Single-page with hash/scroll anchors (`#projects`, `#skills`, …). Optional future split pages mirror `UI/` folders.

---

## 3. Color Palette (Kinetic Precision + User Brief)

| Token | Hex | Usage |
|-------|-----|--------|
| `background` | `#051424` | Page base (≈ `#0F172A` family) |
| `surface-container-low` | `#0d1c2d` | Cards |
| `primary-container` | `#7dd3fc` | CTA, glow (Neon Blue) |
| `secondary` | `#cebdff` | Accent (Purple) |
| `surface-tint` | `#7bd1fa` | Cyan glow highlights |
| `on-surface` | `#d4e4fa` | Primary text |
| `on-surface-variant` | `#bec8ce` | Secondary text |
| `outline-variant` | `#3f484e` | Ghost borders (10% opacity) |

**Gradients:** `radial-gradient` top-right cyan 15%, bottom-left violet 10%.

---

## 4. Typography System

| Role | Font | Size (desktop) | Weight |
|------|------|----------------|--------|
| Display | Space Grotesk | 64px | 700 |
| Headline LG | Space Grotesk | 48px | 600 |
| Headline MD | Space Grotesk | 32px | 600 |
| Body LG | Inter | 18px | 400 |
| Body MD | Inter | 16px | 400 |
| Label / Code | JetBrains Mono | 12–14px | 500 |

*User requested Poppins — use Inter for body (UI baseline); Poppins optional for subtitle only.*

---

## 5. Component Structure (React)

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── navigation.ts
├── hooks/
│   ├── useTypingEffect.ts
│   ├── useScrollProgress.ts
│   ├── useMouseGlow.ts
│   └── useCommandPalette.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── AmbientBackground.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── GlassCard.tsx
│   │   ├── SkillBar.tsx
│   │   └── SectionHeader.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TechMarquee.tsx
│   │   ├── TerminalWidget.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Approach.tsx
│   │   ├── Experience.tsx
│   │   ├── GitHubActivity.tsx
│   │   └── Contact.tsx
│   └── features/
│       ├── CommandPalette.tsx
│       ├── ProjectModal.tsx
│       └── ThemeToggle.tsx
```

---

## 6. Section Specifications

### 6.1 Hero
- **Layout:** 50/50 split desktop; stack mobile
- **Typing:** 3 phrases, 80ms char, 2s pause, delete 40ms
- **CTAs:** Primary solid `primary-container`; ghost secondary; tertiary outline
- **Background:** CSS grid 40px, noise overlay 3%, floating `{ }`, `</>`, `API` icons
- **Avatar:** Glass circle + `dns` icon or photo with cyan ring glow

### 6.2 About
- Editorial quote (centered)
- 4 pillars: Problem Solving | Backend Mindset | Fast Learner | Teamwork
- Timeline: 2022 Foundation → 2023 Backend focus → 2024 Projects → 2025 Intern ready

### 6.3 Skills
- Groups: Backend, Frontend, Database, Tools, Networking & Security
- Progress: **honest** (Java 85%, Spring 75%, React 70%, Security 60%…)
- Hover: border brighten + `box-shadow` cyan/violet 8%

### 6.4 Projects (Recruiter Format)
Each project object:
```ts
{
  title, thumbnail, stack[], github, demo?,
  impact: string,  // one-line metric
  problem, solution, technologies, challenges, results, learned
}
```

**Sample projects (placeholder — user replaces URLs):**
1. REST API + JWT Auth — Spring Boot + MySQL
2. E-commerce Backend — layered architecture
3. Real-time Chat API — WebSocket
4. Network Security Lab — packet analysis mini tool
5. Android Task Manager — SQLite + Room

### 6.5 Experience
- Education: B.S. Information Technology
- Coursework chips: OOP, DB, Web, Networking, OS, Security, Cloud, Data Mining, AI
- Certifications / hackathons / self-learning nodes on timeline

### 6.6 Extra Features
| Feature | Behavior |
|---------|----------|
| Scroll progress | 2px top bar, `primary-container` gradient |
| Command palette | `Ctrl+K` / `⌘K` — jump to section |
| Terminal | Auto-type `whoami`, `skills --list`, `open projects` |
| Marquee | Duplicated tech logos/text, 40s linear infinite |
| GitHub | Grid 52×7 mock or API later |
| Theme toggle | Dark default; light optional (muted) |
| Mouse glow | Radial gradient follows cursor (desktop only) |

---

## 7. Animation Guidelines

| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Section fade-in | 0.6s | ease-out | `whileInView` once |
| Card hover lift | 0.3s | ease | `translateY(-4px)` |
| Button hover | 0.2s | ease | brightness + inner glow |
| Typing | per-char | linear | see Hero |
| Marquee | 40s | linear | infinite |
| Floating icons | 6s | ease-in-out | alternate |

**Avoid:** parallax overload, >3 simultaneous loops, 100% skill bars.

---

## 8. Responsive Breakpoints

| Breakpoint | Layout changes |
|------------|----------------|
| `<768px` | Hamburger nav, single column hero, 1-col skills |
| `768–1024px` | 2-col skills, stacked project cards |
| `>1024px` | Full split hero, 3-col capability preview |

Sticky mobile nav with blur glass.

---

## 9. Recruiter-Focused UX Copy Principles

- **Action verbs:** Built, Designed, Optimized, Implemented, Reduced
- **Metrics:** "35% faster API", "100+ authenticated users", "12 normalized tables"
- **Avoid:** "I made a website", passive voice, skill dump without context

---

## 10. Implementation Mapping to Existing UI

| UI folder | React section |
|-----------|---------------|
| `UI/home page` | Hero + About + Skills preview |
| `UI/project page` | Projects |
| `UI/experience page` | Experience |
| `UI/approach page` | Approach |
| `UI/inbox` | Contact |

---

## 11. Assets Checklist

- [ ] Professional photo or abstract avatar
- [ ] `public/cv-nong-hung-phi.pdf`
- [ ] Project thumbnails (1200×630)
- [ ] GitHub username for live contribution graph
- [ ] Real project URLs

---

*Generated for implementation in `/web` — React + Tailwind.*
