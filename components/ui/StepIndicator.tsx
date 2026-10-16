import { Fragment } from "react";
import { CheckIcon } from "@/components/ui/icons";

type StepIndicatorProps = {
  steps: string[];
  currentStep: number;
};

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-start">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <Fragment key={label}>
            <div className="flex flex-col items-center gap-2">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors ${
                  isCompleted
                    ? "border-brand-600 bg-brand-600 text-white"
                    : isActive
                    ? "border-brand-600 bg-white text-brand-600"
                    : "border-black/10 bg-white text-ink-400"
                }`}
              >
                {isCompleted ? <CheckIcon className="h-4 w-4" /> : stepNumber}
              </span>
              <span
                className={`text-xs font-semibold ${
                  isActive ? "text-brand-600" : isCompleted ? "text-ink-900" : "text-ink-400"
                }`}
              >
                {label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <span
                className={`mx-2 mt-[18px] h-0.5 flex-1 transition-colors ${
                  stepNumber < currentStep ? "bg-brand-600" : "bg-black/10"
                }`}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
