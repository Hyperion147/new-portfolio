"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Navbar from "@/components/utils/Navbar";
import Mobile from "@/components/utils/Mobile";
import MobileTheme from "@/components/utils/MobileTheme";
import { useState, useEffect } from "react";
import { FaTrophy, FaGithub, FaCube, FaKeyboard, FaGamepad, FaMedal } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";

const StatCard = ({
    title,
    value,
    subtitle,
    icon,
    link,
}: {
    title: string;
    value: string;
    subtitle?: string;
    icon?: React.ReactNode;
    link?: string;
}) => {
    return (
        <a href={link} className="flex flex-col justify-center items-center h-full group">
            {link && <BiChevronRight className="w-6 h-6 flex absolute top-5 right-5 text-indigo-200 group-hover:block" />}
            {icon && <div className="text-4xl mb-2 dark:text-indigo-300 text-indigo-500">{icon}</div>}
            <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-indigo-200 to-gray-500 dark:to-white bg-clip-text text-transparent">
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
        </a>
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
                        <span className="text-sm font-bold dark:text-white text-slate-800 sm:text-right text-left wrap-break-word">
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

interface PersonalBestEntry {
    acc: number;
    consistency: number;
    difficulty: string;
    lazyMode: boolean;
    language: string;
    punctuation: boolean;
    numbers: boolean;
    raw: number;
    wpm: number;
    timestamp: number;
}

interface MonkeyProfile {
    name: string;
    xp: number;
    isPremium: boolean;
    streak: number;
    maxStreak: number;
    typingStats: {
        completedTests: number;
        startedTests: number;
        timeTyping: number;
    };
    personalBests: {
        time: { [mode2: string]: PersonalBestEntry[] };
        words: { [mode2: string]: PersonalBestEntry[] };
    };
    allTimeLbs: {
        time: {
            [lang: string]: {
                [mode2: string]: { rank: number; count: number };
            };
        };
    };
    details?: {
        bio?: string;
        keyboard?: string;
    };
}

function getBest(entries: PersonalBestEntry[] | undefined): PersonalBestEntry | null {
    if (!entries?.length) return null;
    return entries.reduce((a, b) => (a.wpm > b.wpm ? a : b));
}

function fmtWpm(entries: PersonalBestEntry[] | undefined): string {
    const b = getBest(entries);
    return b ? `${Math.round(b.wpm)} WPM` : "—";
}

function fmtTime(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

// Mini bar showing acc/consistency/raw for a best entry
const PbBar = ({ entry }: { entry: PersonalBestEntry | null }) => {
    if (!entry) return <span className="text-slate-400 text-xs">—</span>;
    return (
        <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold dark:text-white text-slate-800">{Math.round(entry.wpm)} WPM</span>
            <span className="text-xs dark:text-slate-400 text-slate-500">
                {Math.round(entry.acc)}% acc · {Math.round(entry.raw)} raw · {Math.round(entry.consistency)}% con
            </span>
        </div>
    );
};

export default function StatsPage() {
    const [hamMenu, setHamMenu] = useState(false);
    const [profile, setProfile] = useState<MonkeyProfile | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_MONKEY_API}users/${process.env.NEXT_PUBLIC_MONKEY_USER}/profile`,
                    { headers: { Authorization: `ApeKey ${process.env.NEXT_PUBLIC_MONKEY_KEY}` } }
                );
                const json = await res.json();
                if (json?.data) setProfile(json.data);
            } catch {
                // silently fail
            }
        };
        fetchProfile();
    }, []);

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
                        {/* MonkeyType Full Section */}
                        <BentoGridItem
                            className="md:col-span-3 md:row-span-1"
                            header={
                                <div className="flex flex-col h-full px-4 gap-4">
                                    {/* Header row */}
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <a
                                            href={`https://monkeytype.com/profile/${process.env.NEXT_PUBLIC_MONKEY_USER}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 group"
                                        >
                                            {profile?.isPremium && (
                                                <span className="text-xs bg-yellow-400/20 text-yellow-600 dark:text-yellow-300 px-2 rounded-full font-semibold">
                                                    Premium
                                                </span>
                                            )}
                                        </a>
                                    </div>
                                    <p className="text-xs font-semibold dark:text-slate-400 text-slate-500 uppercase tracking-wider">
                                        Typing Stats
                                    </p>
                                    {/* Stats row */}
                                    <div className="grid grid-cols-3 gap-3 text-center">
                                        <div className="border-r-2 border-b-2 p-2 md:border-gray-500">
                                            <p className="text-2xl font-bold dark:text-white text-slate-800">
                                                {profile?.typingStats.completedTests.toLocaleString() ?? "—"}
                                            </p>
                                            <p className="text-xs dark:text-slate-400 text-slate-500 mt-0.5">tests completed</p>
                                        </div>
                                        <div className="border-l-2 border-b-2 border-r-2 p-2 border-gray-500">
                                            <p className="text-2xl font-bold dark:text-white text-slate-800">
                                                {profile ? fmtTime(profile.typingStats.timeTyping) : "—"}
                                            </p>
                                            <p className="text-xs dark:text-slate-400 text-slate-500 mt-0.5">time typing</p>
                                        </div>
                                        <div className="border-l-2 border-b-2 p-2 border-gray-500">
                                            <p className="text-2xl font-bold dark:text-white text-slate-800">
                                                {profile ? fmtWpm(profile.personalBests?.time?.["60"]) : "—"}
                                            </p>
                                            <p className="text-xs dark:text-slate-400 text-slate-500 mt-0.5">best 60s</p>
                                        </div>
                                    </div>

                                    {/* Personal Bests — side by side */}
                                    <div className="flex gap-4">
                                        {/* Time */}
                                        <div className="flex-1">
                                            <p className="text-xs font-semibold dark:text-slate-400 text-slate-500 uppercase tracking-wider mb-2">
                                                Time Mode Personal Bests
                                            </p>
                                            <div className="grid grid-cols-1 gap-2">
                                                {["15"].map((m) => (
                                                    <div key={m} className="border-r-2 border-t-2 p-2 border-gray-500">
                                                        <p className="text-xs dark:text-slate-400 text-slate-500 mb-1">{m}s</p>
                                                        <PbBar entry={getBest(profile?.personalBests?.time?.[m])} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Words */}
                                        <div className="flex-1">
                                            <p className="text-xs font-semibold dark:text-slate-400 text-slate-500 uppercase tracking-wider mb-2">
                                                Words Mode Personal Bests
                                            </p>
                                            <div className="grid grid-cols-1 gap-2">
                                                {["10"].map((m) => (
                                                    <div key={m} className="border-l-2 border-t-2 p-2 border-gray-500">
                                                        <p className="text-xs dark:text-slate-400 text-slate-500 mb-1">{m} words</p>
                                                        <PbBar entry={getBest(profile?.personalBests?.words?.[m])} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <BentoGridItem
                            className="md:col-span-1 md:row-span-1"
                            header={
                                <StatCard
                                    icon={<FaGithub />}
                                    title="Github"
                                    value="900+"
                                    subtitle="Contribution"
                                    link="https://github.com/Hyperion147"
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
                                        { label: "Hackathons Participated", value: "3 (cooked)" }
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
                                        { label: "Laptop", value: "Lenovo Legion 5 ( 1650 | 16gb | 750gb | 120Hz )" },
                                        { label: "Monitor", value: "Lenovo Legion R24e ( 180Hz )" },
                                        { label: "Keyboard", value: "Aula F75 ( Ice Blue | Akko V3 Yellow Pros Switches )" },
                                        { label: "Mouse", value: "ATK A9 Ultra ( 8k Hz | 53 grams )" },
                                        { label: "Audio", value: "KZ Edx Pro 2 ( Mic | 3.5mm )" }
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
                                        { label: "CS2 (Premier)", value: "20,124" },
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
