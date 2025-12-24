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
    default: "Suryansu | Fullstack Developer",
    template: "%s | Suryansu",
  },
  description:
    "Personal portfolio of Suryansu, a passionate Fullstack Developer specializing in building modern, responsive, and high-performance web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Suryansu",
    "Fullstack Developer",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suryansu.pro",
    siteName: "Suryansu | Fullstack Developer",
    title: "Suryansu | Fullstack Developer",
    description:
      "Personal portfolio showcasing projects, experience, and skills in modern web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suryansu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryansu | Fullstack Developer",
    description:
      "Personal portfolio showcasing projects, experience, and skills in modern web development.",
    images: ["/og-image.png"],
    creator: "@suryansu", // Placeholder
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
