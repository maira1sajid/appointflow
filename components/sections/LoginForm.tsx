"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import Checkbox from "@/components/ui/Checkbox";
import SubmitButton from "@/components/ui/SubmitButton";
import { AlertIcon, MailIcon } from "@/components/ui/icons";
import { validateEmail, validateRequired } from "@/lib/validation";
import { getApiErrorMessage } from "@/lib/api/auth";
import { useAuth } from "@/components/providers/AuthProvider";

type Values = { email: string; password: string };
type Errors = Partial<Values>;

export default function LoginForm() {
  const { login } = useAuth();
  const [values, setValues] = useState<Values>({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (name: keyof Values, nextValues: Values): string | undefined => {
    if (name === "email") return validateEmail(nextValues.email);
    return validateRequired(nextValues.password, "Password");
  };

  const handleChange = (name: keyof Values, value: string) => {
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, nextValues) }));
    }
    if (formError) setFormError(undefined);
  };

  const handleBlur = (name: keyof Values) => {
    setErrors((prev) => ({ ...prev, [name]: validate(name, values) }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Errors = {
      email: validateEmail(values.email),
      password: validateRequired(values.password, "Password"),
    };
    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.password) return;

    setIsSubmitting(true);
    setFormError(undefined);
    try {
      await login(values);
    } catch (error) {
      setFormError(getApiErrorMessage(error, "Invalid email or password. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
        Welcome back
      </h1>
      <p className="mt-2 text-sm text-ink-500">
        Log in to book, manage, and track your appointments.
      </p>

      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        {formError && (
          <p className="flex items-center gap-2 rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-600">
            <AlertIcon className="h-4 w-4 shrink-0" />
            {formError}
          </p>
        )}

        <Input
          id="email"
          name="email"
          type="email"
          label="Email address"
          placeholder="you@email.com"
          icon={<MailIcon className="h-4 w-4" />}
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          error={errors.email}
          required
        />
        <PasswordInput
          id="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          value={values.password}
          onChange={(e) => handleChange("password", e.target.value)}
          onBlur={() => handleBlur("password")}
          error={errors.password}
          required
        />

        <div className="flex items-center justify-between">
          <Checkbox id="remember" name="remember" label="Remember me" />
          <Link
            href="/forgot-password"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Forgot password?
          </Link>
        </div>

        <SubmitButton loading={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log In"}
        </SubmitButton>
      </form>

      <p className="mt-8 text-center text-sm text-ink-500">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-brand-600 hover:text-brand-700">
          Sign up for free
        </Link>
      </p>
    </div>
  );
}
