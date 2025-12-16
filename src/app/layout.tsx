import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import FixedButtons from "@/components/ui/FixedButtons";

export const metadata: Metadata = {
  title: "Portfolio - Suryansu",
  description: "Personal portfolio showcasing projects and experience",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
