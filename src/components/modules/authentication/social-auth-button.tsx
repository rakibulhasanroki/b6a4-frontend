"use client";

import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { authClient } from "@/lib/auth-client";

type Props = {
  label?: string;
};

export function SocialAuthButton({ label }: Props) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={async () => {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: `/`,
        });
      }}
      className="w-full flex items-center justify-center gap-2 cursor-pointer"
    >
      {/* Google SVG */}
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 
          12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 
          20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.9 1.2 
          8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.4-17.7 
          10.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.3 36 
          26.8 37 24 37c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.5 
          16.3 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.5 
          5.3-6.7 6.5l6.3 5.2C38.9 36.7 44 31 44 
          24c0-1.3-.1-2.7-.4-3.5z"
        />
      </svg>

      {label || "Continue with Google"}
    </Button>
  );
}
