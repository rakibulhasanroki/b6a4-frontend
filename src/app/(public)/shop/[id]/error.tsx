"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ShopError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      <h2 className="text-2xl font-semibold text-red-600">
        Something went wrong
      </h2>

      <p className="text-muted-foreground max-w-md">
        While fetching the medicine details. Please try again
      </p>

      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
}
