import { PlanCard, type Plan } from "./PlanCard";

const plans: Plan[] = [
  {
    name: "Basic",
    subtitle: "Access our most popular features for any generation.",
    price: 9,
    cta: "Get Basic",
    units: "5,000 compute units",
    variant: "outline",
    features: [
      { text: "Commercial license" },
      { text: "Full access to Image, 3D, and Lipsync models" },
      { text: "LoRA fine-tuning with up to 5G images" },
      { text: "Upscale & enhance to 4K" },
      { text: "Access to selected video models" },
    ],
  },
  {
    name: "Pro",
    subtitle: "For creators that need real workflows and unlimited fine-tuning.",
    price: 35,
    cta: "Get Pro",
    units: "20,000 compute units",
    highlight: true,
    variant: "primary",
    features: [
      { text: "Everything in Basic plan" },
      { text: "Access to all video models" },
      { text: "Workflow automation with Nodes and Apps" },
      { text: "AI-powered Nodes Agent", badge: "new" },
      { text: "Bulk discounts on compute unit packs" },
      { text: "Upscale & enhance to 8K" },
    ],
  },
  {
    name: "Max",
    subtitle: "Maximum power for serious creators with unlimited concurrency, relaxed generation, and premium loading.",
    price: 105,
    cta: "Get Max",
    units: "80,000 compute units",
    variant: "outline",
    features: [
      { text: "Everything in Pro plan" },
      { text: "Unlimited Luna fine-tunings with 2,000 files" },
      { text: "Unlimited Concurrency" },
      { text: "Unlimited relaxed generations" },
      { text: "Upscale & enhance to 22K" },
    ],
  },
];

export function IndividualPlans() {
  return (
    <section>
      <h3 className="mb-6 text-xl font-medium text-white">For Individual Creators</h3>
      <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </div>
    </section>
  );
}
