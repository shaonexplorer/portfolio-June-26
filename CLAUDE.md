# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs at http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint` (uses ESLint with Next.js config)
- **Run type checking**: `npx tsc --noEmit`

## Code Architecture

### Project Structure
- `src/app/` - Next.js App Router pages and route handlers
  - `page.tsx` - Home page
  - `dashboard/page.tsx` - Dashboard page
  - `api/chat/route.ts` - Chat API endpoint using AI SDK
  - `layout.tsx` - Root layout with sidebar provider and toaster
  - `globals.css` - Global CSS with Tailwind imports
- `src/components/` - Reusable UI components
  - `ui/` - Shadcn/ui based components (button, input, card, etc.)
  - `ai-elements/` - AI-specific components (message, artifact, code-block, etc.)
  - `app-sidebar.tsx` - Main application sidebar
- `src/modules/` - Feature-specific modules
  - `chat/` - Chat interface components (Chat.tsx, chat-bot.tsx)
  - `Hero/` - Landing page hero section
  - `AboutSection/` - About me section
  - `aboutMe/AboutMe.tsx` - Journey timeline with certifications (Programming Hero Bootcamp, Junior MERN Developer at SoftVence, Scrimba AI Engineer Path, Claude Code for Professional Developers)
  - `NavBar/` - Navigation and floating dock
- `src/hooks/` - Custom React hooks (e.g., `use-mobile.ts`)
- `src/lib/` - Utility functions and helpers
- `public/` - Static assets

### Key Technologies
- **Framework**: Next.js 16.2.6 with App Router
- **Styling**: Tailwind CSS 4.0 with custom CSS variables
- **UI Library**: Shadcn/ui components via `@radix-ui` primitives
- **AI Integration**: AI SDK with providers for Google, HuggingFace, and OpenAI
- **State Management**: React hooks and context (via SidebarProvider)
- **TypeScript**: Strict type checking enabled

### Common Patterns
- Component composition using `class-variance-authority` and `tailwind-merge`
- AI streaming responses handled through AI SDK hooks
- Modular organization separating UI primitives from feature modules
- Custom font loading using `next/font` for Geist font family
- Dark mode support through Tailwind's dark variant

## AboutMe Component Notes

The `src/modules/aboutMe/AboutMe.tsx` component displays a journey timeline with the following certifications:

1. **Programming Hero Bootcamp | Certification Completion** (Jan 2025)
   - Advanced Frontend Engineering, Robust Backend Architectures, Database Design & Management, Security & Identity Control, Real-World Deliverables

2. **Junior MERN Developer at SoftVence** (Jan 2026 – Apr 2026)
   - API Engineering, Frontend Architecture (DevOps Automation is commented out)

3. **Scrimba AI Engineer Path | Certification Completion** (May 2026)
   - AI-First Products, Contextual Memory

4. **Claude Code for Professional Developers | Certification Completion** (July 2026)
   - AI-Assisted Development, Professional Workflows