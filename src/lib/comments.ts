// Imports

import { kv } from "@vercel/kv";
import short from "short-uuid";

// Functions
export async function saveComment(username: string, comment: string, slug: string) {
  //Save Comment To blog
  //form validation

  // Generate unique iD

  const uuid = short.generate();

  // stringify comment object

  const commentObject = JSON.stringify({
    username,
    comment,
    uuid,
  });

  //add individual comment to kv store

  kv.set(`comment:${uuid}`, commentObject);

  // add uuid to comment

  const commentsList = await kv.lpush(`comments:${slug}`, uuid);

  console.log("comment saved, heres the list: ", commentsList);
  return uuid;
}

export async function getComments(slug: string) {
  // Get All Comments For The Blog

  const commentIds = await kv.lrange(`comments:${slug}`, 0, -1);
  const commentKeys = commentIds.map((id) => `comment:${id}`);
  console.log("commentKeys", commentKeys);
  if (commentKeys.length < 1) {
    // handle correctly if we have no comments
    console.log("Hey");
    return null;
    return new Promise((resolve, reject) => resolve(null));
  }

  return await kv.mget<Comment[]>(...commentKeys);
}
