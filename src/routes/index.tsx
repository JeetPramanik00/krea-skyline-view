import { createFileRoute } from "@tanstack/react-router";
import { BillingProvider } from "@/components/krea/billing";
import { Hero } from "@/components/krea/Hero";
import { IndividualPlans } from "@/components/krea/IndividualPlans";
import { TeamPlans } from "@/components/krea/TeamPlans";
import { ComputePacks } from "@/components/krea/ComputePacks";
import { CompareTable } from "@/components/krea/CompareTable";
import { FAQAccordion } from "@/components/krea/FAQAccordion";
import { BottomCTA } from "@/components/krea/BottomCTA";

export const Route = createFileRoute("/")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Krea" },
      { name: "description", content: "Plans and pricing for Krea — the world's best creative AI studio. Choose Basic, Pro, Max, Business, or Enterprise." },
    ],
  }),
});

function PricingPage() {
  return (
    <BillingProvider>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-[1200px] space-y-24 px-6 py-16">
          <Hero />
          <IndividualPlans />
          <TeamPlans />
          <ComputePacks />
          <CompareTable />
          <FAQAccordion />
          <BottomCTA />
        </div>
      </main>
    </BillingProvider>
  );
}
