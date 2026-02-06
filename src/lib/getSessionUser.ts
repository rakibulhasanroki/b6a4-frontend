import { userService } from "@/services/user.services";

export async function getSessionUser() {
  const { data } = await userService.getSession();
  return data?.user ?? null;
}
