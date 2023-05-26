import "server-only";

import { notFound } from "next/navigation";

import { getBaseUrl } from "@/lib/get-base-url";

import type { BQQuery } from "./bq-data";

export enum BQQueryEnum {
  TOTALS = "totals",
  PUBLICATIONS_MONTH = "publications_month",
  PUBLICATIONS_YEAR = "publications_year",
  PUBLICATIONS_APP_TOP = "publications_app_top",
  PUBLICATIONS_APP_OTHER = "publications_app_other",
  PUBLICATIONS_APP_UTILS = "publications_app_utils",
  PROFILES_POSTS = "profiles_posts",
}

export async function getData(query: BQQuery, cache = true) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/${query}`, {
      cache: cache ? "force-cache" : "no-store",
    });
    return await response.json();
  } catch {
    notFound();
  }
}
