"use client";
// goto line-98

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useGSAP(() => {
    gsap.from(".desc", {
      y: -50,
      duration: 1,
      filter: "blur(5px)",
    });
  });

  return (
    <section
      id="about"
      className="dark:bg-gray-900 flex items-center justify-center h-full px-4"
    >
      <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 mx-auto text-start desc flex-col">
        I’m a frontend developer specializing in React and TypeScript,
        <br /> creating smooth, responsive interfaces with some libraries...
        <br />
        <span className="text-slate-500 text-xs text-end w-full">
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
    </section>
  );
};

export default AboutSection;
