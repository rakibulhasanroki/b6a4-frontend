"use client";

import { useCart } from "@/context/cart-context";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-primary dark:bg-secondary text-white rounded-full px-2 py-0.5">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
