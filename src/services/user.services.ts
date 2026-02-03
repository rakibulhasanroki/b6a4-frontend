import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = env.API_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${AUTH_URL}/auth/get-session`, {
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
          error: {
            message: "Session is missing",
          },
        };
      }
      return {
        data: session,
        error: null,
      };
    } catch (err) {
      console.log(err);
      return {
        data: null,
        error: { message: "Something went on userServices from services " },
      };
    }
  },
};
