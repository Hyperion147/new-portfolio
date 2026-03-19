"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProjectDetails from "./ProjectDetails";
import { useState, Dispatch, SetStateAction } from "react";

interface ProjectsProps {
  title: string;
  heading: string;
  description: string;
  href: string;
  code?: string;
  image: string;
  video?: string;
  preview: string;
  tags: { id: number; name: string }[];
  setPreview: Dispatch<SetStateAction<string | null>>;
}

const Projects = ({
  title,
  heading,
  description,
  href,
  code,
  image,
  video,
  preview,
  tags,
  setPreview,
}: ProjectsProps) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <div
        className="flex flex-row justify-between items-center py-5 px-2 dark:text-white cursor-pointer"
        onMouseEnter={() => setPreview(preview)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)}
      >
        <p className="text-base sm:text-xl lg:text-2xl pixeltext lowercase truncate pr-4">
          {title}
        </p>

        <button className="flex items-center gap-1 shrink-0 text-sm sm:text-base group transition-all duration-300 pixeltext">
          click to view
          <MdKeyboardArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Divider */}
      <div className="bg-linear-to-r from-slate-400 dark:from-slate-500 via-slate-600 dark:via-slate-800 to-transparent h-px transition-all" />

      {isHidden && (
        <ProjectDetails
          heading={heading}
          description={description}
          image={image}
          video={video}
          tags={tags}
          href={href}
          code={code}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </div>
  );
};

export default Projects;
