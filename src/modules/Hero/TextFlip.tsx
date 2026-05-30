"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function TextFlip() {
  return (
    <div className=" ">
      <motion.div className="relative   my-4 flex flex-col     gap-4   sm:mx-0 sm:mb-0 sm:flex-row">
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
      </motion.div>
      <p className="max-w-xl mt-4 text-base text-neutral-600 dark:text-neutral-400">
        Passionate Fullstack Developer with expertise in crafting dynamic web
        applications. Specialized in React, Next.js, AI, I am dedicated to
        delivering high-quality code and driving impactful projects forward.
      </p>
    </div>
  );
}
