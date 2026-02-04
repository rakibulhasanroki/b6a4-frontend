import ProfileForm from "@/components/modules/profile/ProfileForm";
import ProfileInfoCard from "@/components/modules/profile/ProfileInfoCard";
import { userService } from "@/services/user.services";
import { User } from "@/types";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { data } = await userService.getSession();
  const user = data?.user;

  if (!user) redirect("/login");

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10 grid md:grid-cols-2 gap-8">
      <ProfileInfoCard user={user} />
      <ProfileForm user={user} />
    </div>
  );
}
