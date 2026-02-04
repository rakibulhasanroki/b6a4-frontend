import { env } from "@/env";
import { createAuthClient } from "better-auth/react";

const url = env.NEXT_PUBLIC_API_URL;

export const authClient = createAuthClient({
  baseURL: url,
  fetchOptions: {
    credentials: "include",
  },
});
