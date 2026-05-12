import { Check, NewBadge } from "./icons";
import { useBilling } from "./billing";

export type Feature = { text: string; badge?: string };
export type Plan = {
  name: string;
  subtitle: string;
  price: number | string;
  priceSuffix?: string;
  cta: string;
  units: string;
  features: Feature[];
  highlight?: boolean;
  variant?: "outline" | "primary";
};

export function PlanCard({ plan }: { plan: Plan }) {
  const { billing } = useBilling();
  const isNum = typeof plan.price === "number";
  const displayPrice = isNum
    ? billing === "yearly"
      ? Math.round((plan.price as number) * 0.8)
      : (plan.price as number)
    : plan.price;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-[#111] p-6 ${
        plan.highlight
          ? "border-[#4f6ef7]/40 shadow-[0_0_0_1px_#4f6ef7,0_20px_60px_-20px_rgba(79,110,247,0.4)]"
          : "border-[#1f1f1f]"
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-3 left-6">
          <span className="rounded-full bg-[#4f6ef7] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            ★ Most popular
          </span>
        </div>
      )}

      <div className="mb-1 text-base font-semibold text-white">{plan.name}</div>
      <p className="mb-6 text-xs leading-relaxed text-[#888]">{plan.subtitle}</p>

      <div className="mb-6 flex items-baseline gap-1">
        {isNum && <span className="text-sm text-[#666]">$</span>}
        <span className="text-5xl font-bold tracking-tight text-white">
          {isNum ? displayPrice : displayPrice}
        </span>
        {isNum && <span className="text-xs text-[#666]">/mo</span>}
      </div>

      <button
        className={`w-full rounded-lg py-2.5 text-sm font-medium transition ${
          plan.variant === "primary"
            ? "bg-[#4f6ef7] text-white hover:bg-[#3f5ce0]"
            : "border border-[#2a2a2a] text-white hover:border-white/60"
        }`}
      >
        {plan.cta} <span className="ml-1">→</span>
      </button>

      <div className="mt-3 text-center text-xs text-[#666]">{plan.units}</div>

      <div className="my-5 h-px bg-[#1f1f1f]" />

      <ul className="space-y-3">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#cfcfcf]">
            <Check className="mt-0.5 text-[#22c55e]" />
            <span>
              {f.text}
              {f.badge && <NewBadge>{f.badge}</NewBadge>}
            </span>
          </li>
        ))}
      </ul>

      <a className="mt-5 cursor-pointer text-xs text-[#777] hover:text-white">See all features →</a>
    </div>
  );
}
