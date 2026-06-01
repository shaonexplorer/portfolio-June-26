import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { BookOpenText, Layers, Mail, Presentation } from "lucide-react";

export function FloatingDockNav() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-primary" />,
      href: "#",
    },

    {
      title: "Skills",
      icon: <Layers className="h-full w-full text-primary" />,
      href: "#",
    },
    {
      title: "Projects",
      icon: <Presentation className="h-full w-full text-primary" />,
      href: "#",
    },
    {
      title: "About Me",
      icon: <BookOpenText className="h-full w-full text-primary" />,
      href: "#",
    },

    {
      title: "Contact",
      icon: <Mail className="h-full w-full text-primary" />,
      href: "#",
    },

    // {
    //   title: "Twitter",
    //   icon: <IconBrandX className="h-full w-full text-white" />,
    //   href: "#",
    // },
    // {
    //   title: "GitHub",
    //   icon: <IconBrandGithub className="h-full w-full text-white" />,
    //   href: "#",
    // },
  ];
  return (
    <div className="fixed top-4 md:top-auto md:bottom-4 h-fit w-fit right-4 md:left-1/2 transform md:-translate-x-1/2 z-30 flex justify-center items-center p-0 md:p-1 bg-white/80 dark:bg-neutral-900/80 rounded-full shadow-lg">
      <>
        <FloatingDock items={links} />
      </>
    </div>
  );
}
