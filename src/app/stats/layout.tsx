import type { Metadata } from "next";

const title = "Developer Stats & Setup";
const description =
  "Typing, GitHub, academic, setup, and gaming stats for Suryansu Singh, a fullstack developer based in Haryana, India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/stats",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/stats",
    siteName: "Suryansu Singh",
    title: `${title} | Suryansu Singh`,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suryansu Singh — developer stats and setup",
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
        alt: "Suryansu Singh — developer stats and setup",
      },
    ],
  },
};

export default function StatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
