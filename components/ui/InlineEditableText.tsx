"use client";

import { useState } from "react";
import { EditIcon } from "@/components/ui/icons";

type InlineEditableTextProps = {
  value: string;
  placeholder: string;
  onSave: (value: string) => void;
  multiline?: boolean;
  textClassName?: string;
};

export default function InlineEditableText({
  value,
  placeholder,
  onSave,
  multiline,
  textClassName = "",
}: InlineEditableTextProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const startEditing = () => {
    setDraft(value);
    setEditing(true);
  };

  const commit = () => {
    onSave(draft.trim());
    setEditing(false);
  };

  const cancel = () => {
    setDraft(value);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="flex items-start gap-2">
        {multiline ? (
          <textarea
            autoFocus
            rows={3}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && cancel()}
            className={`flex-1 rounded-xl border border-brand-200 bg-white px-3 py-2 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 ${textClassName}`}
          />
        ) : (
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit();
              if (e.key === "Escape") cancel();
            }}
            className={`flex-1 rounded-xl border border-brand-200 bg-white px-3 py-2 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 ${textClassName}`}
          />
        )}
        <button
          type="button"
          onClick={commit}
          className="shrink-0 rounded-full bg-brand-600 px-3 py-2 text-xs font-bold text-white hover:bg-brand-700"
        >
          Save
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={startEditing}
      className={`group inline-flex items-start gap-2 text-left ${
        value ? "" : "text-ink-400"
      } ${textClassName}`}
    >
      <span>{value || placeholder}</span>
      <EditIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-400 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
