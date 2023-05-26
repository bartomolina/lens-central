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

export async function getData(query: BQQuery) {
  console.log(`GetData: ${query} init`);
  try {
    const response = await fetch(`${getBaseUrl()}/api/${query}`);

    console.log("GetData: ok");
    return (await response.json()) as BQResponse;
  } catch {
    console.log("GetData: error");
    notFound();
  }
}
