const days = ["M", "T", "W", "T", "F", "S", "S"];
const slots = [
  { time: "9:00 AM", label: "Hair Styling", active: false },
  { time: "11:30 AM", label: "Consultation", active: true },
  { time: "2:00 PM", label: "Follow-up", active: false },
];

export default function BookingCardMock() {
  return (
    <div className="relative overflow-hidden rounded-4xl bg-white p-6 shadow-2xl shadow-black/50 ring-1 ring-white/15 sm:p-7">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-100" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent-400/20" />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            October 2026
          </p>
          <p className="text-lg font-extrabold text-ink-900">Book a visit</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white font-bold shadow-sm">
          15
        </span>
      </div>

      <div className="relative mt-6 grid grid-cols-7 gap-1.5 text-center">
        {days.map((d, i) => (
          <span key={i} className="text-[11px] font-semibold text-ink-500">
            {d}
          </span>
        ))}
        {Array.from({ length: 14 }).map((_, i) => {
          const isToday = i === 10;
          const isSelected = i === 12;
          return (
            <span
              key={i}
              className={`flex h-8 items-center justify-center rounded-lg text-xs font-semibold ${
                isSelected
                  ? "bg-brand-600 text-white shadow-md shadow-brand-500/40"
                  : isToday
                  ? "bg-accent-100 text-accent-600"
                  : "text-ink-500"
              }`}
            >
              {i + 1}
            </span>
          );
        })}
      </div>

      <div className="relative mt-6 flex flex-col gap-2.5">
        {slots.map((slot) => (
          <div
            key={slot.time}
            className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm ${
              slot.active
                ? "border-brand-200 bg-brand-50"
                : "border-black/5 bg-white"
            }`}
          >
            <span className="font-semibold text-ink-900">{slot.time}</span>
            <span className="text-ink-500">{slot.label}</span>
            {slot.active && (
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            )}
          </div>
        ))}
      </div>

      <button className="relative mt-6 w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
        Confirm 11:30 AM
      </button>
    </div>
  );
}
