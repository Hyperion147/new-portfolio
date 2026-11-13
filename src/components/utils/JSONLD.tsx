import React from "react";
import { educationInfo } from "@/constants/educationInfo";

const baseUrl = "https://www.suryansu.in";
const personId = `${baseUrl}/#person`;

export default function JSONLD() {
  const currentEducation = educationInfo.find((edu) =>
    edu.duration.includes("Present"),
  );
  const completedEducation = educationInfo.filter(
    (edu) => !edu.duration.includes("Present"),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Suryansu Singh",
        description:
          "Portfolio of Suryansu Singh, a fullstack developer building React and Next.js products, open-source packages, and UI experiments.",
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Suryansu Singh",
        url: baseUrl,
        image: `${baseUrl}/profile.jpg`,
        jobTitle: "Fullstack Developer",
        description:
          "Fullstack developer specializing in React, Next.js, TypeScript, Node.js, Go, and modern web technologies.",
        sameAs: [
          "https://github.com/Hyperion147",
          "https://www.linkedin.com/in/suryansu-singh-7676b8279/",
          "https://x.com/suryansu87",
          "https://blog.suryansu.in/",
        ],
        knowsAbout: [
          "Fullstack Development",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Go",
          "Tailwind CSS",
          "PostgreSQL",
          "Supabase",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Panipat",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },
        ...(completedEducation.length > 0
          ? {
              alumniOf: completedEducation.map((edu) => ({
                "@type": "CollegeOrUniversity",
                name: edu.institution,
              })),
            }
          : {}),
        ...(currentEducation
          ? {
              affiliation: {
                "@type": "CollegeOrUniversity",
                name: currentEducation.institution,
              },
            }
          : {}),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
