"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Input from "@/components/ui/Input";
import Avatar from "@/components/ui/Avatar";
import EmptyState from "@/components/ui/EmptyState";
import { CloseIcon, PlusIcon, UserIcon, UsersIcon } from "@/components/ui/icons";

type Member = { id: string; name: string; role: string };

const emptyDraft = { name: "", role: "" };

const gradients = [
  "from-accent-400 to-accent-600",
  "from-emerald-400 to-brand-500",
  "from-fuchsia-400 to-brand-600",
  "from-sky-400 to-brand-600",
];

function initialsFor(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export default function BusinessTeam() {
  const [team, setTeam] = useState<Member[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState(emptyDraft);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (!draft.name.trim() || !draft.role.trim()) return;
    setTeam((prev) => [...prev, { id: crypto.randomUUID(), ...draft }]);
    setDraft(emptyDraft);
    setIsAdding(false);
  };

  const handleRemove = (id: string) => {
    setTeam((prev) => prev.filter((member) => member.id !== id));
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 lg:px-8">
      <h2 className="text-xl font-extrabold tracking-tight text-ink-900">Our team</h2>

      {team.length > 0 && (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={member.id}
              className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <Avatar
                initials={initialsFor(member.name)}
                gradient={gradients[i % gradients.length]}
                size={48}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold text-ink-900">{member.name}</p>
                <p className="truncate text-sm text-ink-500">{member.role}</p>
              </div>
              <button
                type="button"
                onClick={() => handleRemove(member.id)}
                aria-label={`Remove ${member.name}`}
                className="shrink-0 text-ink-400 transition-colors hover:text-red-500"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5">
        {isAdding ? (
          <form
            onSubmit={handleAdd}
            className="flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50/40 p-4 sm:flex-row sm:items-end"
          >
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
              <Input
                id="team-name"
                label="Name"
                placeholder="Amara Chen"
                icon={<UserIcon className="h-4 w-4" />}
                value={draft.name}
                onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
              />
              <Input
                id="team-role"
                label="Role"
                placeholder="Senior Stylist"
                value={draft.role}
                onChange={(e) => setDraft((d) => ({ ...d, role: e.target.value }))}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-bold text-white"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink-500 hover:bg-black/5"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : team.length > 0 ? (
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            <PlusIcon className="h-4 w-4" />
            Add another team member
          </button>
        ) : (
          <EmptyState
            icon={<UsersIcon className="h-5 w-5" />}
            title="No team members yet"
            description="Add your staff so customers know who they're booking with."
            actionLabel="Add Team Member"
            onAction={() => setIsAdding(true)}
          />
        )}
      </div>
    </section>
  );
}
