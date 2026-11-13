import { MetadataRoute } from "next";
import { projectInfo } from "@/constants/projectInfo";
import { templateInfo } from "@/constants/templateInfo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.suryansu.in";
  const lastModified = new Date();

  const projectImages = [...projectInfo, ...templateInfo].map((project) =>
    new URL(project.image, baseUrl).toString(),
  );

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${baseUrl}/og-image.png`, `${baseUrl}/profile.jpg`],
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: projectImages,
    },
    {
      url: `${baseUrl}/stats`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
