const bars = [38, 62, 48, 80, 56, 92, 70];
const rows = [
  { name: "Amara C.", service: "Hair Styling", time: "10:00 AM", status: "Confirmed" },
  { name: "Daniel R.", service: "Physio Session", time: "11:30 AM", status: "Confirmed" },
  { name: "Priya N.", service: "Consultation", time: "1:15 PM", status: "Pending" },
];

export default function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-4xl bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-7">
      <div className="absolute -top-14 -left-14 h-36 w-36 rounded-full bg-accent-100" />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            This Week
          </p>
          <p className="text-lg font-extrabold text-ink-900">
            Booking Overview
          </p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
          +34%
        </span>
      </div>

      <div className="relative mt-6 flex h-28 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className={`flex-1 rounded-t-lg ${
              i === 5
                ? "bg-gradient-to-t from-brand-600 to-accent-500"
                : "bg-brand-100"
            }`}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-semibold text-ink-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>

      <div className="relative mt-6 flex flex-col gap-2">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-xl border border-black/5 px-4 py-3 text-sm"
          >
            <div>
              <p className="font-semibold text-ink-900">{row.name}</p>
              <p className="text-xs text-ink-500">{row.service}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-ink-500">
                {row.time}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                  row.status === "Confirmed"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
