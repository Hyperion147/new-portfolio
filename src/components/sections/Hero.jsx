"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import TrueFocus from "@/components/ui/text-track";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        gsap.from(".hero-profile", {
            y: 14,
            duration: 1,
            filter: "blur(12px)",
            opacity: 0,
            ease: "power3.out",
        });
        gsap.from(".hero-copy", {
            y: 18,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
        });
    });

    return (
        <section
            id="home"
            className="flex h-full flex-col justify-between gap-4 text-slate-900 dark:text-white p-4"
        >
            <div className="flex items-start gap-6">
                <div className="hero-profile relative h-24 w-24 shrink-0 overflow-hidden border-2 border-dashed border-slate-300 bg-slate-200 shadow-[7px_7px_0_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-800 dark:shadow-[7px_7px_0_rgba(226,232,240,0.05)]">
                    <Image
                        src="/profile.jpg"
                        alt="Suryansu Singh"
                        fill
                        sizes="96px"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="min-w-0">
                    <h1
                        className="hero-copy text-3xl font-semibold leading-tight text-slate-950 dark:text-white"
                        role="heading"
                        aria-level="1"
                    >
                        Suryansu Singh
                    </h1>
                    <p className="hero-copy text-lg font-medium text-slate-700 dark:text-slate-300">
                        20 | Frontend &gt; Fullstack
                    </p>
                    <div className="hero-copy flex items-center gap-2 text-sm font-medium mt-2">
                        <span className="inline-block rounded-full w-2 h-2 text-xs font-medium bg-green-500 mt-0.5" />
                        <span className="flex gap-1">
                            open to
                            <TrueFocus
                                sentence="work freelance"
                                manualMode={false}
                                blurAmount={3}
                                animationDuration={0.6}
                                pauseBetweenAnimations={1}
                            />
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <p className="hero-copy pixeltext text-xl text-slate-800 dark:text-slate-100">
                    Part time college, full time dev
                </p>
                <p
                    className="hero-copy mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300"
                    aria-label="Introduction"
                >
                    I build fast, polished web experiences that feel good to use
                    and easy to ship. I&apos;m strongest in React, Next.js,
                    TypeScript, motion, and UI craft, with enough backend sense
                    to move from idea to working product without getting stuck
                    at the handoff.
                </p>
            </div>
        </section>
    );
};

export default Hero;
