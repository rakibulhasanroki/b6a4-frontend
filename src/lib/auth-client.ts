import { env } from "@/env";
import { createAuthClient } from "better-auth/react";

const url = env.API_URL;

export const authClient = createAuthClient({
  baseURL: url,
  fetchOptions: {
    credentials: "include",
  },
});
