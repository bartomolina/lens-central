import { processQuery } from "@/lib/big-query";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const rows = await processQuery(params.slug);

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error fetching data";
    return new Response(JSON.stringify({ message }), {
      status: 500,
    });
  }
}
