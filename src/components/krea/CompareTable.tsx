import { useState } from "react";
import { Check, Dash } from "./icons";

const categories = [
  { group: "FILTERS", items: ["Features & License", "Usage & Compute Units", "Teams & Admin"] },
  { group: "MODELS", items: ["Image Generation", "Video Generation", "Other"] },
];

const cols = ["FREE", "BASIC", "PRO", "MAX", "BUSINESS", "ENTERPRISE"];

type Cell = string | "check" | "dash";
const rows: { label: string; cells: Cell[] }[] = [
  { label: "Access to image models", cells: ["Limited", "Limited", "check", "check", "check", "check"] },
  { label: "Access to video models", cells: ["Limited", "Limited", "check", "check", "check", "check"] },
  { label: "Access to LoRA Training", cells: ["Limited", "dash", "Limited", "check", "check", "check"] },
  { label: "Access to 3D models", cells: ["Limited", "dash", "check", "check", "check", "check"] },
  { label: "Access to lipsync models", cells: ["Limited", "dash", "check", "check", "check", "check"] },
  { label: "Image concurrency", cells: ["1", "4", "8", "Unlimited", "Unlimited", "Unlimited"] },
  { label: "Video concurrency", cells: ["dash", "2", "4", "Unlimited", "Unlimited", "Unlimited"] },
  { label: "Max images per LoRA", cells: ["50", "50", "50", "2000", "2000", "Custom"] },
  { label: "Access to Krea Nodes", cells: ["dash", "dash", "check", "check", "check", "check"] },
  { label: "Access to App Builder", cells: ["dash", "dash", "check", "check", "check", "check"] },
  { label: "Access to Nodes Agent", cells: ["dash", "dash", "check", "check", "check", "check"] },
  { label: "Early access to new features", cells: ["dash", "dash", "check", "check", "check", "check"] },
  { label: "Commercial license", cells: ["dash", "check", "check", "check", "check", "check"] },
  { label: "Business Terms of Service", cells: ["dash", "dash", "dash", "dash", "check", "check"] },
  { label: "Indemnification", cells: ["dash", "dash", "dash", "dash", "dash", "check"] },
];

function renderCell(c: Cell) {
  if (c === "check") return <Check className="mx-auto text-[#22c55e]" />;
  if (c === "dash") return <Dash />;
  return <span className="text-[#cfcfcf]">{c}</span>;
}

export function CompareTable() {
  const [active, setActive] = useState("Features & License");
  return (
    <section>
      <h2 className="text-center text-3xl font-semibold text-white">Compare Plans in Detail</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#888]">
        Navigate between feature categories to see detailed comparisons across different areas of our platform.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="space-y-6 text-sm">
          {categories.map((c) => (
            <div key={c.group}>
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#555]">
                {c.group}
              </div>
              <ul className="space-y-1">
                {c.items.map((it) => (
                  <li key={it}>
                    <button
                      onClick={() => setActive(it)}
                      className={`w-full rounded px-2 py-1 text-left text-xs ${
                        active === it ? "bg-[#1a1a1a] text-white" : "text-[#777] hover:text-white"
                      }`}
                    >
                      {it}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <div className="overflow-x-auto rounded-xl border border-[#1f1f1f]">
          <table className="w-full min-w-[720px] text-xs">
            <thead>
              <tr className="border-b border-[#1f1f1f] bg-[#0f0f0f]">
                <th className="p-3 text-left text-[10px] font-semibold uppercase tracking-wider text-[#666]">
                  FEATURES
                </th>
                {cols.map((c) => (
                  <th
                    key={c}
                    className={`p-3 text-center text-[10px] font-semibold uppercase tracking-wider ${
                      c === "PRO" ? "bg-[#4f6ef7] text-white" : "text-[#888]"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.label}
                  className={`border-b border-[#1a1a1a] ${i % 2 ? "bg-[#0d0d0d]" : "bg-[#111]"}`}
                >
                  <td className="p-3 text-[#cfcfcf]">{r.label}</td>
                  {r.cells.map((c, j) => (
                    <td key={j} className="p-3 text-center">
                      {renderCell(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
