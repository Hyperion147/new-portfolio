"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface MobileProps {
    hamMenu: boolean;
    setHamMenu: Dispatch<SetStateAction<boolean>>;
}

const links = [
    {
        id: 2,
        href: "https://blog.suryansu.pro/",
        name: "Blogs",
        external: true,
    },
    {
        id: 3,
        href: "https://github.com/Hyperion147",
        name: "GitHub",
        external: true,
    },
    {
        id: 4,
        href: "https://drive.google.com/file/d/1rBRBMXnYFoU8icPtfRIi3SumEu_5Ygp4/view?usp=sharing",
        name: "Resume",
        external: true,
    },
    {
        id: 5,
        href: "/stats",
        name: "Stats",
        external: false,
    },
];

const Mobile = ({ hamMenu, setHamMenu }: MobileProps) => {

    return (
        <>
            {/* Backdrop overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                    hamMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setHamMenu(false)}
            />

            {/* Sidebar drawer */}
            <div
                className={`fixed top-0 right-0 w-64 sm:w-80 h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col p-8 z-50 transition-transform duration-300 ease-in-out md:hidden ${
                    hamMenu ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end mb-8">
                    <button
                        onClick={() => setHamMenu(false)}
                        className="text-4xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors focus:outline-none mr-3"
                        aria-label="Close Menu"
                    >
                        &times;
                    </button>
                </div>
                
                <nav className="flex flex-col gap-6 mt-2">
                    {links.map((link) => {
                        const linkClasses = `text-2xl font-semibold tracking-wide text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform ${
                            hamMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        }`;

                        return link.external ? (
                            <a
                                href={link.href}
                                key={link.id}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                                onClick={() => setHamMenu(false)}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                href={link.href}
                                key={link.id}
                                className={linkClasses}
                                onClick={() => setHamMenu(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
};

export default Mobile;
