"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { UserStatus } from "@/types";
import { UserUpdateStatusAction } from "@/actions/user.action";

export default function UserStatusToggle({
  userId,
  currentStatus,
}: {
  userId: string;
  currentStatus: UserStatus;
}) {
  const toggleStatus = async () => {
    const newStatus =
      currentStatus === UserStatus.Active
        ? UserStatus.Banned
        : UserStatus.Active;
    const toastId = toast.loading("Updating status...");

    const res = await UserUpdateStatusAction({
      status: newStatus,
      id: userId,
    });

    if (res?.success) {
      toast.success(res.message, { id: toastId });
    } else {
      toast.error(res?.message || "Something went wrong", { id: toastId });
    }
  };

  return (
    <Button
      size="sm"
      variant={currentStatus === UserStatus.Active ? "default" : "destructive"}
      onClick={toggleStatus}
      className="cursor-pointer"
    >
      {currentStatus}
    </Button>
  );
}
