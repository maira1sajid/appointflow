"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import StepIndicator from "@/components/ui/StepIndicator";
import Input from "@/components/ui/Input";
import SearchableSelect from "@/components/ui/SearchableSelect";
import Switch from "@/components/ui/Switch";
import {
  AlertIcon,
  CameraIcon,
  MailIcon,
  PakistanFlagIcon,
  PinIcon,
  PlusIcon,
  UserIcon,
} from "@/components/ui/icons";
import {
  validateEmail,
  validateOptionalEmail,
  validatePakistaniPhone,
  validateRequired,
} from "@/lib/validation";
import { PAKISTAN_CITIES } from "@/lib/pakistanCities";
import { useToast } from "@/components/providers/ToastProvider";
import { getBusinessCategories, submitBusinessRequest } from "@/lib/api/business";
import { getApiErrorMessage } from "@/lib/api/auth";
import { toInternationalPakistaniPhone } from "@/lib/phone";
import type { BusinessCategory, WorkingHourPayload } from "@/lib/api/types";

function PakistanFlag() {
  return <PakistanFlagIcon className="h-4 w-[1.4rem] rounded-[2px]" aria-label="Pakistan flag" />;
}

const STEPS = ["Business", "Owner", "Hours"];

type DayHours = {
  day: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
};

const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DAY_TO_WEEKDAY: Record<string, number> = Object.fromEntries(
  DAY_NAMES.map((day, index) => [day, index])
);

const DEFAULT_HOURS: DayHours[] = DAY_NAMES.map((day) => ({
  day,
  isOpen: day !== "Sunday",
  openTime: "09:00",
  closeTime: "17:00",
}));

type Values = {
  businessName: string;
  category: string;
  businessPhone: string;
  businessEmail: string;
  city: string;
  address: string;
  description: string;
  logo: string | null;
  logoFile: File | null;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  hours: DayHours[];
};

const initialValues: Values = {
  businessName: "",
  category: "",
  businessPhone: "",
  businessEmail: "",
  city: "",
  address: "",
  description: "",
  logo: null,
  logoFile: null,
  ownerName: "",
  ownerEmail: "",
  ownerPhone: "",
  hours: DEFAULT_HOURS,
};

type Errors = Partial<
  Record<
    | "businessName"
    | "category"
    | "businessPhone"
    | "businessEmail"
    | "city"
    | "address"
    | "description"
    | "ownerName"
    | "ownerEmail"
    | "ownerPhone",
    string
  >
>;

