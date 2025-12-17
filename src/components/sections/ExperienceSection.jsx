"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { experienceInfo } from "@/constants/experienceInfo";
import { cn } from "@/components/utils/Utils";

const ExperienceSection = ({ className = "" }) => {
  useGSAP(() => {
          gsap.from(".expCont", {
              y: 50,
              filter: "blur(15px)",
              duration: 1
          });
      });
  return (
    <section
      id="experience"
      className={cn("px-4 sm:px-8 bg-[#fff9f0] dark:bg-slate-800 expCont overflow-hidden", className)}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="heading mb-12">Work Experience</h2>

        {/* Experience List */}
        <div className="space-y-12">
          {experienceInfo.map((experience) => (
            <div
              key={experience.id}
              className="border-b border-gray-300 dark:border-gray-600 pb-8 last:border-b-0"
            >
              {/* Header: Role, Company, Duration */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-indigo-400 dark:text-indigo-300 font-semibold">
                    {experience.company}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {experience.duration}
                </span>
              </div>

              {/* Location */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {experience.location}
              </p>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;