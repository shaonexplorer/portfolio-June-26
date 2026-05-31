import AboutMe from "@/modules/aboutMe/AboutMe";
import { RippleEffectBackGround } from "@/modules/Hero/BackGround";
import { Projects } from "@/modules/Projects/Projects";
import { Skills } from "@/modules/Skills/Skills";

export default function Home() {
  return (
    <div className=" w-full px-4 sm:px-0">
      <RippleEffectBackGround />
      <Skills />
      <Projects />
      <AboutMe />
      <div className="h-500"></div>
    </div>
  );
}
