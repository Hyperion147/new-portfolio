"use client"

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { flushSync } from "react-dom";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleDark = () => {
    const [isDark, setIsDark] = useState(null);
    const toggleRef = useRef(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const dark =
            savedTheme === "dark" || (!savedTheme && systemPrefersDark);
        setIsDark(dark);

        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

    }, []);

    const toggleTheme = async () => {
        if (isDark === null || !toggleRef.current) return;
        const newIsDark = !isDark;
        const root = document.documentElement;

        if (
            !document.startViewTransition ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setIsDark(newIsDark);
            updateTheme(newIsDark);
            return;
        }

        root.classList.add("theme-switching");

        const transition = document.startViewTransition(() => {
            flushSync(() => {
                setIsDark(newIsDark);
                updateTheme(newIsDark);
            });
        });

        try {
            await transition.ready;

            const { top, left, width, height } =
                toggleRef.current.getBoundingClientRect();
            const x = left + width / 2;
            const y = top + height / 2;

            const right = window.innerWidth - left;
            const bottom = window.innerHeight - top;

            const maxRadius = Math.hypot(
                Math.max(left, right),
                Math.max(top, bottom)
            );

            const duration = 1050;
            const easing = "cubic-bezier(0.35, 0, 0.2, 1)";

            root.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration,
                    easing,
                    pseudoElement: "::view-transition-new(root)",
                }
            );

            root.animate(
                {
                    filter: ["blur(0px)", "blur(30px)"],
                    opacity: [1, 0.72],
                    transform: ["scale(1)", "scale(1.012)"],
                },
                {
                    duration,
                    easing,
                    pseudoElement: "::view-transition-old(root)",
                }
            );

            await transition.finished;
        } finally {
            root.classList.remove("theme-switching");
        }
    };

    const updateTheme = (dark) => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    if (isDark === null) return null;

    return (
        <motion.button
            ref={toggleRef}
            onClick={toggleTheme}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-900 hover:text-white focus-visible:bg-slate-900 focus-visible:text-white focus-visible:outline-none dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-950 dark:focus-visible:bg-white dark:focus-visible:text-slate-950"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            whileTap={{ scale: 0.94 }}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? "moon" : "sun"}
                    initial={{ rotate: -36, opacity: 0, scale: 0.82 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 36, opacity: 0, scale: 0.82 }}
                    transition={{ duration: 0.26, ease: "easeOut" }}
                >
                    {isDark ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    );
};

export default ToggleDark;
