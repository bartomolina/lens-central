import { processQuery } from "@/lib/big-query";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const rows = await processQuery(params.slug);

  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
