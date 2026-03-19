import React from "react";

export default function JSONLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suryansu",
    url: "https://suryansu.pro",
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://github.com/Hyperion147",
      "https://linkedin.com/in/suryansu", // Assuming these, can be updated
    ],
    description:
      "Frontend and Frontend Developer specializing in React, TypeScript, and modern web technologies.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
