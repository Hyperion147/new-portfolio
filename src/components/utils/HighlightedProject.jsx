import { Compare } from "../ui/compare";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { SiTodoist } from "react-icons/si";

const HighlightedProject = ({ isMobile }) => {
  const [hovered, setHovered] = useState(false);

  const techStack = [
    {
      id: "1",
      name: "React JS",
      level: "Intermediate",
      color: "#61DAFB",
    },
    {
      id: "2",
      name: "Tailwind",
      level: "Intermediate",
      color: "#06B6D4",
    },
    {
      id: "3",
      name: "Supabase",
      level: "Intermediate",
      color: "#3ECF8E",
    },
    {
      id: "4",
      name: "GSAP",
      level: "Rookie",
      color: "#88CE02",
    },
    {
      id: "5",
      name: "Hot Toast",
      level: "Pro",
      color: "#FF5733",
    },
  ];

  return (
    <div className="border-r-2 border-b-2 border-t-2 mx-20 mb-8 rounded-md border-slate-400 flex hover:shadow-[10px_10px_0px_0px_rgba(203,213,225)] dark:hover:shadow-[10px_10px_0px_0px_rgba(51,65,85)] transition-all duration-500">
      <div className="">
        <Compare
          firstImage="/highlightedProject/main.png"
          secondImage="/highlightedProject/main2.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-right-top"
          className="h-[200px] md:h-[250px] lg:h-[350px] m-4 border-2 border-slate-400 rounded-2xl"
          slideMode={isMobile ? "hover" : "drag"}
        />
      </div>
      <div className="flex flex-col">
        <div className="py-2 px-6 mt-8 mb-12">
          <p className="text-slate-700 dark:text-slate-500">
            A feature-rich Todo application designed for seamless task
            management. Built with React and Tailwind CSS, it offers a sleek
            with support for multiple themes to suit user preferences. The app
            integrates Supabase for robust authentication and data storage.
            Enhanced with GSAP animations, the UI delivers smooth, engaging
            interactions, while React Hot Toast provides feedback for user
            actions. Key features include task prioritization, status tracking,
            due dates, and descriptions, all wrapped in a minimalist,
            user-friendly design.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            This project is still in BETA phase so feel free to leave issues and
            comments on the github repo...
          </p>
          <div className="mt-10 items-center flex gap-2">
            <h2 className="dark:text-slate-300 text-slate-700 min-w-22">
              Tech Stack
            </h2>
            <div className="grid grid-cols-6 w-full gap-2">
              {techStack.map((tech) => (
                <button
                  className={`px-2 py-1 h-8 rounded-full relative text-gray-900 dark:bg-slate-700 dark:text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-[var(--tech-color)]`}
                  onMouseEnter={() => setHovered(tech.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ "--tech-color": tech.color }}
                  key={tech.id}
                >
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                      hovered === tech.id ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {tech.name}
                  </span>
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                      hovered === tech.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {tech.level}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-full mx-5 justify-center items-center">
          <a
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none w-40 transition-all duration-300 hover:-translate-y-1"
            href="https://todo-hyper-neon.vercel.app/"
            target="_blank"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00AABA_0%,#0093A0_50%,#00AABA_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r bg-white dark:bg-slate-700 py-1 font-medium text-black dark:text-white backdrop-blur-3xl">
              <SiTodoist className="text-lg mr-3" />
              Todo App
            </span>
          </a>
          <a
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none w-40 transition-all duration-300 hover:-translate-y-1"
            href="https://github.com/Hyperion147/todo-supabase"
            target="_blank"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00CE1B_0%,#009113_50%,#00CE1B_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 py-1 font-medium text-black dark:text-white backdrop-blur-3xl">
              <VscCode className="text-lg mr-3" />
              Code
            </span>
          </a>
          <a
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none w-40 transition-all duration-300 hover:-translate-y-1"
            href="https://github.com/Hyperion147"
            target="_blank"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 py-1 font-medium text-black dark:text-white backdrop-blur-3xl">
              <FaGithub className="text-lg mr-3" />
              Github
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HighlightedProject;
