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
        if (root.classList.contains("theme-switching")) return;

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
                root.classList.add("theme-pixel-wave");
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

            const maxRadius = Math.ceil(Math.hypot(
                Math.max(x, window.innerWidth - x),
                Math.max(y, window.innerHeight - y)
            )) + 32;

            const duration = 1400;
            const easing = "cubic-bezier(0.35, 0, 0.2, 1)";

            root.animate(
                { filter: ["blur(0px)", "blur(30px)"] },
                { duration, easing, pseudoElement: "::view-transition-old(root)" }
            );

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

            root.style.setProperty("--theme-wave-origin", `${x}px ${y}px`);
            root.animate(
                { "--theme-wave-radius": ["0px", `${maxRadius}px`] },
                {
                    duration,
                    easing,
                    pseudoElement: "::view-transition-new(theme-pixels)",
                }
            );

            await transition.finished;
        } catch (error) {
            if (error.name !== "AbortError") throw error;
        } finally {
            root.style.removeProperty("--theme-wave-origin");
            root.classList.remove("theme-switching", "theme-pixel-wave");
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
