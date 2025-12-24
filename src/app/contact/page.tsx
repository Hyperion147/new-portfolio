import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Suryansu for collaborations, project inquiries, or just to say hello.",
  openGraph: {
    title: "Contact | Suryansu",
    description:
      "Get in touch with Suryansu for collaborations, project inquiries, or just to say hello.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
