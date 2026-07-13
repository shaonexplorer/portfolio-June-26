"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import GithubIcon from "./github-svg";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
  challenges?: string[];
  solutions?: string[];
  features?: string[];
}

interface ProjectDetailsProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetails({
  project,
  isOpen,
  onClose,
}: ProjectDetailsProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col bg-background p-0">
        {/* Project Image with Animation */}
        <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 animate-pulse" />
          )}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 600px) 100vw"
              className="object-cover object-top"
              onLoad={() => setImageLoaded(true)}
              priority={isOpen}
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Title and Tech Stack */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {project.title}
            </h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs font-medium hover:scale-105 transition-transform duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solutions */}
          {(project.challenges || project.solutions) && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Challenges
                  </h3>
                  <ul className="space-y-1">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.solutions && project.solutions.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Solutions
                  </h3>
                  <ul className="space-y-1">
                    {project.solutions.map((solution, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 p-6 pt-0 border-t border-border">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
