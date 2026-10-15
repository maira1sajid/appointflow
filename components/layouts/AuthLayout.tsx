import type { ReactNode } from "react";
import Logo from "@/components/ui/Logo";
import BackButton from "@/components/ui/BackButton";
import AuthBranding from "@/components/sections/AuthBranding";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  maxWidth?: string;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
  maxWidth = "max-w-sm",
}: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      <AuthBranding title={title} subtitle={subtitle} />

      <div className="flex flex-col justify-center px-6 py-6 sm:px-12 lg:px-16 lg:py-8">
        <div className={`mx-auto w-full ${maxWidth}`}>
          <div className="mb-6 flex flex-col items-start gap-5 lg:hidden">
            <BackButton className="-ml-2" />
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
