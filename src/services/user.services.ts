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
        cache: "no-store",
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

  getAdminStats: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${AUTH_URL}/api/users/stats`, {
        method: "GET",
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
        next: { tags: ["adminStats"] },
      });

      if (!res.ok) {
        return {
          data: null,
          error: { message: "Admin stats get failed" },
        };
      }
      const result = await res.json();

      return { data: result, error: null };
    } catch (err) {
      console.log(err);
      return {
        data: null,
        error: {
          message: "Something went wrong while  user service get stats",
        },
      };
    }
  },

  getAllUsers: async function (query?: { page?: number; limit?: number }) {
    try {
      const cookieStore = await cookies();
      const url = new URL(`${AUTH_URL}/api/users`);

      if (query) {
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            url.searchParams.append(key, String(value));
          }
        });
      }

      const res = await fetch(url.toString(), {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
        next: { tags: ["allUsers"] },
      });

      if (!res.ok) {
        return {
          data: null,
          error: { message: "Failed to fetch users" },
        };
      }

      const result = await res.json();

      return {
        data: {
          data: result.data,
          metaData: result.metaData,
        },
        error: null,
      };
    } catch (err) {
      console.error(err);
      return {
        data: null,
        error: {
          message: "Something went wrong while fetching users",
        },
      };
    }
  },
};
