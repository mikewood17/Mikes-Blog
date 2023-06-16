import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container content signUpContainer">
      <SignUp />
    </div>
  );
}
