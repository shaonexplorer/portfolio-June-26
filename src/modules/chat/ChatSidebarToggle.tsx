"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A floating button that toggles the chat sidebar.
 * Positioned absolutely in the top‑right corner of the viewport.
 * Uses a purple‑to‑blue gradient background and a centered chat icon.
 */
export function ChatSidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      onClick={toggleSidebar}
      className={cn(
        " fixed bottom-5 right-4  z-50 flex size-12 sm:size-15 items-center justify-center rounded-full",
        "group bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:opacity-90 cursor-pointer hover:scale-105 transition-transform duration-300",
      )}
      variant="ghost"
      size="icon"
    >
      <MessageSquare className="!h-[20px] !w-[20px] sm:!h-[30px] sm:!w-[30px] text-white  group-hover:rotate-15" />
      <span className="sr-only">Toggle chat sidebar</span>
    </Button>
  );
}
