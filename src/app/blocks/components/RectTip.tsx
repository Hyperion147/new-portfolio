"use client";

import { BentoGridItem } from "@/components/ui/bento-grid";
import { playClickSound } from "@/components/ui/click";
import toast from "react-hot-toast";
import { FiArrowUpRight, FiCopy } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import RectTipComp from "@/components/ui/rect-tip";
import { useEffect, useState } from "react";

const RectTip = () => {
    const [rawCode, setRawCode] = useState("");

    useEffect(() => {
        fetch("/blocks/rectTipCode.md")
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
            toast.success(`${title} copied! star please :)`);
        } catch (err) {
            toast.error("Failed to copy code");
        }
    };

    return (
        <BentoGridItem
            className="md:col-span-4 md:row-span-2"
            header={
                <div className="grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    {/* Preview Section */}
                    <div className="flex h-full flex-col gap-2">
                        <div className="flex gap-2 items-start justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Interactive UI
                                </p>
                                <h2
                                    data-cursor-hover
                                    className="text-2xl font-bold text-slate-600 dark:text-slate-400"
                                >
                                    Rect Tip
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
                        <div className="space-y-2">
                            <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                                The Cursor component replaces the standard
                                browser pointer with a minimalist, interactive
                                dual-element system. It is context-aware,
                                automatically adjusting its shape and behavior
                                based on the elements it interacts with.
                            </p>
                            <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                                The RectTip is actually a hyperlink
                            </p>
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
                                </span>
                            </p>
                            <p className="text-sm font-mono tracking-wider text-slate-500 dark:text-slate-400">
                                Props:{" "}
                                <span
                                    className="text-slate-600 dark:text-slate-300"
                                    data-cursor-hover
                                >
                                    heading
                                </span>
                                ,{" "}
                                <span
                                    className="text-slate-600 dark:text-slate-300"
                                    data-cursor-hover
                                >
                                    description
                                </span>
                                ,{" "}
                                <span
                                    className="text-slate-600 dark:text-slate-300"
                                    data-cursor-hover
                                >
                                    photo
                                </span>
                                ,{" "}
                                <span
                                    className="text-slate-600 dark:text-slate-300"
                                    data-cursor-hover
                                >
                                    link
                                </span>
                                ,{" "}
                                <span
                                    className="text-slate-600 dark:text-slate-300"
                                    data-cursor-hover
                                >
                                    width
                                </span>
                                ,{" "}
                                <span
                                    className="text-slate-600 dark:text-slate-300"
                                    data-cursor-hover
                                >
                                    height
                                </span>
                            </p>
                        </div>
                        <div className="border w-full border-slate-300 dark:border-slate-700 text-sm font-mono tracking-wider text-slate-500 dark:text-slate-400 px-3 py-1">
                            Note: The RectTip is actually a hyperlink
                        </div>
                        <div className="w-full border flex items-center justify-center h-full rounded-md border-slate-300 dark:border-slate-700">
                            <RectTipComp
                                heading="Star on Github"
                                description="If you find this component interesting, please consider giving it a star on GitHub."
                                width="w-80"
                                photo="/profile.jpg"
                                link="https://github.com/Hyperion147/new-portfolio"
                            />
                        </div>
                    </div>

                    {/* Code Block Section */}
                    <div className="flex h-full flex-col overflow-hidden border-2 border-slate-300 dark:border-slate-700">
                        <div className="flex items-center justify-between border-b-2 border-slate-300 px-3 py-2 dark:border-slate-700">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                <VscCode className="text-base" /> CODE
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    playClickSound();
                                    copyCode(rawCode, "Rect Tip");
                                }}
                                data-cursor-hover
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:shadow-[3px_3px_0px_0px_rgba(203,213,225)] dark:border-slate-700 dark:text-slate-200 dark:hover:shadow-[3px_3px_0px_0px_rgba(51,65,85)]"
                                aria-label="Copy Blob Cursor code"
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

export default RectTip;
