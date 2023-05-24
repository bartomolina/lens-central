import "server-only";

import { getBaseUrl } from "@/lib/get-base-url";

import type { Publication } from "./publication";

export async function getPublicationsWeek() {
  const response = await fetch(`${getBaseUrl()}/api/publications/week`);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const publications = (await response.json()) as Publication[];

  return publications;
}

export async function getPublicationsYear() {
  const response = await fetch(`${getBaseUrl()}/api/publications/year`);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const publications = (await response.json()) as Publication[];

  return publications;
}
