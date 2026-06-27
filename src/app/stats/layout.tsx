import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stats",
  description:
    "Personal development, typing, academic, setup, and gaming stats for Suryansu Singh.",
  alternates: {
    canonical: "https://suryansu.in/stats",
  },
};

export default function StatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
