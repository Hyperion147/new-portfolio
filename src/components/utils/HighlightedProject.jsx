"use client";
import { Compare } from "../ui/compare";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { SiTodoist } from "react-icons/si";

const HighlightedProject = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const techStack = [
    { id: "1", name: "React JS" },
    { id: "2", name: "Tailwind" },
    { id: "3", name: "Supabase" },
    { id: "4", name: "Framer Motion" },
    { id: "5", name: "Leaflet" },
    { id: "6", name: "ShadCN" },
  ];

  const projectLinks = [
    {
      id: "app",
      href: "https://flora.suryansu.pro/",
      label: "Flora",
      Icon: SiTodoist,
      colors: ["#00CE1B", "#ffffffff", "#00CE1B"],
      innerClassName: "bg-gradient-to-r bg-[#fff9f0] dark:bg-slate-700",
    },
    {
      id: "code",
      href: "https://github.com/Hyperion147/flora",
      label: "Code",
      Icon: VscCode,
      colors: ["#00AABA", "#ffffffff", "#00AABA"],
      innerClassName: "bg-[#fff9f0] dark:bg-slate-950",
    },
    {
      id: "github",
      href: "https://github.com/Hyperion147",
      label: "Github",
      Icon: FaGithub,
      colors: ["#393BB2", "#ffffffff", "#393BB2"],
      innerClassName: "bg-[#fff9f0] dark:bg-slate-950",
    },
  ];

  const description = `Flora is an innovative plantation website where users can add and geotag their plants, fostering a community of nature enthusiasts. The platform features a competitive leaderboard to encourage engagement and an admin dashboard for seamless management. Users can also access a dedicated plant section with downloadable certificates recognizing their contributions and milestones. This project showcases my skills in full-stack development and geolocation integration.`;

  const shadowDescription = `I have built a similar project for Municipal Corporation Panipat with 10k+ plants on it, presented throughout the city of Panipat`;

  const displayedDescription =
    isMobile && !showMore
      ? description.slice(0, 120) + (description.length > 120 ? "..." : "")
      : description;

  return (
    <div className="border-2 sm:mx-6 md:mx-0 mb-4 rounded-md border-slate-300 dark:border-slate-600 flex flex-col sm:flex-row w-full mx-auto">
      <div className="flex justify-center items-start w-full sm:w-auto">
        <Compare
          firstImage="/highlightedProject/main.png"
          secondImage="/highlightedProject/main2.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-right-top"
          className="w-[400px] xs:w-[320px] h-[180px] xs:h-[200px] md:h-[250px] lg:h-[400px] m-2 sm:m-4 border-2 border-slate-400 rounded-md"
          slideMode={"hover"}
        />
      </div>
      <div className="flex flex-col w-full text-start">
        <div className="py-2 px-3 sm:px-6 mt-4">
          <p className="text-slate-700 dark:text-slate-500">
            {displayedDescription}
            {isMobile && (
              <button
                className="ml-2 text-blue-500 underline text-sm focus:outline-none"
                onClick={() => setShowMore((prev) => !prev)}
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
          <p className="text-slate-900 dark:text-slate-300 text-xs border border-md px-2 py-1 rounded-md bg-gray-50 dark:bg-slate-700">
            {shadowDescription}
            <a
              href="https://panipatconnect.com"
              target="_blank"
              rel="noreferrer"
              className="ml-1 underline text-slate-950 dark:text-slate-50"
            >
              panipatconnect.com
            </a>
          </p>
          <div className="mt-6 sm:mt-4 items-center flex flex-col sm:flex-row gap-2 mx-0 sm:mx-12 mb-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 w-full gap-1 ml-10 md:m-0 md:gap-2">
              {techStack.map((tech) => (
                <TechBadge key={tech.id} {...tech} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center mb-4 px-8 md:px-0">
          {projectLinks.map((link, index) => (
            <ProjectLink
              key={link.id}
              {...link}
              isLast={index === projectLinks.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TechBadge = ({ name, color }) => (
  <button
    className="px-2 py-1 w-30 h-7 rounded-full relative text-gray-900 dark:bg-slate-700 dark:text-white text-xs sm:text-sm border border-slate-400 hover:shadow-[4px_4px_0px_0px_rgba(203,213,225)] dark:hover:shadow-[4px_4px_0px_0px_rgba(51,65,85)] transition-all duration-200"
    style={{ "--tech-color": color }}
  >
    <span className="absolute inset-0 flex items-center justify-center">
      {name}
    </span>
  </button>
);

const ProjectLink = ({ href, Icon, colors, label, innerClassName, isLast }) => {
  const gradientStyle = {
    background: `conic-gradient(from 90deg at 50% 50%, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
  };

  return (
    <a
      className={`relative inline-flex h-10 overflow-hidden rounded-full hover:shadow-[5px_5px_0px_0px_rgba(203,213,225)] dark:hover:shadow-[5px_5px_0px_0px_rgba(51,65,85)] transition-all duration-500 p-[1px] focus:outline-none w-full sm:w-40 transition-all duration-300 ${
        !isLast ? "mb-2 sm:mb-0" : ""
      }`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
        style={gradientStyle}
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full py-1 font-medium text-black dark:text-white backdrop-blur-3xl ${innerClassName}`}
      >
        <Icon className="text-lg mr-3" />
        {label}
      </span>
    </a>
  );
};

export default HighlightedProject;
