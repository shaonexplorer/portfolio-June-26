"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { TextFlip } from "./TextFlip";
import { ProfileImage } from "./ProfileImage";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function RippleEffectBackGround() {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate root container fade-in
    if (rootRef.current) {
      gsap.from(rootRef.current, { opacity: 0, duration: 1 });
    }
    // Animate title and profile image
    if (titleRef.current && profileRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(titleRef.current, { y: -50, opacity: 0, duration: 1 }).from(
        profileRef.current,
        { scale: 0.8, opacity: 0, duration: 0.8 },
        "-=0.5",
      );
    }
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0 z-0">
        <BackgroundRippleEffect />
      </div>

      <div className="mt-20 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between items-center w-full z-10">
        <div>
          {/* Premium Multi-theme Text Gradient Applied Below */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-600 dark:from-white dark:via-blue-400 dark:to-purple-500 pb-2"
          >
            Abir Hasan
          </h1>
          <TextFlip />
        </div>

        {/* image/profile */}
        <div ref={profileRef}>
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}
