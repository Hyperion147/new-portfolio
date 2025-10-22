import { CiMail } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import FooterLinks from "../ui/footer-links"

const ContactSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "auto",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  
  const buttonRef = useRef(null);
    const iconRef = useRef(null);
  
    useEffect(() => {
      const btn = buttonRef.current;
      const icon = iconRef.current;
  
      // Hover in animation
      const handleEnter = () => {
        gsap.to(btn, {
          width: "220px", // expand width
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(icon, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      };
  
      // Hover out animation
      const handleLeave = () => {
        gsap.to(btn, {
          width: "200px",
          duration: 0.4,
          ease: "power2.inOut"
        });
        gsap.to(icon, {
          opacity: 0,
          x: -10,
          duration: 0.4,
          ease: "power2.inOut"
        });
      };
  
      btn.addEventListener("mouseenter", handleEnter);
      btn.addEventListener("mouseleave", handleLeave);
  
      return () => {
        btn.removeEventListener("mouseenter", handleEnter);
        btn.removeEventListener("mouseleave", handleLeave);
      };
    }, []);

  return (
    <footer
      id="contact"
      className="text-gray-500 text-center py-10 w-full px-2 sm:px-4 md:px-8 max-w-full md:max-w-5xl mx-auto mb-8"
    >
      <h2
        className="bg-gradient-to-r from-indigo-200 to-gray-900 dark:to-slate-300 leading-right bg-clip-text text-transparent text-4xl font-medium text-center pb-4 mb-2"
        id="heading"
      >
        Contact
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 w-full p-8 md:p-10 border-slate-500 border-dashed rounded-md border-2 hover:shadow-[10px_10px_0px_0px_rgba(203,213,225)] dark:hover:shadow-[10px_10px_0px_0px_rgba(51,65,85)]">
        <p className="text-lg text-slate-800 dark:text-slate-300 tracking-widest">
          Since you scrolled this far!
        </p>
        <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
          <button className="no-underline group cursor-pointer relative font-semibold leading-6  dark:text-slate-200 text-slate-800 inline-block gap-2 overflow-hidden  group dark:hover:text-slate-300 hover:text-slate-600"
            data-cal-namespace="15min"
            data-cal-link="suryansu/15min"
            data-cal-config='{"layout":"month_view","theme":"auto"}'>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex items-center justify-center space-x-2 z-10 rounded-md border border-slate-500  py-2  ring-1 ring-white/10 w-[200px] dark:bg-slate-800 bg-[#fff9f0]" ref={buttonRef}>
              <span className="flex gap-2 items-center justify-center ">
                Book a Free Meeting
                <CiCalendarDate
                  ref={iconRef}
                  className="w-5 h-5 opacity-0 translate-x-[-10px] text-slate-900 dark:text-slate-100 hidden group-hover:block"
                />
              </span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 group py-2 px-4 border-slate-500 rounded-md border-2 border-dashed"
          >
            <p>Email Me</p>
            <CiMail className="w-5 h-5 group-hover:transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-300" />
          </Link>
        </div>
        <div className="bg-gradient-to-r text-red-50 w-full from-slate-100 dark:from-slate-900 via-gray-500 dark:via-indigo-200 to-slate-100 dark:to-slate-900 mt-4 h-[1px]" />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default ContactSection;
