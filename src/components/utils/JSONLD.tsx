import React from "react";

export default function JSONLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suryansu",
    url: "https://suryansu.pro",
    image: "https://suryansu.pro/og-image.png",
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://github.com/Hyperion147",
      "https://linkedin.com/in/suryansu",
    ],
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
