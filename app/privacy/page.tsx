import type { Metadata } from "next";
import LegalPageTemplate from "@/components/layouts/LegalPageTemplate";
import LegalContent from "@/components/sections/LegalContent";
import { PRIVACY_SECTIONS } from "@/lib/privacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — AppointFlow",
  description: "How AppointFlow collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageTemplate title="Privacy Policy">
      <LegalContent sections={PRIVACY_SECTIONS} />
    </LegalPageTemplate>
  );
}
