import { Link as ScrollLink } from "react-scroll";
import { useGSAP } from "@gsap/react";
import ToggleDark from "./ToggleDark";
import gsap from "gsap";

const Navbar = ({ setHamMenu }) => {

  useGSAP(() => {
    gsap.set(".boxCont", {
      width: "2200px",
      filter: "blur(5px)",
      opacity: 0
    })
    if (window.innerWidth > 769) {
      gsap.to(".boxCont", {
        borderRadius: "30px",
        duration: 1,
        width: "100%",
        filter: "blur(0px)",
        alignItems: "center",
        opacity: 0.8
      })
    } else {
      gsap.to(".boxCont", {
        y: 10,
        borderRadius: "9999px",
        duration: 1,
        width: "100%",
        filter: "blur(0px)",
        alignItems: "center",
        opacity: 0.8
      })
    }
    gsap.from(".linkers", {
      x: 100,
      duration: 1.5,
    })
  });

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 md:top-5 w-full max-w-[92vw] md:max-w-5xl z-40 backdrop-blur-sm dark:backdrop-blur-none shadow-sm drop-shadow-transparent shadow-gray-700 dark:bg-slate-900/80 dark:text-white boxCont">
      <div className="mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          <ScrollLink
            to="home"
            smooth={true}
            duration={100}
            className="font-medium text-xl cursor-pointer ml-3"
          >
            S<span className="text-gray-500">uryansu</span>
            S<span className="text-gray-500">ingh</span>
          </ScrollLink>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setHamMenu((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://blog.suryansu.pro/"
              target="_blank"
              className="hover:text-gray-600 font-bold transition-colors cursor-pointer linkers"
            >
              Blogs
            </a>
            <ScrollLink
              to="about"
              smooth={true}
              duration={100}
              offset={-120}
              className="hover:text-gray-600 font-bold transition-colors cursor-pointer linkers"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={100}
              offset={-100}
              className="hover:text-gray-600 font-bold transition-colors cursor-pointer linkers"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={100}
              className="hover:text-gray-600 font-bold transition-colors cursor-pointer linkers"
            >
              Contact
            </ScrollLink>
            <ToggleDark />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
