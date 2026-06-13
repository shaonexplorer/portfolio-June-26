"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Mail } from "lucide-react";

export function TextFlip() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const buttons = gsap.utils.toArray(".social-btn") as HTMLElement[];

      buttons.forEach((btn) => {
        const onMouseEnter = () => {
          gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        };

        const onMouseLeave = () => {
          gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
        };

        const onMouseDown = () => {
          gsap.to(btn, { scale: 0.96, duration: 0.1, ease: "power1.out" });
        };

        const onMouseUp = () => {
          gsap.to(btn, { scale: 1.05, duration: 0.1, ease: "power1.out" });
        };

        btn.addEventListener("mouseenter", onMouseEnter);
        btn.addEventListener("mouseleave", onMouseLeave);
        btn.addEventListener("mousedown", onMouseDown);
        btn.addEventListener("mouseup", onMouseUp);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="relative my-4 flex flex-col gap-4 sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="I Build "
          words={[
            "Web Applications",
            "Fullstack Apps",
            "AI Powered Apps",
            "Backend APIs",
            "AI Agents",
            "Amazing Products",
          ]}
        />
      </div>
      <p className="max-w-xl mt-4 text-base text-neutral-600 dark:text-neutral-400">
        Passionate Fullstack Developer with expertise in crafting dynamic web
        applications. Specialized in React, Next.js, AI, I am dedicated to
        delivering high-quality code and driving impactful projects forward.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        {/* GitHub Link */}
        <a
          href="https://github.com/shaonexplorer"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn flex items-center px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-850 rounded-lg text-sm font-semibold shadow-sm transition-colors duration-200 will-change-transform"
        >
          <IconBrandGithub className="w-5 h-5 mr-2 text-neutral-700 dark:text-green-300" />
          <span className="bg-clip-text text-neutral-600 dark:text-transparent dark:bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400">
            GitHub
          </span>
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com/in/abir-hasan-khan"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn flex items-center px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-850 rounded-lg text-sm font-semibold shadow-sm transition-colors duration-200 will-change-transform"
        >
          <IconBrandLinkedin className="w-5 h-5 mr-2 text-neutral-700 dark:text-blue-300" />
          <span className="bg-clip-text text-neutral-600 dark:text-transparent dark:bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-400 dark:to-cyan-400">
            LinkedIn
          </span>
        </a>

        {/* Contact Link */}
        <a
          href="mailto:shaonexplorer@gmail.com"
          className="social-btn flex items-center px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-850 rounded-lg text-sm font-semibold shadow-sm transition-colors duration-200 will-change-transform"
        >
          <Mail className="w-5 h-5 mr-2 text-neutral-700 dark:text-orange-300" />
          <span className="bg-clip-text text-neutral-600 dark:text-transparent dark:bg-gradient-to-r from-orange-600 to-pink-600 dark:from-amber-400 dark:to-orange-400">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
}
