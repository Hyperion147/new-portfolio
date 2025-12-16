import { FlipWords } from "../ui/flip-words";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {
  const words1 = ["flip", "make"];
  const words2 = ["GSAP", "React"];
  const words3 = ["Motion", "Tailwind"];

  useGSAP(() => {
    // Set initial states immediately to prevent flash
    gsap.set(".head", {
      y: -100,
      opacity: 0,
      filter: "blur(10px)",
    });
    gsap.set(".words", {
      y: -100,
      opacity: 0,
      filter: "blur(12px)",
    });
    gsap.set(".ring", {
      y: -100,
      opacity: 0,
      filter: "blur(15px)",
    });

    // Animate to final state
    gsap.to(".head", {
      y: 0,
      duration: 1,
      filter: "blur(0px)",
      opacity: 1,
    });
    gsap.to(".words", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.5,
    });
    gsap.to(".ring", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.5,
    });
  });

  return (
      <div
        id="home"
        className="flex flex-col justify-center items-end h-full"
      >
        <div className="text-end z-10">
          <h1
            className="text-3xl md:text-4xl font-bold pb-2 bg-gradient-to-r from-indigo-200 to-gray-500 dark:to-white leading-right bg-clip-text text-transparent head text-end"
            role="heading"
            aria-level="1"
          >
            Hello, I'm Suryansu Singh
          </h1>
          <div className="text-gray-500 text-md dark:text-gray-200 words text-end">
            I can
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
      </div>
  );
};

export default Hero;
