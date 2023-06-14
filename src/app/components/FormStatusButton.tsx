// client component, because it'll be updating the dom based on pending status
"use client";

// experiemtnal react hook, renamed to remove the experimental prefix
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
  // use the hook and extract the current pending state
  // note: useFormStatus must be used by components "inside" a <form> tag

  const { pending } = useFormStatus();

  return <button type="submit">{pending ? "Sending Comment" : "Submit Comment"}</button>;
}
