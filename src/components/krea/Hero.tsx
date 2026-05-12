import { useBilling } from "./billing";
import heroImg from "@/assets/hero-warrior.jpg";

export function Hero() {
  const { billing, setBilling } = useBilling();
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroImg}
          alt=""
          className="absolute right-0 top-0 h-full w-2/3 object-cover object-right opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/85 to-transparent" />
      </div>

      <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-2">
        <div className="max-w-md">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Why choose Krea
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#888]">
            Krea is the world's best creative AI studio. With industry-leading generation
            access, over 150 models including Flux, Runway, Kling, Veo, Magnific, Seedream,
            and a community of over 10 million users, it's the best platform to create with AI.
          </p>
        </div>

        <div className="flex items-start justify-end gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[#222] bg-[#0a0a0a]/60 p-1 backdrop-blur">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                billing === "monthly" ? "bg-white text-black" : "text-[#888]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                billing === "yearly" ? "bg-white text-black" : "text-[#888]"
              }`}
            >
              Yearly
            </button>
          </div>
          <span className="rounded-full bg-[#4f6ef7] px-3 py-1.5 text-xs font-medium text-white">
            Save 20% on yearly plans
          </span>
        </div>
      </div>
    </section>
  );
}
