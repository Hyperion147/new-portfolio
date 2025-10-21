import { Link as ScrollLink } from "react-scroll";
import { FlipWords } from "../ui/flip-words";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import gsap from "gsap";
import React, { Suspense } from "react";

const SparklesCore = React.lazy(() => import("../ui/sparkles"));

const Hero = () => {
  const words1 = ["flip", "make"];
  const words2 = ["GSAP", "React"];
  const words3 = ["Motion", "Tailwind"];

  useGSAP(() => {
    gsap.from(".head", {
      y: -100,
      duration: 1,
      filter: "blur(10px)",
      opacity: 0,
    });
    gsap.from(".words", {
      y: -100,
      opacity: 0,
      filter: "blur(12px)",
      duration: 1.5,
    });
    gsap.from(".ring", {
      y: -100,
      opacity: 0,
      filter: "blur(15px)",
      duration: 1.5,
    });
  });

  return (
    <main className="relative flex justify-center bg-[#fff9f0] dark:bg-slate-800 min-h-screen mb-20">
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative w-full px-2"
      >
        <Suspense fallback={<div>Loading About...</div>}>
          <SparklesCore
            background="transparent"
            minSize={0.1}
            maxSize={1}
            particleDensity={window.innerWidth < 760 ? 10 : 70}
            className="w-full h-full absolute"
            particleColor="#FFFFFF"
          />
        </Suspense>

        <div className="relative text-center z-10 px-8 bottom-10 w-full">
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-2 pb-2 bg-gradient-to-r from-indigo-200 to-gray-500 dark:to-white leading-right rounded-2xl bg-clip-text text-transparent head text-center"
            role="heading"
            aria-level="1"
          >
            Hello, I'm Suryansu Singh
          </h1>
          <div className="text-gray-500 text-xl max-w-[100vw] mx-auto sm:max-w-[800px] dark:text-gray-200 words">
            I’m a frontend developer and I can
            <FlipWords words={words1} />
            words using
            <FlipWords words={words2} />
            and
            <FlipWords words={words3} />
            <span className="text-gray-500 text-xs mt-2 words">
              checkout{" "}
              <a
                href="https://github.com/Hyperion147/new-portfolio/blob/main/src/components/ui/flip-words.jsx"
                target="_blank"
                className="underline-offset-2 underline dark:text-gray-400 text-gray-600"
              >
                flip-words.jsx
              </a>
            </span>
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-10 w-full flex flex-col gap-2 justify-center items-center">
          <ScrollLink to="about" smooth={true} duration={100} offset={-120}>
            <button
              className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start py-2 dark:border-white dark:bg-slate-700 ring cursor-pointer"
              aria-label="Scroll to about section"
            >
              <motion.div
                animate={{
                  y: [0, 26, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-200"
              />
            </button>
          </ScrollLink>
        </div>
      </section>
    </main>
  );
};

export default Hero;
