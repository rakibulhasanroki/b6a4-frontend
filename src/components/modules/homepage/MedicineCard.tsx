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
    <Card className="overflow-hidden flex flex-col transition-all hover:shadow-md hover:-translate-y-px">
      <div className="px-4 pt-4">
        <div className="relative h-48 w-full overflow-hidden rounded-md bg-white">
          <Image
            src={medicine.image || "/fallback-image.jpg"}
            alt={medicine.name}
            fill
            className="object-contain text-black"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </div>

      <CardContent className="p-4 flex-1 space-y-1.5">
        <span className="inline-block text-[11px] uppercase tracking-wide font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
          {medicine.category?.name}
        </span>
        <h3 className="font-medium leading-snug line-clamp-2">
          {medicine.name}
        </h3>

        <p className="text-sm font-semibold text-primary">৳{medicine.price}</p>

        {reviewCount > 0 && (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-yellow-600 font-medium">★ {avgRating}</span>
            <span className="text-muted-foreground">
              ({reviewCount} reviews)
            </span>
          </div>
        )}

        <p className="text-sm font-semibold text-muted-foreground">
          Manufacturer: {medicine.manufacturer}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex">
        {mode === "home" && (
          <Button asChild className="w-full">
            <Link href={`/shop/${medicine.id}`}>View Details</Link>
          </Button>
        )}

        {mode === "shop" && (
          <div className="flex w-full gap-2">
            <Button asChild variant="outline" className="flex-1 rounded-r-none">
              <Link href={`/shop/${medicine.id}`}>Details</Link>
            </Button>

            <Button
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
