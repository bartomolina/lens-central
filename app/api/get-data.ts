import "server-only";

import { getBaseUrl } from "@/lib/get-base-url";

import type { BQQuery, BQResponse } from "./bq-data";

export enum BQQueryEnum {
  TOTALS = "totals",
  PUBLICATIONS_MONTH = "publications_month",
  PUBLICATIONS_YEAR = "publications_year",
  PUBLICATIONS_APP = "publications_app",
}

export async function getData(query: BQQuery) {
  let response;
  let data = [] as BQResponse;
  try {
    response = await fetch(`${getBaseUrl()}/api/${query}`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    data = (await response.json()) as BQResponse;
  } finally {
    return data;
  }
}
