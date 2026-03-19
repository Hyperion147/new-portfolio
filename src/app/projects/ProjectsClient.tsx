"use client";

import { projectInfo } from "@/constants/projectInfo";
import { templateInfo } from "@/constants/templateInfo";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "motion/react";
import Projects from "@/components/utils/Projects";
import Image from "next/image";

const MotionImage = motion.create(Image);

export default function ProjectsClient() {
    const [isMobile, setIsMobile] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
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
            x.set(e.clientX);
            y.set(e.clientY);
        }
    };

    return (
        <section
            aria-label="Project gallery"
            className="w-full mx-auto"
            onMouseMove={handleMouseMove}
        >
            {mounted && !isMobile && preview && createPortal(
                <MotionImage
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ x: springX, y: springY }}
                    src={preview}
                    alt="Project preview"
                    width={320}
                    height={180}
                    className="fixed top-0 left-0 z-9999 object-cover rounded-lg shadow-2xl pointer-events-none border-gray-400 border-2"
                />,
                document.body
            )}

            <div className="px-2 sm:px-4">
                {projectInfo.map((project) => (
                    <Projects key={project.id} {...project} setPreview={setPreview} />
                ))}
            </div>

            <div className="flex flex-row px-2 sm:px-4 items-center pt-6 lg:pt-8 head gap-4">
                <h2 className="bg-linear-to-r from-slate-500 dark:from-indigo-200 to-gray-700 dark:to-slate-300 leading-right bg-clip-text text-transparent sm:text-lg lg:text-xl font-medium pixeltext text-center">
                    templates
                </h2>
            </div>

            <div className="bg-linear-to-r from-indigo-200 via-slate-500 dark:via-indigo-200 to-transparent mx-2 sm:mx-4 w-28 h-px" />

            <div className="px-2 sm:px-4">
                {templateInfo.map((template) => (
                    <Projects key={template.id} {...template} setPreview={setPreview} />
                ))}
            </div>
        </section>
    );
}
