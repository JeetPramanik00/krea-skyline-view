export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 shrink-0 ${className}`} fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Dash() {
  return <span className="text-[#444]">–</span>;
}

export function NewBadge({ children = "new" }: { children?: React.ReactNode }) {
  return (
    <span className="ml-1 inline-flex items-center rounded-full bg-[#4f6ef7] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
      {children}
    </span>
  );
}
