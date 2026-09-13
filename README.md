# Abir Hasan Khan — AI Portfolio

> A Next.js 16 portfolio and AI chatbot built with shadcn/ui, GSAP animations, and the AI SDK.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

## Overview

This is the personal portfolio website of **Abir Hasan Khan** (Jr. MERN Developer), featuring a fully responsive, dark-mode-first design with smooth GSAP-powered scroll animations, a shadcn/ui component system, and an **AI-powered chatbot** integrated into a collapsible sidebar. The chatbot is wired to a streaming AI backend (HuggingFace / Google Gemini) and is primed to answer questions about the developer's experience, skills, and projects.

![hero preview](https://via.placeholder.com/800x400/1e293b/ffffff?text=Abir+Hasan+Khan+%7C+AI+Portfolio)

## Features

### Portfolio Website
- **Hero Section** — Gradient text headline, animated profile image, and text-flip subtitle showcasing roles.
- **About Me Timeline** — A vertical journey timeline with certification cards (Programming Hero, SoftVence, Scrimba, Code with Mosh), including "My Mission" and "What I Love Building" cards.
- **Skills Showcase** — Horizontal bar visualization grouped by Frontend, Backend, and AI & Services with gradient icon badges and scroll-triggered animations.
- **Projects Grid** — Curated full-stack project cards with hover animations, diagonal-cut overlays, live demo & GitHub links, and a detailed modal dialog.
- **Contact Section** — Contact information with an interactive contact form.

### AI Chatbot
- **Streaming Chat UI** — Built with `@ai-sdk/react` and custom `ai-elements` components.
- **Sidebar Integration** — Chat window lives in a collapsible right sidebar (`AppSidebar`).
- **Multi-Provider Support** — HuggingFace (default), Google Gemini, and OpenAI via the AI SDK.
- **Suggested Prompts** — Quick-reply suggestions for common questions.

### Technical Highlights
- **Next.js App Router** with Server Components and API routes.
- **shadcn/ui** component library with Radix UI primitives.
- **GSAP ScrollTrigger** for entry and hover animations.
- **Dark mode** with `next-themes` and Tailwind CSS 4.
- **Responsive design** — Mobile-first, fully responsive across all devices.
- **TypeScript** — Strict type checking throughout.

## Tech Stack

| Category         | Technology                                      |
| ---------------- | ----------------------------------------------- |
| **Framework**    | Next.js 16.2.6 (App Router)                     |
| **Language**     | TypeScript 5.x                                  |
| **Styling**      | Tailwind CSS 4, `tailwind-merge`, `clsx`        |
| **UI Library**   | shadcn/ui, Radix UI, Tabler Icons, Lucide       |
| **AI SDK**       | `ai` (v6), `@ai-sdk/google`, `@ai-sdk/huggingface`, `@ai-sdk/openai` |
| **Animations**   | GSAP 3.15 (ScrollTrigger)                       |
| **Forms**        | React Hook Form, Zod                            |
| **State**        | React hooks, Context API (`SidebarProvider`)    |
| **Fonts**        | Geist (Sans & Mono), Inter                      |
| **Deployment**   | Vercel (optimized for Next.js)                  |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint (streaming)
│   ├── globals.css               # Tailwind imports + custom CSS variables
│   ├── layout.tsx                # Root layout (sidebar, dock, theme provider)
│   ├── loading.tsx               # Loading spinner
│   └── page.tsx                  # Home page (Hero → About → Skills → Projects → Contact)
├── components/
│   ├── ai-elements/              # AI chat UI primitives (message, conversation, prompt-input)
│   ├── ui/                       # Shadcn/ui components (button, card, dialog, badge, etc.)
│   └── app-sidebar.tsx           # Right sidebar containing the Chat component
├── hooks/
│   └── use-mobile.ts             # Mobile viewport breakpoint hook
├── lib/
│   └── utils.ts                  # `cn()` class-name merger utility
├── modules/
│   ├── Hero/                     # Landing hero (background, profile image, text flip)
│   ├── aboutMe/                  # Journey timeline & mission cards
│   ├── Skills/                   # Skills bar visualization
│   ├── Projects/                 # Project grid + detail modal
│   ├── Contact/                  # Contact info & form
│   ├── NavBar/                   # Floating navigation dock
│   └── chat/                     # Chat interface & sidebar toggle
└── provider/
    └── theme-provider.tsx        # Dark mode theme provider
```

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** (or yarn / pnpm / bun)
- API keys for at least one AI provider (see [Environment Variables](#environment-variables))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shaonexplorer/ai-chatbot.git
   cd ai-chatbot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the project root:

   ```env
   # AI Provider API Keys
   GEMINI_API_KEY=your_google_gemini_api_key
   HF_TOKEN=your_huggingface_api_token
   NEXT_PUBLIC_CHAT_API=/api/chat
   ```

   > **Note:** The chat API (`/api/chat`) is currently configured to use HuggingFace as the default provider. You can switch to Google Gemini by uncommenting the `google("gemini-2.5-flash")` line in `src/app/api/chat/route.ts`.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio, and open the right sidebar to interact with the AI chatbot.

## Available Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the Next.js development server     |
| `npm run build` | Build the application for production     |
| `npm run start` | Start the production server              |
| `npm run lint`  | Run ESLint for code linting              |
| `npx tsc --noEmit` | Run TypeScript type checking         |

## AI Chatbot Architecture

The chatbot is architected as a streaming pipeline:

```
User message → @ai-sdk/react (DefaultChatTransport)
              → POST /api/chat (src/app/api/chat/route.ts)
              → streamText({ model: huggingface(gpt-oss-120b) })
              → toUIMessageStreamResponse()
              → Client-side streaming UI (MessageResponse, Spinner)
```

**Key components:**

| File                              | Role                                              |
| --------------------------------- | ------------------------------------------------- |
| `src/app/api/chat/route.ts`       | API route — configures model providers & streaming|
| `src/modules/chat/Chat.tsx`       | Chat UI — messages, suggestions, prompt input     |
| `src/components/ai-elements/*`      | Reusable AI UI primitives                         |
| `src/components/ui/sidebar.tsx`   | Collapsible sidebar wrapper                       |
| `src/modules/chat/ChatSidebarToggle.tsx` | Toggle button to open/close the chat sidebar  |

### Supported AI Providers

| Provider        | Model                          | Env Variable      |
| --------------- | ------------------------------ | ----------------- |
| HuggingFace     | `openai/gpt-oss-120b:groq`     | `HF_TOKEN`        |
| Google Gemini   | `gemini-2.5-flash` (commented) | `GEMINI_API_KEY`  |
| OpenAI          | Available via SDK              | `OPENAI_API_KEY`  |

## Environment Variables

Create a `.env.local` file at the project root:

```env
# Required for AI chat (at least one)
GEMINI_API_KEY=                  # Google Gemini API key
HF_TOKEN=                        # HuggingFace API token

# Optional
NEXT_PUBLIC_CHAT_API=/api/chat   # Chat API endpoint (defaults to /api/chat)
```

## Portfolio Sections

### 1. Hero
The landing section features a gradient text headline ("Abir Hasan"), an animated text-flip subtitle cycling through role descriptions, and an animated profile image with hover interactions.

### 2. About Me
A two-column layout featuring:
- **Left**: "My Mission" card and "What I Love Building" card (AI-first apps, chatbots, automation, prototypes).
- **Right**: A vertical timeline of certifications and work experience with gradient step indicators.

### 3. Skills
Animated horizontal progress bars organized into three categories:
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, PostgreSQL, MongoDB, Express.js
- **AI & Services**: AI SDKs, AI Agents, MCP Server, RAG

### 4. Projects
A responsive grid showcasing featured projects:
- **Pharmacy Management System** — Next.js, Express, PostgreSQL, OpenAI API
- **Kanban Board** — Next.js, Shadcn UI, Prisma, TanStack Query
- **Guess the Word Game** — React, Vite, Tailwind CSS

Each project opens a detailed modal with features, challenges, and solutions.

### 5. Contact
Contact information with clickable icon badges and an interactive contact form (name, email, message).

## Design System

The project follows a **dark-mode-first** design philosophy with:

- **Color Palette**: Neutral gradients (purple→indigo, emerald→teal, cyan→blue, amber→orange) for step indicators and category headers.
- **Typography**: Geist Mono for code, Geist Sans for headings, Inter for body text.
- **Animations**: GSAP-powered scroll-triggered reveals, hover scale effects, and staggered grid entry.
- **Spacing**: Consistent 4px-based spacing system via Tailwind.
- **Components**: Shadcn/ui primitives with `class-variance-authority` for variant management.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [AI SDK Documentation](https://sdk.vercel.ai/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ by Abir Hasan Khan
</p>
