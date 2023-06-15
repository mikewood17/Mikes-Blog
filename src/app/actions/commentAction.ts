"use server";

import { revalidatePath } from "next/cache";
import { saveComment } from "../../lib/comments";
import { currentUser } from "@clerk/nextjs";

export async function handleSubmitFormAction(formData: FormData, slug: string) {
  // function that runs the server
  //get the form data values
  const user = await currentUser();
  // @ts-ignore
  const username = user.username;
  const comment = formData.get("comment") as string;

  // save the comment using our saevComment function in our library (note we are note using the API route anymore)
  // @ts-ignore
  const uuid = await saveComment(username, comment, slug);

  // revalidate the post page to show new comment
  revalidatePath(`/blog/${slug}`);
}
