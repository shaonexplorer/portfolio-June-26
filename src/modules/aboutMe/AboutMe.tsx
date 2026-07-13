"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import { Code, Bot, Zap, Lightbulb } from "lucide-react";
import Image from "next/image";

// Timeline entry type updated to support rich JSX content
interface JourneyStep {
  title: string;
  description: React.ReactNode;
  date: string;
  timeStamp: string;
}

const steps: JourneyStep[] = [
  {
    title:
      "Next Level Web Development Bootcamp - Programming Hero | Certification Completion",
    date: "Jan 2025",
    timeStamp: "2025",
    description: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
        <p className="text-base">
          Successfully completed an intensive, production-driven full-stack
          development bootcamp. Developed a rigorous, problem-solving mindset
          while architecting scalable web applications and mastering modern
          engineering workflows.
        </p>
        <div className="space-y-2">
          {[
            {
              label: "Advanced Frontend Engineering",
              desc: "Built highly optimized, SEO-friendly user interfaces using Next.js and React leveraging modern rendering strategies (SSR, ISR, and Server Components).",
            },
            {
              label: "Robust Backend Architectures",
              desc: "Programmed server-side applications with Node.js and Express.js, incorporating specialized backend processing like dynamic PDF generation and secure file streams.",
            },
            {
              label: "Database Design & Management",
              desc: "Modelled complex data architectures across both SQL and NoSQL systems using PostgreSQL, Prisma (ORM), MongoDB, and Mongoose (ODM).",
            },
            {
              label: "Security & Identity Control",
              desc: "Engineered secure authentication and authorization pipelines utilizing JWT (JSON Web Tokens), session management, and role-based access controls.",
            },
            {
              label: "Real-World Deliverables",
              desc: "Successfully shipped multiple full-stack real-world projects from scratch, emphasizing clean code architecture, optimized API endpoints, and production-ready deployments.",
            },
          ].map((item, index) => (
            <p
              key={index}
              className="text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-400"
            >
              <span className="font-bold text-neutral-900 dark:text-neutral-100">
                {item.label}:
              </span>{" "}
              {item.desc}
            </p>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Junior MERN Developer - SoftVence Agency",
    date: "Jan 2026 – Apr 2026",
    timeStamp: "2026",
    description: (
      <div className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        <p>
          Contributed to a high-performance SaaS product ecosystem for the
          Betopia Group, engineering scalable REST APIs, responsive dashboard
          interfaces, and automating delivery sequences.
        </p>
        <div className="space-y-1.5">
          <p className="pl-4 relative before:content-['•'] before:absolute before:left-0 text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              API Engineering:
            </span>{" "}
            Developed secure, structured REST APIs utilizing Express.js and
            optimized MongoDB aggregation pipelines.
          </p>
          <p className="pl-4 relative before:content-['•'] before:absolute before:left-0 text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Frontend Architecture:
            </span>{" "}
            Built state-driven management interfaces and interactive graphs
            using React, Redux Toolkit, and Tailwind CSS.
          </p>
          {/* <p className="pl-4 relative before:content-['•'] before:absolute before:left-0 text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              DevOps Automation:
            </span>{" "}
            Maintained integrated CI/CD pipelines to achieve automated staging
            environments and testing workflows.
          </p> */}
        </div>
      </div>
    ),
  },
  {
    title: "AI Engineer Path - Scrimba | Certification Completion ",
    date: "May 2026",
    timeStamp: "2026",
    description: (
      <div className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        <p>
          Completed an intensive specialized path dedicated to deep engineering
          frameworks around Large Language Models (LLMs) and artificial
          intelligence agents.
        </p>
        <div className="space-y-1.5">
          <p className="pl-4 relative before:content-['•'] before:absolute before:left-0 text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              AI-First Products:
            </span>{" "}
            Handled embedding generations, prompt vector optimizations, and
            functional tool-calling loops.
          </p>
          <p className="pl-4 relative before:content-['•'] before:absolute before:left-0 text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Contextual Memory:
            </span>{" "}
            Built real-time semantic application instances managing contextual
            user memory state patterns.
          </p>
        </div>
      </div>
    ),
  },
  {
    title:
      "Claude Code for Professional Developers - Code with Mosh | Certification Completion ",
    date: "July 2026",
    timeStamp: "2026",
    description: (
      <div className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        <p>
          Mastered Claude Code, Anthropic&apos;s AI-powered developer assistant,
          for professional software development workflows, code generation,
          debugging, and architectural guidance.
        </p>
        <div className="space-y-1.5">
          <p className="pl-4 relative before:content-['•'] before:absolute before:left-0 text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              AI-Assisted Development:
            </span>{" "}
            Leveraged Claude&apos;s reasoning capabilities for code generation,
            refactoring, and implementing complex software features.
          </p>
          <p className="pl-4 relative before:content-['•'] before:absolute before:left-0 text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Professional Workflows:
            </span>{" "}
            Integrated AI-powered pair programming into daily development
            cycles, optimizing productivity and code quality.
          </p>
        </div>
      </div>
    ),
  },
];

// Convert JourneyStep into Timeline data format expected by the UI component.
const timelineData = steps.map((step) => ({
  title: step.timeStamp,
  content: (
    <Card className="transform transition duration-300 ease-in-out hover:scale-[1.01] shadow-md border-neutral-200 dark:border-neutral-800">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
          {step.title}
        </CardTitle>
        <CardDescription className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
          {step.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-neutral-600 dark:text-neutral-300">
        {step.description}
      </CardContent>
    </Card>
  ),
}));

const loves = [
  {
    icon: Code,
    title: "AI‑first Apps",
    description:
      "End‑to‑end intelligent experiences with LLMs, embeddings and real‑time inference.",
  },
  {
    icon: Bot,
    title: "Chatbots & Agents",
    description:
      "Conversational interfaces that understand intent and maintain context.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Workflow automation, webhooks and serverless functions that save time.",
  },
  {
    icon: Lightbulb,
    title: "Product Prototypes",
    description: "Rapid‑iteration UI/UX demos that validate ideas quickly.",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="space-y-5 py-12 md:py-22 max-w-7xl mx-auto px-4 md:px-8"
    >
      {/* Section header */}
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-neutral-950 dark:text-neutral-50">
          About Me
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          A quick look at my web‑development journey so far.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative w-full overflow-clip flex flex-col mx-auto lg:flex-row gap-6 md:gap-10 justify-between px-[1px]">
        {/* Left Column: My Mission & Interests */}
        <div className="lg:max-w-lg w-full mt-10 md:mt-20 lg:sticky top-20 self-start flex flex-col gap-6">
          {/* profile image */}

          <div className="w-full px-4 py-2 rounded-md bg-card flex items-center gap-2 md:hidden">
            <div className="flex flex-col">
              <p className="font-bold text-md">Abir Hasan</p>
              <p className=" text-sm text-muted-foreground">
                Jr MERN Developer
              </p>
            </div>
            <div className="rounded-full w-15 h-15   relative overflow-hidden ml-auto  ">
              <Image
                src={"/profile-photo-abir-removebg.png"}
                fill
                alt="profile-image"
                className="object-cover object-top scale-150"
              />
            </div>
          </div>

          {/* mission text */}

          <Card className="transform transition duration-300 ease-in-out hover:scale-[1.02] border-neutral-200 dark:border-neutral-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">My Mission</CardTitle>
            </CardHeader>
            <CardContent className="-mt-2">
              <CardDescription className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                Bridge the power of AI with robust full‑stack development to
                craft fast, secure, and intelligent web solutions that solve
                real‑world problems and drive measurable growth.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transform transition duration-300 ease-in-out hover:scale-[1.02] border-neutral-200 dark:border-neutral-800">
            <CardHeader className="pb-2">
              <CardTitle className="font-bold">What I Love Building</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loves.map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <item.icon className="h-5 w-5 flex-shrink-0 text-neutral-900 dark:text-neutral-50" />
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Timeline Component */}
        <div className="flex-1 w-full ">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}
