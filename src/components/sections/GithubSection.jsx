"use client";
import React, { useEffect, useState, useMemo, memo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const getLevelColor = (level) => {
  switch (level) {
    case 0:
      return "bg-white/40 dark:bg-slate-700/50";
    case 1:
      return "bg-emerald-200 dark:bg-emerald-900/40";
    case 2:
      return "bg-emerald-400 dark:bg-emerald-700/60";
    case 3:
      return "bg-emerald-600 dark:bg-emerald-500/80";
    case 4:
      return "bg-emerald-800 dark:bg-emerald-400";
    default:
      return "bg-white/40 dark:bg-slate-700/50";
  }
};

// Memoized single contribution square to prevent unnecessary re-renders
const ContributionSquare = memo(({ day, onHover }) => {
  return (
    <div
      className={`contribution-square w-[12px] h-[12px] rounded-[3px] ${getLevelColor(
        day.level
      )} cursor-pointer transition-all duration-200 border border-black/10 dark:border-white/10 hover:scale-110 hover:z-10`}
      onMouseEnter={() => onHover(day)}
    />
  );
});

ContributionSquare.displayName = "ContributionSquare";

const GithubSection = ({ className = "" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/Hyperion147?y=last")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching github data:", err);
        setLoading(false);
      });
  }, []);

  // Performance: Stagger animation using GSAP instead of 365+ Framer Motion delay props
  useGSAP(
    () => {
      if (!loading && data) {
        const tl = gsap.timeline();
        tl.from(".github-title", {
          opacity: 0,
          x: -20,
          duration: 0.8,
          ease: "power2.out",
        })
          .from(
            ".github-stats-item",
            { opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.5 },
            "-=0.5"
          )
          .from(
            ".contribution-square",
            {
              opacity: 0,
              scale: 0,
              stagger: {
                each: 0.002,
                from: "start",
              },
              duration: 0.4,
              ease: "back.out(1.7)",
            },
            "-=0.3"
          );
      }
    },
    [loading, data],
    { scope: containerRef }
  );

  // Memoize weeks to prevent recalculation on hover
  const weeks = useMemo(() => {
    if (!data) return [];
    const result = [];
    let currentWeek = [];
    data.contributions.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === data.contributions.length - 1) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });
    return result;
  }, [data]);

  const todayCount = useMemo(() => {
    if (!data) return 0;
    return data.contributions[data.contributions.length - 1]?.count || 0;
  }, [data]);

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center h-full min-h-[150px] ${className}`}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-500 dark:border-white"></div>
          <p className="text-xs text-slate-500 animate-pulse">
            Fetching contributions...
          </p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <section
      ref={containerRef}
      className={`flex flex-col h-full w-full py-4 px-3 sm:px-6 relative ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="github-title flex items-center gap-2 sm:gap-4 bg-slate-100/50 dark:bg-slate-700/30 pr-2 sm:pr-5 pl-2 py-2 rounded-2xl border border-slate-200 dark:border-slate-700/50">
          <div className="p-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <FaGithub className="text-lg sm:text-xl text-slate-800 dark:text-white" />
          </div>
          <div className="flex flex-col hidden sm:flex">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">
              GitHub Contributions
            </h2>
          </div>
        </div>

        <div className="flex gap-3 sm:gap-6 items-center overflow-hidden">
          {/* Hover Details */}
          <AnimatePresence mode="wait">
            {hoveredDay ? (
              <motion.div
                key="hovered"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="text-right hidden md:block github-stats-item"
              >
                <span className="block text-xl sm:text-2xl font-bold text-indigo-500 dark:text-indigo-300 leading-none">
                  {hoveredDay.count}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                  {hoveredDay.date.split("-").reverse().join("/")}
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Today Count */}
          <div className="text-right github-stats-item">
            <span className="block text-xl sm:text-2xl font-bold text-emerald-500 leading-none">
              {todayCount}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Today
            </span>
          </div>

          {/* Past Year Count */}
          <div className="text-right pl-3 sm:pl-6 border-l border-slate-200 dark:border-slate-700 github-stats-item">
            <span className="block text-xl sm:text-2xl font-bold text-emerald-500 leading-none">
              {data.total.lastYear}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Past Year
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex-1 overflow-x-auto no-scrollbar relative"
        onMouseLeave={() => setHoveredDay(null)}
      >
        <div className="flex gap-[4px] min-w-max pb-4">
          {weeks.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-[4px]">
              {week.map((day, dIndex) => (
                <ContributionSquare
                  key={`${day.date}-${wIndex}-${dIndex}`}
                  day={day}
                  onHover={setHoveredDay}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
        <a
          href="https://github.com/Hyperion147"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          @Hyperion147
        </a>
        <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.1em] font-bold">
          <span>Less</span>
          <div className="flex gap-[2px]">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-[10px] h-[10px] rounded-[2px] shadow-sm border border-black/5 dark:border-white/5 ${getLevelColor(
                  level
                )}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
