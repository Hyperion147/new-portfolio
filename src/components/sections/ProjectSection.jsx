import { useState, useEffect } from "react";
import { Compare } from "../ui/compare";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HighlightedProject from "../utils/HighlightedProject";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
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
            className="px-2 sm:px-4 md:px-8 max-w-full md:max-w-5xl mx-auto mb-20 md:mb-0"
        >
            <h2
                id="heading"
                className="bg-gradient-to-r from-indigo-200 to-gray-900 dark:to-slate-300 leading-right rounded-2xl bg-clip-text text-transparent text-4xl font-medium text-center pb-4 mb-2 md:mb-4"
            >
                Projects
            </h2>
            <article className="mx-auto flex">
                <HighlightedProject />
            </article>
            <div className="mt-5 w-full">
                <div className="flex justify-end">
                    <Link to="/projects">
                        <p className="bg-gradient-to-l from-slate-500 dark:from-indigo-200 to-slate-400 dark:to-slate-300 leading-right bg-clip-text text-transparent text-xl font-medium pixeltext flex items-center gap-2 pr-4">
                            view all projects
                            <MdKeyboardDoubleArrowRight className="dark:text-indigo-200 text-slate-500" />
                        </p>
                    </Link>
                </div>
                <div className="bg-gradient-to-r from-transparent via-gray-500 dark:via-indigo-200 to-slate-400 mt-4 h-[1px]" />
            </div>
        </section>
    );
};

export default ProjectSection;
