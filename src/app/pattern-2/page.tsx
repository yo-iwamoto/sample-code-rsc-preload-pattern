import { getIsAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";
import { cache, use } from "react";

const getBillingPlan = cache(async () => {
  await new Promise<void>((r) => setTimeout(r, 1000));
  return { displayName: "Pro" };
});

export const dynamic = "force-dynamic";

export default async function Page() {
  const billingPlanPromise = getBillingPlan();

  const isAuthenticated = await getIsAuthenticated();
  if (!isAuthenticated) {
    redirect("/login");
  }

  return <Component promise={billingPlanPromise} />;
}

function Component({ promise }: { promise: Promise<{ displayName: string }> }) {
  const billingPlan = use(promise);

  return <h1>{billingPlan.displayName}</h1>;
}
