import type { NextRequest } from "next/server";
import type { Color } from "@/lib/counters";
import { incrementCount } from "@/lib/mockStore";
import { isColor } from "@/lib/counters"

// POST /api/counters/:color -> increments one counter, returns all counts
export async function POST(_req: NextRequest, { params }: { params: { color: Color } }) {
  const { color } = await params;

  if (isColor(color)) {
    return Response.json(incrementCount(color));
  }

  return Response.json({ error: "color does not exist" }, { status: 400 });
}
