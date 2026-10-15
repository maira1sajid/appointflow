"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import PasswordStrength from "@/components/ui/PasswordStrength";
import Checkbox from "@/components/ui/Checkbox";
import SubmitButton from "@/components/ui/SubmitButton";
import { AlertIcon, MailIcon, PhoneIcon, UserIcon } from "@/components/ui/icons";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePakistaniPhone,
  validatePassword,
} from "@/lib/validation";
import { getApiErrorMessage } from "@/lib/api/auth";
import { useAuth } from "@/components/providers/AuthProvider";

type FieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "password"
  | "confirmPassword";

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const initialValues: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

function validateField(name: FieldName, values: Values): string | undefined {
  switch (name) {
    case "firstName":
      return validateName(values.firstName, "First name");
    case "lastName":
      return validateName(values.lastName, "Last name");
    case "email":
      return validateEmail(values.email);
    case "phone":
      return validatePakistaniPhone(values.phone);
    case "password":
      return validatePassword(values.password);
    case "confirmPassword":
      return validateConfirmPassword(values.confirmPassword, values.password);
  }
}

export default function RegisterForm() {
  const { register } = useAuth();
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState<string | undefined>();
  const [formError, setFormError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: FieldName, value: string) => {
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, nextValues) }));
    }
    if (name === "password" && errors.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: validateConfirmPassword(nextValues.confirmPassword, nextValues.password),
      }));
    }
  };

  const handleBlur = (name: FieldName) => {
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values) }));
  };

  const handleTermsChange = (checked: boolean) => {
    setTermsAccepted(checked);
    if (termsError) {
      setTermsError(checked ? undefined : termsError);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.keys(values) as FieldName[];
    const nextErrors: Errors = {};
    fields.forEach((name) => {
      const error = validateField(name, values);
      if (error) nextErrors[name] = error;
    });
    setErrors(nextErrors);

    if (!termsAccepted) {
      setTermsError("You must agree to the Terms & Conditions and Privacy Policy");
    } else {
      setTermsError(undefined);
    }

    if (Object.keys(nextErrors).length > 0 || !termsAccepted) return;

    setIsSubmitting(true);
    setFormError(undefined);
    try {
      await register({
        email: values.email,
        password: values.password,
        first_name: values.firstName,
        last_name: values.lastName,
        phone: values.phone.replace(/\D/g, ""),
      });
    } catch (error) {
      setFormError(getApiErrorMessage(error, "Could not create your account. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
        Create your account
      </h1>
      <p className="mt-1.5 text-sm text-ink-500">
        Sign up to start booking appointments in seconds.
      </p>

      <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
        {formError && (
          <p className="flex items-center gap-2 rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-600">
            <AlertIcon className="h-4 w-4 shrink-0" />
            {formError}
          </p>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Input
            id="firstName"
            name="firstName"
            type="text"
            label="First name"
            placeholder="Jordan"
            icon={<UserIcon className="h-4 w-4" />}
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            onBlur={() => handleBlur("firstName")}
            error={errors.firstName}
            required
          />
          <Input
            id="lastName"
            name="lastName"
            type="text"
            label="Last name"
            placeholder="Lee"
            icon={<UserIcon className="h-4 w-4" />}
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            onBlur={() => handleBlur("lastName")}
            error={errors.lastName}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Phone number"
            placeholder="03001234567"
            icon={<PhoneIcon className="h-4 w-4" />}
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            error={errors.phone}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <PasswordInput
            id="password"
            name="password"
            placeholder="Create a password"
            autoComplete="new-password"
            value={values.password}
            onChange={(e) => handleChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            error={errors.password}
            required
          />
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm password"
            placeholder="Re-enter password"
            autoComplete="new-password"
            value={values.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            onBlur={() => handleBlur("confirmPassword")}
            error={errors.confirmPassword}
            required
          />
        </div>

        <PasswordStrength value={values.password} />

        <Checkbox
          id="terms"
          name="terms"
          checked={termsAccepted}
          onChange={(e) => handleTermsChange(e.target.checked)}
          required
          error={termsError}
          label={
            <span className="text-xs sm:text-sm">
              I agree to the{" "}
              <Link
                href="/terms"
                className="whitespace-nowrap font-semibold text-brand-600 hover:text-brand-700"
              >
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="whitespace-nowrap font-semibold text-brand-600 hover:text-brand-700"
              >
                Privacy Policy
              </Link>
            </span>
          }
        />

        <SubmitButton loading={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create Account"}
        </SubmitButton>
      </form>

      <p className="mt-4 text-center text-sm text-ink-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand-600 hover:text-brand-700">
          Log in
        </Link>
      </p>
    </div>
  );
}
