import { SignupForm } from "@/components/modules/authentication/signup-form";

export default function SignUpPage() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-full p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
