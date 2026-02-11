"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { User as UserIcon } from "lucide-react";
import { User } from "@/types";
import Link from "next/link";

export default function UserMenu({ user }: { user: User }) {
  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full cursor-pointer"
        >
          <UserIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/profile">{user.name}</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-500 focus:text-red-500 cursor-pointer"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
