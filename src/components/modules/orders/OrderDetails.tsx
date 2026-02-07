"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Order } from "@/types";
import StatusSelect from "./StatusSelect";
import { useState } from "react";
import { updateOrderStatusAction } from "@/actions/orders.action";
import { toast } from "sonner";

export default function OrderDetails({
  order,
  onClose,
}: {
  order: Order | null;
  onClose: () => void;
}) {
  if (!order) return null;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(order.status);
  const isChanged = status !== order.status;
  const handleSave = async () => {
    setLoading(true);
    const res = await updateOrderStatusAction(order.id, status);
    if (res.success) {
      toast.success(res.message);
    }
    if (!res.success) {
      toast.error(res.message);
    }
  };
  return (
    <Sheet open={!!order} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-6">
        <SheetHeader>
          <SheetTitle>Order Details</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6 text-sm">
          {/* Customer */}
          <div>
            <p className="font-medium">Customer</p>
            <p>{order.customer.name}</p>
            <p className="text-muted-foreground">{order.customer.email}</p>
            <p className="text-muted-foreground">
              {order.customer.phoneNumber}
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="font-medium">Shipping Address</p>
            <p>{order.shippingAddress}</p>
          </div>

          {/* Items */}
          <div>
            <p className="font-medium mb-2">Items</p>
            <div className="space-y-2">
              {order.orderItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex justify-between rounded-md border p-2"
                >
                  <div>
                    <p>{item.medicine.name}</p>
                    <p className="text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p>${item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Order Status</p>
            <StatusSelect current={status} onChange={setStatus} />
          </div>

          <div className="flex justify-between items-center border-t pt-4">
            <Badge variant="secondary">Total: ${order.totalAmount}</Badge>

            <Button disabled={!isChanged || loading} onClick={handleSave}>
              {loading ? "Saving..." : "Save Status"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
