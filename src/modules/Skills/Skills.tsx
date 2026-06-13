"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Skills() {
  const categories = [
    {
      title: "Frontend",
      subtitle: "UI/UX and client‑side technologies",
      skills: [
        { name: "React", level: 80, color: "from-purple-500 to-indigo-600" },
        { name: "Next.js", level: 85, color: "from-blue-500 to-cyan-600" },
        { name: "TypeScript", level: 88, color: "from-sky-500 to-indigo-600" },
        { name: "Tailwind CSS", level: 92, color: "from-pink-500 to-rose-600" },
      ],
    },
    {
      title: "Backend",
      subtitle: "Server‑side logic and APIs",
      skills: [
        { name: "Node.js", level: 87, color: "from-green-500 to-emerald-600" },
        { name: "PostgreSQL", level: 89, color: "from-rose-500 to-pink-600" },
        { name: "MongoDB", level: 88, color: "from-emerald-500 to-green-600" },
        {
          name: "Express.js",
          level: 92,
          color: "from-purple-500 to-indigo-600",
        },
      ],
    },
    {
      title: "AI & Services",
      subtitle: "Integrations with AI SDKs and cloud services",
      skills: [
        { name: "AI SDKs", level: 92, color: "from-purple-400 to-fuchsia-600" },
        { name: "AI Agent", level: 88, color: "from-blue-500 to-cyan-600" },
        { name: "MCP Server", level: 90, color: "from-sky-500 to-indigo-600" },
        { name: "RAG", level: 92, color: "from-pink-500 to-rose-600" },
      ],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Animate the section headers and skill cards container
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      // 2. Query all bar elements inside the context and animate cleanly via native targets
      const bars = gsap.utils.toArray<HTMLElement>(".skill-bar");

      bars.forEach((bar) => {
        const targetWidth = bar.getAttribute("data-level") || "0";

        // Progress Bar Horizontal Growth Animation
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${targetWidth}%`,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );

        // Optional: Interactive matching dynamic counter ticker text effect
        const parent = bar.closest(".skill-item-container");
        const counter = parent?.querySelector(".skill-percent-counter");
        if (counter) {
          const counterObj = { value: 0 };
          gsap.to(counterObj, {
            value: parseInt(targetWidth, 10),
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
            onUpdate: () => {
              counter.textContent = `${Math.round(counterObj.value)}%`;
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="max-w-7xl mx-auto pb-12 md:pb-22 px-4 sm:px-6 lg:px-8 space-y-8"
    >
      {/* Section header */}
      <header className="text-center mb-18">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          My Skills
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A quick overview of the technologies I work with daily.
        </p>
      </header>

      {/* Category cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="skill-card bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {cat.subtitle}
            </p>

            <div className="flex flex-col gap-4">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item-container flex flex-col"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                    <span className="skill-percent-counter text-sm font-medium text-gray-600 dark:text-gray-400">
                      0%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      data-level={skill.level}
                      className={cn(
                        "skill-bar h-full rounded-full w-0",
                        skill.color
                          ? `bg-gradient-to-r ${skill.color}`
                          : "bg-gradient-to-r from-purple-500 to-indigo-600",
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
