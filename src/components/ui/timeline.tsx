"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Register ScrollTrigger safely
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 2. Track container heights responsively using a ResizeObserver
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      const observer = new ResizeObserver(handleResize);
      if (triggerRef.current) {
        observer.observe(triggerRef.current);
      }

      // 3. Create the progress line filling timeline sequence animation
      gsap.fromTo(
        progressBarRef.current,
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            // Starts when the timeline top section meets 20% of viewport height
            start: "top 20%",
            // Ends when the bottom of the timeline meets 60% of viewport height
            end: "bottom 60%",
            scrub: true,
          },
        },
      );

      return () => {
        observer.disconnect();
      };
    }, containerRef);

    return () => ctx.revert(); // Automatic cleanup of memory links
  }, []);

  return (
    <div
      className="bg-white dark:bg-neutral-950 font-sans w-full md:w-fit md:ml-auto flex-1"
      ref={containerRef}
    >
      <div className="flex flex-col">
        <h1 className="text-lg font-medium ml-1 md:mt-22 mt-6">My Journey</h1>
        <p className="text-muted-foreground  ml-1  text-sm">
          A look at my professional journey so far.
        </p>
      </div>

      <div
        ref={triggerRef}
        className="relative w-full md:max-w-3xl mx-auto pb-20 justify-center flex flex-col items-center"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-0 w-full md:w-full"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm">
              <div className="h-10 absolute left-0  w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-10 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-15 md:pl-10 flex-1">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Outer track baseline line */}
        <div className="absolute md:left-5 left-5 top-0 bottom-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          {/* Active timeline filling line bar driven via GSAP */}
          <div
            ref={progressBarRef}
            className="absolute inset-x-0 top-0 w-[2px] h-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full origin-top will-change-transform"
          />
        </div>
      </div>
    </div>
  );
};
