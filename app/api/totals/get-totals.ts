import "server-only";

import { getBaseUrl } from "@/lib/get-base-url";

import type { Totals } from "./totals";

export async function getTotals() {
  const response = await fetch(`${getBaseUrl()}/api/totals`);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const publications = (await response.json()) as Totals[];

  return publications;
}
