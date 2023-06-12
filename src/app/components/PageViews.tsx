import { kv } from "@vercel/kv";

export default async function PageViews({ kvKey }: { kvKey: string }) {
  const pageViews = await kv.incr(kvKey);

  return <p> {pageViews} </p>;
}
