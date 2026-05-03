"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Medicine, Role, User } from "@/types";
import { useCart } from "@/context/cart-context";

export type CardMode = "home" | "shop";

export default function MedicineCard({
  medicine,
  mode = "shop",
  user,
}: {
  medicine: Medicine;
  mode?: CardMode;
  user?: User;
}) {
  const { addToCart } = useCart();
  const disabled =
    user && (user.role === Role.admin || user.role === Role.seller);

  const reviews = medicine.reviews || [];
  const reviewCount = reviews.length;

  const avgRating =
    reviewCount > 0
      ? (
          reviews.reduce((sum: number, r: any) => sum + Number(r.rating), 0) /
          reviewCount
        ).toFixed(1)
      : null;

  return (
    <Card className="overflow-hidden flex flex-col transition-all hover:shadow-md hover:-translate-y-[1px]">
      {/* IMAGE */}
      <div className="px-3 pt-3">
        <div className="relative h-36 w-full overflow-hidden rounded-md bg-white">
          <Image
            src={medicine.image || "/fallback-image.jpg"}
            alt={medicine.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </div>

      {/* CONTENT */}
      <CardContent className="p-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <span className="inline-block text-[10px] uppercase tracking-wide font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
            {medicine.category?.name}
          </span>

          <h3 className="text-sm font-medium leading-snug line-clamp-2">
            {medicine.name}
          </h3>

          <p className="text-sm font-semibold text-primary">
            ৳{medicine.price}
          </p>

          {/* FIXED HEIGHT RATING SLOT (kept) */}
          <div className="h-4 flex items-center">
            {reviewCount > 0 && (
              <div className="flex items-center gap-1 text-xs">
                <span className="text-yellow-600 font-medium">
                  ★ {avgRating}
                </span>
                <span className="text-muted-foreground">({reviewCount})</span>
              </div>
            )}
          </div>
        </div>

        {/* bottom aligned */}
        <p className="text-xs font-medium text-muted-foreground truncate">
          {medicine.manufacturer}
        </p>
      </CardContent>

      {/* FOOTER */}
      <CardFooter className="p-3 pt-0 flex">
        {mode === "home" && (
          <Button asChild size="sm" className="w-full">
            <Link href={`/shop/${medicine.id}`}>View Details</Link>
          </Button>
        )}

        {mode === "shop" && (
          <div className="flex w-full gap-1">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 rounded-r-none"
            >
              <Link href={`/shop/${medicine.id}`}>Details</Link>
            </Button>

            <Button
              size="sm"
              disabled={disabled}
              className="flex-1 rounded-l-none cursor-pointer"
              onClick={() =>
                addToCart({
                  id: medicine.id!,
                  name: medicine.name,
                  price: medicine.price,
                  image: medicine.image,
                  stock: medicine.stock!,
                })
              }
            >
              Add To Cart
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
