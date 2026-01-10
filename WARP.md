# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts Vite dev server with HMR (Hot Module Replacement)

### Building for Production
```bash
npm run build
```
Runs TypeScript compiler (`tsc -b`) followed by `vite build`. Build output goes to `dist/`

### Linting
```bash
npm run lint
```
Runs ESLint on the codebase

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally

## Architecture Overview

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS with semantic colors plugin
- **Animation**: React Spring
- **Deployment**: Vercel with serverless functions

### Project Structure

**Core Application**
- `src/main.tsx` - Application entry point with `LayoutProvider` wrapper
- `src/App.tsx` - Router setup and main navigation, includes theme toggle and layout components
- `src/components/` - All React components
- `src/hooks/` - Custom React hooks (e.g., `use-boop.tsx`)
- `src/assets/` - Icons and design tokens (e.g., `BaseColors.ts`, `radicle-icons.tsx`)

**API Layer**
- `api/micropub.js` - Serverless function for creating notes via Micropub protocol, uses Octokit to commit to GitHub
- `api/deploy-succeeded.js` - Vercel deployment hook
- `vercel.json` - Routing config for SPA and API endpoints

**Configuration**
- `tailwind.config.js` - Tailwind configuration with semantic colors, custom fonts (Libre Franklin, Gentium Book Plus), and writing-mode utilities
- `vite.config.ts` - Vite configuration with relative asset paths for production
- `eslint.config.js` - ESLint config with TypeScript and React hooks support

### Key Architectural Patterns

**Layout System (Context.tsx)**
The app uses a centralized layout context (`LayoutContext`) that manages:
- `fontSize` - Base font size for scaling
- `basePadding` - Responsive padding based on viewport width
- `userPaddingOffset` - User-adjustable padding offset
- Responsive breakpoints: `<600px` → 6px, `600-1200px` → 12px, `>1200px` → 16px padding

**Theme System**
- Uses CSS variables and `data-theme="dark"` attribute (see tailwind config)
- Theme preference stored in localStorage
- Toggle implemented in `App.tsx` (FixedLeft component)
- Root element gets `.dark` class for Tailwind dark mode

**Routing Structure**
- `/` - Home page with portfolio content
- `/project` - Project showcase (Auto, Radicle Design System, Polkadot Dashboard)
- `/about` - About page
- `/with-desktop` - Alternative project view including Radicle Desktop App
- `/notes` - Notes section (placeholder)

**Component Patterns**
- `Project.tsx` - Reusable project case study wrapper
- `Section.tsx` - Content section component
- `RouteLayout.tsx` - Layout wrapper for routes with configurable gap and padding
- `Separator.tsx` - Horizontal/vertical separators
- `ErrorBoundary.tsx` - Error handling wrapper
- `Boop.tsx` - Animation wrapper using React Spring
- Reuse components instead of creating new ones when possible

**Serverless API**
The Micropub endpoint (`api/micropub.js`) accepts POST requests with bearer token auth, creates timestamped markdown files in `notes/` directory, and commits them to GitHub using Octokit.

### TypeScript Configuration
- `tsconfig.json` - References separate app and node configs
- `tsconfig.app.json` - Main application config
- `tsconfig.node.json` - Vite/Node tooling config

### Styling Approach
- Tailwind with semantic color system (primary, inverted, secondary, light)
- Custom utilities for vertical/horizontal writing modes
- Global transition utilities applied to divs and paragraphs
- Custom scrollbar hiding utilities
