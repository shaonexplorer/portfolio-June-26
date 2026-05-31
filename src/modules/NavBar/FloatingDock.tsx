import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconLayoutGrid,
} from "@tabler/icons-react";

export function FloatingDockNav() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white" />,
      href: "#",
    },

    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Projects",
      icon: <IconLayoutGrid className="h-full w-full text-white" />,
      href: "/projects",
    },

    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-white" />,
      href: "#",
    },

    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white" />,
      href: "#",
    },
  ];
  return (
    <div className="fixed top-4 md:top-auto md:bottom-4 h-fit w-fit right-4 md:left-1/2 transform md:-translate-x-1/2 z-30 flex justify-center items-center p-0 md:p-1 bg-white/80 dark:bg-neutral-900/80 rounded-full shadow-lg">
      <>
        <FloatingDock items={links} />
      </>
    </div>
  );
}
