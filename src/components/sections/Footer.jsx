"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/stats", label: "Stats" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
];

const Footer = () => {
    const [hoveredItem, setHoveredItem] = useState(false);

    const istTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        timeStyle: "short",
    });
    return (
        <footer className="lg:mx-28 mx-0 [--pattern-color:var(--color-gray-500)]/20 mt-4">
            <div
                className={cn(
                    "shadow-sm min-h-16 w-full shadow-black/10",
                    "bg-[repeating-linear-gradient(-45deg,var(--pattern-color)_0,var(--pattern-color)_1px,transparent_0,transparent_50%)]",
                )}
                style={{ backgroundSize: "8px 8px" }}
            >
                <div className="flex md:flex-row flex-col justify-between gap-2 px-4 py-3">
                    <div className="flex gap-2 items-end">
                        <p className="text-gray-400 text-xs md:text-sm">
                            Designed and Developed by
                        </p>
                        <div
                            className="relative"
                            onMouseEnter={() => setHoveredItem(true)}
                            onMouseLeave={() => setHoveredItem(false)}
                        >
                            {hoveredItem && (
                                <motion.a
                                    href="https://x.com/suryansu87"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-6 left-1/2 z-40 flex w-48 -translate-x-1/2 items-center gap-2 rounded-md border border-gray-300 px-2 py-2 dark:text-white backdrop-blur-2xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 10,
                                        },
                                    }}
                                    exit={{ opacity: 0, y: 20 }}
                                >
                                    <Image
                                        src="/profile.jpg"
                                        alt="Suryansu Singh"
                                        width={48}
                                        height={48}
                                        className="size-12 shrink-0 rounded-md object-cover"
                                    />
                                    <div className="min-w-0">
                                        <p className="whitespace-nowrap">suryansu.in</p>
                                        <p className="text-xs leading-tight">
                                            Part Time College ~ Full time dev
                                        </p>
                                    </div>
                                </motion.a>
                            )}
                            <a
                                href="https://x.com/suryansu87"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-white text-black text-sm md:text-base md:translate-y-[1px] translate-y-[2px] flex"
                            >
                                @suryansu87
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-2 items-end text-sm md:text-base">
                        <p className="text-gray-400 text-sm">HR, IN</p>
                        <p className="dark:text-white">{istTime}</p>
                    </div>
                </div>
                <nav
                    aria-label="Footer"
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-slate-300/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:border-slate-700/50 dark:text-slate-400"
                >
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-slate-950 dark:hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
