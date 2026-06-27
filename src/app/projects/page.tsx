import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects and UI templates built by Suryansu — full-stack apps, open-source packages, and frontend experiments.",
  alternates: {
    canonical: "https://suryansu.in/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
