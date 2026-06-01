import * as React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import { Code, Bot, Zap, Lightbulb } from "lucide-react";

// Timeline entry type
interface JourneyStep {
  /** Short title of the step */
  title: string;
  /** Human‑readable description */
  description: string;
  /** Date string displayed in the card footer */
  date: string;
  timeStamp: string; // Optional timestamp for sorting or future use
}

const steps: JourneyStep[] = [
  {
    title: "Programming Hero Bootcamp",
    description:
      "Intensive full‑stack bootcamp covering modern JavaScript, React, and Node.js. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Jan 2025",
    timeStamp: "2025",
  },

  {
    title: "Junior MERN Developer at SoftVence",
    description:
      "Worked on a SaaS product for Betopia Group, building REST APIs, React dashboards, and CI pipelines. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Jan 2026 – Apr 2026",
    timeStamp: "2026",
  },
  {
    title: "Scrimba AI Engineer Path",
    description:
      "Focused curriculum on AI fundamentals, prompt engineering, and building AI‑first products. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "May 2026",
    timeStamp: "2026",
  },
];

// Convert JourneyStep into Timeline data format expected by the UI component.
const timelineData = steps.map((step) => ({
  title: step.timeStamp,
  content: (
    <Card
      className="transform transition duration-300 ease-in-out hover:scale-[1.02] "
      size="default"
    >
      <CardHeader className="pb-0">
        <CardTitle>{step.title}</CardTitle>
        <CardDescription>{step.date}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription>{step.description}</CardDescription>
      </CardContent>
    </Card>
  ),
}));

// List of things I love building
const loves = [
  {
    icon: Code,
    title: "AI‑first Apps",
    description:
      "End‑to‑end intelligent experiences with LLMs, embeddings and real‑time inference.",
  },
  {
    icon: Bot,
    title: "Chatbots & Agents",
    description:
      "Conversational interfaces that understand intent and maintain context.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Workflow automation, webhooks and serverless functions that save time.",
  },
  {
    icon: Lightbulb,
    title: "Product Prototypes",
    description: "Rapid‑iteration UI/UX demos that validate ideas quickly.",
  },
];

/**
 * AboutMe – displays a short introduction and a timeline of the developer’s journey.
 * Each entry is rendered inside the shared `Timeline` component using styled `Card`s.
 */
export default function AboutMe() {
  return (
    <section
      id="about"
      className=" space-y-5 py-12 md:py-22 max-w-7xl mx-auto px-4 md:px-8 "
    >
      {/* Section header */}
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold">About Me</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          A quick look at my web‑development journey so far.
        </p>
      </div>

      {/* Timeline */}
      <div className=" relative w-full overflow-clip flex flex-col mx-auto lg:flex-row gap-6 md:gap-20 justify-between">
        {/* my mission */}
        <div className="lg:max-w-lg w-full mt-10 md:mt-20 lg:sticky top-20 self-start flex flex-col gap-6">
          <Card
            className="transform transition duration-300 ease-in-out hover:scale-[1.02] !ring-0"
            size="default"
          >
            <CardHeader className="pb-0">
              <CardTitle className="text-lg">My Mission</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsum esse natus eius beatae expedita quibusdam quo porro ipsam
                consequuntur repellendus, repudiandae placeat nulla aut maxime
                sit, cumque numquam distinctio.
              </CardDescription>
            </CardContent>
          </Card>

          {/* what i love building */}
          <div className="flex-1 w-full  self-start">
            <Card
              className="transform transition duration-300 ease-in-out hover:scale-[1.02]"
              size="default"
            >
              <CardHeader className="pb-2">
                <CardTitle>What I Love Building</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                {loves.map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <item.icon className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
