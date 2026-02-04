import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = env.API_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${AUTH_URL}/api/auth/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
        credentials: "include",
      });

      const session = await res.json();

      if (session === null) {
        return {
          data: null,
          error: { message: "Session is missing" },
        };
      }

      return { data: session, error: null };
    } catch (err) {
      console.log(err);
      return {
        data: null,
        error: { message: "Something went wrong in userServices" },
      };
    }
  },

  updateProfile: async function (data: { name: string; phoneNumber: string }) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${AUTH_URL}/api/user/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) {
        return {
          data: null,
          error: { message: "Profile update failed" },
        };
      }
      const result = await res.json();

      return { data: result, error: null };
    } catch (err) {
      console.log(err);
      return {
        data: null,
        error: { message: "Something went wrong while updating profile" },
      };
    }
  },
};
