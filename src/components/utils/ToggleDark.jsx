import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { flushSync } from "react-dom";

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

        if (
            !document.startViewTransition ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setIsDark(newIsDark);
            updateTheme(newIsDark);
            return;
        }

        const transition = document.startViewTransition(() => {
            flushSync(() => {
                setIsDark(newIsDark);
                updateTheme(newIsDark);
            });
        });

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

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 600,
                easing: "cubic-bezier(0.4, 0, 0.2,1)",
                pseudoElement: "::view-transition-new(root)",
            }
        );
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
            className="relative w-12 h-7 border-2 md:border-none border-gray-500      
            sm:w-12 sm:h-6 
            md:w-14 md:h-7
            lg:w-16 lg:h-8 
            rounded-full
            bg-[#e5e0d9] dark:bg-gray-700 
            transition-all duration-300 linker
          "
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            suppressHydrationWarning={true}
        >
            <motion.span
                className={`
                    absolute top-0.5 left-0.5 
                    w-5 h-5       
                    sm:w-5 sm:h-5   
                    md:w-6 md:h-6  
                    lg:w-7 lg:h-7 
                    rounded-full 
                    border border-gray-300 dark:border-gray-500 
                    bg-white dark:bg-gray-400 
                    shadow-md 
                    flex items-center justify-center
            `}
                animate={{
                    x: isDark
                        ? ["1.25rem", "1.5rem", "1.75rem", "2rem"][
                        window.innerWidth >= 1024
                            ? 3
                            : window.innerWidth >= 768
                                ? 2
                                : window.innerWidth >= 640
                                    ? 1
                                    : 0
                        ]
                        : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.8,
                }}
                whileTap={{ scale: 0.9 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isDark ? "moon" : "sun"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src={isDark ? "/Moon.svg" : "/Sun.svg"}
                            alt={isDark ? "Moon" : "Sun"}
                            className="w-3 h-3 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4"
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.span>
        </motion.button>
    );
};

export default ToggleDark;
