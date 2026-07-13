"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import GithubIcon from "./github-svg";
import { ProjectDetails, Project } from "./ProjectDetails";

// Safely register plugin if window exists
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const demoProjects: Project[] = [
  {
    title: "Help Desk | Customer Support",
    description:
      "AI powered realtime customer support application featuring ticket management system.",
    image: "/projects/help-desk.png",
    tech: [
      "React",
      "Typescript",
      "Express.js",
      "PostgreSQL",
      "Socket.IO",
      "OpenAI API",
    ],
    live: "https://help-desk-t0ga.onrender.com",
    github: "https://github.com/shaonexplorer/Help-Desk",
    features: [
      "Real-time chat support with WebSocket connections",
      "AI-powered ticket categorization and suggestions",
      "Multi-department ticket routing",
      "Customer satisfaction rating system",
    ],
    challenges: [
      "Integrating OpenAI API for intelligent responses",
      "Handling real-time WebSocket connections at scale",
      "Building responsive UI for both agents and customers",
    ],
    solutions: [
      "Implemented Socket.IO for low-latency communication",
      "Created custom prompt templates for consistent AI responses",
      "Designed intuitive dashboard with role-based views",
    ],
  },
  {
    title: "Project Management App",
    description:
      "A fullstack project management application with task tracking, team collaboration, and analytics dashboard.",
    image: "/projects/project-app.png",
    tech: [
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "Tanstack Query",
      "Prisma",
      "React Hook Form",
    ],
    live: "https://ph-project-management-app-client.onrender.com",
    github: "https://github.com/shaonexplorer/PH-Project-management-App-client",
    features: [
      "Kanban-style task boards with drag-and-drop",
      "Team collaboration with @mentions and comments",
      "Analytics dashboard with project progress tracking",
      "Role-based access control",
    ],
    challenges: [
      "Managing complex state across multiple views",
      "Implementing optimistic updates for smooth UX",
      "Designing responsive layouts for all screen sizes",
    ],
    solutions: [
      "Used Tanstack Query for server state management",
      "Implemented Zustand for local UI state",
      "Built reusable components with Shadcn UI library",
    ],
  },
  {
    title: "Guess the Word | Game",
    description:
      "A simple yet engaging word guessing game built with React and Tailwind CSS.",
    image: "/projects/game.png",
    tech: ["React", "API", "Tailwind CSS", "Vite"],
    live: "https://stupendous-piroshki-8f5543.netlify.app/",
    github: "https://github.com/shaonexplorer/game-guess-the-word",
    features: [
      "Word guessing with hints and guesses counter",
      "Multiple difficulty levels",
      "Leaderboard with high scores",
      "Responsive design for mobile and desktop",
    ],
    challenges: [
      "Creating engaging game mechanics",
      "Managing game state efficiently",
      "Ensuring cross-browser compatibility",
    ],
    solutions: [
      "Used React hooks for clean state management",
      "Implemented CSS transitions for smooth animations",
      "Built with Vite for fast development experience",
    ],
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Explicit safety guard for Next.js Server Components / Hydration
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Use fromTo to strictly override any Tailwind opacity bugs
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power4.out",
          clearProps: "transform", // Allows hover translate transitions to work cleanly after load
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", // Triggers when container reaches 85% from top of screen
            toggleActions: "play none none none",
            // invalidateOnRefresh: true, // Forces recalculation if content sizes shift dynamically
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-12 md:py-22 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Recent Projects</h2>
      <p className="text-center text-neutral-600 dark:text-neutral-300 mb-18 max-w-2xl mx-auto">
        A selection of recent work showcasing various technologies, live demos,
        and source code repositories.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoProjects.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => handleProjectClick(proj)}
            className="project-card flex flex-col group relative overflow-hidden bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden h-48 w-full">
              <img
                src={proj.image}
                alt={`${proj.title} screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-5 pb-0 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                {proj.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">
                {proj.description}
              </p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex space-x-3 mb-5">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 text-center px-3 py-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded font-medium text-sm transition"
                >
                  Live Demo
                  <ExternalLink className="size-4" />
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 text-center px-3 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-200 rounded font-medium text-sm transition"
                >
                  GitHub
                  <GithubIcon size={17} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Dialog */}
      <ProjectDetails
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseDialog}
      />
    </section>
  );
}
