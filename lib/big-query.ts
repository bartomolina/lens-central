import { BigQuery } from "@google-cloud/bigquery";

const bigquery = new BigQuery({
  projectId: process.env.BIGQUERY_PROJECT_ID,
  keyFilename: "./credentials.json",
});

export const processQuery = async (path: string) => {
  const query = `${process.env.BIGQUERY_QUERY}${path}`;
  const options = {
    query,
  };

  const [job] = await bigquery.createQueryJob(options);
  const [rows] = await job.getQueryResults();

  return rows;
};
