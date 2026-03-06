"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Navbar from "@/components/utils/Navbar";
import Mobile from "@/components/utils/Mobile";
import MobileTheme from "@/components/utils/MobileTheme";
import { useState } from "react";
import { FaTrophy, FaGithub, FaCube, FaKeyboard, FaGamepad, FaMedal } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdSchool } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";

const StatCard = ({
    title,
    value,
    subtitle,
    icon,
}: {
    title: string;
    value: string;
    subtitle?: string;
    icon?: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            {icon && <div className="text-4xl mb-2 dark:text-indigo-300 text-indigo-500">{icon}</div>}
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-200 to-gray-500 dark:to-white bg-clip-text text-transparent">
                {value}
            </h3>
            <p className="text-sm md:text-base dark:text-slate-300 text-slate-700 font-semibold mt-1">
                {title}
            </p>
            {subtitle && (
                <p className="text-xs dark:text-slate-400 text-slate-500 mt-1">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

const CategorySection = ({
    category,
    stats,
    icon,
}: {
    category: string;
    stats: Array<{ label: string; value: string }>;
    icon?: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col h-full p-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-800 mb-4 flex items-center gap-2">
                {icon && <span className="dark:text-indigo-300 text-indigo-500">{icon}</span>}
                {category}
            </h3>
            <div className="flex flex-col gap-3 flex-1 justify-center">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                        <span className="text-sm dark:text-slate-300 text-slate-700 shrink-0">
                            {stat.label}
                        </span>
                        <span className="text-sm font-bold dark:text-white text-slate-800 sm:text-right text-left break-words">
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function StatsPage() {
    const [hamMenu, setHamMenu] = useState(false);

    useGSAP(() => {
        gsap.from(".stats-header", {
            y: -50,
            duration: 1,
            filter: "blur(15px)",
            opacity: 0,
        });
        gsap.from(".stats-grid", {
            y: 50,
            duration: 1.2,
            filter: "blur(10px)",
            opacity: 0,
            delay: 0.3,
        });
    });

    return (
        <div className="bg-[#fff9f0] dark:bg-gray-900 min-h-screen">
            <div className="overflow-x-hidden transition-colors duration-500">
                <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
                <MobileTheme />
                <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />

                <div className="pt-28 px-4 pb-12 max-w-7xl mx-auto">
                    <BentoGrid className="max-w-5xl mx-auto stats-grid">
                        <BentoGridItem
                            className="md:col-span-1 md:row-span-1"
                            header={
                                <StatCard
                                    icon={<FaTrophy />}
                                    title="Hackathons"
                                    value="2"
                                    subtitle="Participated"
                                />
                            }
                        />
                        <BentoGridItem
                            className="md:col-span-1 md:row-span-1"
                            header={
                                <StatCard
                                    icon={<FaGithub />}
                                    title="Github"
                                    value="800+"
                                    subtitle="Contribution"
                                />
                            }
                        />
                        <BentoGridItem
                            className="md:col-span-1 md:row-span-1"
                            header={
                                <CategorySection
                                    category="Typing Speed"
                                    icon={<FaKeyboard />}
                                    stats={[
                                        { label: "Max (10 words / 15 sec)", value: "96 WPM" },
                                        { label: "Min (100 words / 120 sec)", value: "74 WPM" },
                                        { label: "MonkeyType", value: "5 hours" },
                                    ]}
                                />
                            }
                        />

                        {/* Rubik's Cube Stats */}
                        <BentoGridItem
                            className="md:col-span-1 md:row-span-1"
                            header={
                                <StatCard
                                    icon={<FaCube />}
                                    title="Rubik's Cube"
                                    value="55s"
                                    subtitle="Personal Best"
                                />
                            }
                        />
                        <BentoGridItem
                            className="md:col-span-2 md:row-span-1"
                            header={
                                <CategorySection
                                    category="Academic Achievements"
                                    icon={<MdSchool />}
                                    stats={[
                                        { label: "JEE Mains Percentile", value: "88.5%" },
                                        { label: "Class 12th Score", value: "60%" },
                                        { label: "College GPA", value: "8.2" },
                                        { label: "Competitive Exams", value: "6+" },
                                    ]}
                                />
                            }
                        />
                        <BentoGridItem
                            className="md:col-span-3 md:row-span-1"
                            header={
                                <CategorySection
                                    category="Setup"
                                    icon={<HiDesktopComputer />}
                                    stats={[
                                        { label: "Laptop", value: "Lenovo Legion 5 ( 1650 | 16gb | 750gb SSD | 120Hz )" },
                                        { label: "Monitor", value: "Lenovo Legion R24e ( 180Hz )" },
                                        { label: "Keyboard", value: "Aula F75 ( Ice Blue | Akko V3 Yellow Pros Switches )" },
                                        { label: "Mouse", value: "ATK A9 Ultra ( 8k Hz | 53 grams )" },
                                        { label: "Audio", value: "KZ Edx Pro 2 ( Mic | 3.5mm )"}
                                    ]}
                                />
                            }
                        />
                        <BentoGridItem
                            className="md:col-span-2 md:row-span-1"
                            header={
                                <CategorySection
                                    category="Gaming Stats"
                                    icon={<FaGamepad />}
                                    stats={[
                                        { label: "Valorant", value: "Diamond 2" },
                                        { label: "CS2 (Premier)", value: "17,500" },
                                        { label: "CS2 (Faceit)", value: "Level 6" },
                                        { label: "Clash of Clans", value: "Champion 2" },
                                        { label: "Battlegrounds", value: "Crown 4 (2019)" },
                                    ]}
                                />
                            }
                        />
                        <BentoGridItem
                            className="md:col-span-1 md:row-span-1"
                            header={
                                <CategorySection
                                    category="Misc."
                                    icon={<FaMedal />}
                                    stats={[
                                        { label: "Skating", value: "State Level" },
                                        { label: "Baseball", value: "District Level" },
                                        { label: "Olympiads", value: "Silver" },
                                    ]}
                                />
                            }
                        />
                    </BentoGrid>

                    <div className="mt-8 text-center">
                        <p className="text-xs dark:text-slate-500 text-slate-600">
                            Stats are updated manually •{" "}
                            <span className="italic">Last updated: March 2026</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
