"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiArrowUpRight, FiCopy } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import toast from "react-hot-toast";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Mobile from "@/components/utils/Mobile";
import MobileTheme from "@/components/utils/MobileTheme";
import Navbar from "@/components/utils/Navbar";
import { blocks } from "@/constants/blocks";

function CodeBlock({ code, title }: { code: string; title: string }) {
    const copyCode = async () => {
        await navigator.clipboard.writeText(code);
        toast.success(`${title} copied`);
    };

    return (
        <div className="flex h-full flex-col overflow-hidden border-2 border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-between border-b-2 border-slate-300 px-3 py-2 dark:border-slate-700">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <VscCode className="text-base" />
                    CODE
                </div>
                <button
                    type="button"
                    onClick={copyCode}
                    data-cursor-hover
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:shadow-[3px_3px_0px_0px_rgba(203,213,225)] dark:border-slate-700 dark:text-slate-200 dark:hover:shadow-[3px_3px_0px_0px_rgba(51,65,85)]"
                    aria-label={`Copy ${title} code`}
                >
                    <FiCopy />
                </button>
            </div>
            <pre className="no-scrollbar h-60 md:h-full overflow-auto bg-white/30 p-4 text-left font-mono text-xs leading-6 text-slate-700 dark:bg-slate-950/30 dark:text-slate-300">
                <code>{code}</code>
            </pre>
        </div>
    );
}

function PreviewBlock({ block }: { block: (typeof blocks)[number] }) {
    return (
        <div className="flex h-full flex-col gap-2">
            <div className="flex gap-2 items-start justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {block.eyebrow}
                    </p>
                    <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-200 to-gray-500 bg-clip-text text-transparent dark:to-white">
                        {block.title}
                    </h2>
                </div>
                <a
                    href={block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                    Source
                    <FiArrowUpRight />
                </a>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                {block.description}
            </p>
            <div className="border w-full border-slate-300 dark:border-slate-700 text-sm font-mono tracking-wider text-slate-500 dark:text-slate-400 px-3 py-1">
                Note: {block.note}
            </div>
            <div className="relative mt-auto overflow-hidden border-2 border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-950">
                <video
                    className="aspect-video w-full object-cover"
                    src={block.video}
                    poster={block.preview}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
            </div>
        </div>
    );
}

export default function BlocksPage() {
    const [hamMenu, setHamMenu] = useState(false);

    useGSAP(() => {
        gsap.from(".blocks-grid", {
            y: 50,
            duration: 1,
            filter: "blur(12px)",
            opacity: 0,
        });
    });

    return (
        <div className="min-h-screen bg-[#fff9f0] dark:bg-gray-900">
            <div className="overflow-x-hidden duration-500">
                <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
                <MobileTheme />
                <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />

                <main className="mx-auto max-w-7xl px-4 pb-12 pt-28">
                    <BentoGrid className="blocks-grid mx-auto max-w-5xl md:auto-rows-[180px] md:grid-cols-4">
                        {blocks.map((block) => (
                            <BentoGridItem
                                key={block.title}
                                className="md:col-span-4 md:row-span-3"
                                header={
                                    <div className="grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]">
                                        <PreviewBlock block={block} />
                                        <CodeBlock
                                            code={block.code}
                                            title={block.title}
                                        />
                                    </div>
                                }
                            />
                        ))}
                    </BentoGrid>
                </main>
            </div>
        </div>
    );
}
