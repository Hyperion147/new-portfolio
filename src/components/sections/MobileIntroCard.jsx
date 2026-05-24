"use client";

import Image from "next/image";

const noiseStyle = {
    backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
    backgroundSize: "140px 140px",
};

const MobileIntroCard = () => {
    return (
        <section className="overflow-hidden text-slate-900 dark:text-white">
            <div className="relative h-40 overflow-hidden border-b border-dashed border-slate-300 dark:border-slate-700">
                <Image
                    src="/light-mobile.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-cover dark:hidden"
                    priority
                    aria-hidden="true"
                />
                <Image
                    src="/dark-mobile.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="hidden object-cover dark:block"
                    priority
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 opacity-35 mix-blend-overlay"
                    style={noiseStyle}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,249,240,0.08),rgba(17,24,39,0.24))] dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(0,0,0,0.3))]" />

                <p className="absolute inset-x-5 top-1/2 -translate-y-1/2 text-center pixeltext text-xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                    Manners Maketh Man
                </p>
            </div>

            <div className="relative px-5 pb-6 pt-14">
                <div className="absolute -top-12 left-5 h-24 w-24 overflow-hidden rounded-full border-4 border-[#fff9f0] bg-slate-200 shadow-[0_10px_24px_rgba(15,23,42,0.22)] dark:border-gray-900 dark:bg-slate-800">
                    <Image
                        src="/profile.jpg"
                        alt="Suryansu Singh"
                        fill
                        sizes="96px"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-semibold leading-none text-slate-950 dark:text-white">
                            Suryansu Singh
                        </h1>
                        <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                            20 | Part time college, full time dev
                        </p>
                        <span className="text-sm">Frontend &gt; Fullstack</span>
                    </div>
                </div>

                <div className="border-slate-300 text-[15px] leading-7 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                    Frontend developer focused on smooth, responsive interfaces
                    with React, TypeScript, motion, and thoughtful UI details.
                </div>
            </div>
        </section>
    );
};

export default MobileIntroCard;
