import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

export async function GET() {
  const message = await kv.get("message");
  return new Response(JSON.stringify(message));
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const message = formData.get("message");
  kv.set("message", message);
  return new Response("Message set to: " + message);
}
