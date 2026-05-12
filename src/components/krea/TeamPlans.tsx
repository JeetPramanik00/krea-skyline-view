import { PlanCard, type Plan } from "./PlanCard";
import { useState } from "react";

const seatOptions = ["1", "5", "10", "MX", "25", "50", "100", "1K"];

const business: Plan = {
  name: "Business",
  subtitle: "Seats and collaboration workspaces for growing teams.",
  price: 200,
  cta: "Try Business",
  units: "80,000 compute units",
  variant: "outline",
  features: [
    { text: "Everything in Pro plan" },
    { text: "Business Terms of Service" },
    { text: "Up to 50 team seats" },
    { text: "Share private Node Apps with your team" },
    { text: "Train LoRAs with up to 10,000 images" },
    { text: "Unlimited relaxed generations" },
    { text: "Custom user roles and permissions" },
    { text: "Fine-grained controls for model access" },
  ],
};

const enterprise: Plan = {
  name: "Enterprise",
  subtitle: "Enterprise-grade security with dedicated support, access to Krea's advanced services and admin features for scale.",
  price: "Custom pricing",
  cta: "Contact Sales",
  units: "",
  variant: "outline",
  features: [
    { text: "Everything in Business plan" },
    { text: "Custom Terms of Service" },
    { text: "Priority support with SLA" },
    { text: "Analytics API" },
    { text: "Per-member spend limits" },
    { text: "Slack connect" },
    { text: "Custom compute packages" },
    { text: "Unlimited relaxed generations" },
    { text: "Audit logs", badge: "new" },
  ],
};

export function TeamPlans() {
  const [seat, setSeat] = useState("MX");
  return (
    <section>
      <div className="mb-6">
        <h3 className="text-xl font-medium text-white">For Teams and Enterprises</h3>
        <p className="mt-2 max-w-md text-xs leading-relaxed text-[#888]">
          Workplace management, collaboration, and enterprise customizations.
        </p>
      </div>
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <PlanCard plan={business} />
          <div className="flex flex-wrap items-center gap-1 rounded-full border border-[#1f1f1f] bg-[#0f0f0f] p-1">
            {seatOptions.map((o) => (
              <button
                key={o}
                onClick={() => setSeat(o)}
                className={`flex-1 rounded-full px-2 py-1 text-[11px] font-medium transition ${
                  seat === o ? "bg-white text-black" : "text-[#888] hover:text-white"
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
        <PlanCard plan={enterprise} />
      </div>
    </section>
  );
}
