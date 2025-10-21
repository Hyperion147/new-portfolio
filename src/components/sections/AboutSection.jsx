// goto line-98

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const languages = [
  {
    id: 1,
    name: "HTML",
    designation: "",
    image: "/tech/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "/tech/css.png",
  },
  {
    id: 3,
    name: "Javascript",
    image: "/tech/javascript.png",
  },
  {
    id: 4,
    name: "React",
    image: "/tech/reactjs.png",
  },
  {
    id: 5,
    name: "Tailwind",
    image: "/tech/tailwind.png",
  },
  {
    id: 6,
    name: "Typescript",
    image: "/tech/typescript.png",
  },
  {
    id: 7,
    name: "GIT",
    image: "/tech/git.png",
  },
  {
    id: 8,
    name: "Figma",
    image: "/tech/figma.png",
  },
  {
    id: 9,
    name: "Supabase",
    image: "/tech/supabase.png",
  },
];

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useGSAP(() => {
    gsap.from(".desc", {
      y: 200,
      duration: 1,
      scrollTrigger: {
        trigger: ".desc",
        start: "top 80%",
      },
    });
    gsap.from(".langScroll", {
      y: 200,
      duration: 1,
      scrollTrigger: {
        trigger: ".desc",
        start: "top 80%",
      },
    });
  });

  return (
    <section id="about" className="dark:bg-slate-800">
      <div className="px-2 sm:px-6 md:px-16 lg:px-32 mt-10 text-center w-full">
        <div>
          <h2
            id="heading"
            className="bg-gradient-to-r from-indigo-200 to-gray-900 dark:to-slate-200 leading-right rounded-2xl bg-clip-text text-transparent text-4xl font-medium text-center desc"
          >
            About
          </h2>
        </div>
        <p className="mt-10 text-base sm:text-lg max-w-2xl dark:text-slate-300 text-slate-700 mx-auto leading-[25px] text-center flex items-center justify-center desc flex-col">
          I’m a frontend developer specializing in React and TypeScript,
          <br /> creating smooth, responsive interfaces with some libraries{" "}
          <br />
          such as GSAP and Framer motion...
          <span className="dark:text-slate-400 text-slate-600 text-lg">
            I love building delightful web apps and enhancing my skills in
            Frontend Development!
          </span>
          <span className="text-slate-500 text-xs text-end w-full px-2">
            I use{" "}
            <a
              href="https://github.com/Hyperion147/new-portfolio/blob/main/src/components/sections/AboutSection.jsx"
              target="_blank"
              className="underline underline-offset-2 dark:text-gray-400 text-gray-600"
            >
              &lt;br /&gt;
            </a>{" "}
            tags btw
          </span>
        </p>
        <section
          className="flex flex-row flex-wrap items-center justify-center my-10 sm:my-20 w-full langScroll gap-2"
          aria-label="Technologies and skills"
        >
          <AnimatedTooltip items={languages} />
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
