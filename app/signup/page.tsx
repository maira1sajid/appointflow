import type { Metadata } from "next";
import AuthLayout from "@/components/layouts/AuthLayout";
import RegisterForm from "@/components/sections/RegisterForm";

export const metadata: Metadata = {
  title: "Sign Up — AppointFlow",
  description: "Create your free AppointFlow account and start booking smarter.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Book your first appointment today."
      subtitle="Create your free account to book appointments, get reminders, and manage your visits in one place."
      maxWidth="max-w-lg"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
