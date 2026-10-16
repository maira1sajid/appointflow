"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import InlineEditableText from "@/components/ui/InlineEditableText";
import ServiceRow from "@/components/ui/ServiceRow";
import Input from "@/components/ui/Input";
import EmptyState from "@/components/ui/EmptyState";
import { ClipboardIcon, PlusIcon } from "@/components/ui/icons";

type Service = { id: string; name: string; duration: string; price: string };

const emptyDraft = { name: "", duration: "", price: "" };

export default function BusinessServices() {
  const [about, setAbout] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState(emptyDraft);

  const handleAddService = (e: FormEvent) => {
    e.preventDefault();
    if (!draft.name.trim() || !draft.duration.trim() || !draft.price.trim()) return;
    setServices((prev) => [...prev, { id: crypto.randomUUID(), ...draft }]);
    setDraft(emptyDraft);
    setIsAdding(false);
  };

  const handleRemove = (id: string) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-extrabold tracking-tight text-ink-900">About</h2>
      <div className="mt-3">
        <InlineEditableText
          value={about}
          placeholder="Tell customers about your business — what makes it special, your story, and what to expect."
          onSave={setAbout}
          multiline
          textClassName="text-sm leading-relaxed text-ink-500"
        />
      </div>

      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-ink-900">Services</h2>
      <div className="mt-4">
        {services.length > 0 && (
          <div className="divide-y divide-black/5 rounded-2xl border border-black/5 bg-white px-5 shadow-sm">
            {services.map((service) => (
              <ServiceRow key={service.id} {...service} onRemove={() => handleRemove(service.id)} />
            ))}
          </div>
        )}

        {isAdding ? (
          <form
            onSubmit={handleAddService}
            className="mt-4 flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50/40 p-4"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Input
                id="svc-name"
                label="Service name"
                placeholder="Hair Styling"
                value={draft.name}
                onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
              />
              <Input
                id="svc-duration"
                label="Duration"
                placeholder="45 min"
                value={draft.duration}
                onChange={(e) => setDraft((d) => ({ ...d, duration: e.target.value }))}
              />
              <Input
                id="svc-price"
                label="Price"
                placeholder="$45"
                value={draft.price}
                onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2 text-sm font-bold text-white"
              >
                Save Service
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
        ) : services.length > 0 ? (
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            <PlusIcon className="h-4 w-4" />
            Add another service
          </button>
        ) : (
          <EmptyState
            icon={<ClipboardIcon className="h-5 w-5" />}
            title="No services added yet"
            description="List what you offer so customers can start booking."
            actionLabel="Add a Service"
            onAction={() => setIsAdding(true)}
          />
        )}
      </div>
    </div>
  );
}
