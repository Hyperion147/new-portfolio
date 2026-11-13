import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import JSONLD from "@/components/utils/JSONLD";
import CursorWrapper from "@/components/ui/CursorWrapper";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suryansu.in"),
  title: {
    default: "Suryansu Singh | Fullstack Developer",
    template: "%s | Suryansu Singh",
  },
  description:
    "Suryansu Singh is a fullstack developer building fast, responsive web apps with React, Next.js, TypeScript, Node.js, and Go.",
  applicationName: "Suryansu Singh Portfolio",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Suryansu Singh",
    "Fullstack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Suryansu Singh", url: "https://www.suryansu.in" }],
  creator: "Suryansu Singh",
  category: "technology",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Suryansu Singh",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Suryansu Singh",
    title: "Suryansu Singh | Fullstack Developer",
    description:
      "Portfolio of Suryansu Singh — fullstack developer building React and Next.js products, open-source packages, and UI experiments.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suryansu Singh — Fullstack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@suryansu87",
    creator: "@suryansu87",
    title: "Suryansu Singh | Fullstack Developer",
    description:
      "Portfolio of Suryansu Singh — fullstack developer building React and Next.js products, open-source packages, and UI experiments.",
    images: [
      {
        url: "/og-image.png",
        alt: "Suryansu Singh — Fullstack Developer",
      },
    ],
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
  ...(googleSiteVerification || bingSiteVerification
    ? {
        verification: {
          ...(googleSiteVerification
            ? { google: googleSiteVerification }
            : {}),
          ...(bingSiteVerification
            ? { other: { "msvalidate.01": bingSiteVerification } }
            : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
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
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <JSONLD />
      </head>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <CursorWrapper />
        <Toaster position="top-right" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
