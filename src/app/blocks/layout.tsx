import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Blocks",
  description:
    "Reusable UI blocks and interactive frontend components by Suryansu Singh.",
  alternates: {
    canonical: "https://suryansu.in/blocks",
  },
};

export default function BlocksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
