"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { TextFlip } from "./TextFlip";
import { ProfileImage } from "./ProfileImage";

export function RippleEffectBackGround() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-40 w-full flex flex-col lg:flex-row justify-center items-center gap-6  px-0 sm:px-4">
        <div className="">
          <h1 className="text-5xl sm:text-7xl font-bold ">Abir Hasan</h1>
          <TextFlip />
        </div>
        {/* image/profile */}
        <ProfileImage />
      </div>
    </div>
  );
}
