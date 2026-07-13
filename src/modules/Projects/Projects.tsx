"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Code2 } from "lucide-react";
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
      "Real-time updates/notifications with WebSocket connections",
      "AI-powered ticket categorization and suggestions",
      "Multi-department ticket routing",
      "Email Integration for ticket updates and notifications",
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
      // Staggered reveal animation
      gsap.fromTo(
        ".project-card-wrapper",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
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
      className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Code2 className="h-4 w-4" />
          <span>Engineering Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of full-stack applications built with modern
          technologies and AI integration.
        </p>
      </div>

      {/* Project Grid - Staggered Layout */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {demoProjects.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => handleProjectClick(proj)}
            className="project-card-wrapper cursor-pointer"
          >
            <div className="group relative flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Image Section with Diagonal Cut */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={proj.image}
                  alt={`${proj.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Diagonal Cut Overlay */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-card border-t-4 border-r-4 border-border -mt-2 -mr-2 group-hover:rotate-[-15deg] transition-transform duration-300" />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {proj.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm font-medium"
                  >
                    <GithubIcon size={14} />
                    Code
                  </a>
                </div>
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
