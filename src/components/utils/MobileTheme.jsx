import { useState, useEffect, useRef } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { motion, AnimatePresence } from "motion/react";
import { flushSync } from "react-dom";

const MobileTheme = () => {
    const [isDark, setIsDark] = useState(null);
    const [togglePosition, setTogglePosition] = useState(0);
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

        const updatePosition = () => {
            const width = window.innerWidth;
            if (width >= 1024) setTogglePosition(3);
            else if (width >= 768) setTogglePosition(2);
            else if (width >= 640) setTogglePosition(1);
            else setTogglePosition(0);
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
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
                duration: 1200,
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
            className="fixed bottom-16 right-5 bg-white z-49 rounded-full block md:hidden"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <span
              className="absolute -inset-px rounded-full animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e5e1f6_0%,#e5e0d9_50%,#e5e0d9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isDark ? "moon" : "sun"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative dark:bg-gray-800 hover:bg-slate-300 dark:hover:bg-slate-800 inline-flex bg-[#fff9f0] text-black dark:text-white p-2 rounded-full shadow-lg transition-all duration-300"
                    >
                        {isDark ? <BiMoon /> : <BiSun />}
                    </motion.div>
                </AnimatePresence>
        </motion.button>
    );
};

export default MobileTheme;
