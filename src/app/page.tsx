import AboutMe from "@/modules/AboutSection/AboutMe";
import { RippleEffectBackGround } from "@/modules/Hero/BackGround";

export default function Home() {
  return (
    <div className=" w-full px-4 sm:px-0">
      <RippleEffectBackGround />
      <AboutMe />
    </div>
  );
}
