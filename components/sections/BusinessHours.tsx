"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Input from "@/components/ui/Input";
import EmptyState from "@/components/ui/EmptyState";
import { ClockIcon, CloseIcon, PlusIcon } from "@/components/ui/icons";

type HourEntry = { id: string; day: string; time: string };

const emptyDraft = { day: "", time: "" };

export default function BusinessHours() {
  const [hours, setHours] = useState<HourEntry[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState(emptyDraft);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (!draft.day.trim() || !draft.time.trim()) return;
    setHours((prev) => [...prev, { id: crypto.randomUUID(), ...draft }]);
    setDraft(emptyDraft);
    setIsAdding(false);
  };

  const handleRemove = (id: string) => {
    setHours((prev) => prev.filter((row) => row.id !== id));
  };

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-extrabold tracking-tight text-ink-900">Working hours</h2>

      {hours.length > 0 && (
        <div className="mt-4 divide-y divide-black/5">
          {hours.map((row) => (
            <div key={row.id} className="flex items-center justify-between gap-2 py-3 text-sm">
              <span className="text-ink-500">{row.day}</span>
              <span className="flex items-center gap-2 font-semibold text-ink-900">
                {row.time}
                <button
                  type="button"
                  onClick={() => handleRemove(row.id)}
                  aria-label={`Remove ${row.day} hours`}
                  className="text-ink-400 transition-colors hover:text-red-500"
                >
                  <CloseIcon className="h-3.5 w-3.5" />
                </button>
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        {isAdding ? (
          <form
            onSubmit={handleAdd}
            className="flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50/40 p-4"
          >
            <Input
              id="hours-day"
              label="Day"
              placeholder="Mon – Fri"
              value={draft.day}
              onChange={(e) => setDraft((d) => ({ ...d, day: e.target.value }))}
            />
            <Input
              id="hours-time"
              label="Hours"
              placeholder="9:00 AM – 7:00 PM"
              value={draft.time}
              onChange={(e) => setDraft((d) => ({ ...d, time: e.target.value }))}
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2 text-sm font-bold text-white"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="rounded-full px-5 py-2 text-sm font-semibold text-ink-500 hover:bg-black/5"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : hours.length > 0 ? (
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            <PlusIcon className="h-4 w-4" />
            Add another
          </button>
        ) : (
          <EmptyState
            icon={<ClockIcon className="h-5 w-5" />}
            title="No hours set"
            description="Let customers know when you're open."
            actionLabel="Add Hours"
            onAction={() => setIsAdding(true)}
            compact
          />
        )}
      </div>
    </div>
  );
}
