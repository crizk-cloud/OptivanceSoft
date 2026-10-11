import { Plus } from "lucide-react";

/** Accessible FAQ list built on native <details>/<summary>. */
export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
      {items.map((item) => (
        <details key={item.question} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-ink">
            {item.question}
            <Plus
              className="size-5 shrink-0 text-muted transition-transform duration-150 group-open:rotate-45"
              aria-hidden
            />
          </summary>
          <p className="-mt-1 pb-6 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
