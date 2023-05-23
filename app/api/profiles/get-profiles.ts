import "server-only";

import { getBaseUrl } from "@/lib/get-base-url";

export async function getTotalProfiles() {
  const response = await fetch(`${getBaseUrl()}/api/profiles/total`);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const publications = (await response.json()) as { profiles: number };

  return publications;
}
