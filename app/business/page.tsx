import type { Metadata } from "next";
import BusinessProfileTemplate from "@/components/layouts/BusinessProfileTemplate";

export const metadata: Metadata = {
  title: "Glow Beauty Studio — Book on AppointFlow",
  description:
    "View services, working hours, and the team at Glow Beauty Studio, and book your next appointment in seconds.",
};

export default function BusinessPage() {
  return <BusinessProfileTemplate />;
}
