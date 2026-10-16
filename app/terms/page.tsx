import type { Metadata } from "next";
import LegalPageTemplate from "@/components/layouts/LegalPageTemplate";
import LegalContent from "@/components/sections/LegalContent";
import { TERMS_SECTIONS } from "@/lib/termsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions — AppointFlow",
  description: "The terms and conditions that govern your use of AppointFlow.",
};

export default function TermsPage() {
  return (
    <LegalPageTemplate title="Terms & Conditions">
      <LegalContent sections={TERMS_SECTIONS} />
    </LegalPageTemplate>
  );
}
