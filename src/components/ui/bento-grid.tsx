import { cn } from "@/components/utils/Utils";

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
    return (
        <div
            className={cn(
                "row-span-1 relative rounded-md group/bento hover:shadow-xl transition duration-200 hover:shadow-[5px_5px_2px_0px_rgba(203,213,225)] dark:hover:shadow-[5px_5px_2px_0px_rgba(51,65,85)] transition-all duration-500 p-4 dark:bg-slate-800 bg-[#fff9f0] border-2 border-dashed border-slate-300 dark:border-slate-700 justify-between flex flex-col space-y-4",
                className
            )}
        >

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
