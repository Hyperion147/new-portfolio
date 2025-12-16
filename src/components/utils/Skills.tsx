"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { cn } from "@/components/utils/Utils";

const languages = [
    {
        id: 1,
        name: "HTML",
        designation: "",
        image: "/tech/html.png",
    },
    {
        id: 2,
        name: "CSS",
        image: "/tech/css.png",
    },
    {
        id: 3,
        name: "Javascript",
        image: "/tech/javascript.png",
    },
    {
        id: 4,
        name: "React",
        image: "/tech/reactjs.png",
    },
    {
        id: 5,
        name: "Tailwind",
        image: "/tech/tailwind.png",
    },
    {
        id: 6,
        name: "Typescript",
        image: "/tech/typescript.png",
    },
    {
        id: 7,
        name: "GIT",
        image: "/tech/git.png",
    },
    {
        id: 8,
        name: "Figma",
        image: "/tech/figma.png",
    },
    {
        id: 9,
        name: "Supabase",
        image: "/tech/supabase.png",
    },
];

const Skills = ({ className = "" }: { className?: string }) => {

    useGSAP(() => {
        gsap.from(".skillCont", {
            y: 50,
            filter: "blur(15px)",
            duration: 1
        });
    });

    return (
        <section
            className={cn("flex flex-row h-full flex-wrap items-center justify-center w-full gap-2 skillCont", className)}
            aria-label="Technologies and skills"
        >
            <AnimatedTooltip items={languages} />
        </section>
    );
};

export default Skills;