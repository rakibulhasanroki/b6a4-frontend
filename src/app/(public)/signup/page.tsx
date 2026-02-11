import { SignupForm } from "@/components/modules/authentication/signup-form";
import { userService } from "@/services/user.services";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default async function SignUpPage() {
  const { data: session, error } = await userService.getSession();

  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex flex-1 items-center justify-center min-h-full p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
