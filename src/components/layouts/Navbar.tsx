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
import MobileMenu from "./MobileMenu";

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

          <Link
            href="/about"
            className="hidden md:block rounded-md px-3 py-2 hover:bg-muted hover:text-primary"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hidden md:block rounded-md px-3 py-2 hover:bg-muted hover:text-primary"
          >
            Contact
          </Link>

          {(!user || user.role === Role.customer) && (
            <div className="rounded-md p-2 hover:bg-muted">
              <CartIcon />
            </div>
          )}
          <ModeToggle />

          {user ? (
            <div className="hidden md:block">
              <UserMenu user={user} />
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden md:block rounded-md px-3 py-2 hover:bg-muted cursor-pointer"
              >
                Login
              </Link>
              <Link href="/signup" className="hidden md:block">
                <Button size="sm" className="cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </>
          )}

          <MobileMenu user={user} />
        </nav>
      </div>
    </header>
  );
}
