import type { Metadata } from "next";
import AboutTemplate from "@/components/layouts/AboutTemplate";

export const metadata: Metadata = {
  title: "About Us — AppointFlow",
  description:
    "AppointFlow helps clinics, salons and consultants manage their bookings in one place, and helps customers find a business and book a time in seconds.",
};

export default function AboutPage() {
  return <AboutTemplate />;
}
