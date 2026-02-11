"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { updateOrderStatusAction } from "@/actions/orders.action";
import { OrderStatus } from "@/types";

export default function CancelOrderButton({ orderId }: { orderId: string }) {
  const [loading, setLoading] = useState(false);

  const handleCancel = async () => {
    setLoading(true);

    const res = await updateOrderStatusAction(orderId, OrderStatus.CANCELLED);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
      setLoading(false);
    }
  };

  return (
    <Button
      variant="destructive"
      className="w-full cursor-pointer"
      disabled={loading}
      onClick={handleCancel}
    >
      {loading ? "Cancelling..." : "Cancel Order"}
    </Button>
  );
}
