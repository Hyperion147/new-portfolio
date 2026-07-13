"use client";

import { BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { playClickSound } from "@/components/ui/click";
import { fillButtonsCode } from "@/constants/blocks";
import toast from "react-hot-toast";
import { FiArrowUpRight, FiCopy } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";

const FillButtons = () => {
    const copyCode = async (code: string, title: string) => {
        await navigator.clipboard.writeText(code);
        toast.success(`${title} copied! star please :)`);
    };

    return (
        <BentoGridItem
            className="md:col-span-4 md:row-span-3"
            header={
                <div className="grid h-full gap-5 md:grid-cols-[1.1fr_0.9fr]">
                    {/* Preview Section */}
                    <div className="flex h-full flex-col gap-3">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Component study / 01
                                </p>
                                <h2
                                    data-cursor-hover
                                    className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100"
                                >
                                    Fill Buttons
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
                            The Fill Buttons component replaces the standard
                            buttons from shadcn to interactive dual-tone color
                            buttons.
                        </p>
                        <div className="grid gap-2 sm:grid-cols-2">
                            <div className="border-l-2 border-indigo-400 bg-indigo-50/70 px-3 py-2 text-xs leading-5 text-slate-600 dark:bg-indigo-950/20 dark:text-slate-400">
                                <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                                    Note
                                </span>{" "}
                                Replace the code with the buttons component
                                after installing shadcn button.
                            </div>
                            <div className="border-l-2 border-red-400 bg-red-50/70 px-3 py-2 text-xs leading-5 text-slate-600 dark:bg-red-950/20 dark:text-slate-400">
                                <span className="font-semibold text-red-600 dark:text-red-300">
                                    Important
                                </span>{" "}
                                Wrap button text with a span.
                            </div>
                        </div>
                        <div className="relative mt-auto grid w-full grid-cols-2 gap-px overflow-hidden border border-slate-300 bg-slate-300 shadow-[4px_4px_0px_0px_rgba(148,163,184,0.25)] dark:border-slate-700 dark:bg-slate-700 dark:shadow-[4px_4px_0px_0px_rgba(15,23,42,0.5)]">
                            <div className="group flex min-h-28 flex-col items-center justify-center gap-3 bg-background p-3 text-center transition-colors hover:bg-slate-50 dark:hover:bg-slate-900">
                                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
                                    Default
                                </p>
                                <Button variant="fillDefault" className="w-full">
                                    <span>Default</span>
                                </Button>
                            </div>
                            <div className="group flex min-h-28 flex-col items-center justify-center gap-3 bg-background p-3 text-center transition-colors hover:bg-slate-50 dark:hover:bg-slate-900">
                                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
                                    Secondary
                                </p>
                                <Button variant="fillSecondary" className="w-full">
                                    <span>Secondary</span>
                                </Button>
                            </div>
                            <div className="group flex min-h-28 flex-col items-center justify-center gap-3 bg-background p-3 text-center transition-colors hover:bg-slate-50 dark:hover:bg-slate-900">
                                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
                                    Ghost
                                </p>
                                <Button variant="fillGhost" className="w-full">
                                    <span>Ghost</span>
                                </Button>
                            </div>
                            <div className="group flex min-h-28 flex-col items-center justify-center gap-3 bg-background p-3 text-center transition-colors hover:bg-slate-50 dark:hover:bg-slate-900">
                                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
                                    Outline
                                </p>
                                <Button variant="fillOutline" className="w-full">
                                    <span>Outline</span>
                                </Button>
                            </div>
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
                                    copyCode(fillButtonsCode, "Fill Buttons");
                                }}
                                data-cursor-hover
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:shadow-[3px_3px_0px_0px_rgba(203,213,225)] dark:border-slate-700 dark:text-slate-200 dark:hover:shadow-[3px_3px_0px_0px_rgba(51,65,85)]"
                                aria-label="Copy Fill Buttons code"
                            >
                                <FiCopy />
                            </button>
                        </div>
                        <pre className="no-scrollbar h-60 md:h-full overflow-auto bg-white/30 p-4 text-left font-mono text-xs leading-6 text-slate-700 dark:bg-slate-950/30 dark:text-slate-300">
                            <code>{fillButtonsCode}</code>
                        </pre>
                    </div>
                </div>
            }
        />
    );
};

export default FillButtons;
