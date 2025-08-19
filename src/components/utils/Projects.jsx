import { MdKeyboardArrowRight } from "react-icons/md";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";
import { motion } from "motion/react";

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
            <div
                className="flex-wrap items-center justify-between py-8 space-y-14 sm:flex sm:space-y-0 mx-80 dark:text-white"
                onMouseEnter={() => setPreview(preview)}
                onMouseLeave={() => setPreview(null)}
                onClick={() => setIsHidden(true)}
            >
                <div>
                    <p className="text-2xl pixeltext lowercase">{title}</p>
                    <div className="flex gap-5 mt-2">
                        {tags.map((tag) => (
                            <span key={tag.id} className="text-slate-500 pixeltext">
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
                <button
                    className="flex items-center gap-1 hover:scale-105 hover:-translate-y-1 transition-all duration-300 pixeltext"
                >
                    read more
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <div className="bg-gradient-to-r from-gray-700 dark:from-indigo-200 via-gray-500 dark:via-indigo-100 to-transparent h-[1px] mx-75 transition-all" />
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
