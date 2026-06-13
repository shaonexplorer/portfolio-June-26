"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, GitCompare, Link } from "lucide-react";
import GithubIcon from "./github-svg";

// Safely register plugin if window exists
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const imageUrl =
  "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const demoProjects = [
  {
    title: "AI Chatbot",
    description: "A Next.js AI chatbot powered by Claude SDK.",
    image: "/images/projects/ai-chatbot.png",
    tech: ["Next.js", "TypeScript", "Claude SDK", "Tailwind"],
    live: "https://ai-chatbot.example.com",
    github: "https://github.com/yourusername/ai-chatbot",
  },
  {
    title: "Portfolio Site",
    description:
      "Personal portfolio showcasing projects, built with Tailwind & Shadcn UI.",
    image: "/images/projects/portfolio.png",
    tech: ["Next.js", "Tailwind", "Shadcn UI"],
    live: "https://portfolio.example.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E‑commerce Demo",
    description: "Full‑stack shop with Stripe integration and cart management.",
    image: "/images/projects/ecommerce.png",
    tech: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    live: "https://shop.example.com",
    github: "https://github.com/yourusername/ecommerce-demo",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Explicit safety guard for Next.js Server Components / Hydration
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Use fromTo to strictly override any Tailwind opacity bugs
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power4.out",
          clearProps: "transform", // Allows hover translate transitions to work cleanly after load
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", // Triggers when container reaches 85% from top of screen
            toggleActions: "play none none none",
            // invalidateOnRefresh: true, // Forces recalculation if content sizes shift dynamically
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-12 md:py-22 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Recent Projects</h2>
      <p className="text-center text-neutral-600 dark:text-neutral-300 mb-18 max-w-2xl mx-auto">
        A selection of recent work showcasing various technologies, live demos,
        and source code repositories.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoProjects.map((proj, idx) => (
          <div
            key={idx}
            // Removed manual `opacity-0` classes which conflicted with the .from math engine
            className="project-card flex flex-col group relative overflow-hidden bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden h-48 w-full">
              <img
                src={imageUrl}
                alt={`${proj.title} screenshot`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-5 pb-0 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                {proj.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">
                {proj.description}
              </p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex space-x-3 mb-5">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-center px-3 py-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded font-medium text-sm transition"
                >
                  Live Demo
                  <ExternalLink className="size-4" />
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-center px-3 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-200 rounded font-medium text-sm transition"
                >
                  GitHub
                  <GithubIcon size={17} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
