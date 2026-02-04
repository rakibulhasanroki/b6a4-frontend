export const dynamic = "force-dynamic";
import { LoginForm } from "@/components/modules/authentication/login-form";
import { userService } from "@/services/user.services";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { data: session, error } = await userService.getSession();

  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex flex-1 items-center justify-center min-h-full p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
