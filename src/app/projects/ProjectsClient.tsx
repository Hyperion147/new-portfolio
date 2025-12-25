"use client";

import { projectInfo } from "@/constants/projectInfo";
import { useState, useEffect } from "react";
import ToggleDark from "@/components/utils/ToggleDark";
import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { motion, useMotionValue, useSpring } from "motion/react";
import Projects from "@/components/utils/Projects";

export default function ProjectsClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 50, stiffness: 150 });
  const springY = useSpring(y, { damping: 50, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      // only track mouse for desktop
      x.set(e.clientX + 20);
      y.set(e.clientY + 10);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      } as const,
    },
  };

  const [preview, setPreview] = useState<string | null>(null);

  return (
    <motion.section
      aria-label="Project gallery"
      className="bg-[#fff9f0] dark:bg-gray-900 min-h-screen overflow-x-hidden mx-auto"
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-row justify-between items-center px-6 sm:px-12 lg:mx-80 pt-6 lg:pt-8 head gap-4"
      >
        {/* Back button */}
        <Link className="z-50" href="/">
          <p className="bg-linear-to-r from-slate-500 dark:from-indigo-200 to-gray-400 dark:to-slate-500 leading-right bg-clip-text text-transparent text-sm sm:text-lg lg:text-xl font-medium pixeltext flex items-center gap-2">
            <MdKeyboardDoubleArrowLeft className="dark:text-indigo-200 text-slate-500" />
            go back
          </p>
        </Link>

        {/* Title center on mobile, right on desktop */}
        <h2 className="bg-linear-to-r from-slate-500 dark:from-indigo-200 to-gray-700 dark:to-slate-300 leading-right bg-clip-text text-transparent sm:text-lg lg:text-xl font-medium pixeltext text-center sm:text-left">
          /pages/projects.jsx
        </h2>

        <ToggleDark />
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
        className="bg-linear-to-r from-transparent via-gray-500 dark:via-indigo-200 to-transparent mt-4 h-px mx-6 sm:mx-12 lg:mx-80 origin-center"
      />

      {/* Project Cards */}
      <motion.div
        variants={containerVariants}
        onMouseMove={handleMouseMove}
        className="px-4 sm:px-8 mt-8 relative words transition-opacity duration-1000"
      >
        {projectInfo.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Projects {...project} setPreview={setPreview} />
          </motion.div>
        ))}

        {/* Desktop preview (hidden on mobile) */}
        {!isMobile && preview && (
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-50 object-cover h-40 w-60 sm:h-50 sm:w-80 rounded-lg shadow-2xl pointer-events-none border-gray-400 border-2"
            style={{ x: springX, y: springY }}
            src={preview}
            alt="Project preview"
          />
        )}
      </motion.div>
    </motion.section>
  );
}
