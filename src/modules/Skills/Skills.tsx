"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

/**
 * Skills – displays categorized skill sets inside cards.
 * Each card has a header (title + subtitle) and a list of animated proficiency bars.
 * GSAP animates each bar from 0% to its target level on mount.
 */
export function Skills() {
  // Categorized skill data
  const categories = [
    {
      title: "Frontend",
      subtitle: "UI/UX and client‑side technologies",
      skills: [
        { name: "React", level: 95, color: "from-purple-500 to-indigo-600" },
        { name: "Next.js", level: 92, color: "from-blue-500 to-cyan-600" },
        { name: "TypeScript", level: 93, color: "from-sky-500 to-indigo-600" },
        { name: "Tailwind CSS", level: 96, color: "from-pink-500 to-rose-600" },
      ],
    },
    {
      title: "Backend",
      subtitle: "Server‑side logic and APIs",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-emerald-600" },
        { name: "GraphQL", level: 80, color: "from-rose-500 to-pink-600" },
        { name: "Docker", level: 75, color: "from-emerald-500 to-green-600" },
      ],
    },
    {
      title: "AI & Services",
      subtitle: "Integrations with AI SDKs and cloud services",
      skills: [
        { name: "AI SDKs", level: 88, color: "from-purple-400 to-fuchsia-600" },
      ],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate every bar sequentially with a small stagger.
      barRefs.current.forEach((bar, i) => {
        if (!bar) return;
        // Retrieve level from flattened skill list
        const flatSkills = categories.flatMap((c) => c.skills);
        const level = flatSkills[i]?.level || 0;
        gsap.fromTo(
          bar,
          { width: 0 },
          {
            width: `${level}%`,
            duration: 1,
            ease: "power2.out",
            delay: i * 0.15,
          },
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Flattened list for reference when assigning refs
  const flatSkills = categories.flatMap((c) => c.skills);

  return (
    <section
      id="skills" ref={containerRef}
      className={cn(
        "max-w-7xl mx-auto pb-12 md:pb-22 px-4 sm:px-6 lg:px-8",
        "space-y-8",
      )}
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
        {categories.map((cat, catIdx) => (
          <div
            key={cat.title}
            className={cn(
              "bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col",
              "hover:shadow-lg transition-shadow",
            )}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {cat.subtitle}
            </p>
            <div className="flex flex-col gap-4">
              {cat.skills.map((skill, skillIdx) => {
                const globalIdx = flatSkills.findIndex(
                  (s) => s.name === skill.name,
                );
                return (
                  <div key={skill.name} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        ref={(el) => {
                          barRefs.current[globalIdx] = el;
                        }}
                        className={cn(
                          "h-full rounded-full",
                          skill.color
                            ? `bg-gradient-to-r ${skill.color}`
                            : "bg-gradient-to-r from-purple-500 to-indigo-600",
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
