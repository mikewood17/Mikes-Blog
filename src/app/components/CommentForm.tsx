// Imports
"use client";

import { handleSubmitFormAction } from "../actions/commentAction";
import React, { useTransition } from "react";
import FormStatusButton from "./FormStatusButton";
import shortUUID from "short-uuid";

// Functions

type CommentFormProps = {
  slug: string;
  username: string;
  saveCommentAction: (formData: FormData, slug: string) => Promise<shortUUID.SUUID>;
};

export default async function CommentForm({ slug, username, saveCommentAction }: CommentFormProps) {
  async function handleForm(formData: FormData) {
    const uuid = await saveCommentAction(formData, slug);
    console.log("comment saved with uuid and reset form");
  }

  return (
    <form className="formMain" action={handleForm}>
      <div className="formInputs">
        <div className="formSection">
          <p>
            Commenting as <strong>{username}</strong>
          </p>
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
