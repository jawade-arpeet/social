import { Link } from "react-router-dom";

import Button from "../components/ui/button";
import Input from "../components/ui/input";

function RegisterPage() {
  return (
    <main className="px-8 max-w-md mx-auto mt-10">
      <h1 className={"text-center font-bold text-5xl tracking-tight mt-20"}>
        Join Social
      </h1>
      <p className={"font-medium text-center"}>Sign up for free</p>
      <form className={"mt-8 flex flex-col gap-y-1.5"}>
        <Input
          placeholder={"Email"}
          type={"email"}
          name={"email"}
          required={true}
        />
        <Input
          placeholder={"Password"}
          type={"password"}
          name={"password"}
          required={true}
        />
        <Button className={"w-full mt-0.5"}>Sign Up</Button>
      </form>
      <p className={"text-sm text-stone-400 text-center mt-6"}>
        By clicking Create account, you agree to lnk&#39;s privacy notice, T&Cs
        and to receive offers, news and updates.
      </p>
      <p className={"text-center text-sm mt-4"}>
        <span>Already have an account?</span>{" "}
        <Link to={"/sign-in"} className={"underline"}>
          Login
        </Link>
      </p>
    </main>
  );
}

export default RegisterPage;
