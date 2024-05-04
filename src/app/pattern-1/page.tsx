import { getIsAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";
import { cache } from "react";

const getBillingPlan = cache(async () => {
  await new Promise<void>((r) => setTimeout(r, 1000));
  return { displayName: "Pro" };
});

export const dynamic = "force-dynamic";

export default async function Page() {
  void getBillingPlan();

  const isAuthenticated = await getIsAuthenticated();
  if (!isAuthenticated) {
    redirect("/login");
  }

  const billingPlan = await getBillingPlan();

  return <h1>{billingPlan.displayName}</h1>;
}
