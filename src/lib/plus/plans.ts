/** DoggMatch+ plans. Price IDs live in code so purchases stay traceable in Stripe. */
export type PlanId = "monthly" | "yearly";

export const PLUS_PLANS: Record<PlanId, { priceId: string; productId: string; label: string }> = {
  monthly: {
    priceId: "price_1U50TJE9EWHLy7Q03PRNNb1o",
    productId: "prod_V5Aoe1utR3rAiJ",
    label: "Monthly",
  },
  yearly: {
    priceId: "price_1U50TcE9EWHLy7Q06gTaBtXw",
    productId: "prod_V5Ap7rKhUAE4qN",
    label: "Yearly",
  },
};
