import React, { useState, useEffect } from "react";
import { Compare } from "../ui/compare";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      className="p-4 border border-slate-400 rounded-3xl max-w-400 mx-auto mb-10"
    >
      <h2
        id="heading"
        className="bg-gradient-to-r from-indigo-200 to-gray-900 dark:to-slate-300 leading-right rounded-2xl bg-clip-text text-transparent text-4xl font-medium text-center mb-6"
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={project.id} className="flex flex-col items-center">
            <Compare
              firstImage={`/projects/img${index + 1}.png`}
              secondImage={`/projects/code${index + 1}.png`}
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[200px] w-full md:h-[350px] lg:h-[400px] border border-slate-400 rounded-2xl"
              slideMode={isMobile ? "hover" : "drag"}
            />

            <div className="flex gap-3 mt-4 w-full justify-center">
              <a
                href={project.liveDemo}
                target="_blank"
                className="px-3 py-2 text-center w-26 shadow-slate-600 dark:shadow-slate-300 text-gray-700 dark:text-white shadow-2xs rounded-lg hover:bg-slate-700 hover:text-white transition-colors font-bold"
              >
                Live Demo
              </a>

              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-300 dark:hover:text-black transition-colors"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">

        <a className="relative mt-5 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-40"
          href="https://github.com/Hyperion147"
          target="_blank"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-3 py-1 font-medium text-black dark:text-white backdrop-blur-3xl">
            <FaGithub className="text-lg mr-3" />
            Github
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
