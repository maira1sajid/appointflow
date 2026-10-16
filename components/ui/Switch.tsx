type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

export default function Switch({ checked, onChange, label }: SwitchProps) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-block h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-brand-600" : "bg-black/15"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      {label && (
        <span className="ml-3 select-none text-sm font-semibold text-ink-900">{label}</span>
      )}
    </div>
  );
}
