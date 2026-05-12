import { useState, createContext, useContext } from "react";

type Billing = "monthly" | "yearly";
const Ctx = createContext<{ billing: Billing; setBilling: (b: Billing) => void }>({
  billing: "monthly",
  setBilling: () => {},
});

export function BillingProvider({ children }: { children: React.ReactNode }) {
  const [billing, setBilling] = useState<Billing>("monthly");
  return <Ctx.Provider value={{ billing, setBilling }}>{children}</Ctx.Provider>;
}

export const useBilling = () => useContext(Ctx);
