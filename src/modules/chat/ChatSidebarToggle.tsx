"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * Floating controls: a gradient button to toggle the dark theme and a button to toggle the chat sidebar.
 * Both buttons now have tooltips for better discoverability.
 * The theme button uses a gradient background and a subtle GSAP entrance animation.
 */
export function ChatSidebarToggle() {
  const { toggleSidebar } = useSidebar();

  // ---------- Theme state ----------
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  // Initialise theme from persisted value.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else if (saved === "light") {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  // GSAP animation for the theme button (fade‑in + small scale bounce on mount)
  const themeBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (themeBtnRef.current) {
      gsap.from(themeBtnRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    }
  }, []);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed top-4 right-18 md:top-auto md:bottom-5 md:right-4 z-50 flex gap-3 items-center">
        {/* Theme toggle – gradient button with tooltip */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              ref={themeBtnRef}
              onClick={toggleTheme}
              className={cn(
                "flex size-10 md:size-12 items-center justify-center rounded-full",
                // gradient from warm yellow to orange
                "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
                "shadow-lg hover:opacity-90 transition-transform duration-300",
              )}
              variant="ghost"
              size="icon"
            >
              {isDark ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="bg-gray-800 text-white">
            Toggle {isDark ? "light" : "dark"} theme
          </TooltipContent>
        </Tooltip>

        {/* Chat sidebar toggle with tooltip */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={toggleSidebar}
              className={cn(
                "flex size-10 md:size-12 items-center justify-center rounded-full",
                "group bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:opacity-90 transition-transform duration-300",
              )}
              variant="ghost"
              size="icon"
            >
              <MessageSquare className="!h-[20px] !w-[20px] sm:!h-[20px] sm:!w-[20px] text-white group-hover:rotate-15" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="bg-gray-800 text-white">
            Chat with AI
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
