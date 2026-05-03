"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Pill } from "lucide-react";
import { Role, User } from "@/types";
import UserMenu from "./UserMenu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function MobileMenu({ user }: { user: User | null }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72 p-0">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        {/* Header */}
        <div className="flex items-center gap-2 border-b px-5 py-4">
          <Pill className="h-5 w-5 text-primary" />
          <span className="text-base font-semibold">MediStore</span>
        </div>

        <div className="flex flex-col gap-1 px-3 py-4 text-sm font-medium">
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2 hover:bg-muted"
          >
            Shop
          </Link>

          {user?.role === Role.customer && (
            <Link
              href="/orders"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 hover:bg-muted"
            >
              Orders
            </Link>
          )}

          {user?.role === Role.seller && (
            <Link
              href="/seller"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 hover:bg-muted"
            >
              Dashboard
            </Link>
          )}

          {user?.role === Role.admin && (
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 hover:bg-muted"
            >
              Dashboard
            </Link>
          )}

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2 hover:bg-muted"
          >
            About
          </Link>
          <Link href="/contact" className="rounded-md px-3 py-2 hover:bg-muted">
            Contact
          </Link>

          <div className="mt-3 border-t pt-3">
            {user ? (
              <UserMenu user={user} />
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 hover:bg-muted"
                >
                  Login
                </Link>

                <Link href="/signup" onClick={() => setOpen(false)}>
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
  );
}
