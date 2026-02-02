"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { CartItem } from "@/types";

export default function AddToCartButton({ medicine }: { medicine: CartItem }) {
  const { addToCart } = useCart();

  return (
    <Button
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
