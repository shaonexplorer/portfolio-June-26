"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { TextFlip } from "./TextFlip";
import { ProfileImage } from "./ProfileImage";

export function RippleEffectBackGround() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Wrap animations in a GSAP Context for auto clean-up & performance scoping
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }, // Smoother, modern easing curve
      });

      // 2. Chain animations into one coherent entry sequence
      tl.from(containerRef.current, {
        opacity: 0,
        duration: 0.6,
      })
        .from(
          bgRef.current,
          {
            opacity: 0,
            scale: 1.05,
            duration: 1.2,
          },
          "-=0.3",
        ) // overlapping slightly with container reveal
        .from(
          titleRef.current,
          {
            y: 40, // Changed from negative to positive for an elegant "lift-up" reveal
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          profileRef.current,
          {
            scale: 0.9,
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        );
    }, containerRef); // Scoped boundary

    // 3. Return the cleanup hook to prevent ghost animations
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <BackgroundRippleEffect />
      </div>

      <div className="mt-20 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between items-center w-full z-10">
        <div>
          {/* Premium Multi-theme Text Gradient */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-600 dark:from-white dark:via-blue-400 dark:to-purple-500 pb-2 will-change-transform"
          >
            Abir Hasan
          </h1>
          <TextFlip />
        </div>

        {/* image/profile wrapper */}
        <div ref={profileRef} className="will-change-transform">
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}
