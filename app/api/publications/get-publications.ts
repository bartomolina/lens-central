import "server-only";

import { getBaseUrl } from "@/lib/get-base-url";

import type { Publication } from "./publication";

export async function getPublications() {
  const response = await fetch(`${getBaseUrl()}/api/publications`);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const publications = (await response.json()) as Publication[];
  return publications;
}
