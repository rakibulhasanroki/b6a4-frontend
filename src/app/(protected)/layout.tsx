import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { redirect } from "next/navigation";
import { userService } from "@/services/user.services";

export default async function Protected({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, error } = await userService.getSession();

  if (!session || error) {
    redirect("/login");
  }

  const user = session.user;

  if (user.role !== "CUSTOMER") {
    redirect("/");
  }

  if (user.status !== "ACTIVE") {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
