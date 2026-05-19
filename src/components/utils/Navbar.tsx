"use client";
import { useGSAP } from "@gsap/react";
import ToggleDark from "./ToggleDark";
import gsap from "gsap";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface NavbarProps {
  hamMenu: boolean;
  setHamMenu: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setHamMenu }: NavbarProps) => {

  useGSAP(() => {
    gsap.from(".boxCont", {
      filter: "blur(12px)",
      opacity: 0,
      duration: 1,
    })
    gsap.set(".linkers", {
      x: 100,
    })
    gsap.to(".boxCont", {
      duration: 1,
      filter: "blur(0px)",
      alignItems: "center",
      opacity: 1
    })
    gsap.to(".linkers", {
      x: 0,
      duration: 1.5,
    })
  });

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 max-w-[90vw] md:max-w-5xl w-full top-5 rounded-md z-40 backdrop-blur-md shadow-sm drop-shadow-transparent shadow-gray-700 dark:bg-slate-950/50 dark:text-white boxCont">
      <div className="mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-medium text-xl cursor-pointer pl-3"
          >
            S<span className="text-gray-400">uryansu</span>
            S<span className="text-gray-400">ingh</span>
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setHamMenu((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/projects"
              className=" font-bold  cursor-pointer linkers z-9999"
            >
              Projects
            </Link>
            <a
              href="https://github.com/Hyperion147"
              target="_blank"
              className=" font-bold  cursor-pointer linkers"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1rBRBMXnYFoU8icPtfRIi3SumEu_5Ygp4/view?usp=sharing"
              target="_blank"
              className="font-bold  cursor-pointer linkers"
            >
              Resume
            </a>
            <Link
              href="/stats"
              className="font-bold  cursor-pointer linkers"
            >
              Stats
            </Link>
            <Link
              href="/blocks"
              className="font-bold  cursor-pointer linkers"
            >
              Blocks
            </Link>
            <ToggleDark />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
