"use client";

// Imports

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { WEBSITE_URL } from "config";

// Functions

export function CommentForm({ postSlug }: { postSlug: string }) {
  // Router Hook to trigger refresh
  const router = useRouter();

  // the react useTransition hook to manage client/server data upodates
  // without refreshing the page. isPending gives us the ability to know
  // show a spinner or similar
  const [isPending, startTransition] = useTransition();

  // runs when onSubmit event fires, uses fetch to send a POST request to
  // our API comment route, and then refreshes the page data to show the comment
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("submitting the form");

    // prevent the form submitting and redirecting us to the action location
    event.preventDefault();

    // get form input values
    // @ts-ignore
    const username = event.target["username"].value;
    // @ts-ignore
    const comment = event.target["comment"].value;

    // create a FormData object and append our values to send to the API
    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    //POST the FormData to the API
    const res = await fetch(`${WEBSITE_URL}/api/comments/${postSlug}`, {
      body: formData,
      method: "POST",
    });

    // Refresh the current route and fetch new data from the server without
    // losing client-side browser or React state.
    startTransition(() => {
      router.refresh();
      console.log("reloaded the page data");
    });
  }

  return (
    <form className="formMain" onSubmit={handleFormSubmit}>
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
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting Comment" : "Submit Comment"}
      </button>
    </form>
  );
}
