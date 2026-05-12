import { useState } from "react";

const faqs = [
  { q: "What's the difference between plans?", a: "Each plan unlocks more compute, models, and team features. Basic covers the essentials, Pro adds workflow automation and full video access, Max removes concurrency limits, and Business/Enterprise add team collaboration and admin controls." },
  { q: "How do compute units work?", a: "Compute units are spent each time you generate or fine-tune. Different models cost different amounts. Your monthly allowance refreshes with your billing cycle." },
  { q: "How do credit rollovers work?", a: "Unused monthly credits roll over for one cycle on paid plans. One-time pack credits are valid for 90 days." },
  { q: "Can we share projects and assets?", a: "Yes. Business and Enterprise plans support shared workspaces with granular permissions.", badge: "Coming Soon" },
  { q: "What is SAML SSO and why do I need it?", a: "SAML Single Sign-On lets your team log in with your existing identity provider for centralized access control." },
  { q: "How does billing work?", a: "Billed monthly or yearly, in advance. Yearly plans save 20%." },
  { q: "What support options are available?", a: "Email support on all plans, priority support on Business, and dedicated SLA on Enterprise." },
  { q: "Do plans include a commercial license?", a: "All paid plans include a commercial license for your generated outputs." },
  { q: "Can I switch between plans?", a: "Yes — upgrade or downgrade anytime. Changes are prorated." },
  { q: "Is Business plan seat-based or team-based?", a: "Business is seat-based with shared compute pooled across the team." },
  { q: "How do I add or remove members?", a: "Workspace owners can manage seats from the Team settings panel." },
  { q: "What happens if we exceed our compute units?", a: "Generation pauses until you top up with a compute pack or upgrade." },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section>
      <h2 className="text-center text-3xl font-semibold text-white">Frequently Asked Questions</h2>
      <div className="mx-auto mt-10 max-w-3xl">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-[#1a1a1a]">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-white">
                  {f.q}
                  {f.badge && (
                    <span className="rounded-full bg-[#4f6ef7] px-2 py-0.5 text-[10px] font-medium text-white">
                      {f.badge}
                    </span>
                  )}
                </span>
                <span className="text-lg text-white">{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen && <p className="pb-5 text-sm leading-relaxed text-[#888]">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
