"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
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
            duration: 1,
        });
    });

    return (
        <footer
            id="contact"
            className={cn(
                "text-gray-500 text-center w-full max-w-full md:max-w-5xl mx-auto h-full contactCont flex flex-col gap-4",
                className,
            )}
        >
            <div className="flex flex-col justify-center gap-2">
                <button
                    className="no-underline group cursor-pointer relative font-semibold leading-6 dark:text-slate-200 text-slate-800 inline-block gap-2 overflow-hidden  group dark:hover:text-slate-300 hover:text-slate-600"
                    data-cal-namespace="15min"
                    data-cal-link="suryansu/15min"
                    data-cal-config='{"layout":"month_view","theme":"auto"}'
                >
                    <p className="flex items-center justify-center py-2 px-4 border-slate-500 rounded-sm border-2 hover:border-dashed transition-all duration-300 hover:inset-shadow-sm inset-shadow-gray-500/50 group gap-2">
                        <span className="flex gap-2 items-center justify-center ">
                            Schedule a meet
                        </span>
                    </p>
                </button>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    let's talk about your project and how I can help you with
                    it.
                </p>
            </div>
        </footer>
    );
};

export default ContactSection;
