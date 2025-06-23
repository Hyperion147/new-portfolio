import { useState, useEffect } from "react";
import { Compare } from "../ui/compare";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HighlightedProject from "../utils/HighlightedProject";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      name: "Project 1",
      image: "",
      code: "https://github.com/Hyperion147/nextAppMusic",
      liveDemo: "https://music-app-three-phi.vercel.app/",
    },
    {
      id: 2,
      name: "Project 2",
      image: "",
      code: "https://github.com/Hyperion147/Eclatvents/tree/main/Eclatvents",
      liveDemo: "https://eclatvents.vercel.app/",
    },
    {
      id: 3,
      name: "Project 3",
      image: "",
      code: "https://github.com/Hyperion147/vite-portfolio",
      liveDemo: "https://hyperion147.github.io/vite-portfolio/",
    },
  ];

  useGSAP(() => {
    gsap.from("#projects", {
      y: 300,
      scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        duration: 3,
      },
    });
  });

  return (
    <div
      id="projects"
      className="p-4 max-w-400 mx-auto mt-40 mb-30 md:mb-0"
    >
      <h2
        id="heading"
        className="bg-gradient-to-r from-indigo-200 to-gray-900 dark:to-slate-300 leading-right rounded-2xl bg-clip-text text-transparent text-4xl font-medium text-center mb-6"
      >
        Projects
      </h2>
      <div className="">
        <HighlightedProject />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20 border-b-2 border-l-2 border-t-2 py-4 rounded-3xl border-slate-400 px-4 hover:shadow-[-8px_8px_2px_0px_rgba(203,213,225)] dark:hover:shadow-[-8px_8px_2px_0px_rgba(51,65,85)] transition-all duration-300">
        {projects.map((project, index) => (
          <div key={project.id} className="flex flex-col items-center">
            <Compare
              firstImage={`/projects/img${index + 1}.png`}
              secondImage={`/projects/code${index + 1}.png`}
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[200px] w-full md:h-[250px] lg:h-[350px] border border-slate-400 rounded-2xl"
              slideMode={isMobile ? "hover" : "drag"}
            />

            <div className="flex gap-3 mt-4 w-full justify-center">
              <a
                href={project.liveDemo}
                target="_blank"
                className="text-center text-gray-700 dark:text-white shadow-2xs border-b border-slate-500 rounded-xl px-6 py-2 font-bold transform hover:-translate-y-1 transition duration-400"
              >
                Live Demo
              </a>

              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  className="px-6 py-2 bg-transparent dark:text-white border border-gray-500 text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-300"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
