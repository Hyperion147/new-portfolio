import { Metadata } from "next";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View and download the professional resume of Suryansu, detailing experience, education, and skills.",
  openGraph: {
    title: "Resume | Suryansu",
    description:
      "View and download the professional resume of Suryansu, detailing experience, education, and skills.",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
