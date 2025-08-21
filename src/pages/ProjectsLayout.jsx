import { projectInfo } from "../constants/projectInfo";
import { useState, useEffect } from "react";
import ToggleDark from "../components/utils/ToggleDark";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { motion, useMotionValue, useSpring } from "motion/react";
import Projects from "../components/utils/Projects";

const ProjectsLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 20, stiffness: 45 });
  const springY = useSpring(y, { damping: 20, stiffness: 45 });

  const handleMouseMove = (e) => {
    if (!isMobile) {
      // only track mouse for desktop
      x.set(e.clientX + 20);
      y.set(e.clientY + 10);
    }
  };

  const [preview, setPreview] = useState(null);

  return (
    <motion.section
      aria-label="Project gallery"
      className="bg-[#fff9f0] dark:bg-slate-800 min-h-screen overflow-x-hidden"
      initial={{ opacity: 0, y: -100, filter: "blur(14px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      }}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center px-6 sm:px-12 lg:mx-80 pt-6 lg:pt-8 head gap-4">
        {/* Back button */}
        <Link className="z-50" to="/">
          <p className="bg-gradient-to-r from-slate-500 dark:from-indigo-200 to-gray-400 dark:to-slate-500 leading-right bg-clip-text text-transparent text-sm sm:text-lg lg:text-xl font-medium pixeltext flex items-center gap-2">
            <MdKeyboardDoubleArrowLeft className="dark:text-indigo-200 text-slate-500" />
            go back
          </p>
        </Link>

        {/* Title center on mobile, right on desktop */}
        <h2 className="bg-gradient-to-r from-slate-500 dark:from-indigo-200 to-gray-700 dark:to-slate-300 leading-right bg-clip-text text-transparent sm:text-lg lg:text-xl font-medium pixeltext text-center sm:text-left">
          /pages/projects.jsx
        </h2>

        <ToggleDark />
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-gray-500 dark:via-indigo-200 to-transparent mt-4 h-[1px] mx-6 sm:mx-12 lg:mx-80" />

      {/* Project Cards */}
      <div
        onMouseMove={handleMouseMove}
        className="px-4 sm:px-8 mt-8 relative words transition-opacity duration-1000"
      >
        {projectInfo.map((project) => (
          <Projects
            key={project.id}
            {...project}
            setPreview={setPreview}
          />
        ))}

        {/* Desktop preview (hidden on mobile) */}
        {!isMobile && preview && (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-40 w-60 sm:h-50 sm:w-80 rounded-lg shadow-lg pointer-events-none border-gray-400 border-2"
            style={{ x: springX, y: springY }}
            src={preview}
            alt="Project preview"
          />
        )}
      </div>
    </motion.section>
  );
};

export default ProjectsLayout;
