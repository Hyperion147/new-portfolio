"use client";

import Navbar from "@/components/utils/Navbar";
import Mobile from "@/components/utils/Mobile";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import AboutSection from "@/components/sections/AboutSection";
import GithubSection from "@/components/sections/GithubSection";
import MobileTheme from "@/components/utils/MobileTheme";

import Skills from "@/components/utils/Skills";

const ProjectSection = React.lazy(
  () => import("@/components/sections/ProjectSection")
);

export default function Home() {
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <div className="bg-[#fff9f0] dark:bg-gray-900">
      <div className="overflow-x-hidden transition-colors duration-500">
          <Mobile hamMenu={hamMenu} setHamMenu={setHamMenu} />
          <MobileTheme />
        <div className="pt-28 px-4 pb-12 max-w-7xl mx-auto">
          <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu} />
          <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[150px] md:grid-cols-4">
            <BentoGridItem
              className="md:col-span-2 md:row-span-2"
              header={<Hero />}
            />
            <BentoGridItem
              className="md:col-span-2 md:row-span-2"
              header={<AboutSection />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-1"
              header={<Skills />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-4"
              header={<ProjectSection />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-5"
              header={<ExperienceSection className="py-6" />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-2"
              header={<GithubSection />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-2"
              header={
                <ContactSection className="flex items-center justify-center" />
              }
            />
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}
