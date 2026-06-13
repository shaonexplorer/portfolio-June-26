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
import { useTheme } from "next-themes";

export function ChatSidebarToggle() {
  const { toggleSidebar } = useSidebar();
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  console.log({ theme });

  // Target the wrapper div instead of the Button component directly
  const themeBtnWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    if (themeBtnWrapperRef.current) {
      gsap.from(themeBtnWrapperRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    }
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed top-4 right-18 md:top-auto md:bottom-5 md:right-4 z-50 flex gap-3 items-center">
        {/* Animated Wrapper Container */}
        <div ref={themeBtnWrapperRef}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={cn(
                  "flex size-10 md:size-12 items-center justify-center rounded-full",
                  "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
                  "shadow-lg hover:opacity-90 transition-transform duration-300",
                )}
                variant="ghost"
                size="icon"
              >
                {mounted ? (
                  isDark ? (
                    <Sun className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Moon className="h-5 w-5" aria-hidden="true" />
                  )
                ) : (
                  <div className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-gray-800 text-white">
              Toggle {mounted && isDark ? "light" : "dark"} theme
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Chat sidebar toggle */}
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
