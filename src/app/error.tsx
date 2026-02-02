"use client";

import PageError from "@/components/ui/page-error";

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <PageError reset={reset} />;
}
