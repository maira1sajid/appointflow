import { getPasswordChecks } from "@/lib/validation";

type PasswordStrengthProps = {
  value: string;
};

export default function PasswordStrength({ value }: PasswordStrengthProps) {
  const checks = getPasswordChecks(value);
  const active = value.length > 0;
  const [length, upper, lower, number, symbol] = checks;

  const colorFor = (met: boolean) =>
    met ? "text-emerald-600 font-semibold" : "text-red-500 font-semibold";

  return (
    <p
      aria-hidden={!active}
      className={`-mt-1 text-xs leading-relaxed text-ink-500 transition-opacity duration-200 ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      Use <span className={colorFor(length.met)}>8+ characters</span> with{" "}
      <span className={colorFor(upper.met)}>uppercase</span>,{" "}
      <span className={colorFor(lower.met)}>lowercase</span>,{" "}
      <span className={colorFor(number.met)}>a number</span>, and{" "}
      <span className={colorFor(symbol.met)}>a symbol</span>.
    </p>
  );
}
