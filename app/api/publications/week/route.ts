import { bigquery } from "@/lib/big-query";

const query = process.env.QUERY_PUBLICATIONS_WEEK;

const options = {
  query,
};

export async function GET() {
  const [job] = await bigquery.createQueryJob(options);
  const [rows] = await job.getQueryResults();

  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
