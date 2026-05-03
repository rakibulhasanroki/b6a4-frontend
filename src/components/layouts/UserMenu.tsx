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
import { toast } from "sonner";

export default function UserMenu({ user }: { user: User }) {
  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...", {
      position: "bottom-center",
    });

    try {
      await authClient.signOut();

      toast.success("Logged out successfully", {
        id: toastId,
        position: "bottom-center",
      });

      window.location.href = "/";
    } catch (error) {
      toast.error("Logout failed. Please try again.", {
        id: toastId,
        position: "bottom-center",
      });
    }
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
