import { CalendarDays, Megaphone, Sprout } from "lucide-react";

/**
 * Decorative laptop / tablet / phone composition with illustrative dashboards.
 * Built with CSS so it scales without image assets. Labels are generic and no
 * values are shown, so nothing reads as a real metric.
 */
export function HeroDevices() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[640px] select-none pb-[14%]">
      <div className="absolute inset-x-[6%] top-[8%] bottom-0 -z-10 rounded-[40%] bg-brand-500/10 blur-3xl" />

      {/* Laptop */}
      <div className="relative ml-[9%] w-[89%]">
        <div className="rounded-t-[14px] border border-navy-800 bg-navy-950 p-[2.2%] shadow-raised">
          <div className="aspect-[16/10] overflow-hidden rounded-[6px] bg-surface">
            <LaptopDashboard />
          </div>
        </div>
        <div className="relative -mx-[6%] h-3 rounded-b-xl bg-gradient-to-b from-line-strong to-[#b6c3d4] sm:h-4">
          <div className="absolute top-0 left-1/2 h-1 w-1/6 -translate-x-1/2 rounded-b-md bg-[#aab8ca]" />
        </div>
      </div>

      {/* Tablet */}
      <div className="absolute bottom-0 left-0 w-[34%] rounded-[14px] border border-navy-800 bg-navy-950 p-[2.5%] shadow-raised">
        <div className="aspect-[3/4] overflow-hidden rounded-[8px] bg-white">
          <TabletScreen />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute right-[1%] bottom-[2%] w-[19%] rounded-[16px] border border-navy-800 bg-navy-950 p-[2%] shadow-raised">
        <div className="aspect-[9/19] overflow-hidden rounded-[11px] bg-white">
          <PhoneScreen />
        </div>
      </div>
    </div>
  );
}

function Bar({ className }: { className: string }) {
  return <span className={`block rounded-full ${className}`} />;
}

function LaptopDashboard() {
  return (
    <div className="grid h-full grid-cols-[18%_1fr]">
      <div className="flex flex-col gap-[6%] bg-navy-950 p-[8%]">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-[3px] bg-brand-500 sm:size-3" />
          <Bar className="h-1.5 w-2/3 bg-white/70" />
        </div>
        <div className="mt-[10%] space-y-[14%]">
          {["w-full", "w-3/4", "w-4/5", "w-2/3", "w-3/4"].map((w, i) => (
            <Bar key={i} className={`h-1.5 ${w} ${i === 0 ? "bg-brand-300" : "bg-white/25"}`} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[4%] p-[4%]">
        <div className="flex items-center justify-between">
          <div className="w-1/3 space-y-1">
            <Bar className="h-2 w-full bg-ink/80" />
            <Bar className="h-1.5 w-2/3 bg-line-strong" />
          </div>
          <span className="h-3.5 w-[16%] rounded-[4px] bg-brand-500 sm:h-4" />
        </div>
        <div className="grid grid-cols-3 gap-[3%]">
          {[0.72, 0.48, 0.86].map((w, i) => (
            <div key={i} className="rounded-md border border-line bg-white p-[8%]">
              <Bar className="h-1.5 w-1/2 bg-line-strong" />
              <div className="mt-2 h-1.5 rounded-full bg-surface">
                <div className="h-1.5 rounded-full bg-brand-500" style={{ width: `${w * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-[1.6fr_1fr] gap-[3%]">
          <div className="flex items-end gap-[4%] rounded-md border border-line bg-white p-[4%]">
            {[38, 56, 44, 68, 52, 80, 64, 90].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-t-[2px] ${i === 7 ? "bg-brand-500" : "bg-brand-100"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="space-y-[10%] rounded-md border border-line bg-white p-[6%]">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className={`size-2 shrink-0 rounded-full ${i === 0 ? "bg-brand-500" : "bg-line-strong"}`} />
                <Bar className="h-1.5 flex-1 bg-line" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-1.5 bg-brand-600 px-[8%] py-[7%] text-white">
        <Megaphone className="size-3 shrink-0" strokeWidth={2} />
        <Bar className="h-1.5 w-1/2 bg-white/80" />
      </div>
      <div className="flex-1 space-y-[7%] p-[8%]">
        {[0.9, 0.7, 0.8, 0.6].map((w, i) => (
          <div key={i} className="flex gap-1.5 rounded-md border border-line p-[6%]">
            <span className={`size-3 shrink-0 rounded-full ${i === 0 ? "bg-brand-500" : "bg-brand-100"}`} />
            <div className="flex-1 space-y-1">
              <Bar className="h-1.5 bg-ink/70" />
              <span className="block h-1 rounded-full bg-line" style={{ width: `${w * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1 pb-[6%]">
        <CalendarDays className="size-3 text-muted" strokeWidth={2} />
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="mx-auto mt-[6%] h-1 w-1/3 rounded-full bg-navy-950/80" />
      <div className="flex items-center gap-1 px-[10%] pt-[10%]">
        <Sprout className="size-2.5 shrink-0 text-brand-500" strokeWidth={2.25} />
        <Bar className="h-1 flex-1 bg-ink/70" />
      </div>
      <div className="mx-[10%] mt-[12%] rounded-md bg-brand-50 p-[10%]">
        <Bar className="h-1 w-2/3 bg-brand-500" />
        <div className="mt-1.5 grid grid-cols-3 gap-0.5">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className={`aspect-square rounded-[2px] ${i % 3 === 1 ? "bg-brand-300" : "bg-brand-200"}`} />
          ))}
        </div>
      </div>
      <div className="space-y-[14%] px-[10%] pt-[14%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1">
            <span className={`size-1.5 shrink-0 rounded-full ${i === 0 ? "bg-brand-500" : "bg-line-strong"}`} />
            <Bar className="h-1 flex-1 bg-line" />
          </div>
        ))}
      </div>
    </div>
  );
}
