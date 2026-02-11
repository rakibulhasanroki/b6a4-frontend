import ProfileForm from "@/components/modules/profile/ProfileForm";
import ProfileInfoCard from "@/components/modules/profile/ProfileInfoCard";
import { getSessionUser } from "@/lib/getSessionUser";
import { Role } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const user = await getSessionUser();

  if (user.role === Role.admin) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <ProfileInfoCard user={user} />
        <ProfileForm user={user} />
      </div>
    );
  }

  if (user.role === Role.seller) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <ProfileInfoCard user={user} />
        <ProfileForm user={user} />
      </div>
    );
  }

  if (user.role === Role.customer) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-10 grid md:grid-cols-2 gap-8">
        <ProfileInfoCard user={user} />
        <ProfileForm user={user} />
      </div>
    );
  }
}
