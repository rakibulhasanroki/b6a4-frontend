import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { Pill } from "lucide-react";
import CartIcon from "./CartIcon";
import { Role, User } from "@/types";
import UserMenu from "./UserMenu";
import { getSessionUser } from "@/lib/getSessionUser";

export default async function Navbar() {
  const user = await getSessionUser();
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

        <nav className="flex items-center gap-2 md:gap-4 text-sm font-medium">
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/shop"
              className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
            >
              Shop
            </Link>

            {user?.role === Role.customer && (
              <>
                <Link
                  href="/orders"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
                >
                  Orders
                </Link>
                <Link
                  href="/about"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
                >
                  About
                </Link>
              </>
            )}

            {user?.role === Role.seller && (
              <>
                <Link
                  href="/seller"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
                >
                  Dashboard
                </Link>
                <Link
                  href="/about"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
                >
                  About
                </Link>
              </>
            )}

            {user?.role === Role.admin && (
              <>
                <Link
                  href="/admin"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
                >
                  Dashboard
                </Link>
                <Link
                  href="/about"
                  className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-primary"
                >
                  About
                </Link>
              </>
            )}
          </div>

          {(!user || user.role === Role.customer) && (
            <div className="rounded-md p-2 hover:bg-muted transition-colors">
              <CartIcon />
            </div>
          )}

          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
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
            </>
          )}

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
