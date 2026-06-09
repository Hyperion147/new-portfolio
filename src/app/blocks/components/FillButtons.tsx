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
                        <div className="border w-full border-slate-300 dark:border-slate-700 text-sm font-mono tracking-wider text-slate-500 dark:text-slate-400 px-3 py-1">
                            Note: Replace the code with buttons component after
                            installing shadcn button.
                        </div>
                        <div className="border w-full border-red-700 text-sm font-mono tracking-wider text-red-500 px-3 py-1">
                            Important:{" "}
                            <span className="dark:text-slate-300 text-slate-700">
                                Wrap the text with a span{" "}
                            </span>
                        </div>
                        <div className="relative mt-auto overflow-hidden grid-cols-2 w-full grid gap-5 rounded-none p-4 items-center border-2 border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-950">
                            <div className="w-full gap-2 grid text-center border p-2">
                                <p>fillDefault</p>
                                <Button variant="fillDefault">
                                    <span>Default</span>
                                </Button>
                            </div>
                            <div className="w-full gap-2 grid text-center border p-2">
                                <p>fillSecondary</p>
                                <Button variant="fillSecondary">
                                    <span>Secondary</span>
                                </Button>
                            </div>
                            <div className="w-full gap-2 grid text-center border p-2">
                                <p>fillGhost</p>
                                <Button variant="fillGhost">
                                    <span>Ghost</span>
                                </Button>
                            </div>
                            <div className="w-full gap-2 grid text-center border p-2">
                                <p>fillOutline</p>
                                <Button variant="fillOutline">
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
                                aria-label="Copy Blob Cursor code"
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
