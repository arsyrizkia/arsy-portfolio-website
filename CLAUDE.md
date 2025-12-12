# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 portfolio website using the App Router with React 19.

### Key Technologies
- **Tailwind CSS v4** - Uses the new `@import "tailwindcss"` syntax and `@theme inline` for custom theme values
- **Framer Motion** - Used for scroll animations and transitions throughout components
- **lucide-react** - Icon library

### Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Inter font setup and Navigation component
  - `page.tsx` - Single-page portfolio assembling all sections
- `components/` - UI components (Navigation, Hero, Projects, Experience, Contact, Footer, ProjectCard)
- `lib/data.ts` - Static data exports for projects, experience, skills, and social links with TypeScript interfaces

### Styling Conventions

- Primary accent color: `#4573ff` (blue), secondary: `#ec5a29` (orange) - defined as CSS variables in `globals.css`
- Custom utility classes: `tracking-tight-custom`, `tracking-tighter-custom`, `avatar-glow`, `card-shadow`, `card-shadow-hover`
- Path alias: `@/*` maps to project root

### Data Types

All portfolio content is typed in `lib/data.ts`:
- `Project` - id, title, description, image, tags, liveUrl?, githubUrl?
- `Experience` - id, role, company, period, description, technologies
- `SocialLink` - name, url, icon
