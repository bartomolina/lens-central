import "server-only";

import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

import { notFound } from "next/navigation";

import { getBaseUrl } from "@/lib/get-base-url";

import type { BQQuery } from "./bq-data";

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
    console.log("Fetching:", `${getBaseUrl()}/api/${query}`);

    const response = await fetch(`${getBaseUrl()}/api/${query}`);

    console.log("GetData: ok");
    return await response.json();
  } catch (error: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log("GetData: error:", error.message);
    console.log(error);
    notFound();
  }
}
