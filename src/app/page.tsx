"use client";

import Navbar from "@/components/utils/Navbar";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import LinksSection from "@/components/sections/LinksSection";
import Footer from "@/components/sections/Footer"
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import AboutSection from "@/components/sections/AboutSection";
import GithubSection from "@/components/sections/GithubSection";
import MobileIntroCard from "@/components/sections/MobileIntroCard";

import Skills from "@/components/utils/Skills";

const ProjectSection = React.lazy(
  () => import("@/components/sections/ProjectSection")
);

export default function Home() {
  return (
    <div className="bg-background">
      <div className="overflow-x-hidden transition-colors duration-500">
        <div className="pt-4 md:pt-28 px-4 pb-28 max-w-7xl mx-auto">
          <Navbar />
          <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[150px] md:grid-cols-4">
            <BentoGridItem
              className="p-0 md:hidden"
              noSlide
              header={<MobileIntroCard />}
            />
            <BentoGridItem
              className="hidden md:flex md:col-span-2 md:row-span-2"
              header={<Hero />}
            />
            <BentoGridItem
              className="hidden md:flex md:col-span-2 md:row-span-2"
              header={<AboutSection />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-1"
              header={<Skills />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-6"
              header={<ProjectSection />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-5"
              header={<ExperienceSection className="py-6" />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-3 md:hidden flex"
              header={<EducationSection className="p-6" />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-2"
              header={<GithubSection />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-1"
              header={<LinksSection className="py-6" />}
            />
            <BentoGridItem
              className="md:col-span-4 md:row-span-1"
              header={
                <ContactSection className="flex items-center justify-center" />
              }
            />
          </BentoGrid>
          <Footer />
        </div>
      </div>
    </div>
  );
}
