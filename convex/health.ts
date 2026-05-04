import { query } from "./_generated/server";

export const status = query({
  args: {},
  handler: () => ({
    ok: true,
    service: "convex",
    checkedAt: Date.now(),
  }),
});
