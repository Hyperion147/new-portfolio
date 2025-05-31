import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useGSAP } from "@gsap/react";
import ToggleDark from "./ToggleDark";
import gsap from "gsap";

const Navbar = ({ hamMenu, setHamMenu }) => {
  useEffect(() => {
    document.body.style.overflow = hamMenu ? "hidden" : "";
  }, [hamMenu]);

  useGSAP(() => {
    gsap.set(".boxCont", {
      y: -100,
      borderRadius: 0,
      height: "80px",
      width: "2000px",
    })
    if (window.innerWidth > 769) {
      gsap.to(".boxCont", {
        y: 0,
        borderRadius: "30px",
        duration: 4,
        ease: "power3.out",
        height: "65px",
        width: "100%",
        alignItems: "center"
      })
    } else {
      gsap.to(".boxCont", {
        y: 10,
        borderRadius: "9999px",
        duration: 4,
        ease: "power3.out",
        height: "65px",
        width: "100%",
        alignItems: "center"
      })
    }
    gsap.from(".linkers", {
      x: 100,
      duration: 4,
    })
  });

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 md:top-5 w-full max-w-[92vw] md:max-w-5xl z-40 bg-white backdrop-blur-md border-white/10 shadow-lg dark:bg-slate-900/80 dark:text-white boxCont">
      <div className="mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
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
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-120}
              className="hover:text-gray-600 font-bold transition-colors cursor-pointer linkers"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
              className="hover:text-gray-600 font-bold transition-colors cursor-pointer linkers"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
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
