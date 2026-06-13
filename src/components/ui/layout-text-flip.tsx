"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {/* Static Subtext Segment with subtle premium gradient */}
      <motion.span
        layoutId="subtext"
        className="text-2xl font-semibold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400 py-1"
      >
        {text}
      </motion.span>

      {/* Outer Word Capsule Plate Wrapper */}
      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-xl border border-neutral-200/60 bg-neutral-50/50 px-4 py-1.5 font-sans text-2xl font-extrabold tracking-tight shadow-sm ring-1 ring-black/5 md:text-4xl dark:bg-neutral-900/60 dark:border-neutral-800/80 dark:ring-white/5"
      >
        <AnimatePresence mode="popLayout">
          {/* Active Text Element Layer featuring targeted contrast colors */}
          <motion.span
            key={currentIndex}
            initial={{ y: -30, filter: "blur(6px)", opacity: 0 }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{ y: 30, filter: "blur(6px)", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 0.4,
            }}
            className={cn(
              "inline-block whitespace-nowrap bg-clip-text text-transparent pb-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400",
            )}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};
