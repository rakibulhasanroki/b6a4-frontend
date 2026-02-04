import { userService } from "@/services/user.services";
import { Role } from "@/types";
import { redirect } from "next/navigation";

type Options = {
  requiredRole?: Role;
  requireAuth?: boolean;
};

export async function getSessionUser(options: Options = {}) {
  const { requiredRole, requireAuth = false } = options;

  const { data: session, error } = await userService.getSession();

  const user = session?.user ?? null;

  if (!requireAuth && !user) {
    return null;
  }

  if (requireAuth && !user) {
    redirect("/login");
  }

  if (user && requiredRole && user.role !== requiredRole) {
    redirect("/");
  }

  if (user && user.status !== "ACTIVE") {
    redirect("/");
  }

  return user;
}
