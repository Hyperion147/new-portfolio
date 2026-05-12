"use client";

import { BentoGridItem } from "@/components/ui/bento-grid";
import { playClickSound } from "@/components/ui/click";
import toast from "react-hot-toast";
import { FiArrowUpRight, FiCopy } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import ToggleDark from "@/components/utils/ToggleDark";
import { useEffect, useState } from "react";

const themeCLipperStyles = `::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

* {
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}`;

const ThemeClipperBlock = () => {
    const [rawCode, setRawCode] = useState("");

    useEffect(() => {
        fetch("/blocks/themeClipperCode.md")
            .then((res) => res.text())
            .then((text) => {
                const match = text.match(/```tsx\s+([\s\S]*?)\s+```/);
                const clean = match ? match[1] : text;

                setRawCode(clean);
            })
            .catch((err) => console.error("Failed to load code file:", err));
    }, []);

    const copyCode = async (code: string, title: string) => {
        try {
            await navigator.clipboard.writeText(code);
            toast.success(`${title} copied!`);
        } catch (err) {
            toast.error("Failed to copy code");
        }
    };

    return (
        <BentoGridItem
            className="md:col-span-4 md:row-span-3"
            header={
                <div className="flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] h-full gap-4">
                    {/* Information & Preview Section */}
                    <div className="flex h-full flex-col gap-2">
                        <div className="flex gap-2 items-start justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Theme Management
                                </p>
                                <h2
                                    data-cursor-hover
                                    className="text-2xl font-bold text-slate-600 dark:text-slate-400"
                                >
                                    Theme Toggler
                                </h2>
                            </div>
                            <a
                                href="https://github.com/Hyperion147/new-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
                            >
                                Source <FiArrowUpRight />
                            </a>
                        </div>
                        <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                            A smooth theme switcher utilizing the{" "}
                            <strong>View Transition API</strong> for a circular
                            expansion effect. It persists user preferences and
                            respects system settings.
                        </p>

                        <div className="space-y-2">
                            <p className="text-sm font-mono tracking-wider text-slate-500 dark:text-slate-400">
                                Dependency Checklist: {""}
                                <span
                                    data-cursor-hover
                                    className="text-slate-600 dark:text-slate-300"
                                >
                                    <a
                                        target="_blank"
                                        href="https://motion.dev/docs"
                                    >
                                        motion/react
                                    </a>
                                </span>{" "}
                                |{" "}
                                <span
                                    data-cursor-hover
                                    className="text-slate-600 dark:text-slate-300"
                                >
                                    <a
                                        target="_blank"
                                        href="https://react-hot-toast.com"
                                    >
                                        react-hot-toast
                                    </a>
                                </span>
                            </p>
                            <p className="text-sm font-mono tracking-wider text-slate-500 dark:text-slate-400">
                                SVG Assets: Requires{" "}
                                <span
                                    data-cursor-hover
                                    className="text-slate-600 dark:text-slate-300"
                                >
                                    <a
                                        target="_blank"
                                        href="https://github.com/Hyperion147/new-portfolio/blob/main/public/Moon.svg"
                                    >
                                        Moon.svg
                                    </a>
                                </span>{" "}
                                and{" "}
                                <span
                                    data-cursor-hover
                                    className="text-slate-600 dark:text-slate-300"
                                >
                                    <a
                                        target="_blank"
                                        href="https://github.com/Hyperion147/new-portfolio/blob/main/public/Sun.svg"
                                    >
                                        Sun.svg
                                    </a>
                                </span>{" "}
                                to be present in your public folder.
                            </p>
                        </div>
                        <div className="flex h-full flex-col overflow-hidden border-2 border-slate-300 dark:border-slate-700">
                            <div className="flex items-center justify-between border-b-2 border-slate-300 px-3 py-2 dark:border-slate-700">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                                        View Transition Styles
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        playClickSound();
                                        copyCode(
                                            themeCLipperStyles,
                                            "Theme Clipper Styles",
                                        );
                                    }}
                                    data-cursor-hover
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:shadow-[3px_3px_0px_0px_rgba(203,213,225)] dark:border-slate-700 dark:text-slate-200 dark:hover:shadow-[3px_3px_0px_0px_rgba(51,65,85)]"
                                    aria-label="Copy code"
                                >
                                    <FiCopy />
                                </button>
                            </div>
                            <pre className="no-scrollbar h-40 overflow-auto bg-white/30 p-4 text-left font-mono text-xs leading-6 text-slate-700 dark:bg-slate-950/30 dark:text-slate-300">
                                <code className="whitespace-pre">
                                    {themeCLipperStyles}
                                </code>
                            </pre>
                        </div>

                        {/* Live Interaction Area */}
                        <div className="relative mt-auto flex min-h-[120px] items-center justify-center overflow-hidden border-2 border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-950">
                            <div className="z-10 flex flex-col items-center gap-3">
                                <p className="text-[10px] font-mono uppercase text-slate-400">
                                    Live Preview
                                </p>
                                <ToggleDark />
                            </div>
                            {/* Decorative background grid */}
                            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:20px_20px]"></div>
                        </div>
                    </div>

                    {/* Code Block Section */}
                    <div className="flex h-full flex-col overflow-hidden border-2 border-slate-300 dark:border-slate-700">
                        <div className="flex items-center justify-between border-b-2 border-slate-300 px-3 py-2 dark:border-slate-700">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                <VscCode className="text-base" /> COMPONENT
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    playClickSound();
                                    copyCode(rawCode, "Theme Clipper");
                                }}
                                data-cursor-hover
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:shadow-[3px_3px_0px_0px_rgba(203,213,225)] dark:border-slate-700 dark:text-slate-200 dark:hover:shadow-[3px_3px_0px_0px_rgba(51,65,85)]"
                                aria-label="Copy code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="no-scrollbar h-60 md:h-full overflow-auto bg-white/30 p-4 text-left font-mono text-xs leading-6 text-slate-700 dark:bg-slate-950/30 dark:text-slate-300">
                            <code className="whitespace-pre">{rawCode}</code>
                        </pre>
                    </div>
                </div>
            }
        />
    );
};

export default ThemeClipperBlock;
