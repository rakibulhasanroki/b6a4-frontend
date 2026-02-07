import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { Pill, Menu } from "lucide-react";
import CartIcon from "./CartIcon";
import { Role } from "@/types";
import UserMenu from "./UserMenu";
import { getSessionUser } from "@/lib/getSessionUser";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default async function Navbar() {
  const user = await getSessionUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
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
          {/* ===== DESKTOP NAV (UNCHANGED) ===== */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/shop"
              className="rounded-md px-3 py-2 hover:bg-muted hover:text-primary"
            >
              Shop
            </Link>

            {user?.role === Role.customer && (
              <Link
                href="/orders"
                className="rounded-md px-3 py-2 hover:bg-muted hover:text-primary"
              >
                Orders
              </Link>
            )}

            {user?.role === Role.seller && (
              <Link
                href="/seller"
                className="rounded-md px-3 py-2 hover:bg-muted hover:text-primary"
              >
                Dashboard
              </Link>
            )}

            {user?.role === Role.admin && (
              <Link
                href="/admin"
                className="rounded-md px-3 py-2 hover:bg-muted hover:text-primary"
              >
                Dashboard
              </Link>
            )}
          </div>

          {(!user || user.role === Role.customer) && (
            <div className="hidden md:block rounded-md p-2 hover:bg-muted">
              <CartIcon />
            </div>
          )}

          <Link
            href="/about"
            className="hidden md:block rounded-md px-3 py-2 hover:bg-muted hover:text-primary"
          >
            About
          </Link>

          {user ? (
            <div className="hidden md:block">
              <UserMenu user={user} />
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden md:block rounded-md px-3 py-2 hover:bg-muted"
              >
                Login
              </Link>
              <Link href="/signup" className="hidden md:block">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-0">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

              {/* Header / Logo */}
              <div className="flex items-center gap-2 border-b px-5 py-4">
                <Pill className="h-5 w-5 text-primary" />
                <span className="text-base font-semibold tracking-tight">
                  MediStore
                </span>
              </div>

              <div className="flex flex-col gap-1 px-3 py-4 text-sm font-medium">
                <Link
                  href="/shop"
                  className="rounded-md px-3 py-2 hover:bg-muted"
                >
                  Shop
                </Link>

                {user?.role === Role.customer && (
                  <Link
                    href="/orders"
                    className="rounded-md px-3 py-2 hover:bg-muted"
                  >
                    Orders
                  </Link>
                )}

                {user?.role === Role.seller && (
                  <Link
                    href="/seller"
                    className="rounded-md px-3 py-2 hover:bg-muted"
                  >
                    Dashboard
                  </Link>
                )}

                {user?.role === Role.admin && (
                  <Link
                    href="/admin"
                    className="rounded-md px-3 py-2 hover:bg-muted"
                  >
                    Dashboard
                  </Link>
                )}

                {(!user || user.role === Role.customer) && (
                  <div className="rounded-md px-3 py-2 hover:bg-muted">
                    <CartIcon />
                  </div>
                )}

                <Link
                  href="/about"
                  className="rounded-md px-3 py-2 hover:bg-muted"
                >
                  About
                </Link>

                <div className="mt-3 border-t pt-3">
                  {user ? (
                    <UserMenu user={user} />
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/login"
                        className="rounded-md px-3 py-2 hover:bg-muted"
                      >
                        Login
                      </Link>

                      <Link href="/signup">
                        <Button size="sm" className="w-full">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
