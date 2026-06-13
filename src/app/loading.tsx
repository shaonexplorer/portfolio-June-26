"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure we are on the client side and the ref is bound
    if (!containerRef.current) return;

    // Create a scoped GSAP context so it safely targets elements inside containerRef
    const ctx = gsap.context((self) => {
      // 1. Infinite linear rotation for the outer ring
      gsap.to(".loader-ring", {
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1,
      });

      // 2. Pulse effect for the gradient core
      gsap.to(".loader-core", {
        scale: 1.1,
        opacity: 0.7,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });

      // 3. Staggered jumping dots
      gsap.to(".loader-dot", {
        y: -6,
        opacity: 1,
        duration: 0.4,
        stagger: {
          each: 0.15,
          yoyo: true,
          repeat: -1,
        },
        ease: "power1.inOut",
      });
    }, containerRef); // Scopes all string selectors to this element

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-zinc-50 select-none pointer-events-none"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Geometric Loader */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer rotating dashed ring */}
          <div className="loader-ring absolute inset-0 border-2 border-dashed border-zinc-700 rounded-full" />

          {/* Inner pulsing core with gradient */}
          <div className="loader-core w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-[2px] opacity-40" />
        </div>

        {/* Minimal Text with Staggered Dots */}
        <div className="flex items-center gap-1 font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase pl-[0.2em]">
          <span>Loading</span>
          <div className="flex gap-1 ml-1 items-center h-2">
            <span className="loader-dot w-1 h-1 rounded-full bg-zinc-400 opacity-40" />
            <span className="loader-dot w-1 h-1 rounded-full bg-zinc-400 opacity-40" />
            <span className="loader-dot w-1 h-1 rounded-full bg-zinc-400 opacity-40" />
          </div>
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
    </div>
  );
}
