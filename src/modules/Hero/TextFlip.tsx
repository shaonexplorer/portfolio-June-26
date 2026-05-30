"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Mail } from "lucide-react";
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
      <div className="flex space-x-4 mt-4">
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm text-neutral-800 dark:text-neutral-200"
        >
          <IconBrandGithub className="w-5 h-5 mr-2" />
          GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm text-neutral-800 dark:text-neutral-200"
        >
          <IconBrandLinkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </motion.a>
        <motion.a
          href="mailto:you@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm text-neutral-800 dark:text-neutral-200"
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact
        </motion.a>
      </div>
    </div>
  );
}
