import { bigquery } from "@/lib/big-query";

const query = process.env.QUERY;

const options = {
  query: query,
};

export async function GET() {
  const [job] = await bigquery.createQueryJob(options);
  console.log(`Job ${job.id} started.`);

  const [rows] = await job.getQueryResults();

  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
