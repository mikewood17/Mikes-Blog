import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

export async function GET() {
  const message = await kv.get("message");
  console.log(message);
  return new Response(JSON.stringify(message));
}

export async function POST(request: NextRequest) {
  const message = request.nextUrl.searchParams.get("message");
  kv.set("message", message);
  return new Response("Message saved successfully");
}
