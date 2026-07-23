"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";
import { cn } from "@/components/utils/Utils";
import { linksInfo } from "@/constants/linksInfo";
import Image from "next/image";

const noiseStyle = {
    backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
    backgroundSize: "140px 140px",
};

const LinkCard = ({ id, href, Icon }) => {
    const iconRef = useRef(null);

    const handleMouseEnter = () => {
        iconRef.current?.startAnimation();
    };

    const handleMouseLeave = () => {
        iconRef.current?.stopAnimation();
    };

    return (
        <a
            key={id}
            href={href}
            target={href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-3 p-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon
                ref={iconRef}
                size={20}
                className="shrink-0 text-gray-600 dark:text-gray-300"
            />
        </a>
    );
};

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
            duration: 1,
        });
        gsap.from(".images", {
            anchor: "50%",
            x:-50,
            y: 50,
            filter: "blur(15px)",
            duration: 1,
        })
    });

    return (
        <footer
            id="contact"
            className={cn(
                "text-gray-500 w-full mx-auto h-full flex flex-col md:flex-row gap-4 items-center md:items-stretch",
                className,
            )}
        >
            <div className="relative w-1/2 shrink-0 overflow-hidden bg-background">
                <Image
                    src="/light-mobile.jpg"
                    alt="Light theme mobile portfolio preview"
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-cover dark:hidden images"
                    priority
                />
                <Image
                    src="/dark-mobile.jpg"
                    alt="Dark theme mobile portfolio preview"
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="hidden object-cover dark:block images"
                    priority
                />
                <div
                    className="absolute inset-0 opacity-100 mix-blend-overlay"
                    style={noiseStyle}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,249,240,0.18),rgba(17,24,39,0.54))] dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(0,0,0,0.3))]" />

                <p className="absolute inset-x-5 top-1/2 -translate-y-1/2 text-center pixeltext text-xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                    Manners Maketh Man
                </p>
            </div>

            <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-2 contactCont">
                <button
                    className="no-underline group cursor-pointer relative font-semibold leading-6 dark:text-slate-200 text-slate-800 gap-2 overflow-hidden group dark:hover:text-slate-300 hover:text-slate-600"
                    data-cal-namespace="15min"
                    data-cal-link="suryansu/15min"
                    data-cal-config='{"layout":"month_view","theme":"auto"}'
                >
                    <p className="py-2 px-4 border-slate-500 border-2 hover:border-dashed transition-all duration-300 hover:inset-shadow-sm inset-shadow-gray-500/50 group gap-2">
                        Schedule a meet
                    </p>
                </button>
                <div className="md:flex hidden">
                    <h2 className="sr-only">Social Links</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {linksInfo.map((link) => (
                            <LinkCard key={link.id} {...link} />
                        ))}
                    </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 pixeltext md:pl-1 w-70 md:w-full text-center md:text-left">
                    let's talk about your project and how I can help you with
                    it.
                </p>
            </div>
        </footer>
    );
};

export default ContactSection;
