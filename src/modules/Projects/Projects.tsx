"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
// No icon needed for heading

const imageUrl =
  "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Demo data for project cards – each card now includes an image, tech stack, live demo and source links.
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
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-12 px-4 md:px-8 max-w-7xl mx-auto "
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Recent Projects</h2>
      <p className="text-center text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
        A selection of recent work showcasing various technologies, live demos,
        and source code repositories.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoProjects.map((proj, idx) => (
          <div
            key={idx}
            className="flex flex-col project-card group relative overflow-hidden bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={imageUrl}
              alt={proj.title + " screenshot"}
              className="w-full h-48 object-cover rounded-t-xl"
            />
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
                    className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
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
                  className="flex-1 text-center px-3 py-2 bg-primary text-white rounded hover:bg-primary/90 transition "
                >
                  Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
