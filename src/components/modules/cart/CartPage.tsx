"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/cart-context";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getSessionAction } from "@/actions/user.action";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalItems } = useCart();
  const router = useRouter();

  const subtotal = Number(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2),
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-muted-foreground">
          Looks like you haven’t added any medicines yet.
        </p>
        <Link href="/shop" prefetch>
          <Button>Go to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleCheckout = async () => {
    const session = await getSessionAction();

    if (!session?.user) {
      toast.info("Please login to place your order");
      router.push("/login");
      return;
    }
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-10 relative">
      {/*  Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-semibold">Shopping Cart ({totalItems})</h1>

        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4 flex gap-4">
              {/* Image */}
              <div className="relative h-24 w-24 rounded-md overflow-hidden border">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-2">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ৳{item.price} each
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>

                  <span className="w-8 text-center">{item.quantity}</span>

                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Remove */}
              <div className="flex flex-col justify-between items-end">
                <p className="font-semibold">৳{item.price * item.quantity}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/*  Order Summary */}
      <div className="space-y-6 sticky ">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            <Separator />

            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>Cash on Delivery</span>
            </div>

            <Separator />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>৳{subtotal}</span>
            </div>

            <Button className="w-full mt-4" onClick={handleCheckout}>
              Checkout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
