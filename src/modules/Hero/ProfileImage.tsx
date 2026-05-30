"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

import { useSidebar } from "@/components/ui/sidebar";

export function ProfileImage() {
  const { toggleSidebar } = useSidebar();
  const profileImageUrl = "/profile-photo-abir.png";
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="sm:h-[40rem] relative  flex items-center justify-end">
      <DirectionAwareHover
        imageUrl={profileImageUrl}
        className="cursor-pointer"
        childrenClassName="absolute inset-0 flex items-center justify-center text-center"
      >
        <div
          className="flex flex-col items-center justify-center text-center "
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 mb-2 text-primary-500"
          >
            <path d="M12 2C6.48 2 2 5.95 2 11c0 2.79 1.63 5.31 4.14 7.01V22l4.02-2.01c.6.09 1.22.13 1.85.13 5.52 0 10-3.95 10-9s-4.48-9-10-9zM12 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
          </svg>
          <span className="font-medium text-lg">Click to chat with AI</span>
        </div>
      </DirectionAwareHover>
    </div>
  );
}
