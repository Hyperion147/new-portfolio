import { FlipWords } from "../ui/flip-words";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AboutSection from "./AboutSection";

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
    <main className="relative flex flex-col justify-center bg-[#fff9f0] dark:bg-slate-800 mt-[20vh]">
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative w-full px-2"
      >
        <div className="relative text-center md:text-end z-10 px-8 w-full mb-8">
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-2 pb-2 bg-gradient-to-r from-indigo-200 to-gray-500 dark:to-white leading-right rounded-2xl bg-clip-text text-transparent head text-center"
            role="heading"
            aria-level="1"
          >
            Hello, I'm Suryansu Singh
          </h1>
          <div className="text-gray-500 text-xl max-w-[100vw] mx-auto sm:max-w-[800px] dark:text-gray-200 words">
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
        <AboutSection />
      </section>
    </main>
  );
};

export default Hero;
