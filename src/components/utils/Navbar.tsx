"use client";
import { useGSAP } from "@gsap/react";
import ToggleDark from "./ToggleDark";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiBarChart2,
    FiFileText,
    FiGithub,
    FiGrid,
    FiHome,
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
];

const Navbar = () => {
    const pathname = usePathname();

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

                    <div className="flex items-center gap-7">
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
            <nav className="mobile-nav fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-slate-300/70 bg-background/82 text-slate-900 shadow-[0_14px_44px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-slate-700/70 dark:text-white md:hidden">
                <div className="flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto no-scrollbar p-1.5">
                    {links.map((link) => {
                        const Icon = link.Icon;
                        const active =
                            !link.external &&
                            (pathname === link.href ||
                                (link.href !== "/" &&
                                    pathname.startsWith(link.href)));
                        const className = `linkers flex h-9 w-9 translate-y-2 items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold opacity-0 transition-colors duration-200 focus-visible:outline-none sm:w-auto sm:px-4 sm:text-sm ${
                            active
                                ? "bg-slate-900 text-white shadow-[0_4px_14px_rgba(15,23,42,0.16)] dark:bg-white dark:text-slate-950"
                                : "text-slate-600 hover:bg-slate-900 hover:text-white focus-visible:bg-slate-900 focus-visible:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950 dark:focus-visible:bg-white dark:focus-visible:text-slate-950"
                        }`;
                        const content = (
                            <>
                                <Icon
                                    className="h-4 w-4 sm:hidden"
                                    aria-hidden="true"
                                />
                                <span className="sr-only sm:not-sr-only">
                                    {link.label}
                                </span>
                            </>
                        );

                        return link.external ? (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={className}
                                aria-label={link.label}
                            >
                                {content}
                            </a>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={className}
                                aria-label={link.label}
                            >
                                {content}
                            </Link>
                        );
                    })}

                    <div className="mx-1 h-6 w-px shrink-0 bg-slate-300/80 dark:bg-slate-700/80" />
                    <div className="linkers shrink-0 translate-y-2 opacity-0">
                        <ToggleDark />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
