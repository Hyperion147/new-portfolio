"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CiMail } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import FooterLinks from "../ui/footer-links"
import { cn } from "@/components/utils/Utils";

const ContactSection = ({ className = "" }) => {
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

    useGSAP(() => {
            gsap.from(".contactCont", {
                y: 50,
                filter: "blur(15px)",
                duration: 1
            });
        });

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
      className={cn("text-gray-500 text-center w-full max-w-full md:max-w-5xl mx-auto h-full contactCont", className)}
    >
      <div className="flex flex-col items-center justify-center gap-4 ">
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
            href="/contact"
            className="flex items-center justify-center gap-2 group py-2 px-4 border-slate-500 rounded-md border-2 border-dashed"
          >
            <p className="dark:text-slate-300">Email Me</p>
            <CiMail className="w-5 h-5 group-hover:transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-300" />
          </Link>
        </div>
        <FooterLinks />
      </div>
    </footer>
  );
};

export default ContactSection;
