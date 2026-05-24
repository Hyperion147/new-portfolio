"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { linksInfo } from "@/constants/linksInfo";
import { cn } from "@/components/utils/Utils";
import { useRef } from "react";

const LinkCard = ({ id, label, handle, href, Icon }) => {
    const iconRef = useRef(null);

    const handleMouseEnter = () => {
        iconRef.current?.startAnimation();
    };

    const handleMouseLeave = () => {
        iconRef.current?.stopAnimation();
    };

    return (
        <a
            key={id}
            href={href}
            target={href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-sm hover:border-slate-500 dark:hover:border-slate-400 hover:shadow-[4px_4px_0px_0px_rgba(203,213,225)] dark:hover:shadow-[4px_4px_0px_0px_rgba(51,65,85)] transition-all duration-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon
                ref={iconRef}
                size={20}
                className="shrink-0 text-gray-600 dark:text-gray-300"
            />
            <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight">
                    {label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {handle}
                </p>
            </div>
        </a>
    );
};

const LinksSection = ({ className = "" }) => {
    useGSAP(() => {
        gsap.from(".linksCont", {
            y: 50,
            filter: "blur(15px)",
            duration: 1,
        });
    });

    return (
        <section
            id="links"
            className={cn(
                "px-4 sm:px-8 bg-background linksCont overflow-hidden",
                className
            )}
        >
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {linksInfo.map((link) => (
                        <LinkCard key={link.id} {...link} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinksSection;
