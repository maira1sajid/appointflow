"use client";

import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import InlineEditableText from "@/components/ui/InlineEditableText";
import { CameraIcon, PinIcon, PlusIcon } from "@/components/ui/icons";

export default function BusinessHero() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCoverImage(URL.createObjectURL(file));
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pt-10 lg:px-8">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {coverImage ? (
        <div className="group relative h-48 overflow-hidden rounded-3xl sm:h-64">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={coverImage} alt="Cover" className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-ink-900 opacity-0 shadow-lg backdrop-blur transition-opacity group-hover:opacity-100"
          >
            <CameraIcon className="h-3.5 w-3.5" />
            Change Photo
          </button>
        </div>
      ) : (
        <div className="flex h-48 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-brand-200 bg-brand-50/40 text-center sm:h-64">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
            <CameraIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-bold text-ink-900">Add a cover photo</p>
            <p className="text-sm text-ink-500">Recommended size 1600 × 400px</p>
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-500/50"
          >
            <PlusIcon className="h-4 w-4" />
            Upload Image
          </button>
        </div>
      )}

      <div className="mt-6">
        <InlineEditableText
          value={name}
          placeholder="Your Business Name"
          onSave={setName}
          textClassName="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl"
        />
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-500">
          <InlineEditableText value={category} placeholder="Add category" onSave={setCategory} />
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <PinIcon className="h-3.5 w-3.5 shrink-0 text-ink-400" />
            <InlineEditableText value={address} placeholder="Add address" onSave={setAddress} />
          </span>
        </div>
      </div>
    </section>
  );
}
