import type { LegalSection } from "@/lib/legalTypes";

export default function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-lg font-extrabold tracking-tight text-ink-900">
            {section.heading}
          </h2>
          <div className="mt-3 flex flex-col gap-3">
            {section.blocks.map((block, i) =>
              block.type === "p" ? (
                <p key={i} className="text-sm leading-relaxed text-ink-500">
                  {block.text}
                </p>
              ) : (
                <ul key={i} className="flex flex-col gap-2 pl-1">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-500"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
