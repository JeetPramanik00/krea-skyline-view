function ChipIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-28 w-full">
      <defs>
        <linearGradient id="cg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#1a1a1a" />
          <stop offset="1" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      {/* pins */}
      {[...Array(8)].map((_, i) => (
        <rect key={`t${i}`} x={40 + i * 16} y="20" width="6" height="10" fill="#222" />
      ))}
      {[...Array(8)].map((_, i) => (
        <rect key={`b${i}`} x={40 + i * 16} y="110" width="6" height="10" fill="#222" />
      ))}
      {[...Array(6)].map((_, i) => (
        <rect key={`l${i}`} x="20" y={42 + i * 11} width="10" height="6" fill="#222" />
      ))}
      {[...Array(6)].map((_, i) => (
        <rect key={`r${i}`} x="170" y={42 + i * 11} width="10" height="6" fill="#222" />
      ))}
      {/* die */}
      <rect x="35" y="35" width="130" height="70" rx="6" fill="url(#cg)" stroke="#2a2a2a" />
      <rect x="55" y="55" width="90" height="30" rx="3" fill="#0a0a0a" stroke="#1f1f1f" />
      <text x="100" y="74" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">
        KREA
      </text>
      {/* LEDs */}
      <circle cx="44" cy="44" r="2" fill="#22c55e" />
      <circle cx="156" cy="44" r="2" fill="#22c55e" />
      <circle cx="44" cy="96" r="2" fill="#4f6ef7" />
      <circle cx="156" cy="96" r="2" fill="#4f6ef7" />
      {/* traces */}
      <path d="M55 90 L70 90 L70 100" stroke="#22c55e" strokeOpacity="0.4" fill="none" />
      <path d="M145 90 L130 90 L130 100" stroke="#4f6ef7" strokeOpacity="0.4" fill="none" />
    </svg>
  );
}

const packs = [
  { units: 2000, locked: false },
  { units: 5000, locked: true },
  { units: 10000, locked: true },
  { units: 24000, locked: true },
  { units: 50000, locked: true },
];

export function ComputePacks() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold text-white">Need More Compute?</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#888]">
        Purchase one-time compute packs for additional credits. Applied instantly and valid for 90 days.
        To get more credits or a recurring purchase, consider upgrading your plan.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {packs.map((p) => (
          <div
            key={p.units}
            className="rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] p-4 text-left"
          >
            <div className="text-2xl font-bold text-white">{p.units.toLocaleString()}</div>
            <div className="text-[10px] uppercase tracking-wide text-[#666]">units</div>
            <ChipIllustration />
            <button
              disabled={p.locked}
              className={`mt-2 w-full rounded-md py-1.5 text-[11px] font-medium ${
                p.locked
                  ? "border border-[#222] text-[#555]"
                  : "border border-[#2a2a2a] text-white hover:border-white"
              }`}
            >
              {p.locked ? "Pro plan required" : "Buy pack"}
            </button>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-[#555]">
        Credits are added instantly after purchase and expire after 90 days.
      </p>
    </section>
  );
}
