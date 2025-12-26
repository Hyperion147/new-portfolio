"use client";

import gsap from "gsap";
import { Dispatch, SetStateAction } from "react";

interface MobileProps {
    hamMenu: boolean;
    setHamMenu: Dispatch<SetStateAction<boolean>>;
}

const links = [
    {
        id: 1,
        href: "https://blog.suryansu.pro/",
        name: "Blogs",
    },
    {
        id: 2,
        href: "https://github.com/Hyperion147",
        name: "Github",
    },
    {
        id: 3,
        href: "https://drive.google.com/file/d/12qG3WJMPRUQPlaLPaUjajII6GvxUsRrs/view?usp=sharing",
        name: "Resume",
    },
];

const Mobile = ({ hamMenu, setHamMenu }: MobileProps) => {

    return (
        <div
            className={`fixed top-5 right-0 w-50 mx-auto rounded-l-2xl flex flex-col items-start px-10 backdrop-blur-2xl  dark:text-gray-200 z-41 transition-all duration-300 ease-in-out md:hidden
        ${
            hamMenu
                ? "h-50 opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
        }`}
        >
            <button
                onClick={() => setHamMenu(false)}
                className="absolute top-3.5 right-12 text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>
            {links.map((link) => (
                <a
                    href={link.href}
                    key={link.id}
                    target="_blank"
                    className={`menuLink text-2xl font-semibold my-4 transform transition-transform duration-300 ${
                        hamMenu
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                    }`}
                    onClick={() => setHamMenu(false)}
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default Mobile;
