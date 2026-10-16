import type { Metadata } from "next";
import BusinessRegisterTemplate from "@/components/layouts/BusinessRegisterTemplate";

export const metadata: Metadata = {
  title: "Register Your Business — AppointFlow",
  description: "Create your business profile on AppointFlow and start accepting bookings.",
};

export default function BusinessRegisterPage() {
  return <BusinessRegisterTemplate />;
}
