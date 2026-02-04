"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { CartItem, Role, User } from "@/types";

export default function AddToCartButton({
  medicine,
  user,
}: {
  medicine: CartItem;
  user?: User;
}) {
  const { addToCart } = useCart();
  const disabled =
    user && (user.role === Role.admin || user.role === Role.seller);

  return (
    <Button
      disabled={disabled}
      onClick={() =>
        addToCart({
          id: medicine.id,
          name: medicine.name,
          price: medicine.price,
          image: medicine.image,
          stock: medicine.stock,
        })
      }
      className="w-full"
    >
      Add to Cart
    </Button>
  );
}
