"use server";

import { revalidatePath, updateTag } from "next/cache";
import { userService } from "@/services/user.services";
import { UserStatus } from "@/types";
import { cookies } from "next/headers";
import { env } from "@/env";
const API_URL = env.API_URL;

export async function getSessionAction() {
  const { data } = await userService.getSession();
  return data;
}

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

export async function UserUpdateStatusAction({
  status,
  id,
}: {
  status: UserStatus;
  id: string;
}) {
  try {
    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify({ status }),
      credentials: "include",
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result?.message || "Status update failed",
      };
    }

    updateTag("adminStats");
    updateTag("allUsers");

    return {
      success: true,
      message: result.message,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Something went wrong while updating user status",
    };
  }
}
