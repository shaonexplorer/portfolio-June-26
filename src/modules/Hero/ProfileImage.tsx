"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { useSidebar } from "@/components/ui/sidebar";

export function ProfileImage() {
  const { toggleSidebar } = useSidebar();

  const profileImageUrl = "/profile-photo-abir-removebg.png";

  return (
    <div className="relative flex h-full w-full items-center lg:justify-end sm:mt-0 sm:h-160">
      {/* Soft aura glow — gently breathes behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-85 w-85 -translate-x-1/2 -translate-y-1/2
                   rounded-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]
                   from-fuchsia-500/30 via-cyan-400/10 to-transparent blur-(--glow-blur) opacity-70
                   animate-[aura-pulse_3.5s_ease-in-out_infinite]
                   motion-reduce:animate-none motion-reduce:blur-0"
        style={{ "--glow-blur": "40px" } as React.CSSProperties}
      />

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
