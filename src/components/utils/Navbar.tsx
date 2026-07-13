"use client";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import ToggleDark from "./ToggleDark";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiBarChart2,
    FiBookOpen,
    FiFileText,
    FiGithub,
    FiGrid,
    FiHome,
    FiMoreHorizontal,
} from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";

const links = [
    { href: "/", label: "Home", external: false, Icon: FiHome },
    {
        href: "https://github.com/Hyperion147",
        label: "GitHub",
        external: true,
        Icon: FiGithub,
    },
    {
        href: "https://drive.google.com/file/d/1lSFGCpIrAzaUBQEPzoRuJp3kGLRXPcdO/view?usp=sharing",
        label: "Resume",
        external: true,
        Icon: FiFileText,
    },
    {
        href: "/projects",
        label: "Projects",
        external: false,
        Icon: MdOutlineWorkOutline,
    },
    { href: "/stats", label: "Stats", external: false, Icon: FiBarChart2 },
    { href: "/blocks", label: "Blocks", external: false, Icon: FiGrid },
    { href: "/wall", label: "Wall", external: false, Icon: FiBookOpen },
];

const mobileLinks = links.filter((link) => !link.external);
const mobileMoreLinks = links.filter((link) => link.external);

const Navbar = () => {
    const pathname = usePathname();
    const [moreOpen, setMoreOpen] = useState(false);

    useGSAP(() => {
        gsap.from(".desktop-nav", {
            y: -18,
            filter: "blur(8px)",
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });
        gsap.to(".desktop-nav", {
            duration: 0.8,
            filter: "blur(0px)",
            opacity: 1,
        });
        gsap.from(".mobile-nav", {
            y: 18,
            filter: "blur(8px)",
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });
        gsap.to(".mobile-nav", {
            duration: 0.8,
            filter: "blur(0px)",
            opacity: 1,
        });
        gsap.to(".linkers", {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
        });
    });

    return (
        <>
            <nav className="desktop-nav fixed left-1/2 top-5 z-50 hidden  -translate-x-1/2 rounded-md border border-slate-300/70 bg-background/72 text-slate-900 shadow-[0_12px_34px_rgba(15,23,42,0.1)] backdrop-blur-md dark:border-slate-700/70 dark:text-white md:block">
                <div className="flex items-center justify-between gap-6 w-[min(90vw,64rem)]  px-4 py-3">
                    <Link
                        href="/"
                        className="whitespace-nowrap text-xl font-medium"
                    >
                        S<span className="text-gray-400">uryansu</span>S
                        <span className="text-gray-400">ingh</span>
                    </Link>

                    <div className="flex items-center gap-5 lg:gap-7">
                        {links.slice(1).map((link) => {
                            const active =
                                !link.external &&
                                (pathname === link.href ||
                                    (link.href !== "/" &&
                                        pathname.startsWith(link.href)));
                            const className = `linkers translate-y-2 opacity-0 text-sm font-bold transition-colors duration-200 ${
                                active
                                    ? "text-slate-950 dark:text-white"
                                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                            }`;

                            return link.external ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={className}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={className}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <div className="linkers shrink-0 translate-y-2 opacity-0">
                            <ToggleDark />
                        </div>
                    </div>
                </div>
            </nav>

            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-28 bg-gradient-to-t from-background/95 via-background/72 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_42%,transparent_100%)] md:hidden"
            />
            <nav
                aria-label="Mobile navigation"
                className="mobile-nav fixed bottom-3 left-1/2 z-50 w-[calc(100%-1rem)] max-w-md -translate-x-1/2 text-slate-900 dark:text-white md:hidden"
            >
                {moreOpen && (
                    <div
                        id="mobile-more-menu"
                        className="absolute bottom-[calc(100%+0.75rem)] right-0 w-60 animate-in rounded-2xl border border-slate-300/70 bg-background/95 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.2)] backdrop-blur-2xl fade-in slide-in-from-bottom-2 dark:border-slate-700/70"
                    >
                        <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            More
                        </p>
                        {mobileMoreLinks.map((link) => {
                            const Icon = link.Icon;

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                                    onClick={() => setMoreOpen(false)}
                                >
                                    <Icon className="size-4" aria-hidden="true" />
                                    {link.label}
                                </a>
                            );
                        })}
                        <div className="my-1 h-px bg-slate-200 dark:bg-slate-800" />
                        <div className="flex items-center justify-between rounded-xl px-3 py-2">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                Appearance
                            </span>
                            <ToggleDark />
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-6 items-center gap-1 rounded-2xl border border-slate-300/70 bg-background/88 p-1.5 shadow-[0_14px_44px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-slate-700/70">
                    {mobileLinks.map((link) => {
                        const Icon = link.Icon;
                        const active =
                            (pathname === link.href ||
                                (link.href !== "/" &&
                                    pathname.startsWith(link.href)));
                        const className = `linkers flex h-12 min-w-0 translate-y-2 flex-col items-center justify-center gap-0.5 rounded-xl opacity-0 transition-colors duration-200 focus-visible:outline-none ${
                            active
                                ? "bg-slate-900 text-white shadow-[0_4px_14px_rgba(15,23,42,0.16)] dark:bg-white dark:text-slate-950"
                                : "text-slate-500 hover:bg-slate-100 hover:text-slate-950 focus-visible:bg-slate-100 focus-visible:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:bg-slate-800 dark:focus-visible:text-white"
                        }`;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={className}
                                aria-current={active ? "page" : undefined}
                            >
                                <Icon className="size-4" aria-hidden="true" />
                                <span className="max-w-full truncate text-[9px] font-semibold leading-none">
                                    {link.label}
                                </span>
                            </Link>
                        );
                    })}

                    <button
                        type="button"
                        className={`linkers flex h-12 min-w-0 translate-y-2 flex-col items-center justify-center gap-0.5 rounded-xl opacity-0 transition-colors focus-visible:outline-none ${
                            moreOpen
                                ? "bg-slate-200 text-slate-950 dark:bg-slate-700 dark:text-white"
                                : "text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                        }`}
                        aria-expanded={moreOpen}
                        aria-controls="mobile-more-menu"
                        onClick={() => setMoreOpen((open) => !open)}
                    >
                        <FiMoreHorizontal className="size-4" aria-hidden="true" />
                        <span className="text-[9px] font-semibold leading-none">
                            Links
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
