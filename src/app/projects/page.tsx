import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient"

const title = "Projects & Case Studies";
const description =
  "Projects and UI templates built by Suryansu Singh — fullstack apps, open-source packages, and frontend experiments.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/projects",
    siteName: "Suryansu Singh",
    title: `${title} | Suryansu Singh`,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suryansu Singh — Projects and case studies",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@suryansu87",
    creator: "@suryansu87",
    title: `${title} | Suryansu Singh`,
    description,
    images: [
      {
        url: "/og-image.png",
        alt: "Suryansu Singh — Projects and case studies",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
