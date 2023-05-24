import { BigQuery } from "@google-cloud/bigquery";

const credential = JSON.parse(
  Buffer.from(process.env.GOOGLE_CREDENTIALS as string, "base64")
    .toString()
    .replaceAll("\n", "")
);

const bigquery = new BigQuery({
  projectId: process.env.BIGQUERY_PROJECT_ID,
  credentials: {
    client_email: credential.client_email,
    private_key: credential.private_key,
  },
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
