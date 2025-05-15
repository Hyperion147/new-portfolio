import { motion } from "motion/react";
import { cn } from "../utils/Utils";
import { Link as ScrollLink } from "react-scroll";
import { FlipWords } from "../ui/flip-words";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

  const words1 = ["Interactive", "Responsive"]
  const words2 = ["GSAP", "React"]
  const words3 = ["Motion", "Tailwind"]

  useGSAP(() => {
    gsap.from(".head", {
      y: -300,
      duration: 4,
    });
    gsap.from(".ring", {
      y: 300,
      duration: 4,
      scale: 5,
    });
    gsap.from(".tail", {
      y: 300,
      duration: 4,
    });
    gsap.from(".lateHero", {
      opacity: 0,
      duration: 2,
      delay: 4,
    });
  });

  return (
    <div className="relative flex items-center justify-center bg-white dark:bg-slate-800 min-h-screen mb-20">
      <div
        className={cn(
          "absolute inset-0",
          "bg-[length:20px_20px]",
          "bg-[image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:opacity-20"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center z-10 px-2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-indigo-200 to-gray-500 dark:to-white leading-right rounded-2xl bg-clip-text text-transparent head">
            Hello, I'm Suryansu Singh
          </h1>
          <div className="text-gray-500 text-lg mb-8 max-w-[700px] mx-auto dark:text-gray-200 tail absolute">
            I am a Dev and I make<FlipWords words={words1} />Websites using<FlipWords words={words2} />and<FlipWords words={words3} />...
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
          <ScrollLink to="about" smooth={true} duration={1000} offset={-120}>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start py-2 dark:border-white dark:bg-slate-700 ring cursor-pointer">
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
            </div>
          </ScrollLink>
          <div className="absolute descriptionText lateHero top-5 opacity-40 text-3xl dark:text-white hidden md:block left-[30%] md:left-[40%] lg:left-[25%]">
            Click On This
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
