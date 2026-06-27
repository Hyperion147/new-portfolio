"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HighlightedProject from "../utils/HighlightedProject";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

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
            className="text-gray-500 text-center w-full max-w-full md:max-w-5xl mx-auto h-full md:p-4 group"
        >
            <h2 className="sr-only">Featured Project</h2>
            <article className="mx-auto w-full mb-4">
                <HighlightedProject />
            </article>
            <div className="flex justify-end mt-2 mb-1">
                <Link
                    href="/projects"
                    className="group/link relative inline-flex items-center overflow-hidden border border-dashed border-slate-300 bg-white/70 px-4 py-2 text-sm pixeltext text-slate-700 shadow-[4px_4px_0_rgba(148,163,184,0.12)] transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white hover:shadow-[8px_8px_0_rgba(15,23,42,0.16)] dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-300 dark:shadow-[4px_4px_0_rgba(15,23,42,0.28)] dark:hover:border-slate-200 dark:hover:bg-white dark:hover:text-slate-950 dark:hover:shadow-[8px_8px_0_rgba(226,232,240,0.08)]"
                >
                    <span className="absolute left-0 top-0 h-full w-1 bg-slate-900 transition-all duration-300 group-hover/link:w-full group-hover/link:opacity-10 dark:bg-white" />
                    <span className="relative flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover/link:text-white/70 dark:text-slate-400 dark:group-hover/link:text-slate-500">
                            archive
                        </span>
                        <span className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
                        <span>view all projects</span>
                        <span className="flex items-center justify-center border border-current">
                            <MdKeyboardArrowRight className="w-4 h-4" />
                        </span>
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default ProjectSection;
