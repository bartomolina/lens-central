export const runtime = "edge";

export async function GET() {
  return new Response(JSON.stringify({ profiles: 10 }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
