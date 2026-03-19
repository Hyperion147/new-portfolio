"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HighlightedProject from "../utils/HighlightedProject";
import ProjectsClient from "@/app/projects/ProjectsClient";

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
            <ProjectsClient />
        </section>
    );
};

export default ProjectSection;
