import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>
        <h2 className="text-2xl font-semibold">Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or the URL may be incorrect.
        </p>

        <div className="pt-4">
          <Link href="/">
            <Button size="lg">← Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
