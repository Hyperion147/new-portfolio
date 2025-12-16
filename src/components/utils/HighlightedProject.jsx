import { Compare } from "../ui/compare";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { SiTodoist } from "react-icons/si";

const HighlightedProject = ({ isMobile }) => {
  const [showMore, setShowMore] = useState(false);

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
    {
      id: "6",
      name: "ShadCN",
      level: "Rookie",
      color: "#000000",
    },
  ];

  const description = `A feature-rich Todo application designed for seamless task management. Built with React and Tailwind CSS, it offers a sleek with support for multiple themes to suit user preferences. The app integrates Supabase for robust authentication and data storage. Enhanced with GSAP animations, the UI delivers smooth, engaging interactions, while React Hot Toast provides feedback for user actions. Key features include task prioritization, due dates, and descriptions, all wrapped in a minimalist, user-friendly design.`;

  const shortDescription =
    description.slice(0, 120) + (description.length > 120 ? "..." : "");

  return (
    <div className="border-2 sm:mx-6 md:mx-0 mb-4 rounded-md border-slate-300 dark:border-slate-600 flex flex-col sm:flex-row w-full mx-auto">
      <div className="flex justify-center items-start w-full sm:w-auto">
        <Compare
          firstImage="/highlightedProject/main.png"
          secondImage="/highlightedProject/main2.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-right-top"
          className="w-[400px] xs:w-[320px] h-[180px] xs:h-[200px] md:h-[250px] lg:h-[400px] m-2 sm:m-4 border-2 border-slate-400 rounded-md"
          slideMode={isMobile ? "hover" : "drag"}
        />
      </div>
      <div className="flex flex-col w-full text-start">
        <div className="py-2 px-3 sm:px-6 mt-4">
          <p className="text-slate-700 dark:text-slate-500">
            {isMobile
              ? showMore
                ? description
                : shortDescription
              : description}
            {isMobile && !showMore && (
              <button
                className="ml-2 text-blue-500 underline text-sm focus:outline-none"
                onClick={() => setShowMore((prev) => !prev)}
              >
                Read More
              </button>
            )}
            {isMobile && showMore && (
              <button
                className="ml-2 text-blue-500 underline text-sm focus:outline-none"
                onClick={() => setShowMore((prev) => !prev)}
              >
                Read Less
              </button>
            )}
          </p>
          <div className="mt-6 sm:mt-4 items-center flex flex-col sm:flex-row gap-2 mx-0 sm:mx-12 mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 w-full gap-1 ml-10 md:m-0 md:gap-2">
              {techStack.map((tech) => (
                <button
                  className={`px-2 py-1 w-30 h-7 rounded-full relative text-gray-900 dark:bg-slate-700 dark:text-white text-xs sm:text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-[var(--tech-color)]`}
                  style={{ "--tech-color": tech.color }}
                  key={tech.id}
                >
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  >
                    {tech.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center mb-4 px-8 md:px-0">
          <a
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none w-full sm:w-40 transition-all duration-300 hover:-translate-y-1 mb-2 sm:mb-0"
            href="https://todo.suryansu.pro/todo"
            target="_blank"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00AABA_0%,#0093A0_50%,#00AABA_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r bg-[#fff9f0] dark:bg-slate-700 py-1 font-medium text-black dark:text-white backdrop-blur-3xl">
              <SiTodoist className="text-lg mr-3" />
              Todo App
            </span>
          </a>
          <a
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none w-full sm:w-40 transition-all duration-300 hover:-translate-y-1 mb-2 sm:mb-0"
            href="https://github.com/Hyperion147/todo-supabase"
            target="_blank"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00CE1B_0%,#009113_50%,#00CE1B_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#fff9f0] dark:bg-slate-950 py-1 font-medium text-black dark:text-white backdrop-blur-3xl">
              <VscCode className="text-lg mr-3" />
              Code
            </span>
          </a>
          <a
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none w-full sm:w-40 transition-all duration-300 hover:-translate-y-1"
            href="https://github.com/Hyperion147"
            target="_blank"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#fff9f0] dark:bg-slate-950 py-1 font-medium text-black dark:text-white backdrop-blur-3xl">
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
