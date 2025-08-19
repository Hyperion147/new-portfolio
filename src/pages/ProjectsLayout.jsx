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
            setIsMobile(window.innerWidth < 768);
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
        x.set(e.clientX + 20);
        y.set(e.clientY + 10);
    };

    const [preview, setPreview] = useState(null);

    return (
        <motion.section
            aria-label="Project gallery"
            className="bg-[#fff9f0] dark:bg-slate-800 h-screen overflow-x-hidden"
            initial={{ opacity: 0, y: -100, filter: "blur(14px)" }}
            animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
            }}
        >
            <div className=" flex justify-between items-center mx-80 pt-8 head">
                <Link className="z-1000" to="/">
                    <p className="bg-gradient-to-r from-slate-500 dark:from-indigo-200 to-gray-400 dark:to-slate-500 leading-right bg-clip-text text-transparent text-xl font-medium pixeltext flex items-center gap-2 pixeltext">
                        <MdKeyboardDoubleArrowLeft className="dark:text-indigo-200 text-slate-500" />
                        go back
                    </p>
                </Link>
                <h2 className="bg-gradient-to-r from-slate-500 dark:from-indigo-200 to-gray-700 dark:to-slate-300 leading-right bg-clip-text text-transparent text-xl font-medium pixeltext">
                    /pages/projects.jsx
                </h2>
                <ToggleDark />
            </div>
            <div className="bg-gradient-to-r from-transparent via-gray-500 dark:via-indigo-200 to-transparent mt-4 h-[1px] mx-75" />
            <div
                onMouseMove={handleMouseMove}
                className="mx-8 mt-10 relative words transition-opacity duration-1000"
            >
                {projectInfo.map((project) => (
                    <Projects
                        key={project.id}
                        {...project}
                        setPreview={setPreview}
                    />
                ))}
                {preview && (
                    <motion.img
                        className="fixed top-0 left-0 z-50 object-fit h-50 w-100 rounded-lg shadow-lg pointer-events-none border-gray-400 border-2"
                        style={{ x: springX, y: springY }}
                        src={preview}
                    />
                )}
            </div>
        </motion.section>
    );
};

export default ProjectsLayout;
