"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { projectInfo } from "@/constants/projectInfo";
import { templateInfo } from "@/constants/templateInfo";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/sections/Footer";
import ProjectDetails from "@/components/utils/ProjectDetails";
import MobilePageHeading from "@/components/utils/MobilePageHeading";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  heading: string;
  description: string;
  href: string;
  code?: string;
  image: string;
  video?: string;
  preview: string;
  tags: { id: number; name: string }[];
}

// ─── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {
      // play() was interrupted — safe to ignore
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    const video = videoRef.current;
    if (!video) return;
    // Wait for any in-flight play() to settle before pausing
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          video.pause();
          video.currentTime = 0;
        })
        .catch(() => {
          // play() was already interrupted, nothing to pause
        });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <>
      <BentoGridItem
        className="md:col-span-1 cursor-pointer group/card"
        noSlide
        header={
          <div
            className="relative w-full overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800"
            onClick={() => setOpen(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Static image — always present as the base layer */}
            <Image
              src={project.image}
              alt={project.heading}
              fill
              className={`object-cover transition-[opacity,transform] duration-500 ease-in-out group-hover/card:scale-105 ${hovered && project.video ? "opacity-0" : "opacity-100"
                }`}
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            {/* Video — rendered but paused until hover */}
            {project.video && (
              <video
                ref={videoRef}
                src={project.video}
                className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-500 ease-in-out delay-100 group-hover/card:scale-105 ${hovered ? "opacity-100" : "opacity-0"
                  }`}
                loop
                muted
                playsInline
                preload="none"
              />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 text-white text-sm pixeltext">
                click to view
              </span>
            </div>
          </div>
        }
        title={
          <span
            className="pixeltext text-sm truncate block cursor-pointer"
            onClick={() => setOpen(true)}
          >
            {project.title}
          </span>
        }
        description={
          <div className="flex flex-col gap-2 mt-1">
            <p className="line-clamp-2 text-xs leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag.id}
                  className="text-[10px] px-1.5 py-0.5 border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400"
                >
                  {tag.name}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-[10px] px-1.5 py-0.5 text-slate-400">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>
        }
      />

      {open && (
        <ProjectDetails
          heading={project.heading}
          description={project.description}
          image={project.image}
          video={project.video}
          tags={project.tags}
          href={project.href}
          code={project.code}
          closeModal={() => setOpen(false)}
        />
      )}
    </>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsPageClient() {
  return (
    <div className="bg-background min-h-screen">
      <div className="overflow-x-hidden transition-colors duration-500">
        <div className="pt-4 md:pt-28 px-4 pb-28 max-w-7xl mx-auto">
          <Navbar />
          <h1 className="sr-only">
            Projects by Suryansu Singh
          </h1>
          <MobilePageHeading
            eyebrow="selected work"
            title="Projects"
          />

          {/* Projects grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="sr-only">Selected Projects</h2>
            <BentoGrid className="md:auto-rows-auto md:grid-cols-3 gap-4 mb-12">
              {projectInfo.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </BentoGrid>
          </motion.div>

          {/* Templates grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="sr-only">UI Templates</h2>
            <BentoGrid className="md:auto-rows-auto md:grid-cols-3 gap-4">
              {templateInfo.map((template) => (
                <ProjectCard key={template.id} project={template} />
              ))}
            </BentoGrid>
          </motion.div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
