import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects built by Suryansu, ranging from web applications to creative experiments.",
  openGraph: {
    title: "Projects | Suryansu",
    description:
      "Explore the projects built by Suryansu, ranging from web applications to creative experiments.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
