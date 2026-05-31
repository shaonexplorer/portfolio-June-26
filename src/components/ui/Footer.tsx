"use client";

/**
 * Footer – a minimal, attractive footer with a smooth GSAP entrance animation.
 * It displays a copyright notice and a few social‑media icons.
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FolderGit2, Link2, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  // GSAP fade‑in + slight upward motion when the footer enters the viewport.
  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-100 dark:bg-gray-900 py-6 border-t border-muted mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abir. All rights reserved.
        </p>
        <div className="flex space-x-4 text-primary">
          <Link
            href="https://github.com/shaonexplorer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FolderGit2 className="h-5 w-5 hover:opacity-80 transition-opacity" />
          </Link>
          <Link
            href="https://linkedin.com/in/shaonexplorer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link2 className="h-5 w-5 hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="mailto:shaonexplorer@gmail.com">
            <Mail className="h-5 w-5 hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
