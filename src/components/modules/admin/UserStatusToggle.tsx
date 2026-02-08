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

    const res = await UserUpdateStatusAction({
      status: newStatus,
      id: userId,
    });

    if (res?.success) {
      toast.success(res.message);
    } else {
      toast.error(res?.message || "Something went wrong");
    }
  };

  return (
    <Button
      size="sm"
      variant={currentStatus === UserStatus.Active ? "default" : "destructive"}
      onClick={toggleStatus}
    >
      {currentStatus}
    </Button>
  );
}
