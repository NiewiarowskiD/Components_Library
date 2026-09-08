# Daniel Niewiarowski — Frontend Engineer Portfolio

A personal portfolio and reusable UI component library built with **React**, **TypeScript**, **Tailwind CSS**, and **SCSS**. The site showcases a configurable component library alongside professional experience, skills, and tools — all presented in a dark, emerald-accented design with full multi-language support.

## Live Demo

**[https://components-library-git-main-daniel-niewiarowski.vercel.app/](https://components-library-git-main-daniel-niewiarowski.vercel.app/)**

## Features

- **Reusable UI Component Library** — 13 components with live previews, organized into four categories:
  - **Foundations**: Card, Button, Header, Text
  - **Forms & Inputs**: Input, Select, Switch
  - **Data Display**: Data Table, Accordion, Badge
  - **Feedback & Overlays**: Modal, Toast, Skeleton
- **Multi-language support** — English, Polish, and German, switchable via a dropdown in the top-right corner. Every label, description, and experience entry is fully translated.
- **Expandable experience section** — A timeline of professional roles with bullet-point descriptions, toggled by the "Experiences" button.
- **Responsive design** — Optimized for mobile, tablet, and desktop with a consistent 8px spacing system and Tailwind breakpoints.
- **Micro-interactions** — Hover states, smooth transitions, animated scroll indicator, and a pulsing "Open to Work" badge.

## Tech Stack

| Category | Technologies |
| --- | --- |
| Framework | React 18 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3, SCSS |
| Icons | Lucide React |
| Build Tool | Vite 5 |
| Backend | Supabase (provisioned, ready for data persistence) |

## Project Structure

```
src/
├── components/
│   ├── Accordion/          # Expandable content panels
│   ├── Badge/               # Status and label badges
│   ├── Button/             # Configurable buttons (solid/outline, sizes, colors)
│   ├── Card/                # Content containers
│   ├── DataTable/           # Sortable, paginated tables
│   ├── Header/              # Page header layouts
│   ├── Input/               # Text input fields
│   ├── LanguageSwitcher/    # EN / PL / DE dropdown
│   ├── Modal/               # Dialog overlays
│   ├── Select/              # Dropdown selects
│   ├── Skeleton/            # Loading placeholders
│   ├── Switch/              # Toggle switches
│   ├── Text/                # Typography primitives
│   └── Toast/               # Notification toasts with provider
├── hooks/
│   └── useClickOutside.ts   # Click-outside detection hook
├── i18n/
│   └── translations.ts      # All UI strings in EN / PL / DE
├── App.tsx                  # Main application
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

Each component folder follows a consistent pattern:

- `Component.tsx` — the reusable component with typed props
- `Component.scss` — component-scoped styles
- `ComponentPreview.tsx` — a live demo page showcasing configuration options
- `index.ts` — barrel export

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server starts automatically in this environment — no need to launch it manually.

### Build

```bash
npm run build
```

### Type Checking

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

## Components Overview

| Component | Key Props | Description |
| --- | --- | --- |
| Button | `text`, `icon`, `variant`, `color`, `size`, `rounded` | Solid or outline button with customizable appearance |
| Card | — | Flexible content container with header, body, and footer slots |
| Header | — | Configurable page header |
| Text | `content`, `color`, `size`, `weight`, `align`, `uppercase` | Typography primitive |
| Input | — | Text input with label and validation states |
| Select | — | Dropdown select with options |
| Switch | — | Toggle switch |
| Badge | — | Status and category badges |
| Accordion | — | Collapsible content sections |
| DataTable | — | Sortable, paginated data grid |
| Modal | — | Dialog overlay with backdrop |
| Toast | — | Auto-dismissing notifications (via ToastProvider) |
| Skeleton | — | Animated loading placeholders |

## Internationalization

The app supports three languages out of the box:

- **ENG** — English (default)
- **PL** — Polski
- **DE** — Deutsch

All translations live in `src/i18n/translations.ts`. To add a new language, extend the `Language` type and add a new entry to the `translations` record.

## Deployment

The project is configured for deployment on Vercel. The build output in `dist/` is static and can be served by any static host.

**Live deployment:** [https://components-library-git-main-daniel-niewiarowski.vercel.app/](https://components-library-git-main-daniel-niewiarowski.vercel.app/)

## Contact

- **Email**: daniel.niewiarowski@op.pl
- **LinkedIn**: [danielniewiarowski](https://www.linkedin.com/in/danielniewiarowski/)
- **Location**: Zurich, Switzerland

## License

This project is a personal portfolio. All rights reserved.
