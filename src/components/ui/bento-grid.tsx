import { cn } from "@/components/utils/Utils";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleMouseEnter = contextSafe(() => {
        gsap.fromTo(
            ".corner-line",
            { opacity: 1 },
            {
                opacity: 0.2, // Pulse down to 20% opacity
                duration: 0.1,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 5,
                onComplete: () => {
                    gsap.set(".corner-line", { opacity: 1 });
                }
            }
        );
    });

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            className={cn(
                "row-span-1 relative group/bento p-4 dark:bg-slate-800 bg-[#fff9f0] border-2 border-dashed border-slate-300 dark:border-slate-700 justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className="corner-line bg-slate-800 dark:bg-white -top-[2px] -left-[2px] h-[2px] w-2 absolute" />
            <div className="corner-line bg-slate-800 dark:bg-white -top-[2px] -left-[2px] h-2 w-[2px] absolute" />
            <div className="corner-line bg-slate-800 dark:bg-white -top-[2px] -right-[2px] h-[2px] w-2 absolute" />
            <div className="corner-line bg-slate-800 dark:bg-white -top-[2px] -right-[2px] h-2 w-[2px] absolute" />
            <div className="corner-line bg-slate-800 dark:bg-white -bottom-[18px] -left-[2px] h-[2px] w-2 absolute" />
            <div className="corner-line bg-slate-800 dark:bg-white -bottom-[18px] -left-[2px] h-2 w-[2px] absolute" />
            <div className="corner-line bg-slate-800 dark:bg-white -bottom-[18px] -right-[2px] h-[2px] w-2 absolute" />
            <div className="corner-line bg-slate-800 dark:bg-white -bottom-[18px] -right-[2px] h-2 w-[2px] absolute" />

            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300 text-xs">
                    {description}
                </div>
            </div>
        </div>
    );
};
