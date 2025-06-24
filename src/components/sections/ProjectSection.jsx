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
    <section
      id="projects"
      className="px-2 sm:px-4 md:px-8 max-w-full md:max-w-5xl mx-auto mt-20 md:mt-40 mb-20 md:mb-0"
    >
      <h2
        id="heading"
        className="bg-gradient-to-r from-indigo-200 to-gray-900 dark:to-slate-300 leading-right rounded-2xl bg-clip-text text-transparent text-4xl font-medium text-center pb-4"
      >
        Projects
      </h2>
      <article className="">
        <HighlightedProject />
      </article>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full border-2 py-4 rounded-md border-slate-400 px-2 sm:px-4 hover:shadow-[-8px_8px_2px_0px_rgba(203,213,225)] dark:hover:shadow-[-8px_8px_2px_0px_rgba(51,65,85)] transition-all duration-300" aria-label="Project gallery">
        {projects.map((project, index) => (
          <article key={project.id} className="flex flex-col items-center">
            <Compare
              firstImage={`/projects/img${index + 1}.png`}
              secondImage={`/projects/code${index + 1}.png`}
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[180px] xs:h-[200px] md:h-[250px] lg:h-[350px] w-full border border-slate-400 rounded-md"
              slideMode={isMobile ? "hover" : "drag"}
            />

            <nav className="flex gap-3 mt-4 w-full justify-center" aria-label={`Project ${project.name} links`}>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-gray-700 dark:text-white shadow-2xs border-b border-slate-500 rounded-xl px-6 py-2 font-bold transform hover:-translate-y-1 transition duration-400"
              >
                Live Demo
              </a>

              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-transparent dark:text-white border border-gray-500 text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-300"
                >
                  View Code
                </a>
              )}
            </nav>
          </article>
        ))}
      </section>
    </section>
  );
};

export default ProjectSection;
