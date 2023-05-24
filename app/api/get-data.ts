import "server-only";

import { notFound } from "next/navigation";

import { getBaseUrl } from "@/lib/get-base-url";

import type { BQQuery, BQResponse } from "./bq-data";

export enum BQQueryEnum {
  TOTALS = "totals",
  PUBLICATIONS_MONTH = "publications_month",
  PUBLICATIONS_YEAR = "publications_year",
  PUBLICATIONS_APP = "publications_app",
}

export async function getData(query: BQQuery) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/${query}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return (await response.json()) as BQResponse;
  } catch (error) {
    console.log(error);
    notFound();
  }
}
