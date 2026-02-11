import { env } from "@/env";
import { createAuthClient } from "better-auth/react";

const URL = env.NEXT_PUBLIC_FRONTEND_URL;

export const authClient = createAuthClient({
  baseURL: URL,
  fetchOptions: {
    credentials: "include",
  },
});
