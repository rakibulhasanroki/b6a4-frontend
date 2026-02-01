import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { ShoppingCart, Pill } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-primary"
        >
          <Pill className="h-5 w-5" />
          MediStore
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2 md:gap-4 text-sm font-medium">
          <Link
            href="/shop"
            className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
          >
            Shop
          </Link>

          <Link
            href="/cart"
            className="rounded-md p-2 transition-colors hover:bg-muted hover:text-primary"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>

          <Link
            href="/login"
            className="hidden sm:block rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
          >
            Login
          </Link>

          <Link href="/signup">
            <Button size="sm" className="shadow-sm">
              Sign Up
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
