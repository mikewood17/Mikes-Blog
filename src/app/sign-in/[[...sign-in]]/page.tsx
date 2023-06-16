import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container content signUpContainer" id="signIn">
      <SignIn />
    </div>
  );
}
