"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MobilePageHeading = ({ eyebrow, title }) => {

    useGSAP(() => {
            gsap.from(".mobile-header", {
                y: -50,
                duration: 1,
                filter: "blur(15px)",
                opacity: 0,
            });
        });

    return (
        <div className="mb-8 md:hidden mobile-header">
            <div className="relative flex flex-col pt-2 px-4">
                <div className="corner-line bg-slate-800 dark:bg-white -top-[4px] -left-[2px] h-[2px] w-2 absolute" />
                <div className="corner-line bg-slate-800 dark:bg-white -top-[2px] -left-[2px] h-2 w-[2px] absolute" />
                <div className="corner-line bg-slate-800 dark:bg-white -top-[2px] -right-[2px] h-[2px] w-2 absolute" />
                <div className="corner-line bg-slate-800 dark:bg-white -top-[2px] -right-[2px] h-2 w-[2px] absolute" />
                <div className="corner-line bg-slate-800 dark:bg-white -bottom-[18px] -left-[2px] h-[2px] w-2 absolute" />
                <div className="corner-line bg-slate-800 dark:bg-white -bottom-[18px] -left-[2px] h-2 w-[2px] absolute" />
                <div className="corner-line bg-slate-800 dark:bg-white -bottom-[18px] -right-[2px] h-[2px] w-2 absolute" />
                <div className="corner-line bg-slate-800 dark:bg-white -bottom-[18px] -right-[2px] h-2 w-[2px] absolute" />
                <div className="pointer-events-none absolute inset-0 opacity-80" />
                <div className="relative">
                    <p className="pixeltext text-xs uppercase text-slate-500 dark:text-slate-400">
                        {eyebrow}
                    </p>
                    <p className="text-4xl font-semibold leading-none text-slate-950 dark:text-white">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MobilePageHeading;
