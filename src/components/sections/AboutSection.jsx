"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educationInfo } from "@/constants/educationInfo";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useGSAP(() => {
    gsap.from(".about-copy", {
      y: 18,
      duration: 0.8,
      filter: "blur(8px)",
      opacity: 0,
      stagger: 0.08,
      ease: "power3.out",
    });
  });

  return (
    <section
      id="about"
      className="flex h-full items-center bg-background px-4"
    >
      <div className="grid w-full gap-6 md:items-start">
        <h2 className="sr-only">Education Snapshot</h2>
        <div className="about-copy space-y-3">
          {educationInfo.map((edu) => (
            <div key={edu.id} className="border-b border-dashed border-slate-300 pb-3 last:border-b-0 last:pb-0 dark:border-slate-700">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {edu.field}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {edu.duration}
                  </p>
                  {edu.grade && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {edu.grade}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
