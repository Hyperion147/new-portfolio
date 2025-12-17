"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HighlightedProject from "../utils/HighlightedProject";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ProjectSection = () => {
    useGSAP(() => {
        gsap.from("#projects", {
            y: 100,
            filter: "blur(15px)",
            duration: 1
        });
    });

    return (
        <section
            id="projects"
            className="text-gray-500 text-center w-full max-w-full md:max-w-5xl mx-auto h-full py-6 px-2 group"
        >
            <h2
                className="heading"
            >
                Projects
            </h2>
            <article className="mx-auto flex">
                <HighlightedProject />
            </article>
            <div className="w-full mt-4">
                <div className="flex justify-end">
                    <Link href="/projects">
                        <p className="text-xl font-medium pixeltext flex items-center gap-2 pr-4 text-slate-500 dark:text-indigo-200">
                            <span className="relative">
                                <span className="bg-gradient-to-l from-slate-500 dark:from-indigo-200 to-slate-400 dark:to-slate-300 bg-clip-text text-transparent">
                                    view all projects
                                </span>
                            </span>
                            <MdKeyboardDoubleArrowRight className="dark:text-indigo-200 text-slate-500 animate-arrow-cycle" />
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
