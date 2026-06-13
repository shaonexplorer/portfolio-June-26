"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { useSidebar } from "@/components/ui/sidebar";

export function ProfileImage() {
  const { toggleSidebar } = useSidebar();

  const profileImageUrl = "/profile-photo-abir-removebg.png";

  return (
    <div className="sm:h-[40rem] relative flex items-center lg:justify-end">
      <DirectionAwareHover
        imageUrl={profileImageUrl}
        className="cursor-pointer"
        childrenClassName="absolute inset-0 flex items-center justify-center text-center "
      >
        {/* Added the "yoyo-bounce" class target here */}
        <div
          className=" flex flex-col items-center justify-center text-center select-none"
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
          <span className="font-medium text-lg text-white">Chat with AI</span>
        </div>
      </DirectionAwareHover>
    </div>
  );
}
