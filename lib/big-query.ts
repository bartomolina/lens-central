import { BigQuery } from "@google-cloud/bigquery";

export const bigquery = new BigQuery({
  projectId: process.env.BIGQUERY_PROJECT_ID,
  keyFilename: "./credentials.json",
});
