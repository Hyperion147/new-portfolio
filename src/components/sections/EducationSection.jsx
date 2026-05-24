"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { educationInfo } from "@/constants/educationInfo";
import { cn } from "@/components/utils/Utils";

const EducationSection = ({ className = "" }) => {
  useGSAP(() => {
    gsap.from(".eduCont", {
      y: 50,
      filter: "blur(15px)",
      duration: 1,
    });
  });

  return (
    <section
      id="education"
      className={cn(
        "px-4 bg-background eduCont overflow-hidden",
        className
      )}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="heading">Education</h2>

        <div className="space-y-10">
          {educationInfo.map((edu) => (
            <div
              key={edu.id}
              className="border-b border-gray-300 dark:border-gray-600 pb-8 last:border-b-0"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex items-start gap-3">
                  <div className="space-y-2">
                    <h3 className="text-md md:text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm sm:text-lg text-indigo-400 dark:text-indigo-300 font-semibold">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.field}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-start sm:items-end gap-1 shrink-0 sm:pl-0">
                  <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {edu.duration}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {edu.grade}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 pl-8">
                    {edu.location}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
