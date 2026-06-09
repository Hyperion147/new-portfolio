"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

// ─── Data ─────────────────────────────────────────────────────────────────────

const galleryItems = [
    {
        id: 1,
        label: "Landing",
        src: "/highlightedProject/landing.png",
    },
    {
        id: 2,
        label: "Dashboard",
        src: "/highlightedProject/dashboard.png",
    },
    {
        id: 3,
        label: "Listings",
        src: "/highlightedProject/listings.png",
        fallback: "/highlightedProject/main.png",
    },
    {
        id: 4,
        label: "Admin",
        src: "/highlightedProject/admin.png",
        fallback: "/highlightedProject/main2.png",
    },
];

const flowSteps = [
    {
        id: "landing",
        label: "Website",
        sub: "Landing",
        stat: "Public",
    },
    {
        id: "auth",
        label: "Google Auth",
        sub: "Identity",
        stat: "Secure",
    },
    {
        id: "private",
        label: "Private Ideas",
        sub: "Private",
        stat: "Synced",
    },
    {
        id: "public",
        label: "Public Listings",
        sub: "Public",
        stat: "Live",
    },
    {
        id: "interactive",
        label: "Tubs",
        sub: "Interactive",
        stat: "Orders",
    },
    {
        id: "admin",
        label: "Admin",
        sub: "Moderation",
        stat: "Audit",
    },
];

const descriptions = {
    landing: "The visitor starts with a dashboard demo, with actual dashboard redirect button in navbar to reduce friction.",
    auth: "Private capture by default with Google sign-in.",
    private:
        "Session state keeps permissions and ownership in sync so the experience survives privacy.",
    public: "The core is listings page, where people review and comment on your code",
    interactive: "You can create tasks, time stamps and manage tub full of ideas.",
    admin: "The admin layer closes the loop with moderation, user controls and audit visibility",
};

const techStack = ["React", "Tailwind", "ShadCN", "React Hook Form", "Tanstack Query", "Zustand"];

// ─── Image Gallery ────────────────────────────────────────────────────────────

