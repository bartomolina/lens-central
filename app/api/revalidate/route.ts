import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "/";
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  revalidatePath(path);
  return NextResponse.json({ path, revalidated: true, now: Date.now() });
}
