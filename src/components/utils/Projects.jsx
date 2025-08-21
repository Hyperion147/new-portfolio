import { MdKeyboardArrowRight } from "react-icons/md";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";

const Projects = ({
  title,
  heading,
  description,
  href,
  code,
  image,
  preview,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      {/* Project Row */}
      <div
        className="
          flex flex-col sm:flex-row
          justify-between items-start sm:items-center
          py-6 sm:py-8 
          space-y-4 sm:space-y-0
          px-4 sm:px-8 lg:mx-80 
          dark:text-white cursor-pointer
        "
        onMouseEnter={() => setPreview(preview)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)}
      >
        {/* Title + Tags */}
        <div className="w-full sm:w-auto">
          <p className="text-lg sm:text-xl lg:text-2xl pixeltext lowercase">
            {title}
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs sm:text-sm text-slate-500 pixeltext"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <button
          className="
            flex items-center gap-1 
            mt-2 sm:mt-0
            text-sm sm:text-base
            hover:scale-105 hover:-translate-y-1 
            transition-all duration-300 pixeltext
          "
        >
          read more
          <MdKeyboardArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-gray-700 dark:from-indigo-200 via-gray-500 dark:via-indigo-100 to-transparent h-[1px] px-4 sm:px-8 lg:mx-80 transition-all" />

      {/* Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          heading={heading}
          description={description}
          image={image}
          tags={tags}
          href={href}
          code={code}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Projects;
