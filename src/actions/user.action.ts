"use server";

import { revalidatePath } from "next/cache";
import { userService } from "@/services/user.services";

export async function updateProfileAction(data: {
  name: string;
  phoneNumber: string;
}) {
  const { data: result, error } = await userService.updateProfile(data);

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/profile");

  return {
    success: true,
    message: "Profile updated successfully",
    user: result,
  };
}
