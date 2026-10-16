import type { Metadata } from "next";
import FaqsTemplate from "@/components/layouts/FaqsTemplate";

export const metadata: Metadata = {
  title: "FAQs — AppointFlow",
  description:
    "Frequently asked questions about booking appointments, managing your bookings, and listing your business on AppointFlow.",
};

export default function FaqsPage() {
  return <FaqsTemplate />;
}
