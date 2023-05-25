import "server-only";

import { notFound } from "next/navigation";

import { getBaseUrl } from "@/lib/get-base-url";

import type { BQQuery, BQResponse } from "./bq-data";

export enum BQQueryEnum {
  TOTALS = "totals",
  PUBLICATIONS_MONTH = "publications_month",
  PUBLICATIONS_YEAR = "publications_year",
  PUBLICATIONS_APP = "publications_app",
  PROFILES_POSTS = "profiles_posts",
}

export async function getData(query: BQQuery, cache = true) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/${query}`, {
      cache: cache ? "default" : "no-store",
    });
    return (await response.json()) as BQResponse;
  } catch {
    notFound();
  }
}
