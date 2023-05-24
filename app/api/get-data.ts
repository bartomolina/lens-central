import "server-only";

import { getBaseUrl } from "@/lib/get-base-url";

import type { BQQuery,BQResponse } from "./bq-data";

export enum BQQueryEnum {
  TOTALS = "totals",
  PUBLICATIONS_MONTH = "publications_month",
  PUBLICATIONS_YEAR = "publications_year",
}

export async function getData(query: BQQuery) {
  const response = await fetch(`${getBaseUrl()}/api/${query}`);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const publications = (await response.json()) as BQResponse;

  return publications;
}
