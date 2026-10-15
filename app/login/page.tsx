import type { Metadata } from "next";
import AuthLayout from "@/components/layouts/AuthLayout";
import LoginForm from "@/components/sections/LoginForm";

export const metadata: Metadata = {
  title: "Log In — AppointFlow",
  description: "Log in to manage your appointments, calendar, and clients.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Your next appointment, one click away."
      subtitle="Log in to book new appointments and keep track of the ones you already have."
    >
      <LoginForm />
    </AuthLayout>
  );
}
