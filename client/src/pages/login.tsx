import { Link } from "react-router-dom";

import Button from "../components/ui/button";
import Input from "../components/ui/input";

function LoginPage() {
  return (
    <section className="px-8 max-w-md mx-auto mt-10">
      <h1 className={"text-center font-bold text-5xl tracking-tight mt-20"}>
        Welcome back!
      </h1>
      <p className={"font-medium text-center"}>Log in to your social</p>
      <form className={"mt-8 flex flex-col gap-y-1"}>
        <Input placeholder={"Email"} type={"email"} required={true} />
        <Input placeholder={"Password"} type={"password"} required={true} />
        <Button className={"w-full mt-0.5"}>Sign In</Button>
      </form>
      <Link
        to={"/forgot-password"}
        className={"block mt-6 text-sm text-center underline"}
      >
        Forgot password?
      </Link>
      <p className={"text-center text-sm mt-4"}>
        <span>Don&#39;t have an account?</span>{" "}
        <Link to={"/sign-in"} className={"underline"}>
          Sign up
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;
