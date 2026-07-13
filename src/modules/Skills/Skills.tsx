"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Code2, Database, Brain, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Skill data structure - organized by category
const skillsData = [
  {
    category: "Frontend",
    icon: Code2,
    subtitle: "UI/UX and client‑side technologies",
    gradient: "from-purple-500 to-indigo-600",
    skills: [
      { name: "React", level: 87 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    subtitle: "Server‑side logic and APIs",
    gradient: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Node.js", level: 87 },
      { name: "PostgreSQL", level: 89 },
      { name: "MongoDB", level: 88 },
      { name: "Express.js", level: 92 },
    ],
  },
  {
    category: "AI & Services",
    icon: Brain,
    subtitle: "Integrations with AI SDKs",
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      { name: "AI SDKs", level: 92 },
      { name: "AI Agent", level: 88 },
      { name: "MCP Server", level: 90 },
      { name: "RAG", level: 92 },
    ],
  },
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section header
      gsap.from(".skill-section-header", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate category headers with staggered reveal
      gsap.from(".skill-category-header", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Animate skill items
      const skillItems = gsap.utils.toArray<HTMLElement>(".skill-item");

      skillItems.forEach((item) => {
        // Fade in with slight y offset
        gsap.from(item, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        // Skill bar animation
        const bar = item.querySelector(".skill-bar-fill");
        if (bar) {
          const targetWidth = bar.getAttribute("data-level") || "0";
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

          // Counter animation
          const counter = bar.querySelector(".skill-percent-counter");
          if (counter) {
            const counterObj = { value: 0 };
            gsap.to(counterObj, {
              value: parseInt(targetWidth, 10),
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              onUpdate: () => {
                counter.textContent = `${Math.round(counterObj.value)}%`;
              },
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12"
    >
      {/* Section header */}
      <header className="skill-section-header text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <CheckCircle2 className="h-4 w-4" />
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          My Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A visual overview of the technologies I work with daily.
        </p>
      </header>

      {/* Skills list - stacked horizontal bars */}
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.category}
              className="skill-category-card bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-border/50">
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r",
                    item.gradient,
                  )}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills as horizontal bars */}
              <div className="px-6 pb-6 space-y-3">
                {item.skills.map((skill) => (
                  <div key={skill.name} className="skill-item group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        data-level={skill.level}
                        className={cn(
                          "skill-bar h-full rounded-full w-0 opacity-80",
                          "bg-gradient-to-r",
                          item.gradient,
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