export default function BusinessRegisterWizard() {
  const router = useRouter();
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const categoriesFetchedRef = useRef(false);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | undefined>();
  const [categories, setCategories] = useState<BusinessCategory[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState<string | undefined>();

  const loadCategories = async () => {
    if (categoriesFetchedRef.current || categoriesLoading) return;
    categoriesFetchedRef.current = true;
    setCategoriesLoading(true);
    setCategoriesError(undefined);
    try {
      const data = await getBusinessCategories();
      setCategories(data);
    } catch (error) {
      categoriesFetchedRef.current = false;
      setCategoriesError(getApiErrorMessage(error, "Could not load categories. Please try again."));
    } finally {
      setCategoriesLoading(false);
    }
  };

  const setField = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const updateDay = (index: number, patch: Partial<DayHours>) => {
    setValues((prev) => ({
      ...prev,
      hours: prev.hours.map((day, i) => (i === index ? { ...day, ...patch } : day)),
    }));
  };

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValues((prev) => ({ ...prev, logo: URL.createObjectURL(file), logoFile: file }));
  };

  const validateStep1 = (): Errors => ({
    businessName: validateRequired(values.businessName, "Business name"),
    category: validateRequired(values.category, "Business category"),
    businessPhone: validatePakistaniPhone(values.businessPhone),
    businessEmail: validateOptionalEmail(values.businessEmail),
    city: validateRequired(values.city, "City"),
    address: validateRequired(values.address, "Full address"),
    description: validateRequired(values.description, "Short description"),
  });

  const validateStep2 = (): Errors => ({
    ownerName: validateRequired(values.ownerName, "Owner's full name"),
    ownerEmail: validateEmail(values.ownerEmail),
    ownerPhone: validatePakistaniPhone(values.ownerPhone),
  });

  const hasErrors = (candidate: Errors) => Object.values(candidate).some(Boolean);

  const handleNext = () => {
    const stepErrors = step === 1 ? validateStep1() : validateStep2();
    setErrors(stepErrors);
    if (hasErrors(stepErrors)) return;
    setStep((s) => Math.min(s + 1, STEPS.length));
  };

  const handlePrevious = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step !== STEPS.length) return;

    const selectedCategory = categories.find((c) => c.name === values.category);
    if (!selectedCategory) {
      setFormError("Please select a business category.");
      setStep(1);
      return;
    }

    const workingHours: WorkingHourPayload[] = values.hours.map((day) =>
      day.isOpen
        ? {
            weekday: DAY_TO_WEEKDAY[day.day],
            is_closed: false,
            opening_time: day.openTime,
            closing_time: day.closeTime,
          }
        : { weekday: DAY_TO_WEEKDAY[day.day], is_closed: true }
    );

    setIsSubmitting(true);
    setFormError(undefined);
    try {
      await submitBusinessRequest(
        {
          business_name: values.businessName,
          category: selectedCategory.id,
          business_phone: toInternationalPakistaniPhone(values.businessPhone),
          business_email: values.businessEmail || undefined,
          city: values.city,
          address: values.address,
          description: values.description,
          owner_full_name: values.ownerName,
          owner_email: values.ownerEmail,
          owner_phone: toInternationalPakistaniPhone(values.ownerPhone),
          working_hours: workingHours,
        },
        values.logoFile
      );
      showToast(
        "Application submitted! Our team will review your details and reach out via email or WhatsApp.",
        "success"
      );
      router.push("/");
    } catch (error) {
      setFormError(getApiErrorMessage(error, "Could not submit your application. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
        Register Your Business
      </h1>
      <p className="mt-2 text-center text-sm text-ink-500">
        Fill in your business details below. Our team will review your
        application before your profile goes live.
      </p>

      <div className="mt-8">
        <StepIndicator steps={STEPS} currentStep={step} />
      </div>

      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        {formError && (
          <p className="flex items-center gap-2 rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-600">
            <AlertIcon className="h-4 w-4 shrink-0" />
            {formError}
          </p>
        )}

        {step === 1 && (
          <>
            <div className="flex items-center gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoChange}
              />
              {values.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={values.logo}
                  alt="Business logo"
                  className="h-16 w-16 rounded-2xl object-cover"
                />
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-dashed border-brand-200 bg-brand-50/40 text-brand-400">
                  <CameraIcon className="h-6 w-6" />
                </span>
              )}
              <div>
                <p className="text-sm font-semibold text-ink-900">Business logo</p>
                <p className="text-xs text-ink-500">Optional, but helps customers recognize you</p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
                >
                  <PlusIcon className="h-3.5 w-3.5" />
                  {values.logo ? "Change photo" : "Upload photo"}
                </button>
              </div>
            </div>

            <Input
              id="businessName"
              label="Business name"
              placeholder="Glow Beauty Studio"
              value={values.businessName}
              onChange={(e) => setField("businessName", e.target.value)}
              error={errors.businessName}
              required
            />

            <SearchableSelect
              id="category"
              label="Business category"
              placeholder="Select a category"
              searchPlaceholder="Search categories..."
              options={categories.map((category) => category.name)}
              value={values.category}
              onChange={(name) => setField("category", name)}
              onOpen={loadCategories}
              loading={categoriesLoading}
              allowCustomValue={false}
              error={errors.category || categoriesError}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Input
                id="businessPhone"
                type="tel"
                label="Business phone number"
                placeholder="03001234567"
                icon={<PakistanFlag />}
                value={values.businessPhone}
                onChange={(e) => setField("businessPhone", e.target.value)}
                error={errors.businessPhone}
                required
              />
              <Input
                id="businessEmail"
                type="email"
                label="Business email (optional)"
                placeholder="hello@yourbusiness.com"
                icon={<MailIcon className="h-4 w-4" />}
                value={values.businessEmail}
                onChange={(e) => setField("businessEmail", e.target.value)}
                error={errors.businessEmail}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <SearchableSelect
                id="city"
                label="City"
                placeholder="Select your city"
                searchPlaceholder="Search city..."
                options={PAKISTAN_CITIES}
                value={values.city}
                onChange={(city) => setField("city", city)}
                error={errors.city}
              />
              <Input
                id="address"
                label="Full address"
                placeholder="Shop 4, Main Boulevard"
                icon={<PinIcon className="h-4 w-4" />}
                value={values.address}
                onChange={(e) => setField("address", e.target.value)}
                error={errors.address}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="description" className="text-sm font-semibold text-ink-900">
                Short description
              </label>
              <textarea
                id="description"
                rows={3}
                placeholder="Tell customers what makes your business special."
                value={values.description}
                onChange={(e) => setField("description", e.target.value)}
                className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:outline-none focus:ring-4 ${
                  errors.description
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-black/10 focus:border-brand-500 focus:ring-brand-100"
                }`}
              />
              {errors.description && (
                <p className="text-xs font-medium text-red-600">{errors.description}</p>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <Input
              id="ownerName"
              label="Owner's full name"
              placeholder="Jordan Lee"
              icon={<UserIcon className="h-4 w-4" />}
              value={values.ownerName}
              onChange={(e) => setField("ownerName", e.target.value)}
              error={errors.ownerName}
              required
            />
            <Input
              id="ownerEmail"
              type="email"
              label="Owner's email"
              placeholder="you@email.com"
              icon={<MailIcon className="h-4 w-4" />}
              value={values.ownerEmail}
              onChange={(e) => setField("ownerEmail", e.target.value)}
              error={errors.ownerEmail}
              required
            />
            <Input
              id="ownerPhone"
              type="tel"
              label="Owner's phone number"
              placeholder="03001234567"
              icon={<PakistanFlag />}
              value={values.ownerPhone}
              onChange={(e) => setField("ownerPhone", e.target.value)}
              error={errors.ownerPhone}
              required
            />
          </>
        )}

        {step === 3 && (
          <div className="rounded-2xl border border-black/5">
            {values.hours.map((day, index) => (
              <div
                key={day.day}
                className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 px-4 py-3.5 last:border-0"
              >
                <Switch
                  checked={day.isOpen}
                  onChange={(checked) => updateDay(index, { isOpen: checked })}
                  label={day.day}
                />
                {day.isOpen ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="time"
                      value={day.openTime}
                      onChange={(e) => updateDay(index, { openTime: e.target.value })}
                      className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                    />
                    <span className="text-sm text-ink-500">to</span>
                    <input
                      type="time"
                      value={day.closeTime}
                      onChange={(e) => updateDay(index, { closeTime: e.target.value })}
                      className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                    />
                  </div>
                ) : (
                  <span className="text-sm font-semibold text-ink-400">Closed</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-2 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrevious}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink-500 transition-colors hover:bg-black/5"
            >
              Previous
            </button>
          ) : (
            <span />
          )}

          {step < STEPS.length ? (
            <button
              key="next"
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-500/50"
            >
              Next
            </button>
          ) : (
            <button
              key="submit"
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-500/50 disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isSubmitting && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              )}
              {isSubmitting ? "Submitting..." : "Register Business"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