const ImageGallery = () => {
    const [active, setActive] = useState(0);
    const [errored, setErrored] = useState({});
    const CAROUSEL_DELAY = 3000;

    const getSrc = (item) => (errored[item.id] ? item.fallback : item.src);
    const handleError = (id) => setErrored((prev) => ({ ...prev, [id]: true }));

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((current) => (current + 1) % galleryItems.length);
        }, CAROUSEL_DELAY);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="grid w-full gap-2 md:grid-cols-[minmax(0,1fr)_10rem]">
            <div className="relative min-h-[16rem] overflow-hidden md:min-h-[24rem]">
                <div className="absolute inset-0" />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.985 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={getSrc(galleryItems[active])}
                            alt={galleryItems[active].label}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-slate-950/80 via-slate-900/35 to-transparent p-3 text-white">
                    <p className="mt-1 text-sm font-semibold tracking-wide">
                        {galleryItems[active].label}
                    </p>
                    <div className="flex items-center gap-2">
                        {galleryItems.map((item, index) => (
                            <span
                                key={`progress-${item.id}`}
                                className={`h-1 transition-all duration-300 ${
                                    active === index
                                        ? "w-8 bg-white"
                                        : "w-3 bg-white/35"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden md:flex flex-col gap-2">
                {galleryItems.map((item, i) => (
                    <button
                        key={item.id}
                        onClick={() => setActive(i)}
                        type="button"
                        aria-pressed={active === i}
                        className={`group relative flex min-h-[5.6rem] items-center gap-4 overflow-hidden transition-all duration-300 ${
                            active === i
                                ? "border-slate-900 bg-slate-900 text-white shadow-[6px_6px_0_rgba(15,23,42,0.12)] dark:border-white dark:bg-white dark:text-slate-950"
                                : "border-dashed border-slate-300 bg-white/60 text-slate-600 hover:border-slate-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-300"
                        }`}
                    >
                        <div className="relative aspect-video w-40 shrink-0 overflow-hidden">
                            <Image
                                src={getSrc(item)}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-500"
                                sizes="(max-width: 768px) 35vw, 12vw"
                                onError={() => handleError(item.id)}
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

const FlowDiagram = () => {
    const [activeStep, setActiveStep] = useState("landing");
    const containerRef = useRef(null);
    const STEP_DURATION = 4;

    // GSAP clean entrance animation for header items
    useGSAP(
        () => {
            gsap.from(".flow-step", {
                opacity: 0,
                y: 10,
                stagger: 0.06,
                duration: 0.45,
                ease: "power3.out",
            });
        },
        { scope: containerRef },
    );

    // Automatically loop through steps on a timer
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((current) => {
                const currentIndex = flowSteps.findIndex(
                    (step) => step.id === current,
                );
                const nextIndex = (currentIndex + 1) % flowSteps.length;
                return flowSteps[nextIndex].id;
            });
        }, STEP_DURATION * 1000);

        return () => clearInterval(timer);
    }, []);

    const activeIndex = flowSteps.findIndex((step) => step.id === activeStep);
    const activeStepData = flowSteps[activeIndex];
    const currentDescription = descriptions[activeStep];

    const handleStepSelect = (stepId) => {
        if (stepId === activeStep) return;

        setActiveStep(stepId);
    };

    return (
        <div
            ref={containerRef}
            className="flex w-full select-none flex-col overflow-hidden text-left"
        >
            <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {flowSteps.map((step, index) => {
                    const isActive = activeStep === step.id;
                    const isComplete = index < activeIndex;

                    return (
                        <button
                            key={`flow-step-${step.id}`}
                            type="button"
                            onClick={() => handleStepSelect(step.id)}
                            className={`flow-step group relative overflow-hidden border px-3 py-2 text-left transition-all duration-300 ${
                                isActive
                                    ? "border-slate-900 bg-slate-900 text-white shadow-[6px_6px_0_rgba(15,23,42,0.14)] dark:border-white dark:bg-white dark:text-slate-950"
                                    : "border-dashed border-slate-300 bg-white/40 text-slate-600 hover:-translate-y-0.5 hover:border-slate-500 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-300 dark:hover:border-slate-500"
                            }`}
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-0.5 origin-left transition-transform duration-500"
                                style={{
                                    backgroundColor:
                                        isActive || isComplete
                                            ? "#0f172a"
                                            : "#cbd5e1",
                                    transform:
                                        isActive || isComplete
                                            ? "scaleX(1)"
                                            : "scaleX(0)",
                                }}
                            />
                            <span className="mb-1 flex items-center justify-between gap-2">
                                <span className="font-mono text-[10px] uppercase tracking-widest">
                                    0{index + 1}
                                </span>
                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor:
                                            isActive || isComplete
                                                ? "#475569"
                                                : "#cbd5e1",
                                    }}
                                />
                            </span>
                            <span className="block text-sm font-semibold leading-tight">
                                {step.label}
                            </span>
                            <span
                                className={`mt-0.5 block text-[10px] ${
                                    isActive
                                        ? "text-white/70 dark:text-slate-600"
                                        : "text-slate-400 dark:text-slate-500"
                                }`}
                            >
                                {step.sub}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-col justify-between border border-dashed border-slate-300 bg-white/50 p-4 dark:border-slate-700 dark:bg-slate-950/30">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.24 }}
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span
                                    className="h-3 w-3 rounded-full"
                                    style={{ backgroundColor: "#475569" }}
                                />
                                <p className="pixeltext text-sm uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                    {activeStepData.sub}
                                </p>
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                                step 0{activeIndex + 1}
                            </span>
                        </div>
                        <h5 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                            {activeStepData.label}
                        </h5>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {currentDescription}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        <span>handoff progress</span>
                        <span>
                            {Math.round(
                                ((activeIndex + 1) / flowSteps.length) * 100,
                            )}
                            %
                        </span>
                    </div>
                    <div className="h-2 overflow-hidden bg-slate-200 dark:bg-slate-800">
                        <motion.div
                            className="h-full bg-slate-700 dark:bg-slate-200"
                            initial={false}
                            animate={{
                                width: `${
                                    ((activeIndex + 1) / flowSteps.length) * 100
                                }%`,
                            }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
// ─── Main Component ───────────────────────────────────────────────────────────

const HighlightedProject = () => {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            gsap.from(".hp-card", {
                opacity: 0,
                y: 15,
                stagger: 0.08,
                duration: 0.5,
                ease: "power2.out",
            });
        },
        {},
        { scope: containerRef },
    );

    return (
        <div ref={containerRef} className="w-full">
            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {/* Card 1 — Image gallery (2 cols) */}
                <div className="hp-card md:col-span-4 border-2 border-dashed border-slate-300 dark:border-slate-700 p-2 bg-background">
                    <ImageGallery />
                </div>

                {/* Card 2 — Project info (1 col) */}
                <div className="hp-card md:col-span-4 border-2 border-dashed border-slate-300 dark:border-slate-700 p-4 bg-background flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                    <Link href="https://tubmind.space" target="_blank" className="flex flex-col shrink-0 text-start">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1 flex gap-1 items-center">
                            Tubmind
                            <FiArrowUpRight className="size-5" />
                        </h3>
                        <p className="pixeltext text-xs tracking-wide text-slate-500 dark:text-slate-400">
                            tubmind.space
                        </p>
                    </Link>

                    <p className="text-xs text-start text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                        Tubmind is a private idea workspace for capturing rough
                        thoughts fast, shaping them into structured concepts,
                        and publishing the strongest ideas for feedback.
                    </p>

                    <div className="flex flex-wrap gap-1.5 md:max-w-70 md:justify-end">
                        {techStack.map((t) => (
                            <span
                                key={t}
                                className="text-[10px] px-2 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-none"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Card 4 — Flow diagram (full width) */}
                <div className="hp-card md:col-span-4 border-2 border-dashed border-slate-300 dark:border-slate-700 p-4 bg-background">
                    <FlowDiagram />
                </div>
            </div>
        </div>
    );
};

export default HighlightedProject;
