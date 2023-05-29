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
  LENSTER_DOMINANCE = "lenster_dominance",
  PROFILES_POSTS = "profiles_posts",
  PROFILES_NEW = "profiles_new",
  PROFILES_LATEST = "profiles_latest",
  MOMOKA_ADOPTION = "momoka_adoption",
}

export async function getData(query: BQQuery, cache = true) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/${query}`, {
      cache: cache ? "force-cache" : "no-cache",
    });
    return await response.json();
  } catch {
    notFound();
  }
}
