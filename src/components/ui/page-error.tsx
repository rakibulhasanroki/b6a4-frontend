"use client";

import { Button } from "@/components/ui/button";

export default function PageError({ reset }: { reset?: () => void }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center space-y-4 px-4">
      <h2 className="text-2xl font-semibold text-destructive">
        Something went wrong
      </h2>

      <p className="text-muted-foreground max-w-md">
        An unexpected error occurred. Please try again.
      </p>

      {reset && <Button onClick={reset}>Try Again</Button>}
    </div>
  );
}
