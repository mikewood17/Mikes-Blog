// Imports

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { WEBSITE_URL } from "config";
import { revalidatePath } from "next/cache";
import { saveComment } from "../../lib/comments";
import FormStatusButton from "./FormStatusButton";

// Functions

export default function CommentForm({ slug }: { slug: string }) {
  async function handleSubmitFormAction(formData: FormData) {
    // function that runs the server
    "use server";

    //get the form data values
    const username = formData.get("username") as string;
    const comment = formData.get("comment") as string;

    // save the comment using our saevComment function in our library (note we are note using the API route anymore)
    const uuid = await saveComment(username, comment, slug);

    // revalidate the post page to show new comment
    revalidatePath(`/blog/${slug}`);
  }

  return (
    <form className="formMain" action={handleSubmitFormAction}>
      <div className="formInputs">
        <div className="formSection">
          <label htmlFor="username">Name</label>
          <input type="text" name="username" className="formControl" />
        </div>
        <div className="formSection">
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" cols={30} rows={10} className="formControl" />
        </div>
      </div>
      <FormStatusButton />
    </form>
  );
}
