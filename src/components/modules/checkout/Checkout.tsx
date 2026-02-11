"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { createOrderAction } from "@/actions/orders.action";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalItems, clearCart } = useCart();

  const [shippingAddress, setShippingAddress] = useState("");
  const [loading, setLoading] = useTransition();
  const [orderId, setOrderId] = useState<string | null>(null);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleOrder = () => {
    if (!shippingAddress.trim()) {
      toast.error("Shipping address is required");
      return;
    }
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const orderData = {
      shippingAddress,
      orderItems: items.map((item) => ({
        medicineId: item.id,
        quantity: item.quantity,
      })),
    };

    setLoading(async () => {
      const res = await createOrderAction(orderData);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);

      clearCart();

      setOrderId(res.data[0].id);
    });
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>

            <div className="space-y-2">
              <Label>Delivery Address</Label>
              <Input
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Enter full address"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <Separator />

            <div className="flex justify-between text-sm">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Payment</span>
              <span>Cash on Delivery</span>
            </div>

            <Separator />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>৳{subtotal}</span>
            </div>

            <Button
              className="w-full mt-4"
              onClick={handleOrder}
              disabled={loading || !!orderId}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </Button>

            {orderId && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.push(`/orders/${orderId}`)}
              >
                View Your Order
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
