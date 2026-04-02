import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import FixedButtons from "@/components/ui/FixedButtons";
import JSONLD from "@/components/utils/JSONLD";

export const metadata: Metadata = {
  metadataBase: new URL("https://suryansu.pro"),
  title: {
    default: "Suryansu | Frontend Developer",
    template: "%s | Suryansu",
  },
  description:
    "Personal portfolio of Suryansu, a passionate Frontend Developer specializing in building modern, responsive, and high-performance web applications using React, Next.js, and TypeScript.",
  applicationName: "Suryansu Portfolio",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Suryansu",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Suryansu" }],
  creator: "Suryansu",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suryansu.pro",
    siteName: "Suryansu | Frontend Developer",
    title: "Suryansu | Frontend Developer",
    description:
      "Personal portfolio showcasing projects, experience, and skills in modern web development.",
    images: [
      {
        url: "https://suryansu.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suryansu Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryansu | Frontend Developer",
    description:
      "Personal portfolio showcasing projects, experience, and skills in modern web development.",
    images: [
      {
        url: "https://suryansu.pro/og-image.png",
        alt: "Suryansu Portfolio",
      },
    ],
    creator: "@suryansu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "og:image": "https://suryansu.pro/og-image.png",
    "og:image:url": "https://suryansu.pro/og-image.png",
    "og:image:secure_url": "https://suryansu.pro/og-image.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Suryansu Portfolio",
    "og:image:type": "image/png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const dark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
                if (dark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#1e293b" />
        <link rel="manifest" href="/manifest.json" />
        <JSONLD />
      </head>
      <body className="overflow-x-hidden">
        <Cursor />
        <Toaster position="bottom-right" />
        <FixedButtons />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
